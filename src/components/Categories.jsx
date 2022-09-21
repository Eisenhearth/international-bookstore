import React from 'react'

const Categories = () => {
  return (
    <section name="shop" className="bg-white py-8">
      <div className='max-w-screen-xl mx-auto py-2'>
          <h2 className='text-4xl md:ml-2 ml-4 font-bold text-red-600'>Daily Discover</h2>
      </div>
      <div className='max-w-screen-xl mx-auto py-3 px-5 md:px-2 md:py-5'>
        <div className="flex flex-row flex-wrap">

          <div className='flex-shrink max-w-full w-full md:w-1/2 pb-1 pr-0 md:pb-0 md:pr-2'>
            <div className='relative max-h-98 overflow-hidden rounded-xl'>
              <a href="#">
                <img className="max-w-full w-full mx-auto h-auto md:h-[20.2rem] md:hover:scale-110 md:ease-in md:duration-200" src="../images/categories/best-selling.png" alt="" srcset="" />
              </a>
              <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full border-none bg-gradient-cover">
                <a href="#">
                  <h2 className="text-3xl font-bold capitalize text-white mb-3">
                    New York Times Best Seller
                  </h2>
                </a>
              </div>
            </div>
          </div>

          <div className='flex-shrink max-w-full w-full md:w-1/2'>
            <div className="box-one flex flex-column flex-wrap pt-1 md:pt-0">

              <article className='flex-shrink-2 max-w-full w-1/2 md:w-1/2'>
                <div className="relative hover-img max-h-40 overflow-hidden rounded-xl">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-auto pb-2 md:pb-0 md:hover:scale-110 md:ease-in md:duration-200" src="../images/categories/school-essentials.webp" alt="" srcset="" />
                  </a>
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full border-none bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Back to School Essentials
                      </h2>
                    </a>
                  </div>
                </div>
              </article>

              <article className='flex-shrink max-w-full w-1/2 md:w-1/2'>
                <div className="relative hover-img max-h-40 overflow-hidden rounded-xl">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-auto pb-5 md:pb-0 md:hover:scale-110 md:ease-in md:duration-200" src="../images/categories/art-materials.jpg" alt="" srcset="" />
                  </a>
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full border-none bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Art Materials
                      </h2>
                    </a>
                  </div>
                </div>
              </article>

              <article className='flex-shrink max-w-full w-1/2 md:w-1/2'>
                <div className="relative hover-img max-h-40 overflow-hidden rounded-xl">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-max pb-5 md:pb-0 md:hover:scale-110 md:ease-in md:duration-200" src="../images/categories/office-furniture.png" alt="" srcset="" />
                  </a>
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full border-none bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Office Supplies
                      </h2>
                    </a>
                  </div>
                </div>
              </article>

              <article className='flex-shrink max-w-full w-1/2 md:w-1/2'>
                <div className="relative hover-img max-h-40 overflow-hidden rounded-xl">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto pb-[0.15rem] md:pb-0 h-max md:hover:scale-110 md:ease-in md:duration-200" src="../images/categories/kids-books.webp" alt="" srcset="" />
                  </a>
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full  bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Books for Young Readers
                      </h2>
                    </a>
                  </div>
                </div>
              </article>

            </div>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Categories
