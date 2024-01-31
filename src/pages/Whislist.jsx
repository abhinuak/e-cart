import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../redux/slices/whislistSlice'
import { addToCart } from '../redux/slices/cartSlice'





function Whislist() {
  const whislistArray=useSelector((state)=>state.whishlistReducer)
  const disp=useDispatch()

  const handleTocart = (products)=>{
    disp(addToCart(products))
    disp(removeFromWhishlist(products.id))
  }
  return (
<Row style={{margin:"10px", marginTop:"200px"}} >
      {
        whislistArray.length>0?
        whislistArray.map((products,index)=>(
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
              <Button  className="btn btn-secondary"><i onClick={()=>disp(removeFromWhishlist(products.id))} style={{color:"red"}} className="fa-solid fa-trash-can"></i></Button>
              <Button className="btn btn-secondary"><i onClick={()=>handleTocart(products)} style={{color:"yellow"}} className="fa-solid fa-cart-shopping "></i></Button>
              </div>
      
            </Card.Body>
          </Card>
          </Col>
        )): 
        <div style={{height: "300px",}}className='d-flex justify-content-center flex-column align-items-center'>
          <img className='mt-0' src="https://cdn.dribbble.com/users/2097172/screenshots/12189388/media/5181e8b8d02180a3288d6adc89ebf1b2.gif" alt="r" height={'200px'} width={"300px"} />
        <p>nothing in whislist</p>
        <Link to={"/"} className='btn btn-outline-info '>Back to home</Link>
        </div>
       

      }
    </Row>
  )
}

export default Whislist