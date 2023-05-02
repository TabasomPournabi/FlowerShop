import React from 'react'
import { MdClose } from "react-icons/md";


export default function FormSubmit({onCloseSubmit,submitName}) {
  return (
 
<div className='z-50 w-full h-full absolute top-0 left-0 flex items-center justify-center bg-slate-400/70'>

        <div
         className='bg-primary-color w-[32rem] h-52 mt-[-4rem] mx-auto relative
         rounded-2xl font-vazir text-lg font-bold text-text-dark flex flex-col items-center'>
           <span 
           onClick={onCloseSubmit}
           className='font-vazir bold text-3xl absolute top-2 left-5  cursor-pointer hover:text-text-hover duration-200'>
           <MdClose />
            </span> 
           <h3 className='mt-11'> {submitName} عزیز، تبریک میگم.</h3>
           
         <p className='mt-10'> ورود شما با موفقیت  به خبرنامه ما ثبت شد.</p>
           
        </div>
  
              </div>

  )
}
