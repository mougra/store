import React, { useEffect } from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useFetchProductsQuery } from '../../store/products/products.api'
import Categories from '../Categories/Categories'
import { useFetchСategoriesQuery } from '../../store/categories/categories.api'
import Banner from '../Banner/Banner'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { useWindowSize } from '../../hooks/resize'

export const Home = () => {
  const { data: products } = useFetchProductsQuery('products')
  const { data: categories } = useFetchСategoriesQuery('categories')

  const { filterProducts } = useActions()
  const { filtered } = useAppSelector((state) => state.modifiedProducts)

  useEffect(() => {
    if (!products) return
    filterProducts({ data: products, value: 100 })
  }, [products])

  const size = useWindowSize()

  return (
    <>
      <Poster />
      <Products
        title='Trending'
        products={products}
        amount={size.countsProducts}
      />
      <Categories
        title='Worth seeing'
        categories={categories}
        amount={size.countsProducts}
      />
      <Banner />
      <Products
        title='Less than 100$'
        products={filtered}
        amount={size.countsProducts}
      />
    </>
  )
}
