import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UsersStackParamList} from './types';
import UsersScreen from '../screens/UsersScreen';
import SingleUserScreen from '../screens/SingleUserScreen';

export default function TabUsersScreen() {
  const {Navigator, Screen} = createNativeStackNavigator<UsersStackParamList>();
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
        name="usersScreen"
        options={{
          headerTitle: 'მომხმარებლები',
        }}
        component={UsersScreen}
      />
      <Screen name="singleUser" component={SingleUserScreen} />
    </Navigator>
  );
}
