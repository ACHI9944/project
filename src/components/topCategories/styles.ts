import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 5,
  },

  chartAndNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: '#a1a1a1',
  },
  centeredNumber: {
    fontWeight: 'bold',
  },
  categoryAndAmounts: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
