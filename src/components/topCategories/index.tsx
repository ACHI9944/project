import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {styles} from './styles';
import PieChart from 'react-native-pie-chart';
import CategoryWithAmount from '../categoryWithAmount';
import {DummyExpenses} from '../../assets/dummy';
import HeaderWithCalendar from '../headerWithCalendar';
import {formatCategoryMoney} from '../../util/formatedNumber';
import {CurrencyEnum} from '../../constants/CurrencyEnum';

const TopCategories = () => {
  const {width} = useWindowDimensions();
  const widthAndHeight = width / 3.5;

  const sumOfExpenses = DummyExpenses.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  return (
    <View style={styles.container}>
      <HeaderWithCalendar header={'ტოპ კატეგორიები'} />
      <View style={styles.chartAndNumbers}>
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={DummyExpenses}
            cover={{radius: 0.9}}
            padAngle={0.05}
          />
          <View style={styles.centeredTextContainer}>
            <Text style={styles.centeredText}>ხარჯი</Text>
            <Text style={styles.centeredNumber}>
              {formatCategoryMoney(+sumOfExpenses, CurrencyEnum.GEL)}
            </Text>
          </View>
        </View>
        <View style={styles.categoryAndAmounts}>
          {DummyExpenses.map((expense, index) => (
            <CategoryWithAmount
              key={index}
              amount={expense.value}
              category={expense.category}
              bgColour={expense.color}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TopCategories;
