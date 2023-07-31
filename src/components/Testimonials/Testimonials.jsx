// import React from 'react';
import './Testimonials.css';
import {testimonialsData} from "../../data/testimonialsData";
import React, { useEffect, useState } from "react";
// import leftArrow from '../.../assets/leftArrow.png'
// import rightArrow from '../.../assets/rightArrow.png'
import RightArrow from'../../assets/rightArrow.png'
import LeftArrow from'../../assets/leftArrow.png'

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span id='rav'>
                    {testimonialsData[selected].name}
                </span>{""}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={LeftArrow} alt="" />
                <img src={RightArrow} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Testimonials
