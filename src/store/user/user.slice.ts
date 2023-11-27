import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { AuthType, createUserProps, UserResponse } from '../../models/models'

interface UserState {
  currentUser: UserResponse | null
  cart: any
  isLoading: boolean
  error: string
  formType: AuthType
  showForm: boolean
}

export const createUser: any = createAsyncThunk(
  'users/createUser',
  async (payload: createUserProps, thunkAPI) => {
    try {
      if (payload.avatar === '') {
        payload.avatar =
          'https://koshka.top/uploads/posts/2021-11/1638230685_4-koshka-top-p-krasivie-koshki-na-avatarku-7.jpg'
      }

      const res = await axios.post(`users`, payload)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser: any = createAsyncThunk(
  'users/loginUser',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`auth/login`, payload)
      localStorage.setItem('token', res.data.access_token)

      const login = await axios(`auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      })
      return login.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const updateUser: any = createAsyncThunk(
  'users/updateUser',
  async (payload: any, thunkAPI) => {
    try {
      const res = await axios.put(`users/${payload.id}`, payload)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const addCurrentUser = (state: UserState, { payload }: any) => {
  state.currentUser = payload
}

const initialState: UserState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  error: '',
  formType: 'signup',
  showForm: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<any>) {
      let newCart = [...state.cart]
      const found = state.cart.find(({ id }: any) => id === action.payload.id)
      if (found) {
        newCart = newCart.map((item: any) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity || item.quantity + 1,
              }
            : item
        })
      } else newCart.push({ ...action.payload, quantity: 1 })

      state.cart = newCart
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const newCart = state.cart.filter(({ id }: any) => id !== action.payload)
      state.cart = newCart
    },
    toggleForm: (state, action: PayloadAction<boolean>) => {
      state.showForm = action.payload
    },
    toggleFormType: (state, action: PayloadAction<AuthType>) => {
      state.formType = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser)
    builder.addCase(loginUser.fulfilled, addCurrentUser)
    builder.addCase(updateUser.fulfilled, addCurrentUser)
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
