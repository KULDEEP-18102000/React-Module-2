import React, { useContext, useState } from "react";

const ProductContext = React.createContext({
    electronics:[],
    foods:[],
    skinItems:[],
    submitProduct:(id, price, name, category)=>{},
    deleteItem:(id)=>{}
});

export const ProductContextProvider = (props) => {
  const [electronics, setElectronics] = useState([]);
  const [foods, setFoods] = useState([]);
  const [skinItems, setSkinItems] = useState([]);

  const submitProduct = (id, price, name, category) => {
    console.log("context submit function")
    if (category === "electronic") {
      setElectronics((data) => {
        return [
          ...data,
          { id: id, price, price, name: name, category: category },
        ];
      });
      const obj={
        "price":price,"name":name,"category":category
      }
      localStorage.setItem(id,JSON.stringify(obj))
    } else if (category === "food") {
      setFoods((data) => {
        return [
          ...data,
          { id: id, price, price, name: name, category: category },
        ];
      });
      const obj={
        "price":price,"name":name,"category":category
      }
      localStorage.setItem(id,JSON.stringify(obj))
    } else {
      setSkinItems((data) => {
        return [
          ...data,
          { id: id, price, price, name: name, category: category },
        ];
      });
      const obj={
        "price":price,"name":name,"category":category
      }
      localStorage.setItem(id,JSON.stringify(obj))
    }
  };

  const deleteItem=(id)=>{
    const new_foods=foods.filter((food)=>{
        return food.id!=id
    })
    setFoods(new_foods)

    const new_electronics=electronics.filter((electronic)=>{
        return electronic.id!=id
    })
    setElectronics(new_electronics)

    const new_skin_items=skinItems.filter((skinItem)=>{
        return skinItem.id!=id
    })
    setSkinItems(new_skin_items)

    localStorage.removeItem(id)
  }

  return (
    <ProductContext.Provider value={{ electronics: electronics, foods: foods, skinItems:skinItems,submitProduct:submitProduct,deleteItem:deleteItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext