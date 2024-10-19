

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NotificationsSection = () => {
//     const [notification, setNotification] = useState({});

//     useEffect(() => {
//         console.log('Fetching profile data...');
//         const token = localStorage.getItem('jwt');
//         axios.get('http://localhost:4000/api/v1/network/notifications', {
//             headers: {
//                 'Authorization': token
//             }
//         })
//             .then((response) => {
//                 setNotification(response.data.notifications);
//                 console.log("response data: ", response.data.notifications);
//             })
//             .catch((error) => {
//                 console.error('There was an error!', error);
//             });
//     }, []);

//     return (
//         <div className="p-5 bg-white-100 h-full overflow-y-auto">
//             <h2 className="text-lg font-semibold mb-4">Notification</h2>
//             {
//                 Object.entries(notification).map(([details, senderId]) => {
//                     console.log("details: ", details);
//                     console.log("senderId: ", senderId.message);
//                     // if (userId === matchedUserId) return null; // Skip if userId notification matchedUserId
//                     return (
//                         <>
//                         <div key={details.senderId} className="mb-3 p-3 text-sm border border-gray-300 rounded-lg bg-gray-100">
//                             <p>Sender: {senderId.senderId}</p>
//                             <p>Type: {senderId.type}</p>
//                             <p>Message: {senderId.message}</p>
//                             <p>Date: {senderId.created_on}</p>
//                             <div className='flex flex-row gap-4'>
//                             <button type="submit" className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                 Accept
//                             </button>
//                             <button type="submit" className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                 Reject
//                             </button>
//                         </div>
//                         </div>
//                         </>
//                     );
//                 })
//             }
//         </div>
//     );
// };

// export default NotificationsSection;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationsSection = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        console.log('Fetching notifications data...');
        const token = localStorage.getItem('jwt');
        axios.get('http://localhost:4000/api/v1/network/notifications', {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                setNotifications(response.data.notifications);
                console.log("response data: ", response.data.notifications);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleStatusChange = (notificationId, status) => {
        const token = localStorage.getItem('jwt');
        axios.put('http://localhost:4000/api/v1/network/notification-manager', 
            { status }, 
            {
                headers: {
                    'Authorization': token
                }
            }
        )
        .then((response) => {
            console.log('Notification status updated', response.data);
            // Update the notification status in the local state
            setNotifications((prevNotifications) => 
                prevNotifications.map((notif) => 
                    notif._id === notificationId ? { ...notif, status } : notif
                )
            );
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
        <div className="p-5 bg-white-100 h-full overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>
            {
                notifications.map((notification) => (
                    <div key={notification._id} className="mb-3 p-3 text-sm border border-gray-300 rounded-lg bg-gray-100">
                        <p>Sender: {notification.senderId}</p>
                        <p>Type: {notification.type}</p>
                        <p>Message: {notification.message}</p>
                        <p>Date: {notification.created_on}</p>
                        <div className='flex flex-row gap-4'>
                            <button 
                                type="button" 
                                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => handleStatusChange(notification._id, 'accepted')}
                            >
                                Accept
                            </button>
                            <button 
                                type="button" 
                                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => handleStatusChange(notification._id, 'rejected')}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NotificationsSection;
