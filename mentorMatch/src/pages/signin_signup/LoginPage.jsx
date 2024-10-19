import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../../styles/userLogin/LoginPage.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/signin', formData);
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('jwt', token);
                navigate('/user');
            }
        } catch (err) {
            console.log(JSON.stringify(err));
            setError(err.response.data.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
            <h2 className="mb-5 text-2xl">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-72">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="mb-2 p-2 text-base"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mb-2 p-2 text-base"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="p-2 bg-blue-700 text-white rounded cursor-pointer text-base hover:bg-blue-800">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
