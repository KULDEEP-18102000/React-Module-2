import { useContext } from "react"
import storeContext from "../store/store-context"
import Cart from '../assets/cart.png'

const NavBar=(props)=>{

    const ctx=useContext(storeContext)

    const showCart=()=>{
        console.log("opened")
        props.openCartItems()
        // console.log("opened")
      }

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <button onClick={showCart}>
    <img style={{width:'12px',height:'12px',marginRight:'2px'}} src={Cart}></img>
    <span>{ctx.cartState.items?.length}</span>
  </button>
    
    
    
  </div>
</nav>
        </div>
    )
}

export default NavBar