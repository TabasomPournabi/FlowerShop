import React ,{useEffect,useRef}from 'react';
import { init } from 'ityped';

export default function Home() {
  
const textRef=useRef()

useEffect(()=>{
  init(textRef.current, { 
    showCursor: false, 
    backDelay:1500,
    backSpeed:60,
    showCursor:true, 
    strings:['دسته گل', 'سبد گل','رز جاودان','گیاه آپارتمانی' ] })
 
},[])
  return (
    <div id='home' className='snap-start bg-background-color rounded-lg h-[calc(100vh-70px)] flex justify-center flex-col-reverse md:flex-row'>
    <div className=' w-full md:h-full h-1/2'>
      <div className=' rounded-full bg-text-light absolute md:top-[128px] md:right-[66px] lg:w-[30rem] lg:h-[30rem] w-[27rem] h-[27rem] top-[379px] right-[1.5rem]'>
    
    </div>
           <div className='bg-transparent  rotate-[-22deg] absolute md:top-[9.5rem] w-56 md:w-[26rem] md:right-16  top-[25.5rem] right-36'>
    
  
    <img className='' src='image/cover-home.png'/>
    </div>
    </div>
    <div className='w-full md:h-full h-1/2 relative'>
    <div className="flex flex-col justify-center items-center absolute w-full h-full">
              <h2 className='text-text-dark  lg:text-3xl font-vazir font-bold'>گل فروشی آنلاین، سفارش انواع گل و گیاه</h2>
              <h1 className='text-text-dark font-vazir text-xl py-6 font-semibold'>ارسال فوری درب منزل شما در شهر تهران</h1>
              <h3 className='text-text-dark font-vazir text-lg'> <span ref={textRef}> </span></h3>
            </div>
    </div>
        </div>
 
  )
}   

   

