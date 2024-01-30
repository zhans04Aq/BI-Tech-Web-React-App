/* eslint-disable no-unused-vars */
import React from "react";

import classes from './services.module.scss'

// import img
import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import graphEl from '../../assets/img/Graphic_Elements3.png'
import eShopLogo from '../../assets/icon/webcart_img.png'
import netIcon from '../../assets/icon/net_icon.png'
import tgBotIcon from '../../assets/icon/tg_icon.png'
    //mobile img import
    import mobileTgIcon from '../../assets/mobile_img/icons/tg_bot.svg' 
    import mobileEShopIcon from '../../assets/mobile_img/icons/e-commerce.svg' 
    import mobileLanding from '../../assets/mobile_img/icons/landing.svg' 
    import mobileNetIcon from '../../assets/mobile_img/icons/web.svg' 
    import mobileUiUxIcon from '../../assets/mobile_img/icons/ux-ui.svg' 
    import mobileGraphEl from '../../assets/mobile_img/img/graphEl_services.svg'
    //mobile img import 
// import img
const Services = () =>{
    return(
        <div className={classes.services}>
            <div className={classes.componentTitle}>
                <img src={miniLogo} alt="logo" />
                <p>ЧТО МЫ СОЗДАЕМ?</p>
                <div>
                    <h1>Наши Услуги</h1>
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className={classes.servicesContainer}>
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
            </div>   
            <div className={classes.mobileServiceContainer}>
                <div className={classes.serviceItem}>
                    <img src={mobileEShopIcon} alt="" className={classes.serviceLogo} />
                    <h1>Интернет магазин</h1>
                    <p>Улучшите свой бизнес с нашим интернет-магазином. Мы создаем стильные онлайн-платформы с удобным взаимодействием. От каталогов до платежей - доверьтесь нам свой успех.</p>
                </div>
                <div className={classes.serviceItem}>
                    <img src={mobileNetIcon} alt="" className={classes.serviceLogo} />
                    <h1>Телеграм бот</h1>
                    <p>Откройте для своего бизнеса новые возможности с нашей услугой веб-сайта. Мы создаем уникальные и функциональные онлайн-платформы, подчеркивающие ваш бренд.   </p>
                </div>
                <div className={classes.serviceItem}>
                    <img src={mobileTgIcon} alt="" className={classes.serviceLogo} />
                    <h1>Телеграм бот</h1>
                    <p>Мы разрабатываем интеллектуальных помощников, обеспечивающих моментальный и персонализированный контакт с вашими клиентами. </p>
                </div>
                <div className={classes.serviceItem}>
                    <img src={mobileLanding} alt="" className={classes.serviceLogo} />
                    <h1>Лендинг</h1>
                    <p>Мы создаем привлекательные веб-страницы, фокусируя внимание на вашем предложении. Доверьтесь нам для привлечения и конвертации посетителей в клиентов. </p>
                </div>
                <div className={classes.serviceItem}>
                    <img src={mobileUiUxIcon} alt="" className={classes.serviceLogo} />
                    <h1>UX & UI Design</h1>
                    <p>Мы создаем интуитивные и креативные интерфейсы, которые не только привлекают, но и обеспечивают выдающийся опыт взаимодействия. От удобства использования до стильного дизайна - доверьтесь нам, чтобы сделать ваш продукт незабвенным для пользователей. </p>
                </div>
            </div>
        </div>
    )
}


export default Services