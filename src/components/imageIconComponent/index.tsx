import React from 'react';
import {Image, Pressable} from 'react-native';
import {styles} from './styles';
import {ImageIcon} from './types';

const ImageIconComponent = ({imageuri, color, onPress}: ImageIcon) => {
  return (
    <Pressable onPress={onPress && onPress} style={styles.imageView}>
      <Image
        source={{uri: imageuri}}
        style={[styles.image, color && {tintColor: color}]}
      />
    </Pressable>
  );
};

export default ImageIconComponent;
