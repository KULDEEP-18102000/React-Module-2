import logo from './logo.svg';
import './App.css';
import ShopForm from './components/ShopForm';
import ShopStore from './components/ShopStore';
import NavBar from './components/NavBar';
import CartComponent from './components/CartComponent';
// import { useState } from 'react';
import { useState } from 'react';

function App() {

  const [showCart,setShowCart]=useState(false)

  const showCartItems=()=>{
    setShowCart(true)
    // console.log(showCart)
  }

  return (
    <div>
      <CartComponent show={showCart} onHide={() => setShowCart(false)}></CartComponent>
      <NavBar openCartItems={showCartItems}/>
      <ShopForm/>
      <ShopStore/>
    </div>
  );
}

export default App;
