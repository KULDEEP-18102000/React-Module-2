import { useContext } from "react"
import storeContext from "../store/store-context"

const ShopStore=()=>{

    const ctx=useContext(storeContext)
    console.log(ctx)

    const buyLarge=(product)=>{
        console.log(product)
        ctx.addStoreItemToCart(product,'large')
    }

    const buyMedium=(product)=>{
        ctx.addStoreItemToCart(product,'medium')
    }

    const buySmall=(product)=>{
        ctx.addStoreItemToCart(product,'small')
    }

    return(
        <div>
            <table className="table">
        <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">L</th>
      <th scope="col">M</th>
      <th scope="col">S</th>
    </tr>
  </thead>
  <tbody>
    {console.log(ctx.storeItems)}
  {ctx.storeItems?.map((item)=>
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><button onClick={()=>buyLarge({name:item.name,description:item.description,price:item.price,large:1,medium:0,small:0})}> Buy Large ({item.large})</button></td>
            <td><button onClick={()=>buyMedium({name:item.name,description:item.description,price:item.price,large:0,medium:1,small:0})}>Buy Medium ({item.medium})</button></td>
            <td><button onClick={()=>buySmall({name:item.name,description:item.description,price:item.price,large:0,medium:0,small:1})}>Buy Small ({item.small})</button></td>
          </tr>
          )}
  </tbody>
          
        </table>
            
        </div>
    )
}

export default ShopStore