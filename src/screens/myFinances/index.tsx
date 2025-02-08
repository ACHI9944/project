import React, {useCallback, useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import MonthReport from '../../components/monthReport';
import DynamicsAndCalendar from '../../components/dynamicsAndCalendar';
import TopCategories from '../../components/topCategories';
import PlanMonthBudget from '../../components/PlanMonthBudget';
import Transactions from '../../components/Transactions';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ImageIconComponent from '../../components/imageIconComponent';
import {Report} from '../../constants/uri';

const data = [''];
const MyFinances = () => {
  const {setOptions} = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <ImageIconComponent imageuri={Report} />,
    });
  });

  const renderItem = useCallback(() => {
    return (
      <View style={styles.container}>
        <MonthReport />
        <DynamicsAndCalendar />
        <TopCategories />
        <PlanMonthBudget />
        <Transactions />
      </View>
    );
  }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};
export default MyFinances;
