import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const numberDimensions = screenWidth / 11.5;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
  },
  chartsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dynamicAndCalendarView: {
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    width: '48%',
  },
  text: {
    fontWeight: 'bold',
  },

  calendarNumbersView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarNumberGreen: {
    width: numberDimensions,
    height: numberDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: '#01b73b',
    marginRight: 3,
  },
  backgroundRed: {
    backgroundColor: '#fc4845',
  },
  backgroundDots: {
    backgroundColor: '#f4f4f4',
    color: 'grey',
  },
  numbers: {
    color: 'white',
  },
  dots: {
    color: '#959595',
  },
});
