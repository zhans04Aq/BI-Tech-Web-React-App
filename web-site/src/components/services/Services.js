/* eslint-disable no-unused-vars */
import React from "react";
import classes from './services.module.scss'

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'

import weMake from '../../assets/img/weMake.svg'

import slider1 from '../../assets/services/Group92.svg'
import slider2 from '../../assets/services/Group93.svg'
import slider3 from '../../assets/services/Group94.svg'
import slider4 from '../../assets/services/Group95.svg'
import slider5 from '../../assets/services/Group96.svg'


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from 'swiper/core';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);
// import img
const Services = () =>{
    return(
        <div className={classes.services}>

            <div className={classes.laptop}>
                <div className={classes.componentTitle}>
                    <img className={classes.weMake} src={weMake} alt="logo" />
                    
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
                        centerInsufficientSlides
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{ delay: 100, disableOnInteraction: false }}
                        speed={2800}
                        loop={true}
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
                </div>
                
            </div>

            <div className={classes.phone}>
                <div className={classes.PhonecomponentTitle}>
                    <img className={classes.phoneWeMake} src={weMake} alt="logo" />
                    <div>
                        <h1>Наши У3слуги</h1>
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                </div>
                <div className={classes.phoneServices}>
                    <img src={slider1} alt="" className={classes.img} />
                    <img src={slider2} alt="" className={classes.img} />
                    <img src={slider3} alt="" className={classes.img} />
                    <img src={slider4} alt="" className={classes.img} />
                    <img src={slider5} alt="" className={classes.img} />
                </div>
            </div>
            
        </div>
               
                  
    )
}
export default Services