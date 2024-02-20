import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TxtUtils(props) {
function upperCaseHandler(){
    let newTxt=txt.toUpperCase()
    setTxt(newTxt);
   // alert("upper Case clicked!!!")
}

function onChangeHandler(e){
    setTxt(e.target.value)
}
const [txt,setTxt]=useState(props.sampelTxt)
  return (
    <>
     <Form>      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">        
        <Form.Control  as="textarea" rows={3} placeholder={txt}  value={txt} onChange={onChangeHandler} />
      </Form.Group>
      <Button className='my-3' variant="outline-secondary" id="button-addon1" onClick={upperCaseHandler}  >{props.buttonName}</Button>
    </Form>
    <div>
        <p>{txt}</p>
    </div>

    </>
  )
}
