import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {props, User} from './types';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const SingleUser = ({item}: {item: User}) => {
  const {navigate} = useNavigation<props>();
  const handlePress = () => {
    navigate('singleUser', {id: item.id});
  };
  return (
    <Pressable onPress={handlePress} style={styles.row}>
      <Image
        source={{uri: `https://i.pravatar.cc/50?u=${item.id}`}}
        style={styles.profilePic}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </Pressable>
  );
};

export default SingleUser;
