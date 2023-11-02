import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment } from '../../models/models'

export const commentsApi = createApi({
  reducerPath: 'comments/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getComments: build.query<IComment[], number>({
      query: (postId) => ({
        url: `comments`,
        params: {
          postId: postId,
        },
      }),
    }),
  }),
})

export const { useLazyGetCommentsQuery } = commentsApi
