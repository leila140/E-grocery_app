import React,{useState,useEffect} from "react";
import CommonSection from "../Components/UI/common-section/commonSection";
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row,Col } from "reactstrap";
import products from '../assets/Data/products'
import ProductCard from '../Components/UI/Product-card/ProductCard'
import '../style/all-Products.css'

import ReactPaginate from 'react-paginate'
import '../style/pagination.css'
export default function Products (){
    const[searchItem,setSearchItem] = useState('');
    const[pageNumber,setPageNumber] = useState(0)
    const searchedProduct = products.filter((item) => {
        if (searchItem.value =="")return item;
        if(
            item.title
            .toLowerCase()
            .includes(searchItem.toLowerCase())
            )
            return item;
    })
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage)
     
    const pageCount = Math.ceil(searchedProduct.length/ productPerPage)
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }
    
    return(
      <Helmet title='All-Products'>
        <CommonSection title='All Products'/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' xs='12'>
                    <div className="search__widget d-flex align-items-center justify-content-between" >
                         <input type="text" placeholder="I'm looking for....." 
                         value={searchItem} onChange={(e)=>setSearchItem(e.target.value) }/>
                         <span>
                         <i class="ri-search-line"></i>
                         </span>
                    </div>
                    </Col>
                    <Col lg='6' md='6' sm='6' xs='12' className="mb-5">
                        
                    </Col>
                    {
                        displayPage
                       .map((item)=> (
                        
                        <Col lg='3' md='4' sm='6' xs='6'  key={item.id} className='mb-4'>
                            {" "}
                        <ProductCard item={item} /></Col> )
                   )}
                   <div>
                    <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel='Prev'
                    nextLabel='Next'
                    containerClassName="paginationBtns"
                    />
                   </div>

                </Row>
            </Container>
        </section>
      </Helmet>
    )
}