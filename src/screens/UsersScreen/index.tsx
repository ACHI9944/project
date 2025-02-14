import {Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {useGetUsersQuery} from '../../storeApi/jsonPh';
import {RowMap, SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import EmaptyComponent from '../../components/EmptyComponent';
import {User} from './types';
import {HiddenItemWithActions} from '../../components/HiddenItemWithActions';
import {styles} from './styles';
import SingleUser from '../../components/SingleUser';

const UsersScreen = () => {
  const {data, error, isLoading} = useGetUsersQuery();

  const renderEmptyComponent = useCallback(() => {
    return <EmaptyComponent />;
  }, []);

  const renderUsers = useCallback(({item}: {item: User}) => {
    return <SingleUser item={item} />;
  }, []);
  const renderHiddenItem = useCallback(
    ({item}: {item: User}, rowMap: RowMap<User>) => {
      const closeRow = (rowMap: RowMap<User>, rowKey: number) => {
        if (rowMap[rowKey]) {
          rowMap[rowKey].closeRow();
        }
      };
      const deleteRow = (rowMap: RowMap<User>, rowKey: number) => {
        closeRow(rowMap, rowKey);
        //deleting option is putting here
      };
      const onCloseRow = () => {
        closeRow(rowMap, item.id);
      };
      const onDeleteRow = () => {
        deleteRow(rowMap, item.id);
      };
      return (
        <HiddenItemWithActions onClose={onCloseRow} onDelete={onDeleteRow} />
      );
    },
    [],
  );
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading users.</Text>;
  return (
    <View style={styles.container}>
      <SwipeListView
        data={data}
        renderItem={renderUsers}
        renderHiddenItem={renderHiddenItem}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        rightOpenValue={-105}
        disableRightSwipe={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UsersScreen;
