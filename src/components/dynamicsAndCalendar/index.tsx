import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import DynamicsChart from '../dynamycsChart';

const dates = [3, 4, 5, '...'];
const DynamicsAndCalendar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartsView}>
        <View style={styles.dynamicAndCalendarView}>
          <DynamicsChart />
          <Text style={styles.text}>დინამიკა</Text>
        </View>
        <View style={styles.dynamicAndCalendarView}>
          <View style={styles.calendarNumbersView}>
            {dates.map((date, index) => (
              <View
                key={index}
                style={[
                  styles.calendarNumberGreen,
                  index === 2 && styles.backgroundRed,
                  index === 3 && styles.backgroundDots,
                ]}>
                <Text style={[styles.numbers, index === 3 && styles.dots]}>
                  {date}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.text}>კალენდარი</Text>
        </View>
      </View>
    </View>
  );
};

export default DynamicsAndCalendar;
