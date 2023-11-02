import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './categories/categories.api'
import { productsApi } from './products/products.api'

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
