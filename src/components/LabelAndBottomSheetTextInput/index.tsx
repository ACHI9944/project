import React from 'react';
import {Text} from 'react-native';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {Controller, FieldValues} from 'react-hook-form';
import {styles} from './styles';
import {types} from './types';

const LabelAndBottomSheetTextInput = <T extends FieldValues>({
  control,
  name,
  rules = {},
  multiline,
  height,
  label,
}: types<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <Text style={[styles.label, error && {color: 'red'}]}>{label}</Text>
            <BottomSheetTextInput
              returnKeyType="done"
              keyboardType="default"
              style={[
                styles.input,
                {height, textAlignVertical: 'top'},
                error && {borderColor: 'red'},
              ]}
              multiline={multiline}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </>
        )}
      />
    </>
  );
};

export default LabelAndBottomSheetTextInput;
