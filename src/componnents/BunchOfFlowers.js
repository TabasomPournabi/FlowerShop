import React from 'react'

import { BsCart3 } from "react-icons/bs";

export default function BunchOfFlowers({productItems,onHandleAddToCard}) {
//   const productItems=[
//     { link: 'image/bunch1.png',
//     id:1,
//     des:'دسته گل',
   
//   },
//   { link: 'image/bunch4.png',
//     id:2,
//     des:'سبد گل',
   
//   },
//   { link: 'image/bunch1.png',
//     id:3,
//     des:'رز جاودان',
   
//   },
//   { link: 'image/bunch2.png',
//     id:4,
//     des:'گیاه آپارتمانی',
   
//   }

//   ,
//   { link: 'image/bunch5.png',
//     id:5,
//     des:'باکس گل',
   
//   }
// ]

  return (
    <div id='shop' className='snap-start bg-background-color  rounded-lg h-[calc(100vh-74px)] pt-10 overflow-auto md:overflow-visible scrollbar-hide'>
      {/* md:overflow-visible */}
      <div class="md:grid grid-cols-3 gap-4  w-[85%] mx-auto ">
      {
             productItems.map((boxImg)=>(
              boxImg.id<4?
              <div key={boxImg.id} className='w-full flex justify-center items-center relative h-full '>
              <div className='bg-primary-color w-96  h-96 rounded-[30px]  pt-[7px] md:my-0 my-4'>
                
              <div className=' rounded-full bg-text-light   w-44 h-44 mt-3 mx-auto'></div>
          
                <div className='bg-transparent   h-56 w-56 -mt-44 mx-auto'>
          
              <img className='rounded-bl-[50%] ' src={boxImg.link}/>
              </div>
          
          <div className='text-text-dark h-14 text-2xl font-vazir  flex justify-center items-center mb-4'>{boxImg.des}</div>
          
          
              <div className=' flex justify-between items-center px-[10px]'>
                <button 
                onClick={()=>onHandleAddToCard(boxImg)}
                className='cursor-pointer text-4xl text-text-dark '><BsCart3/></button>
                <p className='text-xl font-vazir font-semibold text-text-dark'> 480000 <span className='text-violet-800/70'>تومان</span></p>
              </div>
              </div>
          
           
            </div>
            :boxImg.id===4?
              <div key={boxImg.id} className='w-full md:flex justify-center items-center relative h-full  hidden'>
              <div className='bg-primary-color w-96  h-56 rounded-[30px]  pt-[7px] md:my-0 my-4'>
                
              <div className=' rounded-full bg-text-light   w-44 h-44 mt-3 mx-auto'></div>
          
                <div className='bg-transparent   h-56 w-48 -mt-44 mx-auto'>
          
              <img className='rounded-bl-[50%] ' src={boxImg.link}/>
              </div>
          
            
          
       
              </div>
          
           
            </div>
            :
            <div key={boxImg.id} className=' snap-start w-full h-96 md:h-56  flex col-span-2 justify-center'>
  
            <div  className='bg-primary-color md:w-[98%] w-96  h-96 md:h-56 rounded-[30px]  flex justify-around flex-col md:flex-row '>
              <div>
      
            <div className=' rounded-full bg-text-light   w-44 h-44 mt-3 mx-auto'></div>
                
                <div className='bg-transparent  h-40 w-40 -mt-44 mx-auto'>
                
                <img className='rounded-bl-[50%] ' src={boxImg.link}/>
                </div>
              </div>
      
      
          <div className=' h-56 md:mt-3 hidden md:block'>
        <p className='text-xl flex justify-center items-center font-vazir font-semibold text-text-dark'>دسته گل عروسی</p>
        <div className='text-lg flex justify-center items-center mt-3 font-vazir font-semibold text-text-dark'>مناسب با هر سلیقه و سبک</div>
        <div className='text-base flex justify-center items-center font-vazir mt-3 font-semibold text-text-dark'>شروع قیمت از <span>100000</span> <span>تومان</span></div>
        <button className='flex justify-between items-center w-40 p-1 rounded-[30px] bg-text-light text-xl pr-2 font-vazir text-text-dark mx-auto mt-11'
        >سفارش  
        <span 
        onClick={()=>onHandleAddToCard(boxImg)}
        className='cursor-pointer text-2xl text-text-dark pl-2'><BsCart3/></span></button>
          </div>  
          <div className='text-text-dark h-14 text-2xl font-vazir  flex justify-center items-center mb-4 md:hidden'>{boxImg.des}</div>
                
                
                <div className=' flex justify-between items-center px-[10px] md:hidden'>
                  <button
                  onClick={()=>onHandleAddToCard(boxImg)}
                  className='cursor-pointer text-4xl text-text-dark '><BsCart3/></button>
                  <p className='text-xl font-vazir font-semibold text-text-dark '>33444 <span className='text-violet-800/70'>تومان</span></p>
                </div> 
          </div> 
        </div>
            ))
        }
        

  
    </div>
 
    </div>
  )
}
