import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h1 className="login-page-title">Login Page</h1>
      <form className="login-form">
        <label className="login-label">
          Email:
          <input className="login-input" type="email" />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input className="login-input" type="password" />
        </label>
        <br />
        <Link to="/profile" className="login-button">Log In</Link>
      </form>
      <p className="option">Don't have an account? <Link to="/signup">Sign Up Now!</Link></p>
    </div>
  );
}

export default Login;










// USE THE BOTTOM PART ONCE BACKEND IS AVAILABLE

// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignIn = (e) => {
//     e.preventDefault();

//     // Here we can add our own code to handle authentication
//     // For example, we can send a request to the backend server with the email and password
//     fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     })
//       .then((response) => {
//         // Handle response here
//         console.log('Login response:', response);
//         if (response.ok) {
//           // Redirect to user profile page if login is successful
//           history.push('/profile');
//         } else {
//           console.log('Login failed:', response.status);
//         }
//       })
//       .catch((error) => {
//         // Handle error here
//         console.log('Login error:', error);
//       });
//   };

//   return (
//     <div className="login-page">
//       <h1 className="login-page-title">Login Page</h1>
//       <form className="login-form" onSubmit={handleSignIn}>
//         <label className="login-label">
//           Email:
//           <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label className="login-label">
//           Password:
//           <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button className="login-button" type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
