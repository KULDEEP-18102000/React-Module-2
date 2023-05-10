import React, { useContext, useState } from "react";

const ProductContext = React.createContext({
    shirts:[],
    submitProduct:(name,description,price,Total_large,Total_medium,Total_small)=>{},
    removeItem:(shirt,id)=>{},
    AddItem:(shirt,id)=>{}
});

export const ProductContextProvider = (props) => {
  const [shirts, setShirts] = useState([]);
  const [cartItems,setCartItems]=useState([])

  const submitProduct = (name,description,price,Total_large,Total_medium,Total_small) => {
    console.log("context submit function")
    
    setShirts((data) => {
        return [
          ...data,
          { name:name,description:description,price:price,Total_large:Total_large,Total_medium:Total_medium,Total_small:Total_small},
        ];
      });
  };

  const removeItem=(shirt,id)=>{
    // let shirt_item;
    shirts.forEach((item)=>{
        if(item.name===shirt.name){
            if(id=="large"){
                item.Total_large=item.Total_large-1
            }
            else if(id=="medium"){
                item.Total_medium=item.Total_medium-1
            }
            else{
                item.Total_small=item.Total_small-1
            }
        }
    })
  }

  const AddItem=(shirt,id)=>{
    // let shirt_item;
    console.log(shirt)
    console.log(id)
    let flag=false
    cartItems.forEach((item)=>{
        if(item.name===shirt.name){
            flag=true
            if(id=="large"){
                item.Total_large=item.Total_large+1
            }
            else if(id=="medium"){
                item.Total_medium=item.Total_medium+1
            }
            else{
                item.Total_small=item.Total_small-1
            }
        }
        console.log(item)
    })
    if(flag==false){
        // let new_shirts=cartItems.push(shirt)
        setCartItems((data)=>{
            console.log(data)
            return [...data,shirt]
        })
        // setCartItems(new_shirts)
    }
  }

  return (
    <ProductContext.Provider value={{ shirts:shirts,submitProduct:submitProduct,cartItems:cartItems,removeItem:removeItem,AddItem:AddItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext