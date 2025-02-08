import {FinancesStackParamList} from '../../navigation/types';
import {NavigationProp} from '@react-navigation/native';

export type TransactionItem = {
  id: string | number;
  name: string;
  category: string;
  value: number;
  date: string;
};
export type SingleExpenseProps = {
  item: TransactionItem;
  categoryImage: string;
};

export type props = NavigationProp<FinancesStackParamList>;
