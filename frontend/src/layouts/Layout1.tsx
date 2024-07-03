import React, { useRef, MutableRefObject, useEffect } from 'react'
import Header from '../components/Header'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { setAppDrawer } from '../redux/userSlice';
import Hero from '../components/Hero';
import Searchbox from '../components/Searchbox';
import download from "../assets/appDownload.png"
import phones from "../assets/landing.png"
import Footer from '../components/Footer';
type props = {
    children? : React.ReactNode
}

const Layout1 = ({children}: props) => {
  const dispatch = useDispatch()
  const slideRef = useRef<HTMLDivElement | null> (null)
  useEffect(() => {
    document.onmousedown = (e) => {
        if(!slideRef.current?.contains(e.target as Node)){
            dispatch(setAppDrawer(false))
        }
    }
  }, [])
  
  const drawer = useSelector<IRootState, boolean>(state => state.reducer.appDrawer)
  return (<>
    <div className="flex flex-col min-h-screen flex-auto">
        <Header />
        <Hero />
        <div className='shadow-lg border space-y-8 w-[90%] mx-auto z-20 mt-[-100px] bg-white rounded-xl pt-3 pb-8'>
            <h1 className='text-orange-500 text-4xl md:text-6xl text-center font-bold'>Tuck into a takeaway today!</h1>
            <p className='text-center text-lg font-semibold'>Food is just a click away.</p>
            <Searchbox />
        </div>
        <div className='flex flex-col md:flex-row mt-[100px] mb-[80px]'>
            <div className='w-full'>
                <img src = {phones} alt = ""/>
            </div>
            <div className = "w-full space-y-10">
                <h1 className='font-bold md:text-5xl text-center'>Order Take-away even faster!</h1>
                <p className='hidden md:block md:text-xl text-center font-semibold'>Download the Hungry app for faster ordering and personalized recommendations</p>
                <img className = "mx-auto w-[50%]" src = {download} alt = ""/>
            </div>
        </div>
    </div>
    
    {drawer && <div ref = {slideRef} className = "md:hidden z-30 fixed animate-in slide-in-from-right top-[0px] z-10 right-[0px] flex flex-col min-h-screen bg-orange-500/90 w-[80%] border-2 border-orange-500">
        <IoMdClose onClick = {() => dispatch(setAppDrawer(false))} className='fill-white self-end m-3 cursor-pointer hover:fill-black' size = {50}/>
        <div className='h-fit w-fit self-center mt-[100px] text-white font-semibold text-2xl space-y-4'>
            <p>Sign up</p>
            <p>Log in</p>
        </div>
    </div>}
    <Footer />
    </>
  )
}

export default Layout1