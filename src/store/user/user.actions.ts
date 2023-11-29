import { AppDispatch } from '..'
import axios from '../../axios'
import { RegisterUser, ServerResponse } from '../../models/models'
import { userSlice } from './user.slice'

export const createUser = (payload: RegisterUser): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())

      // const { name, password, avatar, ...email } = payload
      if (payload.avatar === '') {
        payload.avatar =
          'https://koshka.top/uploads/posts/2021-11/1638230685_4-koshka-top-p-krasivie-koshki-na-avatarku-7.jpg'
      }
      const res = await axios.post(`users`, payload)
      dispatch(userSlice.actions.fetchSuccess(res.data))
      dispatch(userSlice.actions.toggleForm(false))
    } catch (err) {
      dispatch(userSlice.actions.fetchError(err as Error))
    }
  }
}

export const loginUser = (payload: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const res = await axios.post(`auth/login`, payload)
      const login = await axios(`auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      })
      dispatch(userSlice.actions.fetchSuccess(login.data))
      dispatch(userSlice.actions.toggleForm(false))
    } catch (err) {
      dispatch(userSlice.actions.fetchError(err as Error))
    }
  }
}

export const updateUser = (payload: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const res = await axios.put(`users/${payload.id}`, payload)
      dispatch(userSlice.actions.fetchSuccess(res.data))
    } catch (err) {
      dispatch(userSlice.actions.fetchError(err as Error))
    }
  }
}
