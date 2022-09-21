import React, {useState} from 'react'
import Logo from '/images/logo.png'
import {HiMenu, HiOutlineX} from 'react-icons/hi'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleClose = () => setNav(!nav)

  return (
    <div name='support' className='sticky top-0 w-full h-20 md:h-auto bg-white shadow-sm z-50'> 
      <div className='flex justify-between items-center h-24 max-w-screen-xl mx-auto'>
        <img className='md:h-14 h-10 cursor-pointer pb-1 ml-2 md:ml-0' src={Logo} alt="" />
      <ul className='hidden md:flex'>

        <li className='p-4 font-semibold text-slate-700 hover:text-gray-400 cursor-pointer'>
          <Link to="home" smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li className='p-4 font-semibold text-slate-700 hover:text-gray-400 cursor-pointer'>
          <Link to="about" smooth={true} offset={-100} duration={500}>About</Link>
        </li>
        <li className='p-4 font-semibold text-slate-700 hover:text-gray-400 cursor-pointer'>
          <Link to="shop" smooth={true} offset={-85} duration={500}>Shop</Link>
        </li>
        <li className='p-4 font-semibold text-slate-700 hover:text-gray-400 cursor-pointer'>
          <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-3'>
        {nav ? <HiOutlineX className='text-red-500' size={40}/> : <HiMenu className='text-red-500' size={40}/>}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[65%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='h-12 md:h-14 m-4 mt-6' src={Logo} alt="" />

        <ul className='p-4'>
          <li className='p-4 text-lg font-semibold text-slate-700 hover:text-gray-400 border-b border-gray-100'>
            <Link onClick={handleClose} to="home" smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className='p-4 text-lg font-semibold text-slate-700 hover:text-gray-400 border-b border-gray-100'>
            <Link onClick={handleClose} to="about" smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className='p-4 text-lg font-semibold text-slate-700 hover:text-gray-400 border-b border-gray-100'>
            <Link onClick={handleClose} to="shop" smooth={true} offset={-85} duration={500}>Shop</Link>
          </li>
          <li className='p-4 text-lg font-semibold text-slate-700 hover:text-gray-400'>
           <Link onClick={handleClose} to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar