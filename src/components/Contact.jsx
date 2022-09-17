import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section name="contact" className='bg-gray-100'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex md:flex-row flex-col mx-auto flex-wrap p-5'>
          
          <div className='md:w-1/3 w-80 mx-auto flex flex-col text-center my-6 md:p-2 p-3'>
            <h2 className='text-gray-900 font-bold text-xl'>Follow our social platforms for news and updates</h2>
            <div className='flex flex-row pt-3 justify-center'>
              <a href="https://www.facebook.com/" target={'_blank'}>
                <FaFacebook size={30} className='mx-3' />
              </a>
              <a href="https://www.instagram.com/" target={'_blank'}>
                <FaInstagram size={30} className='mx-3' />
              </a>
              <a href="https://twitter.com/?lang=en" target={'_blank'}>
                 <FaTwitter size={30} className='mx-3' />
              </a>
              <a href="https://www.tiktok.com/en/" target={'_blank'}>
                <FaTiktok size={30} className='mx-3' />
              </a>
            </div>
          </div>
          
            
          <div className='md:w-1/3 max-w-full flex flex-col text-center my-6 md:p-2 p-3'>
            <h2 className='text-gray-900 font-bold text-xl'>Visit Your Local Store</h2>
            <p className='md:pb-5 p-4'>200 Branches Nationwide</p>
            <div>
              <button className='md:w-1/3 w-64 bg-black text-white border border-none rounded-lg font-semibold p-2 hover:bg-gray-800'>Find A Store</button>
            </div>
          </div>

          <div className='md:w-1/3 max-w-fit flex flex-col text-center my-6 md:p-2 p-3'>
            <h2 className='text-gray-900 font-bold text-xl'>Stay up to date on the latest news, special event and new arrivals</h2>
              <div className='flex flex-row mt-6'>
                <input type="text" id="small-input" class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-black focus:border-black placeholder:text-sm placeholder:font-semibold" placeholder='Subscribed Your Email' />
                <button className='px-4 mx-1 bg-black text-white border border-none rounded-lg font-semibold transition hover:bg-gray-800'>Send</button>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact