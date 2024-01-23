import React from 'react'
import classes from './form.module.scss'

export default function Form(){
    return(
        <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.formBg}>
                    {/* <div className={classes.bgText}>
                        <h1>Оставьте свои контакты <br /> и проектные ожидания, <br /> мы свяжемся с вами в <br /> кратчайшие сроки для <br /> обсуждения идеального  <br /> веб-проекта.</h1>
                        <p>Свяжемся с вами вкратчайшее время!</p>
                    </div> */}
                    {/* <form>
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
                    </form> */}
                </div>
            </div>
        </div>
    )
}

