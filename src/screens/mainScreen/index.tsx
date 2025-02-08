import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {props} from './types';

const MainScreen = () => {
  const {navigate} = useNavigation<props>();
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigate('Finances')}>
        <Text style={styles.text}>Click To View Finances</Text>
      </Pressable>
    </View>
  );
};
export default MainScreen;
