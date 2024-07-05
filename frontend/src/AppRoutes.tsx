
import { Navigate, Routes, Route } from 'react-router-dom'
import Layout1 from './layouts/Layout1'
import AuthCallback from './pages/AuthCallback'
import UserProfile from './pages/UserProfile'
import { getUser } from './api/useApi'
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './redux/store'
import PhoneNav from './components/PhoneNav'
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner';
const AppRoutes = () => {
  getUser()
  
  return (
    <>
    <Toaster />
    <PhoneNav />
    <Routes>
        <Route path = "/" element = {<Layout1></Layout1>} />
        <Route path = "/auth-callback" element = {<AuthCallback />} />,
        <Route path = "/user-profile" element = {<UserProfile />} />
        <Route path = "*" element = {<Navigate to = "/" />} />
    </Routes>
    </>
  )
}

export default AppRoutes