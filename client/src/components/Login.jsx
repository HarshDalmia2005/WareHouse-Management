import React, { useState,useEffect } from 'react';
import Log from './Login.jpg'

function Login({ LoggedIn, setLoggedIn, openLogin, setopenLogin }) {
    const [email, setEmail] = useState('harsh@gmail.com');
    const [password, setPassword] = useState('Harsh@2005');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
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
                setopenLogin(false);
                localStorage.setItem('token', data.token);
            } else {
                setMessage(data.error || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage('Error occurred. Please try again.');
        }
    };


   

    return (
        <div className="login-container bg-[#BBD686] min-h-screen flex flex-col justify-center items-center">
            <h2 className='text-center text-6xl font-bold mb-10'>Login Page</h2>
            <form onSubmit={handleLogin} className='h-96 bg-white rounded-2xl p-5 flex flex-col w-1/3 mx-auto '>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className='p-2 px-5 rounded-3xl border border-black outline-none mt-10 w-[80%] mx-auto'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className='p-2 px-5 rounded-3xl border border-black outline-none mt-10 w-[80%] mx-auto'
                />
                <button type="submit" className='p-2 rounded-3xl bg-[#DA8E42] text-white font-bold mt-10 w-[80%] mx-auto'>Login</button>
                <button className='p-2 rounded-3xl bg-[#B2675E] text-white font-bold mt-5 w-[80%] mx-auto' onClick={(e)=>setopenLogin(false)}>Back to main page</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default Login;
