import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../models/models'
import { shuffle } from '../../utils/common'

interface ProductsState {
  filtered: IProducts[]
  related: IProducts[]
}
interface PayloadType {
  data: IProducts[]
  value: number
}

const initialState: ProductsState = {
  filtered: [],
  related: [],
}

export const productsSlice = createSlice({
  name: 'modifiedProducts',
  initialState,
  reducers: {
    filterProducts(state, action: PayloadAction<PayloadType>) {
      state.filtered = action.payload.data.filter(
        ({ price }: IProducts) => price < action.payload.value
      )
    },
    getRelatedProducts(state, action: PayloadAction<PayloadType>) {
      const list = action.payload.data.filter(
        ({ category: { id } }) => id === action.payload.value
      )
      state.related = shuffle(list)
    },
  },
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
