import React, { useState } from 'react';
// import ProductForm from './components/ProductForm';
import ProductForm from './components/T-shirtForm';
import ShirtItem from './components/ShirtsItem';
import Cart from './components/Cart';


function App() {

    return(
        <div>
            <Cart/>
            <ProductForm/>
            <ShirtItem/>
        </div>
    )
}

export default App;

