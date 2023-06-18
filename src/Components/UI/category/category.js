import React from "react";
import category1 from '../../../assets/images/category1.png'
import category2 from '../../../assets/images/category2.png'
import category3 from '../../../assets/images/category3.png'
import category4 from '../../../assets/images/category4.png'
import "../../../style/category.css"
import { Container ,Row,Col} from "reactstrap";
const categoryData=[
    {
    display:'Fruits',
    imgUrl:category1},
    {
    display:'Vegatables',
    imgUrl:category2},
    {
        display:'Meet & Fish',
        imgUrl:category3},
    {
        display:'Drinks',
        imgUrl:category4},




]



export default function Category(){

    return(
        <Container>
            <Row><h3 style={{textAlign:'center',marginTop:'30px'}}><big>Category</big> </h3>
                {
                    categoryData.map((item,index)=>(
                        <Col lg='3 ' md='4' sm='6' xs="6" className="mb-3">
                            <div className="category__item d-flex align-items-center gap-3"style={{justifyContent:'center'}}>
                                <div className="category__img">
                                    <img src={item.imgUrl} alt='category__item'/>
                                </div>
                                <h6 >{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}