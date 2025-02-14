import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {styles} from './styles';
import {BannerItem} from './types';

const MainScreen: React.FC = () => {
  const banners: BannerItem[] = [
    {id: '1', text: '300 X 180\nHALF BANNER'},
    {id: '2', text: '300 X 180\nHALF BANNER'},
    {id: '3', text: '300 X 180\nHALF BANNER'},
    {id: '4', text: '300 X 180\nHALF BANNER'},
    {id: '5', text: '300 X 180\nHALF BANNER'},
    {id: '6', text: '300 X 180\nHALF BANNER'},
    {id: '7', text: '300 X 180\nHALF BANNER'},
  ];
  const renderItem = useCallback<ListRenderItem<BannerItem>>(
    ({item}) => (
      <View style={[styles.banner, item.id === '7' ? {marginRight: 10} : null]}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        data={banners}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        snapToAlignment="center"
        snapToInterval={310}
        decelerationRate="fast"
      />
    </View>
  );
};
export default MainScreen;
