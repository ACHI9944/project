import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMainScreen from './TabMainscreen';
import TabMyFinances from './TabMyFinances';
import {RootTabParamList} from './types';
import TabBarIcon from '../components/tabBarIcon';
import {financesUri, homeUri, notesUri} from '../constants/uri';
import TabNotesSreen from './TabNotesSreen';

const Router = () => {
  const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();
  return (
    <Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#c374a4'}}>
      <Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} uri={homeUri} />
          ),
        }}
        name="Main"
        component={TabMainScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} uri={financesUri} />
          ),
        }}
        name="Finances"
        component={TabMyFinances}
      />
      <Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} uri={notesUri} />
          ),
        }}
        name="Notes"
        component={TabNotesSreen}
      />
    </Navigator>
  );
};
export default Router;
