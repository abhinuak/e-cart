import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../redux/useFetch'
import { useDispatch } from 'react-redux';
import { addToWhislist } from '../redux/slices/whislistSlice';
import { addToCart } from '../redux/slices/cartSlice';



function Home() {

const data=useFetch("https://dummyjson.com/products")
// console.log(data);

const disp=useDispatch()
  return (
    <>
    <Row style={{margin:"10px", marginTop:"100px"}} >


    {
      data?.length>0.?data?.map((products,index)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card key={index}  style={{ width: '16rem', height:'27rem',borderRadius:"15px", border:"solid black" }}>
          <Card.Img  style={{height:"180px", border:"solid black", borderRadius:"15px"}} src={products.thumbnail} />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>
             {products.description.slice(0,55)}...
            </Card.Text>
            <p>Prize :{products.price} $</p>
            <div className='d-flex justify-content-between mt-4'>
            <Button onClick={()=>disp(addToWhislist(products))} className="btn btn-secondary"><i style={{color:"red"}} className="fa-solid fa-heart"></i></Button>
            <Button onClick={()=>disp(addToCart(products))} className="btn btn-secondary"><i style={{color:"yellow"}} className="fa-solid fa-cart-shopping "></i></Button>
            </div>
    
          </Card.Body>
        </Card>
        </Col>
      )):<p>Loading...</p>
  }
    </Row>
      
    </>
  )
}

export default Home