import React from 'react'
import styles from './footer.module.scss'


// import img
import logo from '../../assets/icon/logo.png'
import copyrightIcon from '../../assets/icon/copyright_img.png'
import whIcon from '../../assets/icon/contact_wh_icon.png'
import tgIcon from '../../assets/icon/contacts_tg_icon.png'
import kaspiImg from '../../assets/icon/kaspi_bank_logo.png'
import halykBank from '../../assets/icon/halyk_bank_logo.png'
// import img


export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.leftContent}>
                    <img src={logo} alt="" />
                    <p>Ваш надежный партнер в мире веб-разработки! Мы – энергичная и творческая команда профессионалов, специализирующихся на создании современных и инновационных веб-решений.
                    </p>
                    <div>
                        <img src={copyrightIcon} alt="copyright icon"/>
                        <p>2023-2024 BI-TECH. All rights reserved.</p>
                    </div>
                    <p><span>Designed by Sultan Mecheyev</span></p>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.contacts}>
                    <h1>Наши Контакты</h1>
                        <div>
                            <img src={whIcon} alt="" />
                            <p>+7 (747) 960 41-80</p>
                        </div>
                        <div>
                            <img src={tgIcon} alt="" />
                            <p>+7 (747) 960 41-80</p>
                        </div>
                    </div>
                    <div className={styles.payment}>
                            <img src={halykBank} alt="" id={styles.halyk}/>
                            <img src={kaspiImg} alt="" id={styles.kaspi}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer