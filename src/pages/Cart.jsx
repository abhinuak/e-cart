import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {

  const cartArray=useSelector((state)=>state.cartReducer)
  const disp=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  const getCartTotal= ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const handleCart=()=>{
    disp(emptyCart())
    alert("Order Succesfully Added , Thank You")
    navigate("/")
  }

  return (
   
      
        <Row className='container'>
       <Col lg={8}>
       <Table border={2} style={{marginTop:"200px",marginLeft:"20px",marginBottom:"30px"}} striped bordered hover variant="dark">
         <tr>
           <th>#</th>
           <th>Product</th>
           <th>Image</th>
           <th>Price</th>
           <th>Remove</th>
         </tr>
         {
        cartArray.length>0?
        cartArray.map((products,index)=>(
          
         
            <tr>
              <td>{index}</td>
              <td>{products.title}</td>
              <td><img className='img-fluid' src={products.thumbnail} alt="" height={"90px"} width={"90px"} /></td>
              <td>{products.price}$</td>
              <td><button onClick={()=>disp(removeCart(products.id))} className='btn btn-info text-light'>Remove</button></td>
            </tr>
            
       
         
        )): 
        <p>nothing in cart</p>
       

      }
       </Table>
       </Col>
       <Col lg={1}></Col>
       <Col lg={3}>
       <div className='container' style={{backgroundColor:"beige"}}>
       <h1 style={{marginTop:"200px"}} className='text-center fst-italic text-info fw-bold'>Cart Summary</h1>
        <h5 className='text-center fw-lighter text-dark'>Total Product : <b className='text-dark fw-bold'>{cartArray.length} </b> </h5>
        <h5 className='text-center fw-lighter text-dark'>Total Price :<b className='text-danger fw-bold'> {total}$</b></h5>
        <button onClick={()=>handleCart()} className='btn btn-success 'style={{marginLeft:"70px",marginBottom:"20px"}}>Check Out</button>
    
       </div>
       </Col>
       </Row>
       
      

      
     
      
  )
}

export default Cart