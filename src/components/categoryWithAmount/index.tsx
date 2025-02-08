import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CategoryWithAmountProps} from './types';
import {formatCategoryMoney} from '../../util/formatedNumber';
import {CurrencyEnum} from '../../constants/CurrencyEnum';

const CategoryWithAmount = ({
  category,
  amount,
  bgColour,
}: CategoryWithAmountProps) => {
  return (
    <View style={styles.categoryWithAmount}>
      <View style={[styles.colouredDot, {backgroundColor: bgColour}]} />
      <View style={styles.categoryAndAmount}>
        <Text style={styles.categoryText} numberOfLines={1}>
          {category}
        </Text>
        <Text style={styles.amountText}>
          {formatCategoryMoney(+amount, CurrencyEnum.GEL)}
        </Text>
      </View>
    </View>
  );
};

export default CategoryWithAmount;
