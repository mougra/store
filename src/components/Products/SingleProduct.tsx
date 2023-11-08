import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  useFetchProductsQuery,
  useGetProductQuery,
} from '../../store/products/products.api'

import Product from './Product'
import Products from './Products'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { useWindowSize } from '../../hooks/resize'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { getRelatedProducts } = useActions()
  const { related } = useAppSelector((state) => state.modifiedProducts)

  const { data: products } = useFetchProductsQuery('products')

  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetProductQuery({ id })

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate('/')
    }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFetching, isSuccess])

  useEffect(() => {
    if (!product || !products) return
    getRelatedProducts({ data: products, value: product.category.id })
  }, [product, products])

  const size = useWindowSize()

  return !product ? (
    <section className='preloader'>Loading...</section>
  ) : (
    <>
      <Product {...product} />
      <Products
        products={related}
        amount={size.countsProducts}
        title='Related products'
      />
    </>
  )
}

export default SingleProduct
