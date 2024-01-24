import React from "react";

import classes from './portfolio.module.scss'

// import img

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import portfolioExample from '../../assets/img/showcase_1.png'
import arrowLeft from '../../assets/icon/left-arrow.png'
import arrowRight from '../../assets/icon/right-arrow.png'
import mobileportfolioExample from '../../assets/mobile_img/img/App_Showcase.png'
// import img

export default function Portfolio(){
    return(
        <div className={classes.portfolio}>
            <div className={classes.componentTitle}>
                <img src={miniLogo} alt="logo" />
                <p>ПОРТФОЛИО</p>
                <div>
                    <h1>Наши Работы</h1>
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className={classes.portfolioContainer}>
                    <div className={classes.sliderBg}>
                        <img src={portfolioExample} alt="" className={classes.sliderShowcase}/>
                    </div>
                    <div className={classes.sliderArrows}>
                        <img src={arrowLeft} alt="" className={classes.arrows}/>
                        <img src={arrowRight} alt="" className={classes.arrows}/>
                    </div>
            </div>
        </div>
    )
}
