import React from 'react'
import styles from './Login.module.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
//images from assests
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import eye from "../../assets/eye.png";
import hide from "../../assets/hide.svg";
const Login = () => {
    const navigate=useNavigate();

    const [showPassword,setShowPassword]=useState(false);

    const [data, setData]=useState({email:"",password:""})
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log({...data})
        return
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        return
    }

  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Login componenet</h1>
        {/* lets make these two classes */}
        <div className={styles.input_box} >
            <img src={email} alt="Email Icon"/>
            <input
            className={styles.input}
            name="email"
            value={data.email}
            type="email"
            placeholder='Email'
            onChange={handleChange}
            />
        </div>
        <div className={styles.input_box}>
            <img src={password}alt="Password Icon"/>
            <input
            className={styles.input}
            name="password"
            type={showPassword?"text":"password"}
            placeholder='Password'
            value={data.password}
            onChange={handleChange}
            />
            <img src={showPassword?hide:eye} className={styles.eye} onClick={()=>
                setShowPassword(!showPassword)
            }/>
        </div>

        <button onClick={handleSubmit} className={styles.button}>
            Login in
        </button>
        <p className={styles.footer}>
            Have no account yet?
        </p>
        <button className={styles.button_register} onClick={()=>navigate("/register")}>
            Register
        </button>
    </div>

  )
}

export default Login
