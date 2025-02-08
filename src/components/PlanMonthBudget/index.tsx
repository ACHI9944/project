import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import ImageIconComponent from '../imageIconComponent';
const reportUri =
  'https://img.icons8.com/?size=100&id=NVXLSE3DVpdt&format=png&color=000000';
const arrowUri =
  'https://img.icons8.com/?size=100&id=7849&format=png&color=000000';

const PlanMonthBudget = () => {
  return (
    <View style={styles.monthBudgetContainer}>
      <View style={styles.allComponents}>
        <View style={styles.chartAndText}>
          <ImageIconComponent imageuri={reportUri} />
          <Text style={styles.text}>დაგეგმე თვიური ბიუჯეტი</Text>
        </View>
        <Image source={{uri: arrowUri}} style={styles.arrowIcon} />
      </View>
    </View>
  );
};
export default PlanMonthBudget;
