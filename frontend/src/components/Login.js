// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }); // Update the URL
            console.log(res.data);
            // Handle successful login

            // Store the token in local storage
            localStorage.setItem('token', res.data.token);

            // Redirect to the welcome page
            window.location.href = '/';
        } catch (error) {
            console.error('Login error:', error.response.data.msg);
            // Handle login error
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Register</Link> {/* Add a link to the Register page */}

        </div>
    );
};

export default Login;

