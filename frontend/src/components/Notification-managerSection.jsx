import React, { useState } from 'react';
import axios from 'axios';

const NotificationManager = () => {
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('jwt');
            const response = await axios.put('/notification-manager', { status }, {
                headers: {
                    'Authorization': token
                }
            });
            setMessage(`Notification updated: ${response.data}`);
        } catch (error) {
            setMessage(`Error: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Update Notification Status
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="status" className="sr-only">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="unseen">Unseen</option>
                                <option value="accepted">Accepted</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Status
                        </button>
                    </div>
                </form>
                {message && (
                    <div className="mt-6 text-center text-sm text-gray-600">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationManager;
