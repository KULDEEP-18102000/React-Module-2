// import React,{useState,useContext} from "react";
import { useState,useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import CartContext from "../store/cart-context";
import storeContext from "../store/store-context";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function CartComponent(props){

    console.log(props)
    

        const ctx=useContext(storeContext)
        console.log(ctx)

        

        

        const removeFromCart=(item)=>{
            // console.log("remove")
            // let new_elements=cartItems.filter((element)=>{
            //     return element.title!=item.title
            // })
            // console.log(new_elements)
            // setCartItems(new_elements)
            // ctx.removeItem(item)
        }

        const handleClose=()=>{
            // props.onHide()
            ctx.hideCart()
        }

        
    return(
<div>
        

        {/* <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart Items
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <table className="table">
        <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
  {ctx.cartState.items?.map((item)=>
          <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>1</td>
            <td><button onClick={()=>removeFromCart(item)}>Remove</button></td>
          </tr>
          )}
  </tbody>
          
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal> */}

<Modal
  open={props.show}
  onClose={props.onHide}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <table className="table">
        <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Large</th>
      <th scope="col">Medium</th>
      <th scope="col">Small</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
    {/* {console.log(cartItems)} */}
  {ctx.cartState.items?.map((item)=>
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.large}</td>
            <td>{item.medium}</td>
            <td>{item.small}</td>
            <td>{item.totalPrice}</td>
          </tr>
          )}
  </tbody>

  <div>Total Price {ctx.cartState.totalAmount}</div>
          
        </table>


  </Box>
</Modal>

{/* <Modal show={ctx.showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    
    </div>
    )
}

export default CartComponent