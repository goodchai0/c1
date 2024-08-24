import React from 'react';
import styles from './Register.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// images from assets
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import eye from "../../assets/eye.png";
import hide from "../../assets/hide.svg";
import man from '../../assets/man.png';

const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isEmpty, setIsEmpty] = useState({ name: false, email: false, password: false, confirm_password: false });

    const [data, setData] = useState({ email: "", password: "", name: "", confirm_password: "" });

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emptyFields = {
            name: !data.name,
            email: !data.email,
            password: !data.password,
            confirm_password: !data.confirm_password
        };
        setIsEmpty(emptyFields);
        if (!data.name || !data.email || !data.password || !data.confirm_password) {
            alert("All fields are required");
            return;
        }
        if (data.password !== data.confirm_password) {
            setIsEmpty({ ...isEmpty, ["confirm_password"]: true });
            alert("Passwords do not match");
            return;
        }
        if (!validateEmail(data.email)) {
            alert("Invalid email address");
            return;
        }
        console.log({ ...data });
        return;
    };

    const handleChange = (e) => {
        setIsEmpty({ ...isEmpty, [e.target.name]: !e.target.value });
        setData({ ...data, [e.target.name]: e.target.value });
        return;
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Register</h1>
            {/* Input for name */}
            <div className={`${styles.input_box} ${isEmpty.name ? styles.error : ''}`}>
                <img src={man} alt="User icon" />
                <input
                    className={styles.input}
                    name="name"
                    value={data.name}
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                />
            </div>
            {/* Input for email */}
            <div className={`${styles.input_box} ${isEmpty.email ? styles.error : ''}`}>
                <img src={email} alt="Email icon" />
                <input
                    className={styles.input}
                    name="email"
                    value={data.email}
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            {/* Input for password */}
            <div className={`${styles.input_box} ${isEmpty.password ? styles.error : ''}`}>
                <img src={password} alt="Password icon" />
                <input
                    className={styles.input}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                />
                <img
                    src={showPassword ? hide : eye}
                    alt={showPassword ? "Hide password icon" : "Show password icon"}
                    className={styles.eye}
                    onClick={() => setShowPassword(!showPassword)}
                />
            </div>
            {/* Input for confirm password */}
            <div className={`${styles.input_box} ${isEmpty.confirm_password ? styles.error : ''}`}>
                <img src={password} alt="Password icon" />
                <input
                    className={styles.input}
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={data.confirm_password}
                    onChange={handleChange}
                />
                <img
                    src={showConfirmPassword ? hide : eye}
                    alt={showConfirmPassword ? "Hide password icon" : "Show password icon"}
                    className={styles.eye}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
            </div>

            <button onClick={handleSubmit} className={styles.button}>
                Register
            </button>
            <p className={styles.footer}>
                Have an account?
            </p>
            <button className={styles.button_register} onClick={() => navigate("/login")}>
                Login
            </button>
        </div>
    );
};

export default Register;
