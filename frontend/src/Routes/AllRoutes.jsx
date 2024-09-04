import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import BlogList from '../pages/BlogList'
import Blog from '../pages/Blog'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/blogs' element={<BlogList/>}/>
            <Route path='/blogs/:id' element={<Blog/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes