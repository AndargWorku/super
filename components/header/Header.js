import React,{useRef,useEffect} from 'react'
import{Container,Row} from "reactstrap"
import {FiHeart} from "react-icons/fi"
import {FiMenu} from "react-icons/fi"
import {BsBag} from "react-icons/bs"
import './Header.css'
import {NavLink,useNavigate} from "react-router-dom"
import logos from "../../assets/images/logos.png"
import user_icon from "../../assets/images/user_icon.png"
import {motion} from "framer-motion"
import {useSelector} from "react-redux"
import useAuth from '../../custom-hooks/useAuth'
import {Link} from "react-router-dom"
import {signOut} from "firebase/auth"
import {toast} from "react-toastify"

import {auth} from "../../firebase.config"


const nav_link=[
    {
        path:"Home",
        display:"Home"
    },
    {
        path:"Shop",
        display:"Shop"
    },
    {
        path:"Cart",
        display:"cCart"
    },
]
const Header = () => {
  const headerRef=useRef(null);
  const navigate=useNavigate()
  const {currentUser}=useAuth()
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const menuRef=useRef(null);
  const profileActionRef=useRef(null)
  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80|| document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')

      }
    });
  };
const logout=()=>{
  signOut(auth).then(()=>{
    toast.success('Logged out')
    navigate('/home')
  }).catch(err=>{
    toast.error(err.message)
  })
}

  useEffect(()=>{
    stickyHeaderFunc();
    return ()=>window.removeEventListener('scroll',stickyHeaderFunc);

  });
  const menuToggle=()=>menuRef.current.classList.toggle('active_menu')

  const navigateToCart=()=>{
    navigate('/cart');

  }
 const toggleProfileActions=()=>profileActionRef.current.classList.toggle("show_profileActions")
  // const toggleProfileActions=()=>profileActionRef.current.classList.toggle('show_profileActions')
  return (
    <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper">
                 <div className="logo">
                    <img src={logos} alt='logo'/>
                 <div>
                 <h1>FURNITURE</h1>
                 <p>Since 2023</p>
                  </div>  
                  </div>
                  <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <ul className="menu">
                       {
                        nav_link.map((item, index)=>(
                            <li className="nav_item" key={index}>
                                <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav_active':''}>{item.display}</NavLink>
                            </li>
                        ))
                       }

                    </ul>

                  </div>
                  <div className="nav_icons">
                    <span className="fav_icon"><i>{<FiHeart/>}</i>
                    <span className="badge">2</span>
                    </span>
                    <span className="cart_icon" onClick={navigateToCart}><i>{<BsBag/>}</i>
                    <span className="badge">{totalQuantity}</span>
                    </span>
                    <div className='profile'>
                      < motion.img whileTap={{scale:1.2}}
                      src={ currentUser ? currentUser.photoURL: user_icon} 
                      alt=""
                       onClick={toggleProfileActions}
                    />
                    <div className='profile_actions' 
                    ref={profileActionRef}
                    onClick={toggleProfileActions}>
                      {
                        currentUser ? (<span onClick={logout}>Logout</span>):(
                        <div className='d-flex align-items-center 
                        justify-content-center flex-column'>
                          <Link to='/signup'>SignUp</Link>
                          <Link to='/login'>Login</Link>
                          <Link to='/dashboard'>Dashboard</Link>
                        </div>)
                      }
                    </div>
                    </div>
                    <div className="mobile_menu" onClick={menuToggle}>
                    <span><i>{<FiMenu/>}</i></span>
                  </div>

                  </div>
                  
                  </div>
            </Row>
        </Container>
      
    </header>
  )
}

export default Header
