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
  useFetchСategoriesQuery,
  // useLazySortPostsQuery,
  // useLazyGetPostsQuery,
  // useGetPostsQuery,
  // useGetUserPostsQuery,
} = categoriesApi
