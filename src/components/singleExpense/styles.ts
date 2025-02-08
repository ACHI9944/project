import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  expensesView: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  expensesDataView: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    paddingBottom: 12,
  },
  nameText: {
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
  },
  valueText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  dateText: {
    fontSize: 12,
    textAlign: 'right',
    color: '#6e6e6e',
  },
});
