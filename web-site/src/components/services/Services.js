/* eslint-disable no-unused-vars */
import React from "react";
import classes from './services.module.scss'

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import graphEl from '../../assets/img/Graphic_Elements3.png'
import eShopLogo from '../../assets/icon/webcart_img.png'
import netIcon from '../../assets/icon/net_icon.png'
import tgBotIcon from '../../assets/icon/tg_icon.png'
import landingIcon from '../../assets/mobile_img/icons/landing_icon.png'
import uxuiIcon from '../../assets/mobile_img/icons/ux_ui.png'



import slider1 from '../../assets/services/Group94.svg'
import slider2 from '../../assets/services/Group92.svg'
import slider3 from '../../assets/services/Group93.svg'
import slider4 from '../../assets/services/Group95.svg'
import slider5 from '../../assets/services/Group96.svg'


// import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay]);

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
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 1, disableOnInteraction: false }}
                    speed={14800}
                    className={classes.customSwiper} // добавляем кастомный класс для Swiper
                    >

                    <SwiperSlide>
                    <div className='slide'>
                        <img src={slider1} alt="" className={classes.img} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='slide'>
                        <img src={slider2} alt="" className={classes.img} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='slide'>
                        <img src={slider3} alt="" className={classes.img} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='slide'>
                        <img src={slider4} alt="" className={classes.img} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='slide'>
                        <img src={slider5} alt="" className={classes.img} />
                    </div>
                    </SwiperSlide>
                    
                </Swiper>
                </div> 
{/*                     
                    <div className={classes.serviceItem} id={classes.hide}>
                        <img src={eShopLogo} alt="" className="" />
                        <h1>Лендинг</h1>
                        <p>Мы разрабатываем увлекательные и информативные веб-страницы, максимально концентрируя внимание посетителей на вашем предложении. От яркого дизайна до мгновенного воздействия — доверьтесь нам, чтобы привлечь внимание и конвертировать посетителей в клиентов.</p>
                    </div>
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
                    <div className={classes.serviceItem} id={classes.hide}>
                        <img src={tgBotIcon} alt="" className="" />
                        <h1>Телеграм бот</h1>
                        <p>Мы разрабатываем интеллектуальных помощников, обеспечивающих моментальный и персонализированный контакт с вашими клиентами.</p>
                    </div>
                    <div className={classes.serviceItem} >
                        <img src={eShopLogo} alt="" className="" />
                        <h1>UX & UI Design</h1>
                        <p>Мы создаем интуитивные и креативные интерфейсы, которые не только привлекают, но и обеспечивают выдающийся опыт взаимодействия. От удобства использования до стильного дизайна - доверьтесь нам, чтобы сделать ваш продукт незабвенным для пользователей.</p>
                    </div> */}
             
              
            </div>   
        </div>
    )
}


export default Services