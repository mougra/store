import React, { useEffect } from 'react'
import { AppRoutes } from '../Routes/Routes'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Sidebar } from '../Sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { useFetchСategoriesQuery } from '../../store/categories/categories.api'
import { useAppSelector } from '../../hooks/redux'

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [dispatch])

  const {
    isLoading: isLoadingCategories,
    error: isErrorCategories,
    data: categories,
  } = useFetchСategoriesQuery('categories')

  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
