import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 5,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  incomeAndExpenseView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  incomeView: {
    padding: 20,
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#e6f6eb',
  },
  incomeSum: {
    color: '#29a64e',
    fontWeight: 'bold',
    fontSize: 17,
  },
  expenseView: {
    padding: 20,
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#ffedeb',
  },
  expenseSum: {
    color: '#bc282c',
    fontWeight: 'bold',
    fontSize: 17,
  },
  header: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
