import React, { useState,useEffect } from 'react';

function Login({ LoggedIn, setLoggedIn, openLogin, setopenLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
                <button>Back to main page</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default Login;
