import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

const DynamicsChart = () => {
  const charts = [28, 21, 12, 36, 32, 24, 32, 21, 12, 36, 32, 24];

  return (
    <View style={styles.dynamicsView}>
      {charts.map((height, index) => (
        <View
          key={index}
          style={[
            styles.Chart,
            {height: height},
            index % 2 === 0 && {backgroundColor: '#1fa64a', marginRight: 2},
          ]}></View>
      ))}
    </View>
  );
};

export default DynamicsChart;
