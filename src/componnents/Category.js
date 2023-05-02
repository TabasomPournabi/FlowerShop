import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Category() {
    const settings = {
      infinite: true,
      speed: 500,
      autoplay:false,
      autoplaySpeed:3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    const sliderImg=[
      { link: 'image/flower-g1.jpg',
      id:1,
      des:'دسته گل',
      cat:''
    },
    { link: 'image/flower-g8.jpg',
      id:2,
      des:'سبد گل',
      cat:''
    },
    { link: 'image/flower-g3.jpg',
      id:3,
      des:'رز جاودان',
      cat:''
    },
    { link: 'image/flower-g4.jpg',
      id:4,
      des:'گیاه آپارتمانی',
      cat:''
    },
    { link: 'image/flower-g5.jpg',
      id:5,
      des:'باکس گل',
      cat:''
    },
    { link: 'image/flower-g6.jpg',
      id:6,
      des:'جام گل',
      cat:''
    },
    { link: 'image/flower-g3.jpg',
      id:7,
      des:'تاج گل',
      cat:''
    },
    { link: 'image/flower-g8.jpg',
    id:8,
    des:'گل آرایی',
    cat:''
  }
  ]
  return (
    <div id='category' className='snap-start sticky bg-background-color  h-[calc(100vh-74px)] z-40  rounded-lg pt-10 pb-20'>


<div className='text-text-dark font-bold text-4xl mt-16 font-vazir flex justify-center items-center'> گل فروشی گلی</div>
 
      <div className=' sm:w-[92%] w-[86%] mx-auto mt-24'>
 <Slider {...settings}>
          {sliderImg.map((slid)=>(
            <a className='p-7 duration-500 cursor-pointer hover:scale-110'>
              <img
               src={slid.link}
                alt={slid.des} 
                className='my-3 mx-auto rounded-[59%] sm:w-[38%] w-[30%] shadow-[0_0_0_5px_rgba(116,81,222,45%),0_0_0_1px_rgba(95,5,156,11%),0_0_0_10px_rgb(145,111,211),0_0_0_11px_rgba(139,90,226,27%),0_0_0_16px_rgb(178,140,255),0_0_0_17px_rgb(208,204,216),0_0_0_21px_rgb(229,249,247),0_0_0_22px_rgb(204,197,236)]'/>
              <a href={`#${slid.cat}`} className='text-primary-color h-14 text-xl font-vazir flex justify-center items-center pt-5'>
                {slid.des}
              </a>
            </a>
          ))}
        </Slider> 

      </div>  
    </div>
  )
}
