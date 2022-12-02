import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/Card'
const CartContainer = () => {
const dispatch=useDispatch()
    const {cartItems,total,amount}=useSelector((store)=>store.cart)
  if(amount<1){
    return <section>
        <header>

            <h2>Your Bag</h2>
            <h4>is currntly Emptty</h4>
        </header>
    </section>
  }
    return (
      <section>
        <div><header>
        <h1>your bag</h1>
      </header></div> 
      <div>
        {cartItems.map((item)=>{
           return(
            <CartItems key={item.id} {...item}/>
           )
        })}
      </div>
      <footer>
        <h4>total <span>${total.toFixed(2)}</span></h4>
        <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </footer>
      </section>
      
   
  )
}

export default CartContainer