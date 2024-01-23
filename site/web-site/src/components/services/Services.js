import React from "react";

import classes from './services.module.scss'

// import img
import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import graphEl from '../../assets/img/Graphic_Elements3.png'
import eShopLogo from '../../assets/icon/webcart_img.png'
import netIcon from '../../assets/icon/net_icon.png'
import tgBotIcon from '../../assets/icon/tg_icon.png'
import landingIcon from '../../assets/mobile_img/icons/landing_icon.png'
import uxuiIcon from '../../assets/mobile_img/icons/ux_ui.png'
// import img
const Services = () =>{
    return(
        <div className={classes.services}>
            <div className={classes.mobileServicesContainer}>
                <div>
                <div className={classes.serviceTitle}>
                    <img src={miniLogo} alt="logo" />
                    <p>что мы делаем?</p>
                    <div>
                        <p>Наши Услуги</p>
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                </div>
                <div className={classes.mobileServiceList}>
                    <div className={classes.serviceItem}>
                        <div className={classes.serviceType}>
                            <img src={eShopLogo} alt="" />
                            <h2>Интернет магазин</h2>
                        </div>
                        <p>Улучшите свой бизнес с нашим интернет-магазином. Мы создаем стильные онлайн-платформы с удобным взаимодействием. От каталогов до платежей - доверьтесь нам свой успех.</p>
                    </div>
                    <div className={classes.serviceItem}>
                        <div className={classes.serviceType}>
                            <img src={netIcon} alt="" />
                            <h2>Веб - сайт</h2>
                        </div>
                        <p>Откройте для своего бизнеса новые возможности с нашей услугой веб-сайта. Мы создаем уникальные и функциональные онлайн-платформы, подчеркивающие ваш бренд. </p>
                    </div>
                    <div className={classes.serviceItem}>
                        <div className={classes.serviceType}>
                            <img src={tgBotIcon} alt="" />
                            <h2>Телеграм бот</h2>
                        </div>
                        <p>Мы разрабатываем интеллектуальных помощников, обеспечивающих моментальный и персонализированный контакт с вашими клиентами.</p>
                    </div>
                    <div className={classes.serviceItem}>
                        <div className={classes.serviceType}>
                            <img src={landingIcon} alt="" />
                            <h2>Лендинг</h2>
                        </div>
                        <p>Мы разрабатываем увлекательные и информативные веб-страницы, максимально концентрируя внимание посетителей на вашем предложении. От яркого дизайна до мгновенного воздействия — доверьтесь нам, чтобы привлечь внимание и конвертировать посетителей в клиентов.</p>
                    </div>
                    <div className={classes.serviceItem}>
                        <div className={classes.serviceType}>
                            <img src={uxuiIcon} alt="" />
                            <h2>UX & UI Design</h2>
                        </div>
                        <p>Мы создаем интуитивные и креативные интерфейсы, которые не только привлекают, но и обеспечивают выдающийся опыт взаимодействия. От удобства использования до стильного дизайна - доверьтесь нам, чтобы сделать ваш продукт незабвенным для пользователей.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={classes.servicesContainer}>
                <div className={classes.serviceTitle}>
                    <img src={miniLogo} alt="logo" />
                    <p>что мы делаем?</p>
                    <div>
                        <p>Наши Услуги</p>
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                </div>
                <div className={classes.serviceList}>
                    <div className={classes.serviceItem}>
                        <img src={eShopLogo} alt="" className="" />
                        <h1>Интернет Магазин</h1>
                        <p>Улучшите свой бизнес с нашим интернет-магазином. Мы создаем стильные онлайн-платформы с удобным взаимодействием. От каталогов до платежей - доверьтесь нам свой успех.</p>
                    </div>
                    <div className={classes.serviceItem} id={classes.activeServiceItem}>
                        <img src={netIcon} alt="" className="" />
                        <h1>Веб - сайт</h1>
                        <p>Откройте для своего бизнеса новые возможности с нашей услугой веб-сайта. Мы создаем уникальные и функциональные онлайн-платформы, подчеркивающие ваш бренд. </p>
                    </div>
                    <div className={classes.serviceItem}>
                        <img src={tgBotIcon} alt="" className="" />
                        <h1>Телеграм бот</h1>
                        <p>Мы разрабатываем интеллектуальных помощников, обеспечивающих моментальный и персонализированный контакт с вашими клиентами.</p>
                    </div>
                </div> 
                <img src={graphEl} alt="graph element" className={classes.graphEl}/>
            </div>   
            
        </div>
    )
}


export default Services