import React,{useState} from "react";
import '../style/checkout.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container,Row,Col, } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/common-section/commonSection";
export default function Checkout(){
const [enterName,setEnterName]=useState('')
const [enterEmail,setEnterEmail]=useState('')
const [enterNumber,setEnterNumber]=useState('')
const [enterCity,setEnterCity]=useState('')
const [PostalCode,setPostalCode]=useState('')
const shippingInfo = []
const submitHandler = e=>{
    e.preventDefault()
    const userShippingAdress ={
        name:enterName,
        email:enterEmail,
        Number:enterNumber,
        City:enterCity,
        Postal_Code:PostalCode

    }
    shippingInfo.push(userShippingAdress)
    console.log(shippingInfo)
}




    const cartTotalAmount=useSelector(state=> state.cart.totalAmount)
    const shippingCost= 5

    const totalAmount = cartTotalAmount + Number(shippingCost)

        return(
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <h4 className="mb-4">shipping Adress </h4>
                            <form  className="checkout__form" onSubmit={submitHandler}>
                                   <div className="form__group">
                                    <input type="text" placeholder="Enter your name" required onChange={e=> setEnterName(e.target.value)}/>
                                   </div>
                                   <div className="form__group">
                                    <input type="number" placeholder="Phone Number" required onChange={e=> setEnterNumber(e.target.value)}/>
                                   </div>
                                   <div className="form__group">
                                    <input type="email" placeholder="Enter your Email"  required onChange={e=> setEnterEmail(e.target.value)}/>
                                   </div>
                                   <div className="form__group">
                                    <input type="text" placeholder="city"  required onChange={e=> setEnterCity(e.target.value)}/>
                                   </div>
                                   <div className="form__group">
                                    <input type="number" placeholder="Postal code"  required onChange={e=> setPostalCode(e.target.value)}/>
                                   </div> 
                                   <button className="addToCart__btn" ><Link to='/login'>Complete your Operation</Link></button>

                            </form>                         
                        </Col>

                        <Col lg='4' md='6'>
                            <div className="checkout__bill">
                            <h6 className="d-flex align-items-center justify-content-between mb-3">
                                Subtotal:<span> ${cartTotalAmount}</span></h6>
                            <h6 className="d-flex align-items-center justify-content-between mb-3">shipping : <span>${shippingCost}</span></h6>
                           
                            <div className="checkout__total">
                                <h5 className="d-flex align-items-center justify-content-between">Total: <span>${totalAmount}</span></h5>
                             </div> </div> 
                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}