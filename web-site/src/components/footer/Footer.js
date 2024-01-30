import React from 'react'
import styles from './footer.module.scss'


// import img
import logo from '../../assets/icon/logo.png'
import copyrightIcon from '../../assets/icon/copyright_img.png'
import whIcon from '../../assets/icon/contact_wh_icon.png'
import tgIcon from '../../assets/icon/contacts_tg_icon.png'
import igIcon from '../../assets/icon/instagram.png'
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
                            <a href="https://wa.me/77774345295"><img src={whIcon} alt="" /></a>
                            <a href="https://wa.me/77774345295"><p>+7 (777) 434 52-95</p></a>
                        </div>
                        <div>
                            <a href="https://t.me/bekarys_k"><img src={tgIcon} alt="" /></a>
                            <a href="https://t.me/bekarys_k"><p>+7 (777) 434 52-95</p></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/bi.tech.team?igsh=NTYzOWQzNmJjMA=="><img src={igIcon} alt="" /></a>
                            <a href="https://www.instagram.com/bi.tech.team?igsh=NTYzOWQzNmJjMA=="><p>@bi.tech.team</p></a>
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