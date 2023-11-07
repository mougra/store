import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'

import { ROUTES } from '../../utils/routes'
import SingleProduct from '../Products/SingleProduct'
import Profile from '../Profile/Profile'

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    {/* <Route path='/detail-user/:id' element={<DetailsUser />} />
    <Route path='/*' element={<NotFound />} /> */}
  </Routes>
)
