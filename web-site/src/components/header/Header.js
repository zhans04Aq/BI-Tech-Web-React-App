import React from 'react'
import classes from './header.module.scss'

// import img

import logo from '../../assets/icon/logo.png'
import bigLogo from '../../assets/img/big_logo.png'
import graphElement from '../../assets/img/Graphic_Elements.png'
    
    //mobile import
    import mobileLogo from '../../assets/mobile_img/icons/mobile_logo.svg'  
    import mobileBigLogoPng from '../../assets/mobile_img/img/big_mobile_logo.png'  
    //mobile import  

// import img

export default function Header(){
    return(
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerUpperContent}>
                    <img alt='logo' className={classes.logo} src={logo}/>
                    <img src={graphElement} alt="" className={classes.graphElement}/>
                </div>
                <div className={classes.headerLowerContainer}>
                    <div className={classes.lowerLeftContent}>
                        <p>Мы — команда <span>веб- <br/>
                        разработчиков</span>, стремящихся <br/>
                        превратить вашу цифровую <br/>
                        идею в уникальный и <br/>
                        функциональный опыт. 
                        </p>
                        <div className={classes.statisticsContainer}>
                            <div>
                                <p>
                                    <span>100+</span>  <br />
                                    проектов
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span>100%</span>  <br />
                                    работ к дедлайну
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span>100+</span>  <br />
                                    довольных клиентов
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.lowerRightContent}>
                        <img src={bigLogo} alt="" className={classes.bigLogo}/>
                        {/* <div className={classes.scrollDownNote}>
                            <div className={classes.hrLine}></div>
                            <p>прокручивай вниз</p> 
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={classes.mobileHeaderContainer}>

                <img src={mobileLogo} alt="" className={classes.logo} />
                <img src={mobileBigLogoPng} alt="" className={classes.bigLogo} />
                <p>Мы — команда <span>веб-разработчиков</span>, <br /> стремящихся превратить <br /> вашу цифровую идею в уникальный и <br />функциональный опыт. </p>
                <div className={classes.statistics}>
                    <div>
                        <p>
                            <span>100+</span>  <br />
                            проектов
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>100%</span>  <br />
                            работ к дедлайну
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>100+</span>  <br />
                            довольных клиентов
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}