import React, { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";




export default function Card({openCard,setOpenCard,cartItems,handleREmoveProducts,handleAddProducts}) {
   
 

const totalPrice =cartItems.reduce(
    (price,item)=>price+ item.quantity * item.price,0)



      const onCloseCart=()=>{
        setOpenCard(!openCard)
      }
      
  return (
    <div className=
   {`font-vazir w-96 p-2 min-h-min absolute rounded-lg top-[73px]  bg-primary-color border-2 border-text-ligh translate-all duration-500 ease-in ${openCard? ' left-0 ':'left-[-424px]'}`}
    >
{cartItems.length===0&& (

<div className='font-vazir text-text-dark text-lg'> هیچ کالایی در سبد خرید شما وجود ندارد.</div>
)}

      {/* one */}

      {cartItems.map((item)=>(
             <div key={item.id} className='flex justify-between p-3 items-center pb-5 border-b-2'>
             {/* right */}
             <div className='flex flex-col pt-2 justify-around h-28 items-center '>
                 {/* up */}
                 <div className='text-xl text-text-dark bg-background-color w-32 h-12 rounded-lg flex justify-between items-center p-2'>
                
                     <span
                     onClick={()=>handleAddProducts(item)}
                      className='text-text-dark font-extrabold border-l-2 border-text-dark pl-3 text-2xl cursor-pointer'
                      >
                         <MdAdd/>
                         </span>
                     <span>{item.quantity}</span>
                     {item.quantity>1? 
                     <span onClick={()=>handleREmoveProducts(item)}
                      className='border-r-2 border-text-dark pr-3 cursor-pointer'><FiMinus/></span>
                    : <span onClick={()=>handleREmoveProducts(item)} className='border-r-2 border-text-dark pr-3 text-2xl cursor-pointer'> <MdOutlineDelete/></span>}
                    
                    
                 </div>
                 {/* down */}
                 <div className='text-text-dark text-lg font-semibold'>{item.price} تومان</div>
             </div>
             {/* left */}
             <div>
     
                 <div className=' rounded-full bg-text-light  w-28 h-28'>
         </div>
             <div className='relative'>
                 <img className='absolute -top-32 rounded-bl-[50%]' src={item.link}></img>
             </div>
             </div>
             </div>
             
      ))}
    
     
        
        {/* total */}
        <div className='text-text-dark text-lg font-bold flex justify-between items-center'>

        {cartItems.length>0?
            <div className='p-2'>{totalPrice} تومان</div>:<div></div>
}
            
         
            
        <div 
        onClick={onCloseCart}
        className='text-2xl cursor-pointer'><IoArrowBackOutline/></div>
        </div>
        </div>
  )
}
