import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ka';
import {TransactionItem} from '../components/Transactions/types';

dayjs.extend(customParseFormat);
dayjs.locale('ka');

export const sortTransactionsByDate = (
  transactions: TransactionItem[],
): TransactionItem[] => {
  return [...transactions].sort((a, b) => {
    const dateA = dayjs(a.date, 'D MMM, YYYY, h:mmA', 'ka');
    const dateB = dayjs(b.date, 'D MMM, YYYY, h:mmA', 'ka');
    return dateA.isAfter(dateB) ? -1 : 1;
  });
};

export const groupTransactionsByDate = (transactions: TransactionItem[]) => {
  const today = dayjs().format('D MMM, YYYY');
  const grouped = transactions.reduce((sections, transaction) => {
    const transactionDate = dayjs(
      transaction.date,
      'D MMM, YYYY, h:mmA',
      'ka',
    ).format('D MMM, YYYY');

    const dateTitle = transactionDate === today ? 'დღეს' : transactionDate;
    if (!sections[dateTitle]) {
      sections[dateTitle] = [];
    }
    sections[dateTitle].push(transaction);
    return sections;
  }, {} as Record<string, TransactionItem[]>);
  console.log(grouped);

  return Object.entries(grouped).map(([title, data]) => ({
    title,
    data,
  }));
};

export function transformDate(inputDate: string): string {
  const parsed = dayjs(inputDate, 'D MMM, YYYY, H:mm', 'ka');
  return parsed.format('D MMM YYYY');
}
