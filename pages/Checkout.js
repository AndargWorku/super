

import React from 'react'
import {Container,Row,Form,FormGroup,Col} from "reactstrap"
import Helmte from "../components/Helmte/Helmte";
import CommonSection from "../components/UI/CommonSection"
import '../styles/Checkout.css'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Checkout = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
const totalAmount=useSelector(state=>state.cart.totalAmount)
  return <Helmte title='Checkout'>
      <CommonSection  title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold '>Billing information</h6>
              <Form className='billing_form'>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Enter your name'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email' placeholder='Enter your email'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder='Phone number'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='street addresses'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='City'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='postal code'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Country'/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout_cart'>
                <h6>Total Qty:<span>{totalQty}</span></h6>
                <h6>Subtotal:<span>${totalAmount}</span></h6>
                <h6><span>Shipping:<br/> free shipping</span><span>$0</span></h6>
                
                <h4>Total Cost:<span>${totalAmount}</span></h4>
                <button className='buy_btn auth_btn w-100 bg-white text-black'>
                  <Link to='/login'>place an order</Link></button>
                
              </div>
              
              
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmte>
  
}

export default Checkout
