import { useState, useRef,useContext } from 'react';
import storeContext from '../store/store-context';

const ShopForm=()=>{

    const [product,setProduct]=useState({
        name:"",
        description:"",
        price:0,
        large:0,
        medium:0,
        small:0
    })

    const ctx=useContext(storeContext)

    const onChangeHandler=(e)=>{
        e.preventDefault()
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const addProduct=async(e)=>{
        e.preventDefault()
        console.log("add product",product)
        ctx.addStoreItem(product)
        // console.log(res)
        setProduct({
            name:"",
        description:"",
        price:0,
        large:0,
        medium:0,
        small:0
    })
      }
    

    return(
        <>
        <div className="container m-3">
        <form onSubmit={addProduct}>
        <div class="mb-3">
    <label for="exampleInputName1" class="form-label">TShirt Name</label>
    <input type="text" class="form-control" id="exampleInputName1" name="name" value={product.name} onChange={onChangeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputDescription1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputDescription1" name="description" aria-describedby="emailHelp" value={product.description} onChange={onChangeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPrice1" class="form-label">Price</label>
    <input type="number" class="form-control" id="exampleInputPrice1" name="price" onChange={onChangeHandler} value={product.price}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputLarge1" class="form-label">L</label>
    <input type="number" class="form-control" id="exampleInputLarge1" name="large" onChange={onChangeHandler} value={product.large}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputMedium1" class="form-label">M</label>
    <input type="number" class="form-control" id="exampleInputMedium1" name="medium" onChange={onChangeHandler} value={product.medium}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputSmall1" class="form-label">S</label>
    <input type="number" class="form-control" id="exampleInputSmall1" name="small" onChange={onChangeHandler} value={product.small}/>
  </div>
  <button type="submit" class="btn btn-primary">Add Product</button>
</form>
</div>
        </>
    )
}

export default ShopForm