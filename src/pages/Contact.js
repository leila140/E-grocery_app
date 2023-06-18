import React,{useState,useEffect} from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from '../Components/UI/common-section/commonSection'
import { Col, Container, Row } from "reactstrap";
import '../style/contact.css'
 
export default function Contact
 (){
    const [enteredName,setEnteredName] = useState(' ')
 const [enteredEmail,setEnteredEmail] = useState(' ')
 const [message,setMessage] = useState(' ')
 

 
const submitHandler =e=>{
    e.preventDefault();
    console.log(enteredName,enteredEmail,message)
 }
    return(
        <Helmet title='Contact-page'>
             <CommonSection title='Contact '/>
             <section>
                <Container><Row>
             <Col lg='4' md='6' className="mb-25">
             <h2 >Contact Us Here</h2>
                <div className="cart__contact"><h5> Location: Laayoune  rue Al wahda  N123</h5>
                            
                            
                        
                            <h5 style={{color:'#333'}}>Phone: 0532463210 </h5>
                            
                            
                            <h5 style={{color:'#333'}}>E-mail: E-grocery@gmail.com</h5>
                            </div> 
                                      
                        </Col>

                        <Col lg='8' md='6'>
                        <form className="form" onSubmit={submitHandler} >
                                <div className="form__group"> 
                                    <input type="text" placeholder="Enter your name"  onChange={e=> setEnteredName(e.target.value)}
                                      required/>
                                </div>
                                <div  className="form__group"> 
                                    <input type="email" placeholder="Enter your email"   onChange={e=> setEnteredEmail(e.target.value)}
                                    required/>
                                </div>
                                <div  className="form__group"> 
                                    <textarea rows={5} type="text" placeholder="Write what you want here"   onChange={e=> setMessage(e.target.value)}
                                    required/>
                                </div>
                                <button type="submit"  className="addToCart__btn">Submit</button>
                            </form>
                        </Col>

                    </Row>
                </Container>
             </section>
        </Helmet>
    )
}