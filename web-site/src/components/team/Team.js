import React from "react";

import styles from './team.module.scss'

// img import

import miniLogo from '../../assets/icon/mini_logo.png'
import arrowDown from '../../assets/icon/arrow_down.png'
import bekrosImg from '../../assets/img/bekros_img.png'
import sultanImg from '../../assets/img/sultek_img.png'
import placeholderImg from '../../assets/img/profile_placeholder.png'
import graphEl from '../../assets/img/Graphic_Elements5.png'
// img import

const Team = () =>{
    return(
        <div className={styles.team}>
            <div className={styles.teamTitle}>
                <img src={miniLogo} alt="mini logo" />
                <p>совокупный состав</p>
                <div>
                    <p>Наша команда</p>   
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className={styles.mobileTeamContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.contentBg}>
                        <p>
                        Мы команда целеустремленных веб-разработчиков, создавая инновационные и высокопроизводительные веб-приложения. Наш коллектив объединяет опыт и страсть к технологиям, чтобы предоставлять клиентам уникальные и эффективные решения.
                        </p>
                        <img src={graphEl} alt="" />
                    </div>
                </div>
                <div className={styles.teamMemberContainer}>
                    <div className={styles.memberCard}>
                        <img src={bekrosImg} alt="" />
                        <div>
                            <h4>Бекарыс Ибрашев</h4>
                            <p>Back-end Developer</p>
                        </div>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={sultanImg} alt="" />
                        <div>
                            <h4>Мечеев Султан</h4>
                            <p>Web - designer / UI & UX Designer</p>
                        </div>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={placeholderImg} alt="" />
                        <div>
                            <h4>Базаров Жансерик</h4>
                            <p>Front-end Developer</p>
                        </div>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={placeholderImg} alt="" />
                        <div>
                            <h4>Адильбек Кудайбергенов</h4>
                            <p>Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.teamContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.contentBg}>
                        <p>
                        Мы команда целеустремленных веб-разработчиков, создавая инновационные и высокопроизводительные веб-приложения. Наш коллектив объединяет опыт и страсть к технологиям, чтобы предоставлять клиентам уникальные и эффективные решения.
                        </p>
                        <img src={graphEl} alt="" />
                    </div>
                </div>
                <div className={styles.teamMembersContainer}>
                    <div className={styles.memberCard}>
                        <img src={bekrosImg} alt="" />
                        <h1>Бекарыс Ибрашев</h1>
                        <p>Back-end Developer</p>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={sultanImg} alt="" />
                        <h1>Султан Мечеев </h1>
                        <p>Web-designer / UX & UI Designer</p>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={placeholderImg} alt="" />
                        <h1>Жансерик Базаров</h1>
                        <p>Front-end Developer</p>
                    </div>
                    <div className={styles.memberCard}>
                        <img src={placeholderImg} alt="" />
                        <h1>Адильбек Кудайбергенов</h1>
                        <p>Marketing Specialist</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Team;