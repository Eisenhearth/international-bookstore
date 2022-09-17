import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { dataProductsRecommendation } from '../assets/Productsdata'

const Shop = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-white pb-10'>
        <div className='max-w-screen-xl mx-auto py-2'>
          <h2 className='text-4xl md:ml-2 ml-4 font-bold text-red-600'>Featured Products</h2>
        </div>
        <div className='max-w-screen-xl mx-auto p-5'>

          <Slider {...settings}>
          {dataProductsRecommendation.map((item) => (
            <a href="#">
            <div className="card realative block border rounded-2xl p-7 h-[18.5rem] shadow-sm">
            <div className="card-top flex flex-col">
              <img className="object-contain w-full h-28 md:h-36"src={item.linkImg} alt={item.title} />
              <h1 className='md:py-2 py-3 font-extrabold text-sm md:text-base text-red-600'>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3 className='font-bold'>{item.price}</h3>
              <p className='text-sm'>{item.category}</p>
            </div>
          </div>
          </a>
          ))}
          </Slider>
      
        </div>
    </div>
  )
}

export default Shop