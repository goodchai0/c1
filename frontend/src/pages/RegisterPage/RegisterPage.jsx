import React from 'react'
import loginImage from "../../assets/login.jpg"
import styles from './RegisterPage.module.css'
import Register from '../../components/Register/Register'
const RegisterPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={loginImage}/>
        <h2>Welcome aboard my friend</h2>
        <p>just a couple of clicks and we start</p>
      </div>
      <Register/>
    </div>
  )
}

export default RegisterPage
