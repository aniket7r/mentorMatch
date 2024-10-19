// import React from 'react'
// import { useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import  UserSignIn from './components/UserSignIn'
// import UserSignUp from './components/UserSignUp'
// // import landing from './components/landing'
// // import home from './components/home'
// // import dashboard from './components/dashboard/dashboard'
// import UserBasicData from './components/UserBasicData'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path='/' element={<landing /> }></Route> */}
//         <Route path='/signup' element={<UserSignUp /> }></Route>
//         <Route path='/signin' element={<UserSignIn /> }></Route>
//         {/* <Route path='/home' element={<home /> }></Route> */}
//         {/* <Route path='/dashboard' element={<dashboard />}></Route> */}
//         <Route path='/userdata' element={<UserBasicData />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Connections from './pages/Connections';
import Mentors from './pages/Mentors';
import Notifications from './pages/Notifications';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/userLogin/LoginPage';
import SignupPage from './pages/userLogin/SignupPage';
import ChatPage from './pages/chat/ChatPage';
import './styles/App.css';

const App = () => {
    return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route> 
          {/* <Route path="/connections" element={<Connections />}></Route> */}
          <Route path="/connections/mentors" element={<Mentors />}></Route>
          {/* <Route path="/connections" element={<Connections />}></Route>
          <Route path="/connections" element={<Connections />}></Route> */}
          <Route path="/connections" element={<Connections />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/messaging" element={<ChatPage />} />

        </Routes>
      
      </BrowserRouter>
    );
};

export default App;
