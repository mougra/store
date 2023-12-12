import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthType, UserResponse } from '../../models/models'
import { localStore } from '../localStore'

interface UserState {
  currentUser: UserResponse | null
  cart: any
  loading: boolean
  error: string
  formType: AuthType
  showForm: boolean
}

const initialState: UserState = {
  currentUser: localStore.get('CURRENT_USER') ?? null,
  // currentUser: null,
  cart: [],
  loading: false,
  error: '',
  formType: 'signup',
  showForm: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<UserResponse>) {
      state.loading = false
      state.currentUser = action.payload
      state.error = ''
      localStore.set('CURRENT_USER', action.payload)
    },
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
      state.error = ''
    },
    toggleFormType: (state, action: PayloadAction<AuthType>) => {
      state.formType = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    logoutUser(state) {
      state.currentUser = null
      localStore.set('tokensJWT', null)
      localStore.set('CURRENT_USER', null)
    },
  },
})

export default userSlice.reducer
export const {
  logoutUser,
  toggleForm,
  toggleFormType,
  addItemToCart,
  removeItemFromCart,
} = userSlice.actions
