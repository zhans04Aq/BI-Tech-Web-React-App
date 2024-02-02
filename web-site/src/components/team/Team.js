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
import team from '../../assets/img/team.svg'

const Team = () =>{
    return(
        <div className={styles.team}>
            <div className={styles.componentTitle}>
                <img src={team} alt="logo" />
            
                <div>
                    
                    <h1>Наша команда</h1>
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className={styles.teamContainer}>
                <div className={styles.leftContent}>
                    <p>
                    Мы команда <br /> целеустремленных веб-разработчиков, создавая инновационные и высокопроизводитель <br />ные веб-приложения. <br /> Наш коллектив <br />
                    объединяет опыт и <br />
                     страсть к технологиям, чтобы предоставлять клиентам уникальные и эффективные решения.
                    </p>
                    <img src={graphEl} alt="" />
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