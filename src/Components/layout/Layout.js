import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routes from "../../Routes/Routers";
import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux";


const Layout=()=>{
    
    const showCart = useSelector((state) => state.cartUi.cartIsVisible)
    return(
        <>
        
        <Header/>
{
    showCart && <Carts/>
}
        
        <div>
            <Routes/>
        </div>
     <Footer/>
        </>
    );
}
export default Layout