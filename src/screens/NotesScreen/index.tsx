import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ImageIconComponent from '../../components/imageIconComponent';
import {Add, exit} from '../../constants/uri';
import DefaultModal from '../../components/DefaultModal';
import LabelAndBottomSheetTextInput from '../../components/LabelAndBottomSheetTextInput';
import {useForm} from 'react-hook-form';
import {FormData} from './types';
import {addNote, removeNote} from '../../store/data';
import {useAppSelector, useAppDispatch} from '../../util/CustomReduxHooks';
import SingleNote from '../../components/SingleNote';
import EmaptyComponent from '../../components/EmptyComponent';
import {RowMap, SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {HiddenItemWithActions} from '../../components/HiddenItemWithActions';

const NotesScreen = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const {control, handleSubmit, formState, watch, reset} = useForm<FormData>();
  const {setOptions} = useNavigation();
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.notes);
  const openRowRef = useRef<SwipeRow<FormData> | null>(null);

  const swipeBack = () => {
    if (openRowRef.current) {
      openRowRef.current.closeRow();
      openRowRef.current = null;
    }
  };
  const handleRowOpen = (rowKey: string, rowMap: RowMap<FormData>) => {
    if (openRowRef.current && openRowRef.current !== rowMap[rowKey]) {
      openRowRef.current.closeRow();
    }
    openRowRef.current = rowMap[rowKey];
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <ImageIconComponent
          swipeBack={swipeBack}
          onPress={openModal}
          imageuri={Add}
        />
      ),
    });
  }, [setOptions]);

  const onSubmit = (data: FormData) => {
    dispatch(addNote(data));
    reset();
    Keyboard.dismiss();
    closeModal();
  };

  function openModal() {
    setIsSheetOpen(true);
  }
  function closeModal() {
    setIsSheetOpen(false);
  }
  const renderEmptyComponent = useCallback(() => {
    return <EmaptyComponent />;
  }, []);
  const renderNotes = useCallback(({item}: {item: FormData}) => {
    return <SingleNote item={item} />;
  }, []);

  const renderHiddenItem = useCallback(
    ({item}: {item: FormData}, rowMap: RowMap<FormData>) => {
      const closeRow = (rowMap: RowMap<FormData>, rowKey: string) => {
        if (rowMap[rowKey]) {
          rowMap[rowKey].closeRow();
        }
      };
      const deleteRow = (rowMap: RowMap<FormData>, rowKey: string) => {
        closeRow(rowMap, rowKey);
        dispatch(removeNote(rowKey));
      };
      const onCloseRow = () => {
        closeRow(rowMap, item.id);
      };
      const onDeleteRow = () => {
        deleteRow(rowMap, item.id);
      };
      return (
        <HiddenItemWithActions onClose={onCloseRow} onDelete={onDeleteRow} />
      );
    },
    [],
  );

  const handlePressOutside = () => {
    swipeBack();
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePressOutside} accessible={false}>
        <View style={styles.container}>
          <SwipeListView
            data={notes}
            renderItem={renderNotes}
            renderHiddenItem={renderHiddenItem}
            ListEmptyComponent={renderEmptyComponent}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            rightOpenValue={-105}
            disableRightSwipe={true}
            onRowOpen={handleRowOpen}
          />
        </View>
      </TouchableWithoutFeedback>

      <DefaultModal
        isVisible={isSheetOpen}
        onClose={closeModal}
        onSubmit={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
        buttonText="დაამატე">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderView}>
            <View style={styles.modalHeaderLeft}></View>
            <Text style={styles.modalHeader}>დაამატე ჩანაწერი</Text>
            <ImageIconComponent onPress={closeModal} imageuri={exit} />
          </View>
          <LabelAndBottomSheetTextInput
            control={control}
            name="header"
            multiline={false}
            label="დასახელება"
            height={50}
            rules={{required: 'required'}}
          />
          <LabelAndBottomSheetTextInput
            control={control}
            name="text"
            label="ჩანაწერი"
            multiline={true}
            height={200}
            rules={{required: 'required'}}
          />
        </View>
      </DefaultModal>
    </>
  );
};

export default NotesScreen;
