import React,{useContext} from "react";
import ProductContext from "../store/ProductContext";

function FoodItem(){

    const ctx=useContext(ProductContext)

    const deleteFunction=(event)=>{
        ctx.deleteItem(event.target.id)
    }

    const foods=ctx.foods.map((food)=>
    <div>
    <span>{food.name} {food.price} {food.category}</span>
    <button id={food.id} onClick={deleteFunction}>Delete</button>
    </div>
    )

    return(
        <div>
        {foods}
        </div>
    )
}

export default FoodItem