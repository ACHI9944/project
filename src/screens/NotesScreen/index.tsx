import {
  FlatList,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ImageIconComponent from '../../components/imageIconComponent';
import {Add, exit} from '../../constants/uri';
import DefaultModal from '../../components/DefaultModal';
import LabelAndBottomSheetTextInput from '../../components/LabelAndBottomSheetTextInput';
import {useForm} from 'react-hook-form';
import {FormData} from './types';
import {addNote} from '../../store/data';
import {useAppSelector, useAppDispatch} from '../../util/CustomReduxHooks';
import SingleNote from '../../components/SingleNote';

const NotesScreen = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const {control, handleSubmit, formState, watch, reset} = useForm<FormData>();
  const {setOptions} = useNavigation();
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.notes);
  const header = watch('header');
  const text = watch('text');
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <ImageIconComponent onPress={openModal} imageuri={Add} />
      ),
    });
  }, [setOptions]);

  const onSubmit = (data: FormData) => {
    dispatch(addNote({header, text}));
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

  const renderNotes = useCallback(({item}: {item: FormData}) => {
    return <SingleNote item={item} />;
  }, []);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <FlatList
            data={notes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderNotes}
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
