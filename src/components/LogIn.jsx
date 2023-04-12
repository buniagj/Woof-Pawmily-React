import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoginSuccess(true);
        navigate('/profile');
      })
      .catch((error) => {
        console.log('Login error:', error);
        if (failedAttempts < 2) {
          setFailedAttempts(failedAttempts + 1);
        } else {
          alert('You have exceeded the maximum number of login attempts. Please reset your password.');
        }
      });
  };

  return (
    <section className='signup login'>
    <div className="login-page">
      <h1 className="login-page-title">Login Page</h1>
      {loginSuccess && <p className="success-message">Login successful!</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <label className="login-label">
          Email:
          <input 
            className="login-input" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input 
            className="login-input" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="login-button">Log In</button>
      </form>
      {failedAttempts === 2 && (
        <p className="option">
          Forgot password? Click <Link to="/reset-password">here</Link> to reset your password.
        </p>
      )}
      <p className="option">Don't have an account? <Link to="/signup">Sign Up Now!</Link></p>
    </div>
    </section>
  );
};

export default Login;
