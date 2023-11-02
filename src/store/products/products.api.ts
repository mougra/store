import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts, ServerResponse } from '../../models/models'

interface Payload {
  page?: number
  limit?: number
}

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchProducts: build.query<IProducts[], string>({
      query: () => ({
        url: 'products',
      }),
    }),
    // sortPosts: build.query<IPost[], Payload>({
    //   query: ({ page = 1, limit = 9 }) => ({
    //     url: 'posts',
    //     params: {
    //       _sort: 'title',
    //       _page: page,
    //       _limit: limit,
    //     },
    //   }),
    // }),
    // getPosts: build.query<IPost[], Payload>({
    //   query: ({ page = 1, limit = 9 }) => ({
    //     url: `posts`,
    //     // ?_page=2&_limit=9
    //     params: {
    //       _page: page,
    //       _limit: limit,
    //     },
    //   }),
    // }),
    // getUserPosts: build.query<IPost[], number>({
    //   query: (postId) => ({
    //     url: `posts`,
    //     params: {
    //       userId: postId,
    //     },
    //   }),
    // }),
  }),
})

export const {
  useFetchProductsQuery,
  // useLazySortPostsQuery,
  // useLazyGetPostsQuery,
  // useGetPostsQuery,
  // useGetUserPostsQuery,
} = productsApi
