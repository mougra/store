import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './categories/categories.api'
import { productsApi } from './products/products.api'
import { productsReducer } from './products/products.slice'
import { userReducer } from './user/user.slice'

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    modifiedProducts: productsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
