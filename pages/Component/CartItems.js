import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItems,increase,decrease } from '../../redux/Card'
const CartItems = ({id,img,title,price,amount}) => {
  const dispatch=useDispatch()
  return (
    <>
    <article>
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <h3>${price}</h3>
      <h4>{amount}</h4>
      <button onClick={()=>{dispatch(removeItems(id))}}>Remove</button>
      <br/>
      <button onClick={()=>{dispatch(increase({id}))}}>+</button>
      <p>{amount}</p>
      <button onClick={()=>{if(amount===1){
        dispatch(removeItems(id))
        return
      } dispatch(decrease({id}))}}>-</button>
      <hr/>
    </article>
    </>
  )
}

export default CartItems