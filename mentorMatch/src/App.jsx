import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import signin from './components/signin'
// import signup from './components/signup'
// import landing from './components/landing'
// import home from './components/home'
// import dashboard from './components/dashboard'
import UserData from './components/userData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<landing /> }></Route>
        <Route path='/signup' element={<signup /> }></Route>
        <Route path='/signin' element={<signin /> }></Route>
        <Route path='/home' element={<home /> }></Route>
        <Route path='/dashboard' element={<dashboard />}></Route> */}
        <Route path='/userdata' element={<UserData />}></Route>

        {/* <Route path='/chatroom' element={<Chatroom /> }></Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App