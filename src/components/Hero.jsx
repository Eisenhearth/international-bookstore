import React, { useState } from 'react'
import People from '../assets/home-img.svg'
import { HiSearch } from 'react-icons/hi';

const Hero = () => {
  return (
  <div name="home" className='w-full h-full pt-11  pb-5 md:py-0 px-6 static'>
     <div className='max-w-screen-xl mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col justify-center text-center md:text-left'>
        <h1 className='text-red-600 font-extrabold subpixel-antialiased py-0 leading-tight text-5xl md:text-[5rem] z-40'>Open your mind to endless Possibilities</h1>
        <p className='text-gray-700 font-bold text-lg md:text-2xl py-6 md:py-0 z-40'>With Over 100,000 Available Titles to Choose From, <br/>Find Interesting Titles Today.</p>
        <form className='mt-3 flex items-start py-4 md:py-0 z-40'>
          <label htmlFor="search-bar" className='sr-only'>Search</label>
          <div className='relative w-full'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <HiSearch className='w-5 h-5 text-gray-500' />
            </div>
            <input type="text" id='simple-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-3 focus:outline-none focus:ring focus:ring-red-600 placeholder:font-semibold' placeholder="Search" required />
          </div>

          <button type="submit" class="p-3 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
      </div>

      
      <div>
        <img className='w-[1000px] mx-auto hidden md:my-4 md:inline-block ml-10' src={People} alt="/" />
      </div>
        </div> 
  </div>
  )
}

export default Hero