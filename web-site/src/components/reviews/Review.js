import React from 'react'

import styles from './review.module.scss'

// import img

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import reviewerPlaceholder from '../../assets/img/reviewer_placeholder.png'
import webIcon from '../../assets/icon/net_icon.svg'
import webCart from '../../assets/icon/webcart_img.svg'
import tgIcon from '../../assets/icon/tg_icon.png'
import graphEl from '../../assets/img/Graphic_Elements6.png'
// import img


export const Review = () => {
    return(
        <div className={styles.review}>
            <div className={styles.componentTitle}>
                <img src={miniLogo} alt="logo" />
                <p>что люди говорят про нас?</p>
                <div>
                    <h1>Отзывы</h1>
                </div>
            </div>
            <div className={styles.reviewContainer}>
                <div className={styles.reviewCard}>
                    <div className={styles.reviewContentCard}>
                        <img src={webIcon} alt="" />
                        <p>Благодарим "BI-TECH" за профессиональный подход и успешную разработку современного веб-сайта для нашего бизнеса. Результаты превзошли ожидания, и мы довольны сотрудничеством.
                        </p>
                    </div>
                    <div className={styles.reviewerContent}>
                        <img src={reviewerPlaceholder} alt="" />
                        <div>
                            <h3>Молдир Баритова <br />
                                <span>заказ веб-сайта</span>
                            </h3>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.reviewCard} id={styles.centerCard}>
                    <div className={styles.reviewContentCard}>
                        <img src={tgIcon} alt="" />
                        <p>Этот бот - наше воплощение идеального виртуального ассистента. Работа с этой командой была как плавное погружение в будущее обслуживания клиентов.
                        </p>
                    </div>
                    <div className={styles.reviewerContent}>
                        <img src={reviewerPlaceholder} alt="" />
                        <div>
                            <h3>Александр Гринев <br />
                                <span>заказ телеграм бота</span>
                            </h3>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.reviewCard}>
                    <div className={styles.reviewContentCard}>
                        <img src={webIcon} alt="" />
                        <p>Мой опыт со сотрудничеством был восхитительным с самого начала. Я обратился к ним с запросом на создание интернет-магазина для моего бизнеса, и результаты оказались захватывающими.
                        </p>
                    </div>
                    <div className={styles.reviewerContent}>
                        <img src={reviewerPlaceholder} alt="" />
                        <div>
                            <h3>Дмитрий Лисин <br />
                                <span>заказ интернет-магазина</span>
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review