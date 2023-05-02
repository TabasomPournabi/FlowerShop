import React from 'react';
import { ImWhatsapp } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';


export default function AbautAs({onOpenSubmit,formik}) {


//  const formik=useFormik({
//   initialValues:{
//     name:"",
//     email:""
//   },
//   validationSchema:Yup.object({
//     name:Yup.string()
//     .max(10,"نام کمتر از 10 حرف باشد")
//     .required("برای عضو شدن وارد کردن نام لازم است"),
//     email:Yup.string()
//     .email("ایمیل وارد شده نا معتبر است")
//     .required("برای با خبر شدن از اخبار ایمیل لازم است")
//    }),
//   onSubmit:(values,action)=>{
//     console.log("form submit",values)

//     console.log('values',values)
//     console.log('action',action)
//     onOpenSubmit()
//     formik.values.email=''
//     formik.values.name=''
 


//   }
//  })

  return (
    <div id='aboutUs' className='snap-start bg-background-color flex justify-between items-center  h-[calc(100vh-74px)] z-40 sticky rounded-lg' >
      {/* {closeSubmit?<FormSubmit/>:null} */}
   {/* right side */}
   <div className=' sm:w-1/2 flex flex-col h-full w-full'>
    {/* up */}
      <div className='h-3/4 flex justify-center items-center'>


          <form 
          onSubmit={formik.handleSubmit}
          className='font-vazir w-full mt-6 mr-6 flex flex-col items-center'>
          <h1 className='font-vazir text-3xl text-text-dark m-3'>عضویت در خبرنامه</h1>
          <p className='text-sm text-text-dark'>برای اطلاع از تخفیف ها و دسته گل های جدید عضو خبرنامه شوید.</p>
          <div className='w-1/2 mt-6'>

         <label 
         className={`block text-text-dark mb-2 text-xs md:text-lg
         ${formik.errors.name?'text-red-400':'text-text-dark'}`} htmlFor='name'> 
         {formik.errors.name && formik.touched.name ?formik.errors.name:'نام'}
         </label>
          <input 
          type='text' 
          name='name' 
          placeholder='لطفا اسمتون رو وارد کنید.'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
           className='rounded-md border-primary-color border-2 w-full p-1 focus:border-text-dark focus:outline-none focus:ring-text-dark '/>
          </div>
          <div className='w-1/2 mt-6'>

         <label 
          className={`block text-text-dark mb-2 text-xs md:text-lg
          ${formik.errors.email?'text-red-400':'text-text-dark'}`} htmlFor='email'> 
          {formik.errors.email && formik.touched.email ?formik.errors.email:'ایمیل'}
          </label>
          <input 
          type='email' 
          name='email'
           placeholder='.لطفا ایمیل رو وارد کنید.'
           value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
            className='rounded-md border-primary-color border-2 w-full p-1 focus:border-text-dark focus:outline-none focus:ring-text-dark '/>
          </div>
          <button
           type='submit'
          
           className={`bg-primary-color text-text-dark text-lg rounded-md w-1/2 p-2 mt-8
           ${formik.errors.email ?'cursor-not-allowed':'cursor-pointer'}
           ${formik.values.email==' ' ?' cursor-not-allowed':'cursor-pointer'}
           ${formik.errors.name ?' cursor-not-allowed':'cursor-pointer'}
           `}>
            تایید
          </button>

     
        </form>

        
      
      </div>


      {/* down */}
      <div className='mr-5  mt-9 flex justify-center sm:inline'>
        <ul className=' w-[328px] top-44 right-5 flex md:flex-col justify-center '>
          <a href="https://wa.me/2348100000000" className=' font-vazir flex  items-center text-2xl text-green-500 p-5 md:p-0 cursor-pointer md:cursor-default hover:scale-110 duration-300 md:hover:scale-100'> <ImWhatsapp/><span className='p-2  text-lg text-text-dark hidden md:inline'>09902207996</span></a>
          <a href='https://www.instagram.com/mim_flowerr/' className=' font-vazir flex  items-center text-2xl text-pink-600  p-5 md:p-0 cursor-pointer md:cursor-default  hover:scale-110 duration-300  md:hover:scale-100' > <FiInstagram/><span className='p-2 text-lg text-text-dark  hidden md:inline'>best_flowershop</span></a>
          <li className=' font-vazir flex  items-center text-2xl text-gray-800  p-5 md:p-0 cursor-pointer hover:scale-110 duration-300 md:cursor-default   md:hover:scale-100'> <ImLocation/><span className='p-2 text-lg text-text-dark  hidden md:inline'>تهران، خیابان تهرانی، نبش بلوار</span></li>
        </ul>
      </div>
    </div>
    {/* left side */}
   
     <div className='hidden sm:w-1/2 sm:h-full sm:inline'>
      <div className=' rounded-full bg-text-light absolute top-[109px] md:left-[111px] md:w-[28rem] md:h-[28rem] w-72 h-72'>
    </div>
   
           <div className='bg-transparent  rotate-[29deg] absolute  md:w-[26rem] sm:w-64 top-24 left-16 md:top-20 md:left-28'>
    <img className='' src='image/aboutFlower-3.png'/>
    </div>
   
    </div>
   
    </div>







  )
}
