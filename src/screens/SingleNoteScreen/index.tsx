import {Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../util/CustomReduxHooks';
import {styles} from './styles';
import CustomButton from '../../components/customButton';
import {removeNote} from '../../store/data';
import {SingleNoteScreenRouteProp} from './types';

const SingleNoteScreen = () => {
  const {params} = useRoute<SingleNoteScreenRouteProp>();
  const note = useAppSelector(state =>
    state.notes.find(n => n.id === params.id),
  );
  const {setOptions} = useNavigation();
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();
  const onSubmit = () => {
    if (!note) return;
    dispatch(removeNote(note.id));
    goBack();
  };

  useLayoutEffect(() => {
    setOptions({
      headerTitle: note ? note.header : 'Note',
    });
  }, [setOptions]);

  console.log(note);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note ? note.text : null}</Text>
      <CustomButton buttonText="წაშლა" onSubmit={onSubmit} />
    </View>
  );
};

export default SingleNoteScreen;
