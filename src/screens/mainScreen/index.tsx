import React, {useCallback} from 'react';
import {Dimensions, FlatList, ListRenderItem, Text, View} from 'react-native';
import {styles} from './styles';
import {banners} from '../../assets/dummyBanners';
import {BannerItem} from './types';

const MainScreen: React.FC = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = SCREEN_WIDTH * 0.75;
  const ITEM_SPACING = 12;
  const SIDE_MARGIN = 24;
  const SNAP_INTERVAL = ITEM_WIDTH + ITEM_SPACING;

  const snapToOffsets = banners.map(
    (_, index) =>
      SIDE_MARGIN + index * SNAP_INTERVAL - (SCREEN_WIDTH - ITEM_WIDTH) / 2,
  );

  const renderItem = useCallback<ListRenderItem<BannerItem>>(
    ({item, index}) => (
      <View
        style={[
          styles.banner,
          index === 0
            ? styles.bannerleft
            : index === banners.length - 1
            ? styles.bannerRight
            : {},
        ]}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    ),
    [banners.length],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        contentContainerStyle={banners.length === 1 && styles.flatlist}
      />
    </View>
  );
};

export default MainScreen;
