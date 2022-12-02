import { configureStore, createStore } from "@reduxjs/toolkit";
import Card from "./Card"
//you should create store.js and a slice.js (card.js)
export const store=configureStore({
    reducer:{
       cart:Card,
    },
})
