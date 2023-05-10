import React,{useContext} from "react";
import ProductContext from "../store/ProductContext";

function ShirtItem(){

    const ctx=useContext(ProductContext)

    function add_function(shirt,id){
        ctx.AddItem(shirt,id)
        ctx.removeItem(shirt,id)
    }

    const shirts=ctx.shirts.map((shirt)=>
    <div>
    <span>
        {shirt.name} {shirt.price} {shirt.description}
        <button id="large" onClick={()=>{add_function(shirt,"large")}}>buy Large({shirt.Total_large})</button>
        <button id="medium" onClick={()=>{add_function(shirt,"medium")}}>buy Medium({shirt.Total_medium})</button>
        <button id="small" onClick={()=>{add_function(shirt,"small")}}>buy Small({shirt.Total_small})</button>
        </span>
    </div>
    )

    return(
        <div>
        {shirts}
        </div>
    )
}

export default ShirtItem