import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '../screens/UsersScreen/types';
const url = 'https://jsonplaceholder.typicode.com';

export const jsonPh = createApi({
  reducerPath: 'jsonPhApi',
  baseQuery: fetchBaseQuery({baseUrl: url}),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({query: () => '/users'}),
  }),
});

export const {useGetUsersQuery} = jsonPh;
