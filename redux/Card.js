import {  createSlice } from "@reduxjs/toolkit";
import cartItems from "../pages/Component/data"; 
//our card will have initalstate attribute the had declared in initalstate
const initialState={
    cartItems : cartItems,
    amount:4,
    total:0,
    isLoading:true,
    
};
//in creactSlice we wile create a slice for our card with a name and attribute
const Card=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
       //state.cartItems=[];
return {cartItems:[]};
        },
        removeItems:(state,action)=>{
        
         const itemId=action.payload;
          state.cartItems=state.cartItems.filter((item)=>
          item.id !==itemId
          );
        },
        increase:(state,{payload})=>{
            const cartItem=state.cartItems.find((item)=>
            item.id===payload.id);
            cartItem.amount=cartItem.amount+1;

        },
        decrease:(state,{payload})=>{
            const cartItem=state.cartItems.find((item)=>
            item.id===payload.id)
            cartItem.amount=cartItem.amount-1;
        },
        calculate:(state)=>{
            let amount=0;
            let total=0;
            state.cartItems.forEach((item)=>{
                amount+=item.amount;
                total+=item.amount*item.price;
            });
            state.amount=amount;
            state.total=total;
        }
    },
});
//console.log(Card)
export const {clearCart,removeItems,increase,decrease,calculate}=Card.actions;
export default Card.reducer;