import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '../../models/models'

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchСategories: build.query<Category[], string>({
      query: () => ({
        url: 'categories',
      }),
    }),
  }),
})

export const { useFetchСategoriesQuery } = categoriesApi
