
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserSignupPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
// const navigateTo = useNavigate();


//   const handleSignup = async () => {
//     try {
//       // Validation
//       if (!username || !password || !age) {
//         alert('Please fill in all fields');
//         return;
//       }

//       // Perform any additional validation here (e.g., email format, password strength)

//       // Post data to server using Axios
//       // console.log("before axios in signup.jsx")
//       const response = await axios.post('http://localhost:3009/user/signup', { username, password, age });
//       // console.log("after axios in signup.jsx")
//       if (response.status === 200) {
//         alert('Signup successful!');
//         navigateTo('/Home')
//       } else {
//         alert('Signup failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <div className="form-group">
//         <label>Username:</label>
//         <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//       </div>
//       <button onClick={handleSignup}>Sign Up</button>
//     </div>
//   );
// };

// export default UserSignupPage;
