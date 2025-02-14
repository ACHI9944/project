import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotesScreen from '../screens/NotesScreen';
import {NotesStackParamList} from './types';
import SingleNoteScreen from '../screens/SingleNoteScreen';

export default function TabNotesSreen() {
  const {Navigator, Screen} = createNativeStackNavigator<NotesStackParamList>();
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        headerTitleStyle: {fontSize: 15, fontWeight: 'bold'},
        headerStyle: {backgroundColor: '#f6f6f6'},
        headerShadowVisible: false,
      }}>
      <Screen
        name="MyNotes"
        component={NotesScreen}
        options={{
          headerTitle: 'ჩანაწერები',
        }}
      />
      <Screen name="SingleNote" component={SingleNoteScreen} />
    </Navigator>
  );
}
