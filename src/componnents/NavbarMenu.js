import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Card from './Card';

// import { HiMenuAlt2 } from "react-icons/hi2";

export default function NavbarMenu({cartItems,onHandleAddToCard,handleREmoveProducts,handleAddProducts}) {
  let Links=[
    {name:'خانه',link:'home'},
    {name:'دسته بندی ها',link:'category'},
    {name:'خرید',link:'shop'},
    {name:'درباره ما',link:'aboutUs'}
 
 
  ]
  const totalitem =cartItems.reduce(
    (price,item)=>price+ item.quantity ,0)

  const[activMenu,setActiveMenu]=useState(false)
  const[openCard,setOpenCard]=useState(false)
 const onOpenCard=()=>{
setOpenCard(!openCard)
// console.log('openCard',openCard)
 }
  return (
 <div className='shadow-md w-full fixed top-0 left-0 z-50'>
  {/* {openCard?<Card openCard={openCard}/>:null} */}
  <Card handleAddProducts={handleAddProducts} handleREmoveProducts={handleREmoveProducts} onHandleAddToCard={onHandleAddToCard} cartItems={cartItems} openCard={openCard} setOpenCard={setOpenCard}/>

  <div className='rounded-lg flex items-center justify-between bg-primary-color py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl font-vazir  flex items-center '>
      <span className=' text-text-light mr-1 pt-2 font-vazir'>گل فروشی گلی </span>
    </div>
    
      <span 
     
      className='cursor-pointer text-3xl text-text-light mr-1 pt-2 left-20 top-4 md:hidden absolute '
      >
       
        <BsCart3  onClick={onOpenCard}/>
        </span>

   
 
    <div onClick={()=>setActiveMenu(!activMenu)} className='text-3xl absolute left-8 top-6 cursor-pointer md:hidden  text-text-light'>
     {activMenu?<CgClose/>:<HiMenuAlt2/> } 
    </div>
    <ul className={`bg-primary-color rounded-lg md:flex md:items-center md:pb-0  absolute md:sticky md:bg-transparent text-text-ligh md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pr-9  translate-all duration-500 ease-in ${activMenu? 'opacity-100 top-20':'top-[-490px]'} md:opacity-100 `}>
      
     {
      Links.map((link)=>(
        <li 
        onClick={()=>setActiveMenu(!activMenu)}
        key={link.name}
         className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer group'>
          <a href={`#${link.link}`} className='md:text-text-light text-violet-600 duration-500  group-hover:text-violet-400 font-vazir md:group-hover:text-text-hover'>{link.name}</a>
        </li>
      ))
     }
    </ul>
    <div className='font-bold text-2xl cursor-pointer flex items-center relative text-gray-800'>
    <span className='bg-text-dark w-4 h-4 rounded-full absolute -top-[13px] left-[60px] sm:-top-3 sm:left-[60px] md:top-[6px] md:left-2'></span>
    <span onClick={onOpenCard} className='absolute  text-lg text-text-light font-normal -top-[19px] left-[63px] sm:left-16 sm:-top-[18px] md:top-0 md:left-[11px]'>{totalitem}</span>
      <span className='text-3xl text-text-light mr-1 pt-2 hidden md:inline'><BsCart3 onClick={onOpenCard}/></span>

    </div>


  </div>

</div>  
  )
}











{/* <nav className='px-3 relative bg-purple-800/80 backdrop-blur-sm w-full h-16 flex items-center justify-between rtl'>
   <div className='text-text-light pr-2 text-2xl'>گل فروشی گلی</div>
   <div>
    <ul className='hidden md:flex justify-center items-center text-text-light'>
      <li className='px-2'> خانه</li>
      <li className='px-2'> دسته بندی ها</li>
      <li className='px-2'> خرید</li>
      <li className='px-2'> درباره ما</li>
    </ul>
   </div>

 <BsCart3 className='mx-auto md:mx-0 text-text-light  text-4xl cursor-pointer hover:scale-125 duration-500 pl-2'/>
   <HiMenuAlt2 onClick={handleOmenMenu} className={activMenu?"hidden":'md:hidden  hover:scale-125 duration-500 text-3xl top-4  text-text-light cursor-pointer'}/>
<CgClose onClick={handleOmenMenu} className={activMenu?'md:hidden  text-3xl top-4 cursor-pointer text-text-light ':'hidden'}/>
   <NavbarResponse activMenu={activMenu}/>
    </nav> */}