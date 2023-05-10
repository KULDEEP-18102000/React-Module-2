import React,{useContext} from "react";
import ProductContext from "../store/ProductContext";


function Cart(){

    const ctx=useContext(ProductContext)

    const total_items=ctx.cartItems.length

    return(
        <div>
            <button>Cart {total_items}</button>
        </div>
    )
}

export default Cart