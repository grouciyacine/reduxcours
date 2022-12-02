import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './Component/Navbar'
import CartItems from './Component/CartItems'
import CartContainer from './Component/CartContainer'
import { useEffect } from 'react'
import { calculate } from '../redux/Card'



export default function Home(){
const {CartItems}=useSelector((store)=>store.cart)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(calculate())
},[CartItems])
  return(
   <div>

    <Navbar/>
    <CartContainer/>
   </div>  
  )}
//1:16