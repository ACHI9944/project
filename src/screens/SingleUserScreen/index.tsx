import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useGetUsersQuery} from '../../storeApi/jsonPh';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SingleUserScreenRouteProp} from './types';
import {User} from '../UsersScreen/types';

const SingleUserScreen = () => {
  const {data, error, isLoading} = useGetUsersQuery();
  const {setOptions} = useNavigation();
  const {params} = useRoute<SingleUserScreenRouteProp>();
  const user: User | undefined = data?.find(user => user.id === params.id);

  useLayoutEffect(() => {
    setOptions({
      title: user?.name,
    });
  }, [setOptions]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading users.</Text>;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: `https://i.pravatar.cc/150?u=${user?.id}`}}
        style={styles.profilePic}
      />
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Text style={styles.info}>Username: {user?.username}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.info}>Phone: {user?.phone}</Text>
        <Text style={styles.info}>Website: {user?.website}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.info}>Street: {user?.address.street}</Text>
        <Text style={styles.info}>Suite: {user?.address.suite}</Text>
        <Text style={styles.info}>City: {user?.address.city}</Text>
        <Text style={styles.info}>Zipcode: {user?.address.zipcode}</Text>
        <Text style={styles.info}>
          Geo: {user?.address.geo.lat}, {user?.address.geo.lng}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <Text style={styles.info}>Name: {user?.company.name}</Text>
        <Text style={styles.info}>
          Catchphrase: {user?.company.catchPhrase}
        </Text>
        <Text style={styles.info}>Business: {user?.company.bs}</Text>
      </View>
    </ScrollView>
  );
};

export default SingleUserScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 15,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  section: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
