import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategories, ServerResponse } from '../../models/models'
import { createSelector } from '@reduxjs/toolkit'

interface Payload {
  page?: number
  limit?: number
}

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchСategories: build.query<ICategories[], string>({
      query: () => ({
        url: 'categories',
      }),
    }),
  }),
})

export const { useFetchСategoriesQuery } = categoriesApi
