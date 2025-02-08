import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FinancesStackParamList} from './types';
import MyFinances from '../screens/myFinances';
import SingleDetailedTransaction from '../screens/SingleDetailedTransaction';

const TabMyFinances = () => {
  const {Navigator, Screen} =
    createNativeStackNavigator<FinancesStackParamList>();
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
        name="MyFinances"
        component={MyFinances}
        options={{
          headerTitle: 'ჩემი ფინანსები',
        }}
      />
      <Screen
        name="SingleDetailedTransaction"
        component={SingleDetailedTransaction}
        options={{headerTitle: 'ტრანზაქციის დეტალები'}}
      />
    </Navigator>
  );
};

export default TabMyFinances;
