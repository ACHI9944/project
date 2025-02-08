import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {AddNoteModalProps} from './types';

const DefaultModal = ({
  children,
  isVisible,
  onClose,
  buttonText = 'submit',
  onSubmit,
  disabled,
}: AddNoteModalProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
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

  useEffect(() => {
    isVisible && bottomSheetRef.current
      ? bottomSheetRef.current.snapToIndex(0)
      : bottomSheetRef.current
      ? bottomSheetRef.current.close()
      : null;
  }, [isVisible]);
  const handleSheetChange = (index: number) => {
    if (index === -1) onClose();
  };

  return (
    <BottomSheet
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['95%']}
      onChange={handleSheetChange}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <BottomSheetScrollView style={styles.content}>
            {children}
          </BottomSheetScrollView>
        </TouchableWithoutFeedback>
        <Pressable
          disabled={disabled}
          onPress={onSubmit}
          style={[
            styles.buttonContainer,
            isKeyboardVisible &&
              Platform.OS === 'android' && {marginBottom: 25},
            disabled && {backgroundColor: '#d3d3d3'},
          ]}>
          <Text style={[styles.buttonText, disabled && {color: '#363636'}]}>
            {buttonText}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </BottomSheet>
  );
};

export default DefaultModal;
