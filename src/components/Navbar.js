import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


export default function Navbar(props) {
const[theme,setTheme]=useState(props.colortheme);
function onChangeHandler(e){
    setTheme(e.target.value)
}
    
  return (
    <>
    <NavbarBootstrap bg={theme} data-bs-theme={theme}>
        <Container>
          <NavbarBootstrap.Brand href="#home">Text Utils</NavbarBootstrap.Brand>
          <Nav className="me-auto">
             <Nav.Link href="#home">About</Nav.Link>
          </Nav>

  <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="primary" onChange={onChangeHandler}/>
  <label className={`form-check-label ${theme==='dark'?'text-white':'text-dark'}`}> blue </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="dark"  onChange={onChangeHandler}/>
  <label className={`form-check-label ${theme==='dark'?'text-white':'text-dark'}`}  > dark </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="light"  onChange={onChangeHandler}/>
  <label className={`form-check-label ${theme==='dark'?'text-white':'text-dark'}`}> light </label>
</div>


        </Container>
      </NavbarBootstrap>
     
    </>
  )
}
