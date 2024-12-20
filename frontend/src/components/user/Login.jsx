

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

export  const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                const res = await axios.post(
                    'http://localhost:5002/api/login',
                    {
                        email,
                        password
                    },
                    { withCredentials: true }
                );

                if (res.status === 200) {
                    sessionStorage.setItem('_id', res.data.id);
                    sessionStorage.setItem('email', res.data.email);
                    setEmail('');
                    setPassword('');
                    setError('');
                    navigate('/');
                    // refresh page
                    window.location.reload();
                } else {
                    console.log(res);
                    setError('Invalid credentials');
                }
            } catch (err) {
                setError(err);
            }
        } else {
            setError('All fields are required.');
        }
    };
    return (
        <div className="login">
            <form onSubmit={(e) => submitForm(e)}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};



