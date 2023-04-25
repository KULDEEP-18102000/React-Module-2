import React,{useContext} from "react";
import ProductContext from "../store/ProductContext";

function ElectronicItem(){

    const ctx=useContext(ProductContext)

    const deleteFunction=(event)=>{
        ctx.deleteItem(event.target.id)
    }

    const electronics=ctx.electronics.map((electronic)=>
    <div>
    <span>{electronic.name} {electronic.price} {electronic.category}</span>
    <button id={electronic.id} onClick={deleteFunction}>Delete</button>
    </div>
    )
    console.log(electronics)

    return(
        <div>
        {electronics}
        </div>
    )
}

export default ElectronicItem