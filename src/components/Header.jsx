import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const whislist=useSelector((state)=>state.whishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  return (
    <div>
        
        <Navbar style={{zIndex:"1"}} expand="lg" className="bg-secondary position-fixed top-0 w-100">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          
          </Navbar.Brand>
        <Navbar.Brand> <Link to={'/'}  style={{color:"white",fontWeight:"bolder",textDecoration:"none"}}>E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link   ><Link to={"/whislist"} style={{color:"red",textDecoration:"none"}}>  <i className="fa-solid fa-heart me-1"></i>Whislist <Badge className='bg-danger ' style={{borderRadius:"20px"}}>{whislist.length}</Badge></Link></Nav.Link>
            <Nav.Link  ><Link to={"/cart"}  style={{color:"yellow",textDecoration:"none"}}><i class="fa-solid fa-cart-shopping me-1"></i>Cart<Badge className='bg-warning ms-2'  style={{borderRadius:"20px"}}>{cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header