import React from 'react'
import {Container,Row,Col} from "reactstrap"
import '../styles/dashboard.css'
import useGetData from "../custom-hooks/useGetData"
const Dashboard = () => {
    const{data:products}=useGetData('products')
    const{data:users}=useGetData('users')
  return (
    <>
      <section>
        <Container>
            <Row>
                <Col className='lg-3'>
                    <div className='revenue_box'>
                        <h5>Totals seals</h5>
                        <span>$567</span>
                    </div>
                </Col>
                <Col className='lg-3'>
                <div className='order_box'>
                        <h5>Orders</h5>
                        <span>56</span>
                    </div>
                </Col>
                <Col className='lg-3'>
                <div className='products_box'>
                        <h5>Totals Products</h5>
                        <span>{products.length}</span>
                    </div>
                </Col>
                <Col className='lg-3'>
                <div className='users_box'>
                        <h5>Totals users</h5>
                        <span>{users.length}</span>
                    </div> 
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard
