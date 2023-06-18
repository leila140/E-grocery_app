import React ,{useRef,useEffect} from "react"
import Egrocery from "../../assets/images/Egrocery.png"
import {Container} from 'reactstrap'
import { useSelector ,useDispatch} from "react-redux"
import {cartUiActions} from '../../Store/shopping-cart/cartUiSlice'
import { NavLink,Link } from "react-router-dom"
import  "../../style/Header.css"

const nav__links = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Products",
      path: "/Products",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
export default function Header(){
  const menuRef =useRef(null)
  const headerRef=useRef(null)
  const totalQuantity=useSelector(state=> state.cart.totalQuantity)
  const dispatch= useDispatch()
  const toggleMenu=()=>menuRef.current.classList.toggle('show__menu')

 const toggleCart=()=>{
  dispatch(cartUiActions.toggle())
 }

   useEffect(()=>{
    window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
       headerRef.current.classList.add('header__shrink')
    }
    else{
      headerRef.current.classList.remove('header__shrink')
    }
  })
  return()=>window.removeEventListener('scroll')
   },[])
    return(
       <header className="header" ref={headerRef}>
        <Container>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={Egrocery} alt='logo'/>
                </div>
                {/*======= menu=======*/}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-4">
                        {nav__links.map((items,index)=>(<NavLink  to={items.path} key={index}  style={{textDecoration:'none'}}
                        className={navClass=>navClass.isActive?'active__menu':''}>{items.display}</NavLink>))}
                    </div>
                </div>
                {/*=========nav right icons======*/}
                <div className="nav__right d-flex align-items-center gap-3">
                    <span className="cart__icon" onClick={toggleCart}>
                    <i class="ri-shopping-basket-line"></i>
                    <span className="cart__badge">{totalQuantity}</span>
                    </span>
                    <span className="user">
                      <Link to="/Login" style={{textDecoration:'none'}}><i class="ri-user-line" ></i></Link>
                    </span>
                    <span className="mobile__menu" onClick={toggleMenu}>
                    <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </Container>

       </header>
    )
}