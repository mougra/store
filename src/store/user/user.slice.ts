import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts, IUser } from '../../models/models'

interface UserState {
  currentUser: IUser[]
  cart: any
  isLoading: boolean
}
// interface PayloadType {
//   data: IProducts[]
//   filterPrice: number
// }

const initialState: UserState = {
  currentUser: [],
  cart: [],
  isLoading: false,
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
  },
})
// export const { addItemToCart } = userSlice.actions

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
