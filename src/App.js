import React, { Fragment } from 'react'
import AbautAs from './componnents/AbautAs'
import BunchOfFlowers from './componnents/BunchOfFlowers'
import Category from './componnents/Category'
import Home from './componnents/Home'
import NavbarMenu from './componnents/NavbarMenu'
import FormSubmit from './componnents/FormSubmit'
import { useState } from 'react'
import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import data from './componnents/Data'

export default function App() {
  const[closeSubmit,setCloseSubmit]=useState(false)
const {productItems}=data;

//formik
const[submitName,setSubmitName]=useState('')
const formik=useFormik({
  initialValues:{
    name:"",
    email:""
  },
  validationSchema:Yup.object({
    name:Yup.string()
    .max(10,"نام کمتر از 10 حرف باشد")
    .required("برای عضو شدن وارد کردن نام لازم است"),
    email:Yup.string()
    .email("ایمیل وارد شده نا معتبر است")
    .required("برای با خبر شدن از اخبار ایمیل لازم است")
   }),
  onSubmit:(values,action)=>{
    console.log("form submit",values)
    setSubmitName(values.name)
    console.log('values',values)
    console.log('action',action)
    onOpenSubmit()
    formik.values.email=''
    formik.values.name=''
 


  }
 })
//
  const[cartItems,setCartItems]=useState([])
  // add to cart
  const onHandleAddToCard=(boximg)=>{
console.log(boximg.id)
const ProductExist=cartItems.find((item)=>item.id===boximg.id)
if(ProductExist){
  setCartItems(
    cartItems.map((item)=>
    item.id===boximg.id?
    {...ProductExist, quantity: ProductExist.quantity + 1}
    :item
    )
  )
}else{
  setCartItems([...cartItems,{...boximg,quantity:1}])
}
  }
//delet from cart
const handleREmoveProducts=(product)=>{
  const ProductExist=cartItems.find((item)=>item.id===product.id)
  if(ProductExist.quantity===1){
    setCartItems(cartItems.filter((item)=>item.id !==product.id))
  }else{

    setCartItems(
      cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
    )
  }
 }

  //
  // add to card
  const handleAddProducts=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id)
    
  
      setCartItems(
        cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity+1}:item)
      )
    }
   
  
  //

  const onOpenSubmit=(e)=>{
    // setNameUserSubmit(formik.values.name)
    // console.log('nameUserSubmit',nameUserSubmit)
 
    setCloseSubmit(true)

  

     }
  const onCloseSubmit=(e)=>{
 
      setCloseSubmit(false)
      console.log('closeSubmit',closeSubmit)
      
       }


  return (
   <Fragment>

    <div className='h-screen '>
    <NavbarMenu handleAddProducts={handleAddProducts} handleREmoveProducts={handleREmoveProducts} cartItems={cartItems} onHandleAddToCard={onHandleAddToCard}/>
    {closeSubmit&&<FormSubmit submitName={submitName} onCloseSubmit={onCloseSubmit}  />}
    <div className='scroll-smooth scrollbar-hide snap-y snap-mandatory  overflow-y-scroll relative top-[72px] h-[calc(100vh-72px)] w-full '>
      <Home/>
      <Category/>
      <BunchOfFlowers productItems={productItems} onHandleAddToCard={onHandleAddToCard}/>
      <AbautAs formik={formik} onOpenSubmit={onOpenSubmit} setCloseSubmit={setCloseSubmit}/>
    </div>
    </div>
   </Fragment>
  )
}
