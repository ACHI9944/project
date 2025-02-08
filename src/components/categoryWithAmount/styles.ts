import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryWithAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryAndAmount: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    flex: 1,
    fontSize: 12,
    color: '#828282',
  },
  amountText: {
    fontWeight: 'bold',
  },
  colouredDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginRight: 4,
  },
});
