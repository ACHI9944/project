import {Image, Text, View} from 'react-native';
import {SingleOptionProps} from './types';
import {styles} from './styles';

const SingleOption = ({item}: SingleOptionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={{uri: item.url}} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};
export default SingleOption;
