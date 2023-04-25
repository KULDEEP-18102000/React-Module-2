import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ElectronicItem from './components/ElectronicItems';
import FoodItem from './components/FoodItem';
import SkinItem from './components/SkinItems';

function App() {

    return(
        <div>
            <ProductForm/>
            <h1>Products</h1>
            <h2>Electronic Items</h2>
            <ElectronicItem/>
            <h2>Food Items</h2>
            <FoodItem/>
            <h2>Skincare Items</h2>
            <SkinItem/>
        </div>
    )
}

export default App;
