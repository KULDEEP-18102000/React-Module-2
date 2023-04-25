import React,{useState,useContext} from "react";
import ProductContext from "../store/ProductContext";

function ProductForm() {

    const ctx=useContext(ProductContext)
    
    const [inputVal,setInputVal]=useState({id:null,price:null,name:null,category:"electronic"})

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
    console.log(inputVal.category)
    ctx.submitProduct(inputVal.id,inputVal.price,inputVal.name,inputVal.category)
   }


  return (
    <form onSubmit={submitFunction}>
      <label htmlFor="product-id">Product Id</label>
      <input name="id" value={inputVal.id} onChange={setData} type="number" id="product-id" />
      <label htmlFor="selling-price">Selling Price</label>
      <input name="price" value={inputVal.price} onChange={setData} type="number" id="selling-price" />
      <label htmlFor="product-name">Product Name</label>
      <input name="name" value={inputVal.name} onChange={setData} type="text" id="product-name" />
      <label htmlFor="category">Category</label>
      <select name="category" value={inputVal.category} onChange={setData} id="category">
        <option value="electronic">Electronic</option>
        <option value="food">Food</option>
        <option value="skin">Skin Care</option>
      </select>
      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;
