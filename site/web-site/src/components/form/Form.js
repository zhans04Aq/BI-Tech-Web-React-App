import React from 'react'
import classes from './form.module.scss'

export default function Form(){
    return(
        <div className={classes.form}>
            <div className={classes.mobileFormContainer}>
                <div className={classes.mobileFormBg}>
                    <div className={classes.mobileFormBgText}>
                        <h3>Оставьте свои контакты и <br />
                        проектные ожидания, мы <br />
                        свяжемся с вами в кратчайшие <br />
                        сроки для обсуждения <br />
                        идеального веб-проекта.</h3>
                        <p>Свяжемся с вами вкратчайшее время!</p>
                    </div>
                </div>
                <form action="">
                        <label htmlFor="">Заявка</label>
                        <div className={classes.mobileFormContent}>
                            <input placeholder='Имя' type="name" name="name" />
                            <input placeholder='Телефон' type="tel" name="phone"/>
                            <input placeholder='E-mail' type="email" name="email" />
                            <textarea placeholder='Сообщение' name="" id="" cols="40" rows="5"></textarea>
                        </div>
                        <input type="submit" className={classes.mobileSubmitBtn}/>
                    </form>
            </div>
            <div className={classes.formContainer}>
                <div className={classes.formBg}>
                    <div className={classes.bgText}>
                        <h1>Оставьте свои контакты <br /> и проектные ожидания, <br /> мы свяжемся с вами в <br /> кратчайшие сроки для <br /> обсуждения идеального  <br /> веб-проекта.</h1>
                        <p>Свяжемся с вами вкратчайшее время!</p>
                    </div>
                    <form>
                        <label className={classes.formLabel} htmlFor="">Заявка</label>
                        <div className={classes.formContnent}>
                            <div >
                                <input type="name" name='name' placeholder='Имя'/>
                                <input type="tel" name='tel' placeholder='Телефон'/>
                                <input type="email" name='email' placeholder='E-mail'/>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
                            </div>
                            <input type="submit" name='submit' className={classes.submitBtn}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

