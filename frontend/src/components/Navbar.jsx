import React from 'react';
import homeIcon from '../assets/icons/home.svg';
import connectionsIcon from '../assets/icons/connections.svg';
import messagingIcon from '../assets/icons/messaging.svg';
import notificationsIcon from '../assets/icons/notification.svg';
import profileIcon from '../assets/icons/profile.svg';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-700 text-white">
            <div className="text-xl font-bold">Logo</div>
            <div className="flex space-x-4">
                <a href='/home'><img src={homeIcon} alt="Home" className="w-6 h-6 cursor-pointer" /></a>
                <a href='/connections'><img src={connectionsIcon} alt="Connections" className="w-6 h-6 cursor-pointer" /></a>
                <a href='/messaging'><img src={messagingIcon} alt="Messaging" className="w-6 h-6 cursor-pointer" /></a>
                <a href='/notifications'><img src={notificationsIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" /></a>
                <a href='/profile'><img src={profileIcon} alt="Profile" className="w-6 h-6 cursor-pointer" /></a>
            </div>
        </nav>
    );
};

export default Navbar;
