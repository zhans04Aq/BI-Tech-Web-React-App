import React from 'react'
import classes from './form.module.scss'
import { useState } from 'react'


export default function Form(){

    const [name, setName] = useState('')
    const changeName = (event) => {
        setName(event.target.value)
    }

    console.log(name)
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    
    return(
        <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.formText}>
                        <h1>Оставьте свои контакты <br /> и проектные ожидания, <br /> мы свяжемся с вами в <br /> кратчайшие сроки для <br /> обсуждения идеального  <br /> веб-проекта.</h1>
                        <p>Свяжемся с вами вкратчайшее время!</p>
                </div>
                <form>
                    <label className={classes.formLabel} htmlFor="">Заявка</label>
                    <div className={classes.formContent}>
                        <div>
                            <input placeholder='Имя' onChange={changeName} value={name} type="name" required className={classes.formItem}/>
                            <input placeholder='Телефон' type="tel" required className={classes.formItem}/>
                            <input placeholder='E-mail' type="email" required className={classes.formItem}/>
                            <input placeholder='Сообщение' type="text" className={classes.formItem} id={classes.textareaItem}/>
                        </div>
                        <div className={classes.submitContainer}>
                            <input type="submit" name='submit' className={classes.submitBtn}/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}


