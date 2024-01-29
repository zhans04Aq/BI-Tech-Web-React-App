/* eslint-disable no-unused-vars */
import React from "react";

import classes from './portfolio.module.scss'
import { useState } from "react";
import styles from './portfolio.module.scss'
// import img

import miniLogo from '../../assets/icon/mini_logo.png'

import showcaseItem1 from '../../assets/img/showcase_1.png' 
import showcaseItem2 from '../../assets/img/showcase_2.png' 
import showcaseItem3 from '../../assets/img/showcase_3.png' 
import showcaseItem4 from '../../assets/img/showcase_4.png' 

import arrowLeft from '../../assets/icon/left-arrow.png'
import arrowRight from '../../assets/icon/right-arrow.png'
// import portfolioExample from '../../assets/img/showcase_1.png'
// import arrowLeft from '../../assets/icon/left-arrow.png'
// import arrowRight from '../../assets/icon/right-arrow.png'
// import mobileportfolioExample from '../../assets/mobile_img/img/App_Showcase.png'
// import PortfolioSlider fro   m "./portfolioSlider/PortofolioSlider";
// import img

export default function Portfolio(){
    

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };


    return(
        <div className={classes.portfolio}>

            <div className={classes.componentTitle}>
                <img src={miniLogo} alt="logo" />
                <p>ПОРТФОЛИО</p>
                <div>


                    <h1>Наши Работы</h1>
            

                </div>
            </div>

            <div className={classes.portfolioContainer}>
                <div className={classes.sliderBg}>
                    <div className={styles.slider}>
                        
                        <div className={styles.slider_container}>
                            <a className={styles.prev} onClick={prevSlide}>
                                <img src={arrowLeft} alt="" />
                            </a>
                            {[showcaseItem1, showcaseItem2, showcaseItem3, showcaseItem4].map((item, index) => (
                            <div key={index} className={`${styles.mySlides} ${styles.fade} ${index === activeIndex ? styles.active_slide : styles.non_active_slide}`}>
                                <img src={item} alt="" className={styles.slider_item} />
                            </div>
                            ))}
                            <a className={styles.next} onClick={nextSlide}>
                                <img src={arrowRight} alt="" />
                            </a>
                    
                            {/* <div className={styles.dot_container}>
                                {[0, 1, 2, 3].map((index) => (
                                    <span key={index} className={`${styles.dot} ${index === activeIndex ? styles.active_dot : ''}`} onClick={() => goToSlide(index)}></span>
                                ))}
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
