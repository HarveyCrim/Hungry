import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { setAppDrawer } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='border-b-2 border-b-orange-500 flex justify-between p-6 items-center'>
        <Link to = "/"><span className='text-orange-500 text-4xl font-bold inline-block tracking-[-2px]'>Hungry</span></Link>
        <div className = "md:hidden">
            <GiHamburgerMenu onClick = {() => dispatch(setAppDrawer(true))} className = "fill-orange-500 cursor-pointer hover:fill-black" size = {30}/>
        </div>
        <div className='hidden md:flex self-end space-x-8'>
            <h5 className = "font-semibold text-xl cursor-pointer hover:text-gray-500">Sign up</h5>
            <h5 className = "font-semibold text-xl cursor-pointer hover:text-gray-500">Log in</h5>
        </div>
    </div>
  )
}

export default Header