/* eslint-disable no-unused-vars */
import React from "react";
import classes from './services.module.scss'

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'


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
            </div>
        </div>
               
                  
    )
}
export default Services