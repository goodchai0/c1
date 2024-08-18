import React from 'react'
import loginImage from "../../assets/login.jpg"
import styles from './LoginPage.module.css'
import Login from '../../components/Login/Login'
const LoginPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={loginImage}/>
        <h2>Welcome aboard my friend</h2>
        <p>just a couple of clicks and we start</p>
      </div>
      <Login/>
    </div>
  )
}

export default LoginPage
