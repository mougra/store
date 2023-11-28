import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts, defaultParamsProps } from '../../models/models'

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    fetchProducts: build.query<IProducts[], string>({
      query: () => ({
        url: 'products',
      }),
    }),
    getProduct: build.query<IProducts, any>({
      query: ({ id }: any) => ({
        url: `products/${id}`,
      }),
      providesTags: ['Products'],
    }),
    searchProduct: build.query<IProducts[], string>({
      query: (title) => ({
        url: 'products/',
        params: {
          title: title,
        },
      }),
    }),
    getProductCategory: build.query<IProducts[], defaultParamsProps>({
      query: (params) => ({
        url: 'products/',
        params: {
          ...params,
        },
      }),
    }),
  }),
})

export const {
  useFetchProductsQuery,
  useGetProductQuery,
  useSearchProductQuery,
  useGetProductCategoryQuery,
  useLazyGetProductCategoryQuery,
} = productsApi
