import React from "react";

const storeContext=React.createContext({
    storeItems:[],
    cartItems:[],
    addStoreItem:()=>{},
    addStoreItemToCart:()=>{},
    removeItem:()=>{}
})

export default storeContext