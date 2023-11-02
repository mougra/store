import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost, ServerResponse } from '../../models/models'

interface Payload {
  page?: number
  limit?: number
}

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], string>({
      query: () => ({
        url: 'posts',
      }),
      // подгружаю все посты, что бы делать поиск по posts.title с информацией сколько всего записей для рабочей пагинации
      // из плюсов поиск будет происходить без лишних запросов
      // остальная логика остаётся как изначально было задуманно с подргузкой при переходе на конкретнубю страницу
    }),
    sortPosts: build.query<IPost[], Payload>({
      query: ({ page = 1, limit = 9 }) => ({
        url: 'posts',
        params: {
          _sort: 'title',
          _page: page,
          _limit: limit,
        },
      }),
    }),
    getPosts: build.query<IPost[], Payload>({
      query: ({ page = 1, limit = 9 }) => ({
        url: `posts`,
        // ?_page=2&_limit=9
        params: {
          _page: page,
          _limit: limit,
        },
      }),
    }),
    getUserPosts: build.query<IPost[], number>({
      query: (postId) => ({
        url: `posts`,
        params: {
          userId: postId,
        },
      }),
    }),
  }),
})

export const {
  useFetchAllPostsQuery,
  useLazySortPostsQuery,
  useLazyGetPostsQuery,
  useGetPostsQuery,
  useGetUserPostsQuery,
} = postsApi
