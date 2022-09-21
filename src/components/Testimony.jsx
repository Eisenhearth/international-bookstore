import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimony = () => {
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
    <section className='bg-red-500'>
      <div className='max-w-screen-xl mx-auto px-4 py-16 md:px-6'>
        <div data-aos="fade-up" data-aos-offset="1000" className="max-w-2xl mx-auto text-center">
          <h2 className='text-3xl md:text-5xl font-bold text-white tracking-normal subpixel-antialiased'>
            Read trusted reviews from our customers
          </h2>
        </div>

        <div data-aos="fade" data-aos-offset="1200" className="mt-10 md:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3 sm:gap-16">

        <blockquote class="flex flex-col justify-between h-full md:p-14 p-7 bg-white rounded-lg md:drop-shadow-2xl">
        <div>
          <div className="mt-2">
            <h5 className="text-xl font-bold text-red-600 md:text-3xl">“Best place to feel inspired”</h5>

            <p className="mt-5 text-gray-600 italic text-justify font-semibold select-none">
              The books are well-organized (and quite overwhelming) I love how there are chairs 
              inside should you want a quick read or to spend a good amount of time surrounded by books.
            </p>
          </div>
        </div>

        <div className='flex justify-start items-center space-x-3 mt-5'>
          <img className="w-16 rounded-full ml-0" src="../images/customer-profiles/customer1.jpg" alt="" srcset="" />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div><h1 className='text-lg font-bold'a>Aquafina Del Rosario</h1></div>
            <div class="text-sm font-light text-gray-700">Quezon City</div>
          </div>
        </div>
        
        </blockquote>

        <blockquote class="flex flex-col justify-between h-full md:p-14 p-7 bg-white rounded-lg md:drop-shadow-2xl">
        <div>
          <div className="mt-2">
            <h5 className="text-2xl font-bold text-red-600 md:text-3xl">“A Bookworm's Corner”</h5>

            <p className="mt-5 text-gray-600 italic text-justify font-semibold select-none">
            International Bookstore offers wide variety of titles and at the same time provides wonderful service and kindness towards its customer. 
            I love the ambiance and the events that they are hosting. 
            I hope they will keep om promoting the love for books and reading.
            </p>
          </div>
        </div>

        <div className='flex justify-start items-center space-x-3 mt-5'>
          <img className="w-16 rounded-full ml-0" src="../images/customer-profiles/customer2.jpg" alt="" srcset="" />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div><h1 className='text-xl font-bold'a>Andres Garcia</h1></div>
            <div class="text-sm font-light text-gray-700">Province of Bohol</div>
          </div>
        </div>
        
        </blockquote>

        <blockquote class="md:flex hidden flex-col justify-between h-full p-14 bg-white rounded-lg md:drop-shadow-2xl">
        <div>
          <div className="mt-4">
            <h5 className="text-2xl font-bold text-red-600 md:text-3xl">“Top Destination”</h5>

            <p className="mt-5 text-gray-600 italic text-justify font-semibold select-none">
            Never fails to impress and is a top destination for us whenever we are back in Manila. 
            Bookworms I am not but everytime I’m there, I’m inclined to read and purchase. 
            It has such a warm and fuzzy feeling to it. Gives you a very uplifting feeling.
            </p>
          </div>
        </div>

        <div className='flex justify-start items-center space-x-3 mt-5'>
          <img className="w-16 rounded-full ml-0" src="../images/customer-profiles/customer3.jpg" alt="" srcset="" />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div><h1 className='text-xl font-bold'a>Jolo Chen</h1></div>
            <div class="text-sm font-light text-gray-700">Manila</div>
          </div>
        </div>
        
        </blockquote>

        </div>

      </div>
    </section>
   
  )
}

export default Testimony