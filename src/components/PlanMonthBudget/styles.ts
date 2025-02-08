import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  monthBudgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 30,
    padding: 15,
  },
  allComponents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  chartAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  reportView: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 8,
    borderRadius: 50,
  },
  reportIcon: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});
