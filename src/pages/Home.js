import React ,{useState,useEffect} from "react";
import { Container,Row,Col } from "reactstrap";

import'../style/hero-section.css'
import Helmet from '../Components/Helmet/Helmet'
import back from '../../src/assets/images/back11.png'
import BACK2home from '../../src/assets/images/BACK2home.png'
import{Link} from 'react-router-dom'
import ProductCard from "../Components/UI/Product-card/ProductCard";
import Review from '../assets/images/review back.jpg'
import '../style/home.css'
import TestimonialSlider from "../Components/UI/Slider/TestimonialSlider";


import Category from "../Components/UI/category/category";
import products from "../assets/Data/products";
export default function Home (){
    const[category,setCategory]=useState('All')
    const [allProducts,setAllProducts]=useState(products);
    const[bestDeals,setBestDeals]=useState([])
    useEffect(()=>{
       const filterdBest=products.filter(item=>item.price<6.0)
       const SliceBest =filterdBest.slice(0,4)
       setBestDeals(SliceBest)

    },[])

   useEffect(()=>{
    if(category=='All'){
        setAllProducts(products)
    }
    if(category=="Fruits"){
        const filterdProducts=products.filter(item=>item.category=='Fruits')
        setAllProducts(filterdProducts)
    }
    if(category=="Meet & Fish"){
        const filterdProducts=products.filter(item=>item.category=='Meet & Fish')
        setAllProducts(filterdProducts)
    }
    if(category=="Drinks"){
        const filterdProducts=products.filter(item=>item.category=='Drinks')
        setAllProducts(filterdProducts)
    }
   
   },[category])








    return(
        <Helmet title='Home'>
          
               <Container  >
                    <Row className="Back">
                        <Col lg='6' md='6'>
                            <div className="hero__content  " style={{marginLeft:'30px'}}>
                                <h2 className="mb-3 hero-title">Choosing <br/>
                                Quality Food</h2>
                               <p> Order any goods from our store online
and we deliver them to <br/>your door at a time convenient for you .
</p>
                                 <div className="hero__btns d-flex  align-items-center gap-5 mt-5">
                                    <button className="order__btn d-flex align-items-center justify-content-between"><Link to='/products'style={{textDecoration:'none', color:'white'}}>Order Now</Link><i class="ri-arrow-right-line"></i></button>
                                    
                                 </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                 <img  src={back} alt='hero-img'  className="w-100 "/> 
                            </div>
                        
                        
                        </Col>
                    </Row>
               </Container>

           <section className="pt-0">
            <Category/>
           </section>
           
            <Container >
            <Row className="Back2">
                 <Col lg='7' md='7'>
                    <div className="hero__content " style={{marginLeft:'30px'}}>
                        <h2 className=" hero-title mb-3">why choose <span style={{color:'rgba(50, 206, 47, 1)'}}>E</span>-grocery
                                </h2>
                        <p style={{marginLeft:'30px'}}>Shopping online with our grocery website is fast and easy, <br/>saving you time and hassle. You can browse and order from<br/> anywhere, at any time.
</p>
                    
                            </div>
                        </Col>
                        <Col lg='4' md='4'>
                            <div className="hero__img " >
                            <img  src={BACK2home} alt='hero-img' style={{width:'400px',height:"220px"}}/> 
                            </div>
                        
                        
                        </Col>
                    </Row>
            </Container>

           <section>
            <Container>
                <Row>
                   <Col lg='12' className="text-center" >
                    <h2 >Popular Products</h2>
                   </Col>
                   <Col lg='12'>
                    <div className="products__category d-flex align-items-center justify-content-center gap-5">
                        <button className={`all__btn ${category=='All'?'productBtnActive':''}`} onClick={()=>setCategory('All')}>All</button>
                        <button className={`d-flex align-items-center gap-2 ${category=='Fruits'?'productBtnActive':''}`} onClick={()=>setCategory('Fruits')}>Fruits</button>
                        <button  className={`d-flex align-items-center gap-2 ${category=='Meet & Fish'?'productBtnActive':''}`} onClick={()=>setCategory('Meet & Fish')}>Meet & Fish</button>
                        <button  className={`d-flex align-items-center gap-2 ${category=='Drinks'?'productBtnActive':''}`} onClick={()=>setCategory('Drinks')}>Drinks</button>


                    </div>
                   </Col>
                   {
                    allProducts.map(item=>(
                         <Col lg='3' md='4' sm="6" xs="6" key={item.id} className="mt-5">
                   <ProductCard item={item}/>
                   </Col>
                    ))
                   }
                  
                </Row>
            </Container>
           </section>
           <section className="pt-0" >
            <Container>
                <Row>
                    <Col lg="12" className="text-center " >
                       <h2>Best Deals</h2>

                    </Col>
                    
                        {
                          bestDeals.map(item=>(
                            <Col lg='3' md="4"  sm="6" xs="6" key={item.id} style={{marginTop:'38px'}}>
                                <ProductCard item={item}/>
                            </Col>
                          ))
                        }
                   

                </Row>
            </Container>
           </section>
           <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={Review} alt="review-img" className="w-100"/>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="testimonial mb-4">
                            <h1 className=" testimonial__title">What our  <span style={{color:'rgba(50, 206, 47, 1)',}}>customers</span><br/> are saying .</h1>
                        <TestimonialSlider/>
                        </div>
                    </Col>
                </Row>

            </Container>
           </section>
        </Helmet>
    )
}