import React from 'react'
import { HiLocationMarker, HiPhone, HiOutlineMail, HiChevronRight} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='p-6 bg-red-500 md:p-4'>
      <div className="pt-16 pb-6 mx-auto max-w-screen-xl md:p-8 md:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img className="h-12 md:h-14" src="../images/footer-logo.png" alt="" srcset="" />
            </div>
            <p className='max-w-md mx-auto mt-8 leading-relaxed text-sm md:text-base text-center text-gray-50 sm:max-w-xs sm:mx-0 sm:text-left select-none'>
            International Bookstore is all about finding the next great read. 
            Visit one of our bookstores in the Philippines
          </p>
          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            
            <div className="text-center sm:text-left">
              <div className="hidden md:inline-block">
                <p className='text-xl font-bold text-white'>About IBS</p>
                  <nav class="mt-8">
                  <ul class="text-sm space-y-4">
                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        About Us
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Mission and Vision
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Laking International
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <details className='inline-block md:hidden text-center pt-2'>
                <summary className='inline-block justify-center align-middle'>
                  <p className='text-xl font-bold text-white'>About IBS<HiChevronRight size={30} className='inline-block'/> </p>
                </summary>

                <nav class="mt-4">
                  <ul class="text-sm space-y-4">
                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        About Us
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Mission and Vision
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Laking International
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </details>
            </div>

            <div className="text-center sm:text-left">
              <div className='hidden md:inline-block'>
              <p className='text-xl font-bold text-white'>Customer Service</p>
                <nav class="mt-8">
                <ul class="text-sm space-y-4">
                  <li>
                    <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                      Help Center
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                      Exchange and Return
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                      Shipping and Delivery
                    </a>
                  </li>
                </ul>
              </nav>
              </div>

              <details className='inline-block md:hidden justify-center pt-2'>
                <summary className='inline-block'>
                  <p className='text-xl font-bold text-white'>Customer Service<HiChevronRight size={30} className='inline-flex'/> </p>
                </summary>

                  <nav class="mt-4">
                  <ul class="text-sm space-y-4">
                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        FAQ
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Help Center
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Exchange and Return
                      </a>
                    </li>

                    <li>
                      <a class="text-gray-200 transition hover:text-gray-200/75" href="/">
                        Shipping and Delivery
                      </a>
                    </li>
                  </ul>
                  </nav> 
              </details>
            </div>

            <div className="text-center sm:text-left">
              <div className="hidden md:inline-block">
                <p className="text-xl font-bold text-white">Contact Us</p>
                <ul className="mt-8 text-sm space-y-4">
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiOutlineMail size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                      customer-assistance@ibs.com.ph
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiLocationMarker size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                        Raxabago Street, Tondo, Manila
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiPhone size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                        7976-3248
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <details className='inline-block md:hidden justify-center pt-2'>
                <summary className='inline-block'>
                  <p className='text-xl font-bold text-white'>Contact Us<HiChevronRight size={30} className='inline-flex'/> </p>
                </summary>

                <ul className="mt-4 text-sm space-y-4">
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiOutlineMail size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                      customer-assistance@ibs.com.ph
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiLocationMarker size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                        Raxabago Street, Tondo, Manila
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex items-center justify-center gap-2 sm:justify-start">
                      <HiPhone size={30} className="text-gray-100"/>
                      <span className="text-gray-200 text-sm transition hover:text-gray-200/75">
                        7976-3248
                      </span>
                    </a>
                  </li>
                </ul>
              </details>

            </div>
        </div>

      </div>

      <div class="pt-6 mt-12 border-t-2 border-gray-100">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-sm text-gray-500">
          <span class="block sm:inline md:mr-3 text-gray-100">All rights reserved</span>

          <a class="inline-block text-gray-100 underline transition hover:text-gray-100/75 mr-3" href="/">
            Terms & Conditions
          </a>

          <a class="inline-block text-gray-100 underline transition hover:text-gray-100/75" href="/">
            Privacy Policy
          </a>
        </p>

        <p class="mt-4 text-sm text-gray-100 sm:order-first sm:mt-0">
          &copy; 2022 International Bookstore
        </p>
      </div>
    </div>
        

    </div>
  </footer>
  )
}

export default Footer