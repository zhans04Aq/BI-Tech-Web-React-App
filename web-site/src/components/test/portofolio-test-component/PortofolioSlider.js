/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import { Carousel } from "react-bootstrap";

import styles from './portifolioSlider.module.scss'

// import img

import showcaseItem1 from '../../assets/img/showcase_1.png' 
import showcaseItem2 from '../../assets/img/showcase_2.png' 
import showcaseItem3 from '../../assets/img/showcase_3.png' 
import showcaseItem4 from '../../assets/img/showcase_4.png' 

// import img

const PortfolioSlider = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img src={showcaseItem1} alt="" className=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={showcaseItem2} alt="" className=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={showcaseItem3} alt="" className=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={showcaseItem4} alt="" className=""/>
            </Carousel.Item>
            
        </Carousel>
    )
}

export default PortfolioSlider