import React, { useState, useEffect } from 'react';
import Log from './Login.jpg'
import img from './Login.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './Login.css'
import { BrowserRouter as Router, Route, Routes, Navigate,Link,useNavigate } from 'react-router-dom';

function Login({ LoggedIn, setLoggedIn}) {
    const [email, setEmail] = useState('harshita@gmail.com');
    const [password, setPassword] = useState('Harshita@2005');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://warehouse-management-backend-qxu0.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setLoggedIn(true);
                localStorage.setItem('token', data.token);
            } else {
                setMessage(data.error || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage('Error occurred. Please try again.');
        }
    };

   useEffect(() => {
     if(LoggedIn){
        navigate("/")
     }
   
   }, [LoggedIn,setLoggedIn])
   


    return (
        <div className="login-main flex md:flex-row flex-col">
            <div className="login-left">
                <img src={img} alt="Login Background" />
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-center">
                        <h2>Welcome back!</h2>
                        <p>Please enter your details</p>
                        <form onSubmit={handleLogin}>
                            <input type="email" placeholder="Email" name="email"  value={email} required />
                            <div className="pass-input-div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    required
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle-icon"
                                />
                            </div>
                            <div className="login-center-buttons">
                                <button type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                    <p className="login-bottom-p">
                        Don't have an account?<Link to="/signup"> Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
