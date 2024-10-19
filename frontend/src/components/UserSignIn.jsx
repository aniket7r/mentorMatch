
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserSignInPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigateTo = useNavigate();

//   const handleSignup = async () => {
//     // try {
//       // Validation
//       if (!username || !password ) {
//         alert('Please fill in all fields');
//         return;
//       }

//       // Perform any additional validation here (e.g., email format, password strength)

//       // Post data to server using Axios
//       const response = await axios.post('http://localhost:3009/user/signin', { username, password })
//       .then(response => {
//         const token = response.data.token
//         console.log(token);
//         localStorage.setItem('jwtToken', token);
//         if (response.status === 200) {
//           alert('Signin successful!');
//           // navigateTo('/Home');
//         } else {
//           alert('Signin failed. Please try again later.');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign In</h2>
//       <div className="form-group">
//         <label>Email:</label>
//         <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button onClick={handleSignup}>Sign In</button>

//     </div>
//   );
// };

// export default UserSignInPage;