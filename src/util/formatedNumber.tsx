import {CurrencyEnum} from '../constants/CurrencyEnum';

export const formatMoney = (amount: number) => {
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'always',
  }).format(amount);
};
export const formatCategoryMoney = (
  amount: number,
  currency: CurrencyEnum,
): string => {
  const formattedNumber = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return `${formattedNumber} ${currency}`;
};

export const formatTransactions = (
  amount: number,
  currency: CurrencyEnum,
): string => {
  const formattedNumber = Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.abs(amount));
  const sign = amount < 0 ? '-' : '';

  return `${sign}${currency}${formattedNumber}`;
};

export const formatDetailedTransaction = (
  amount: number,
  currency: CurrencyEnum,
): string => {
  const absoluteValue = Math.abs(amount);
  const formattedNumber = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(absoluteValue);
  return `${formattedNumber} ${currency}`;
};
