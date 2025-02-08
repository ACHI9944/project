import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {FormData} from '../../screens/NotesScreen/types';
import {props, singleNoteProp} from './types';

const SingleNote = ({item}: singleNoteProp) => {
  const {navigate} = useNavigation<props>();

  const openSingleNote = () => {
    navigate('SingleNote', {id: item.id});
  };
  return (
    <Pressable onPress={openSingleNote} style={styles.noteContainer}>
      <Text style={styles.noteHeader}>{item.header}</Text>
      <Text style={styles.noteText}>{item.text}</Text>
    </Pressable>
  );
};

export default SingleNote;
