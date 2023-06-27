import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='/about-me' element={<AboutMe />} />
    <Route path='/detail-user/:id' element={<DetailsUser />} />
    <Route path='/*' element={<NotFound />} /> */}
  </Routes>
)
