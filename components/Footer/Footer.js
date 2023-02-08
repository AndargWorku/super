import logos from "../../assets/images/logos.png"
import React from 'react'
import {FaMapMarkerAlt} from "react-icons/fa"
import {BsFillTelephoneMinusFill} from 'react-icons/bs'
import {MdOutlineEmail} from "react-icons/md"
import{Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import './Footer.css';
import {Link} from 'react-router-dom'
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <img src={logos} alt='logo'/>
              <div>
                <h1 className='text-white'>Furniture</h1>
              </div>
              </div>
              <p className='footer_text mt-4'>
Image result for furniture information
 We know that we need furniture for our comfortable lives, for storage, sitting on and, for relaxation. Buying furniture without being planned, affects your decoration and overwhelming the space. 
 Choosing the right one for your home or office not only improves overall beauty but keeps your stress away as well.</p>
            
          </Col>
          <Col lg='3'md='3' className='mb-4'>
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Top categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile phones </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>modern sofa </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>aram chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>smart watch </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'md='3' className='mb-4'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>usefully Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>privacy policy </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i>{<FaMapMarkerAlt/>}</i></span>
                  <p>2345 atlas kasachs</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i>{<BsFillTelephoneMinusFill/>}</i></span>
                  <p>+251943454989</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i>{<MdOutlineEmail/>}</i></span>
                  <p>andargworku8240@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer_copyright">
              Copyright {year} developed by Andarg Worku.
               All rights reserved</p>
          </Col>


        </Row>
      </Container>
    </footer>
  )
}

export default Footer

