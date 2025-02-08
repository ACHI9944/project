import React from 'react';
import {Text, View} from 'react-native';
import {lastMonthDate, todayDate} from '../../util/DateCalculator';
import {styles} from './styles';
import {HeaderWithCalendarProps} from './types';

const HeaderWithCalendar = ({header}: HeaderWithCalendarProps) => {
  return (
    <View style={styles.headers}>
      <Text style={styles.categoriesHeader}>{header}</Text>
      <Text
        style={styles.calendarHeader}>{`${lastMonthDate}-${todayDate}`}</Text>
    </View>
  );
};

export default HeaderWithCalendar;
