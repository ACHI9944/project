import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  headersView: {
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 25,
  },
  amountAndIconView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
    paddingBottom: 10,
  },
  amountView: {
    marginLeft: 15,
  },
  name: {
    color: '#838488',
  },
  amount: {
    fontSize: 20,
    paddingVertical: 2,
    fontWeight: '600',
  },
  date: {
    color: '#838488',
  },
  typesAndIconView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  typesView: {
    marginLeft: 15,
  },
  type: {
    color: '#838488',
  },
  payType: {
    fontWeight: '700',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },
  listView: {
    backgroundColor: 'white',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mainHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  innerView: {
    paddingVertical: 10,
  },
  innerViewWithIcon: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagHeaders: {
    color: '#838488',
  },
  data: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listView2: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 2,
  },
});
