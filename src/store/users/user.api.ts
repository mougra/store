import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/models'

export const userApi = createApi({
  reducerPath: 'users/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getUser: build.query<IUser, string>({
      query: (idUser) => ({
        url: `users/${idUser}`,
      }),
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery } = userApi
