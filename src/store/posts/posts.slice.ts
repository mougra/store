import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/models'

interface PostsState {
  searchedPosts: IPost[]
}
interface PayloadType {
  data: IPost[]
  search: string
}

const initialState: PostsState = {
  searchedPosts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchPosts(state, action: PayloadAction<PayloadType>) {
      state.searchedPosts = action.payload.data.filter((post: IPost) =>
        post.title.includes(action.payload.search.toLowerCase())
      )
      // выборка только по подгруженным постам
    },
  },
})

export const postsActions = postsSlice.actions
export const postsReducer = postsSlice.reducer
