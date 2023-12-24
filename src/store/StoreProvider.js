import storeContext from "./store-context";
import { useReducer,useState,useEffect } from "react";
import axios from "axios";

const defaultCartState={
    items:[],
    totalAmount:0
}

const CartReducer=(state,action)=>{

    if(action.type=='add'){
        console.log("entered into fn")
        console.log(state)
        console.log(action)
        
        // const updatedItems=state.items.concat(action.item)
        // console.log(updatedItems)
        // const updatedTotalAmount=state.totalAmount+action.item.price
        // console.log(updatedTotalAmount)

        const updatedItems=[]
        let flag=false
        for (let index = 0; index < state.items.length; index++) {
            const element = state.items[index];
            console.log(element)
            if(element.name==action.item.name){
                flag=true
                if(action.item.large==1){
                    element.large=element.large+1
                }else if(action.item.medium==1){
                    element.medium=element.medium+1
                }else{
                    element.small=element.small+1
                }
            }
            updatedItems.push(element)
        }

        console.log(updatedItems)

        if(flag==false){
            updatedItems.push(action.item)
        }

        for (let index = 0; index < updatedItems.length; index++) {
            const element = updatedItems[index];
            const totalPrice=parseInt(element.price)*parseInt(element.large)+parseInt(element.price)*parseInt(element.medium)+parseInt(element.price)*parseInt(element.small)
            console.log(totalPrice)
            updatedItems[index].totalPrice=totalPrice
            
        }

        const updatedTotalAmount=parseInt(state.totalAmount)+parseInt(action.item.price)
        console.log(updatedTotalAmount)

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if(action.type=='remove'){
        const updatedItems=state.items.filter((element)=>{
            return element.title!=action.item.title
        })
        // state={...state,items:updatedItems}
        let updatedTotalAmount=state.totalAmount-action.item.price
        if(updatedTotalAmount<0){
            updatedTotalAmount=0
        }
        // state.totalAmount=state.totalAmount-action.item.price
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    
    return defaultCartState
}

const StoreProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(CartReducer,defaultCartState)

    const [storeItems,setStoreItems]=useState([])
    
    useEffect(()=>{
        const fetch=async()=>{
            const response=await axios.get(`https://crudcrud.com/api/97c2c2749ebb4dd698f723951294a91d/store`)
            console.log(response)
            setStoreItems(response.data)

            const cartResponse=await axios.get(`https://crudcrud.com/api/97c2c2749ebb4dd698f723951294a91d/cart`)
            console.log(cartResponse)
            for (let index = 0; index < cartResponse.data.length; index++) {
                const element = cartResponse.data[index];
                dispatchCartAction({type:'add',item:element})
            }
          }
          fetch()
    },[])

    const addStoreItem=async(product)=>{
        console.log(product)
        setStoreItems([...storeItems,product])
        const response=await axios.post(`https://crudcrud.com/api/97c2c2749ebb4dd698f723951294a91d/store`,product)
       console.log(response)
        console.log(storeItems)
    }

    const addStoreItemToCart=async(product,size)=>{
        console.log(product)
        console.log(size)
        const updatedStoreItems=[]
        for (let index = 0; index < storeItems.length; index++) {
            const item = storeItems[index];
            if(item.name==product.name){
                if(size=='large'){
                    if(item.large=='0'){
                        item.large=0
                    }else{
                        item.large=parseInt(item.large)-1
                    }
                    
                }
                else if(size=='medium'){
                    if(item.medium=='0'){
                        item.medium=0
                    }else{
                        item.medium=parseInt(item.medium)-1
                    }
                    
                }
                else{
                    if(item.small=='0'){
                        item.small=0
                    }else{
                        item.small=parseInt(item.small)-1
                    }
                }
            }
            updatedStoreItems.push(item)
        }
        

        console.log(updatedStoreItems)

        setStoreItems(updatedStoreItems)

        const response=await axios.post(`https://crudcrud.com/api/97c2c2749ebb4dd698f723951294a91d/cart`,product)
       console.log(response)

        dispatchCartAction({type:'add',item:product})
    }

    return(
        <storeContext.Provider value={{cartState,storeItems,addStoreItem,addStoreItemToCart}}>
            {props.children}
        </storeContext.Provider>
    )
}

export default StoreProvider