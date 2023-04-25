import React,{useContext} from "react";
import ProductContext from "../store/ProductContext";

function SkinItem(){

    const ctx=useContext(ProductContext)

    const deleteFunction=(event)=>{
        ctx.deleteItem(event.target.id)
    }

    const skinItems=ctx.skinItems.map((skinItem)=>
    <span>
    <span>{skinItem.name} {skinItem.price} {skinItem.category}</span>
    <button id={skinItem.id} onClick={deleteFunction}>Delete</button>
    </span>
    )

    return(
        <div>
        {skinItems}
        </div>
    )
}

export default SkinItem