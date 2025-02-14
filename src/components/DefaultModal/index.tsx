import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef} from 'react';
import {styles} from './styles';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AddNoteModalProps} from './types';
import CustomButton from '../customButton';

const DefaultModal = ({
  children,
  isVisible,
  onClose,
  buttonText = 'submit',
  onSubmit,
  disabled,
}: AddNoteModalProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

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
      style={styles.modal}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['100%']}
      onChange={handleSheetChange}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <BottomSheetScrollView style={styles.content}>
            {children}
          </BottomSheetScrollView>
        </TouchableWithoutFeedback>
        <CustomButton
          disabled={disabled}
          onSubmit={onSubmit}
          buttonText={buttonText}
        />
      </KeyboardAvoidingView>
    </BottomSheet>
  );
};

export default DefaultModal;
