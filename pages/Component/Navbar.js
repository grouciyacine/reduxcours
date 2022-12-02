//import {CardIcon} from './icons'
import { useSelector } from 'react-redux'
import React from 'react'
import { CartIcon } from './icons';


export const Navbar = () => {
  const {amount}=useSelector((store)=>store.cart);

  return (
    <nav>
        <div className=''>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
           
           <p>{amount}</p>
          </div>
        </div>
    </nav>
  )
}
