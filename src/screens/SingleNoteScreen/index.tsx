import {Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../util/CustomReduxHooks';
import {styles} from './styles';

const SingleNoteScreen = () => {
  const {params} = useRoute();
  const {setOptions} = useNavigation();
  const {id} = params as {id: string};
  const note = useAppSelector(state => state.notes.find(n => n.id === id));

  useLayoutEffect(() => {
    setOptions({
      headerTitle: note ? note.header : 'Note',
    });
  }, [setOptions]);

  console.log(note);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note ? note.text : null}</Text>
    </View>
  );
};

export default SingleNoteScreen;
