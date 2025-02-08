import {Image} from 'react-native';
import {tabBarIcon} from './types';

const TabBarIcon = ({focused, uri}: tabBarIcon) => {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        tintColor: focused ? '#c374a4' : 'black',
      }}
      source={{uri: uri}}
    />
  );
};
export default TabBarIcon;
