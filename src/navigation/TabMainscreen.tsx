import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';
import MainScreen from '../screens/mainScreen';

const TabMainScreen = () => {
  const {Navigator, Screen} = createNativeStackNavigator<MainStackParamList>();
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        headerTitleStyle: {fontSize: 15, fontWeight: 'bold'},
        headerStyle: {backgroundColor: '#f6f6f6'},
        headerShadowVisible: false,
      }}>
      <Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerTitle: 'მთავარი გვერდი'}}
      />
    </Navigator>
  );
};

export default TabMainScreen;
