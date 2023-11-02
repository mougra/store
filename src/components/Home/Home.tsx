import React from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useFetchProductsQuery } from '../../store/products/products.api'
import Categories from '../Categories/Categories'
import { useFetchСategoriesQuery } from '../../store/categories/categories.api'
import Banner from '../Banner/Banner'

export const Home = () => {
  const { data: products } = useFetchProductsQuery('products')
  const { data: categories } = useFetchСategoriesQuery('categories')

  return (
    <>
      <Poster />
      <Products title='Trending' products={products} amount={5} />
      <Categories title='Worth seeing' categories={categories} amount={5} />
      <Banner />
    </>
  )
}
