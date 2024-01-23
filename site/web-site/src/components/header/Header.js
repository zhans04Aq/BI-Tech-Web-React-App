import React from 'react'
import classes from './header.module.scss'

// import img

import logo from '../../assets/icon/logo.png'
// import graphElem from '../../assets/img/Graphic_Elements.png'
import bigLogo from '../../assets/img/big_logo.png'

    // import mobile img
    import mobileLogo from '../../assets/mobile_img/img/mobile_logo.png'
    import mobileBigLogo from '../../assets/mobile_img/img/big_mobile_logo.png'
    // import mobile img

// import img

export default function Header(){
    return(
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerUpperContent}>
                    <img alt='logo' className={classes.logo} src={logo}/>
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
                            {/* <div className={classes.statisticsText}>

                            </div> */}
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
        </div>
    )
}