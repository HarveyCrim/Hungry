import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Layout1 from './layouts/Layout1'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Layout1></Layout1>} />
        <Route path = "/user-profile" element = {<div>User Profile</div>} />
        <Route path = "*" element = {<Navigate to = "/" />} />
    </Routes>
  )
}

export default AppRoutes