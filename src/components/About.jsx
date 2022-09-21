import React, { useEffect } from 'react'
import location from '../assets/location.svg'
import delivery from '../assets/delivery.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      disable: function() {
        var maxWidth = 600;
        return window.innerWidth < maxWidth;
      },
      duration: 2000,
      mirror: false,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <div name="about" className='w-full h-full py-8 px-6 mt-5 md:mt-10 mb-4'>
        <div className='max-w-screen-xl mx-auto'>
            
            <div data-aos="fade-up" data-aos-offset="300" className='text-center'>
                <h1 className='text-3xl mx-auto md:text-6xl font-extrabold md:font-bold text-red-600 py-3 px-5'>Philippine's Greatest Bookstore</h1>
                <p className='text-gray-700 text-base md:text-lg font-semibold'>Provider of Stories, ideas, and knowledge that will change your life forever.</p>
            </div>
            
            <div data-aos="fade-right" data-aos-offset="600" className='mt-5 md:mt-16 grid md:grid-cols-2'>
              <div className='md:w-full max-w-6xl'>
                <img src={location} alt="" srcset="" />
              </div>
              <div className='flex flex-col text-center md:text-start justify-center'>
                <h3 className='text-2xl md:text-4xl font-bold text-gray-700'>200 Branches All Over The Philippines</h3>
                <p className='text-gray-700 font-medium text-sm md:text-xl mt-2 md:mt-5 justify-evenly'> Operating A Network Of More Than 200 Branches Nationwide.
                    With Strict Adherence To The Highest Quality And Service,
                    Serves The People The Quality And Service They Deserve.</p>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-offset="900" className='mt-5 md:mt-16 grid md:grid-cols-2'>
                <div className='flex flex-col text-center md:text-end justify-center order-last md:order-first '>
                  <h3 className='text-2xl md:text-4xl font-bold text-gray-700'>Committed Delivery On Time</h3>
                  <p className='text-gray-700 font-medium text-sm md:text-xl mt-2 md:mt-5 justify-evenly'> Partners With Over Ten Courier Companies To Provide Safety
                    And A Guaranteed On-Time Delivery Through Your Doorsteps
                    We Care, We Listen, We Deliver.</p>
                </div>
                
                <div className='w-full order-first md:order-last'>
                  <img src={ delivery } alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
