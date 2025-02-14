import {Keyboard, Platform, Pressable, StyleSheet, Text} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {CustomButtonProps} from './types';
import {styles} from './styles';

const CustomButton: FC<CustomButtonProps> = ({
  onSubmit,
  buttonText,
  disabled = false,
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Pressable
      disabled={disabled}
      onPress={onSubmit}
      style={[
        styles.buttonContainer,
        isKeyboardVisible && Platform.OS === 'android' && {marginBottom: 25},
        disabled && {backgroundColor: '#d3d3d3'},
      ]}>
      <Text style={[styles.buttonText, disabled && {color: '#363636'}]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
