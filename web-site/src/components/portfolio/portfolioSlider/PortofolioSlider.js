/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from './portifolioSlider.module.scss'

import showcaseItem1 from '../../../assets/img/showcase_1.png' 
import showcaseItem2 from '../../../assets/img/showcase_2.png' 
import showcaseItem3 from '../../../assets/img/showcase_3.png' 
import showcaseItem4 from '../../../assets/img/showcase_4.png' 

import arrowLeft from '../../../assets/icon/left-arrow.png'
import arrowRight from '../../../assets/icon/right-arrow.png'

export default function PortfolioSlider(){
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
        <div className={styles.slider}>
            <div className={styles.slider_container}>
                {[showcaseItem1, showcaseItem2, showcaseItem3, showcaseItem4].map((item, index) => (
                    <div key={index} className={`${styles.mySlides} ${styles.fade} ${index === activeIndex ? styles.active_slide : styles.non_active_slide}`}>
                        <div className={styles.slide_num}>{index + 1}/4</div>
                        <img src={item} alt="" className={styles.slider_item} />
                    </div>
                ))}
                <div className={styles.dot_container}>
                {[0, 1, 2, 3].map((index) => (
                    <span key={index} className={`${styles.dot} ${index === activeIndex ? styles.active_dot : ''}`} onClick={() => goToSlide(index)}></span>
                ))}
            </div>
                <a className={styles.prev} onClick={prevSlide}>
                    <img src={arrowLeft} alt="" />
                </a>
                <a className={styles.next} onClick={nextSlide}>
                    <img src={arrowRight} alt="" />
                </a>
            </div>
        </div>
    )
}
