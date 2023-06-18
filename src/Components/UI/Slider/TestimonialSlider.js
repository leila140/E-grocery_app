import React from "react";
import Slider from 'react-slick'
import '../../../style/Slider.css'
import review1 from '../../../assets/images/review1.jpg'
import review2 from '../../../assets/images/review2.jpg'
import review3 from '../../../assets/images/review3.jpg'
export default function TestimonialSlider(){
    const settings={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1

    }
    return( <Slider {...settings}>
        <div>
           <p className="review__text">
           "I recently discovered this grocery store 
           and I'm really impressed with their selection
            of fresh produce and meats. The prices are also 
            very reasonable compared to other stores in the area.
             One thing I really appreciate is their commitment to
              sourcing local and organic products, 
           which is important to me." 
           </p>
           <div className="slider__content d-flex align-items-center gap-3">
            <img src={review1} alt="person" className=" rounded"/>
            <h6>Lina Jon</h6>
           </div>
        </div>
        <div>
        <p className="review__text">
           "I recently discovered this grocery store 
           and I'm really impressed with  their selection
            of fresh produce and meats. The prices are also 
            very reasonable compared to other stores in the area.
             One thing I really appreciate is their commitment to
              sourcing local and organic products, 
           which is important to me." 
           </p>
           <div className=" slider__content d-flex align-items-center gap-3">
            <img src={review2} alt="person"  className=" rounded"/>
            <h6>Isabel Milan</h6>
           </div>
        </div>
        <div>
        <p className="review__text">
           "I recently discovered this grocery store 
           and I'm really impressed with  their selection
            of fresh produce and meats. The prices are also 
            very reasonable compared to other stores in the area.
             One thing I really appreciate is their commitment to
              sourcing local and organic products, 
           which is important to me." 
           </p>
           <div className="slider__content d-flex align-items-center gap-3">
            <img src={review3} alt="person"  className=" rounded"/>
            <h6>Jhon Jackson</h6>
           </div>
        </div>
    </Slider>)
}