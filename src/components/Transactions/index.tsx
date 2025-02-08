import React, {useCallback} from 'react';
import {SectionList, SectionListData, Text, View} from 'react-native';
import {styles} from './styles';
import {DummyExpensesList, DummyIncomeList} from '../../assets/dummy';
import HeaderWithCalendar from '../headerWithCalendar';
import {TransactionItem} from './types';
import SingleExpense from '../singleExpense';
import {formatMoney} from '../../util/formatedNumber';
import {
  groupTransactionsByDate,
  sortTransactionsByDate,
} from '../../util/sortDates';
import {getCategoryImage} from '../../util/ImagePicker';

const totalIncome = DummyIncomeList.reduce((sum, item) => sum + item.value, 0);
const totalExpenses = DummyExpensesList.reduce(
  (sum, item) => sum + item.value,
  0,
);

const mergedTransactionsList = [...DummyIncomeList, ...DummyExpensesList];

const sortedTransactionsList = sortTransactionsByDate(mergedTransactionsList);

const sections = groupTransactionsByDate(sortedTransactionsList);

const Transactions = () => {
  const renderItem = useCallback(({item}: {item: TransactionItem}) => {
    const categoryImage = getCategoryImage(item.category);
    return <SingleExpense categoryImage={categoryImage} item={item} />;
  }, []);

  const renderSectionHeader = useCallback(
    ({section}: {section: SectionListData<TransactionItem>}) => {
      return <Text style={styles.header}>{section.title}</Text>;
    },
    [],
  );

  return (
    <View style={styles.container}>
      <HeaderWithCalendar header={'ტრანზაქციები'} />
      <View style={styles.incomeAndExpenseView}>
        <View style={styles.incomeView}>
          <Text>შემოსავალი</Text>
          <Text style={styles.incomeSum}>{formatMoney(totalIncome)}</Text>
        </View>
        <View style={styles.expenseView}>
          <Text>ხარჯი</Text>
          <Text style={styles.expenseSum}>{formatMoney(totalExpenses)}</Text>
        </View>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default Transactions;
