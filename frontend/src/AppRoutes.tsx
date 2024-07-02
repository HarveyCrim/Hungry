import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element = {<div>Home</div>} />
        <Route path = "/user-profile" element = {<div>User Profile</div>} />
        <Route path = "*" element = {<Navigate to = "/" />} />
    </Routes>
  )
}

export default AppRoutes