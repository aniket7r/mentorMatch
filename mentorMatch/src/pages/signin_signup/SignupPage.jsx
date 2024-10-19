import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '', // Ensure proper casing
        lastName: '' // Ensure proper casing
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
            const payload = {
                username: formData.username,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName
            };
    
            const response = await axios.post('http://localhost:4000/api/v1/signup', payload);
            if (response.status === 201) {
                localStorage.setItem('jwt', response.headers['authorization']);
                navigate('/user');
            }
        } catch (err) {
            if (err.response && err.response.status === 409) {
                setError('Username already exists. Please choose a different username.');
            } else {
                setError('Signup failed. Please try again.');
            }
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
            <h2 className="mb-5 text-2xl">Sign Up</h2>
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
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mb-2 p-2 text-base"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mb-2 p-2 text-base"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white text-base rounded">
                    Sign Up
                </button>
                {error && <p className="mt-2 text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default SignupPage;
