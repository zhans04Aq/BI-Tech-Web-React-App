import React from 'react'
import classes from './form.module.scss'
import { useState } from 'react'

export default function Form(){

    const [name, setName] = useState('')
    const changeName = (event) => {
        setName(event.target.value)
    }

    const [number, setNumber] = useState('')
    const changeNumber = (event) => {
        setNumber(event.target.value)
    }
  
    const [email, setEmail] = useState('')
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    
    const [message, setMessage] = useState('')
    const changeMessage = (event) => {
        setMessage(event.target.value)
    }

 
    
    const sendMail = () =>{

        console.log('email send')
        const config = {
            Username: 'beka.ibrashev@gmail.com',
            Password: 'B0E4ADE101520BF4AE7BB31397E811C641D1',
            Host: 'smtp.elasticemail.com',
            Port: '2525',
            To : 'beka.ibrashev@gmail.com',
            From : "beka.ibrashev@gmail.com",
            Subject : "ЗАЯВКА ДЛЯ BI-TECH",
            // Body : `ИМЯ ОТПРАВИТЕЛЯ - ${name}``НОМЕР ОТПРАВИТЕЛЯ - ${number}``Email ОТПРАВИТЕЛЯ - ${email}````СООБЩЕНИЕ: ${message}`
        }
        if(window.Email){
            window.Email.send({
                Host : "smtp.elasticemail.com",
                Username: 'beka.ibrashev@gmail.com',
                Password: 'B0E4ADE101520BF4AE7BB31397E811C641D1',
                To : 'beka.ibrashev@gmail.com',
                From : "beka.ibrashev@gmail.com",
                Subject : "ЗАЯВКА ДЛЯ BI-TECH",
                Body : `ИМЯ ОТПРАВИТЕЛЯ - ${name}НОМЕР ОТПРАВИТЕЛЯ - ${number}Email ОТПРАВИТЕЛЯ - ${email} СООБЩЕНИЕ: ${message}`
            }).then(
              message => alert(message)
            );
        }else{
            console.log('eeeeeeeeeee')
        }
    }


    return(
        <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.formText}>
                        <h1>Оставьте свои контакты <br /> и проектные ожидания, <br /> мы свяжемся с вами в <br /> кратчайшие сроки для <br /> обсуждения идеального  <br /> веб-проекта.</h1>
                        <p>Свяжемся с вами вкратчайшее время!</p>
                </div>
                <form onSubmit={sendMail}> 
                    <label className={classes.formLabel} htmlFor="">Заявка</label>
                    <div className={classes.formContent}>
                      
                            <div>
                            
                                <input placeholder='Имя' onChange={changeName} value={name} type="text" required className={classes.formItem}/>
                                <input placeholder='Телефон' onChange={changeNumber} value={number} type="tel" required className={classes.formItem}/>
                                <input placeholder='E-mail' onChange={changeEmail} value={email} type="email" required className={classes.formItem}/>
                                <input placeholder='Сообщение' onChange={changeMessage} value={message} type="text" className={classes.formItem} id={classes.textareaItem}/>
                           
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


