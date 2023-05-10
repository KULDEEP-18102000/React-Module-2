import React,{useState,useContext} from "react";
import ProductContext from "../store/ProductContext";

function ProductForm() {

    const ctx=useContext(ProductContext)
    
    const [inputVal,setInputVal]=useState({name:"",description:"",price:0,Total_large:0,Total_medium:0,Total_small:0})

    // const submitFunction=(inputVal.id,inputVal.price,inputVal.name,inputVal.category)=>{
    //     ctx.submitProduct()
    // }

    const setData=(event)=>{
        console.log(event.target.value,event.target.name)
        setInputVal({...inputVal,[event.target.name]:event.target.value})
    }

   const submitFunction=(e)=>{
    e.preventDefault()
    console.log("submit function")
    // console.log(inputVal.category)
    ctx.submitProduct(inputVal.name,inputVal.description,inputVal.price,inputVal.Total_large,inputVal.Total_medium,inputVal.Total_small)
   }


  return (
    <form onSubmit={submitFunction}>
      <label htmlFor="t-shirt-name">Tshirt Name</label>
      <input name="name" value={inputVal.name} onChange={setData} type="text" id="t-shirt-name" />
      <label htmlFor="description">Description</label>
      <input name="description" value={inputVal.description} onChange={setData} type="text" id="description" />
      <label htmlFor="price">Price</label>
      <input name="price" value={inputVal.price} onChange={setData} type="number" id="price" />
      <label htmlFor="large">L</label>
      <input name="Total_large" value={inputVal.Total_large} onChange={setData} type="number" id="large" />
      <label htmlFor="medium">M</label>
      <input name="Total_medium" value={inputVal.Total_medium} onChange={setData} type="number" id="medium" />
      <label htmlFor="small">S</label>
      <input name="Total_small" value={inputVal.Total_small} onChange={setData} type="number" id="small" />
      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;