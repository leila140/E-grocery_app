import React from "react";
import '../../style/Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from "reactstrap";
import Egrocery from "../../assets/images/Egrocery.png"
import {Link} from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md="4" sm='6'>
                    <div className="logo footer__logo text-start">
                    <img src={Egrocery} alt='logo'/>
                    <p>    Fresh, high-quality groceries delivered to your
                         door. Shop now!</p>
                </div>
                    </Col>
                    <Col lg='3' md="4" sm='6'>
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="deliver__time-list">
                            <ListGroupItem className=" delivery__time-item border-0 ps-0"><span>Sunday - Thursday</span>
                            <p>10:00am - 11:00pm </p>
                             </ListGroupItem>
                             <ListGroupItem className=" delivery__time-item border-0 ps-0"><span>Friday - Saturday</span>
                            <p>Off Day</p>
                             </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md="4" sm='6'>
                    <h5 className="footer__title">Contact</h5>
                    <ListGroup className="deliver__time-list">
                    <ListGroupItem className=" delivery__time-item border-0 ps-0"><p> Location: Laayoune  rue Al wahda  N123</p>
                            
                            </ListGroupItem>
                        
                            <ListGroupItem className=" delivery__time-item border-0 ps-0 "><span style={{color:'#333'}}>Phone: 0532463210 </span>
                            
                             </ListGroupItem>
                             <ListGroupItem className=" delivery__time-item border-0 ps-0"><span style={{color:'#333'}}>E-mail: E-grocery@gmail.com</span>
                            
                             </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md="4" sm='6'>
                    <h5 className="footer__title">Newsletter</h5>
                    <p>Subscribe our Newsletter</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email "/>
                        <span><i class="ri-send-plane-line"></i></span>
                    </div>
                    </Col>

                </Row>
                <Row className="mt-5">
                    <Col lg='6' md='6' >
                        <p className="copyright__text">Copyright-2023, website made by leila &
                             ilham All rights reserved</p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social__links d-flex align-items-center gap-3 justify-content-end">
                            <p className="m-0"> Follow us:</p>
                            <span><Link to=''  style={{textDecoration:'none',color:'black'}}><i class="ri-facebook-line"></i></Link></span>
                            <span><Link to=''  style={{textDecoration:'none',color:'black'}}><i class="ri-instagram-line"></i> </Link></span>
                            <span><Link to=''  style={{textDecoration:'none',color:'black'}}><i class="ri-twitter-line"></i></Link></span>
                            <span><Link to=''  style={{textDecoration:'none',color:'black'}}><i class="ri-linkedin-line"></i></Link></span>

                        </div>

                    </Col>
                    


                </Row>
            </Container>

        </footer>
    )
}