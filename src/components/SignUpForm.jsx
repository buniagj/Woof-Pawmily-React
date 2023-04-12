import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import './SignUpForm.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    console.log('email:', email, 'password:', password);

    // Perform user registration and sign up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered successfully
        console.log('user registered successfully:', userCredential.user);
        // Set the success state to true
        setSignUpSuccess(true);
      })
      .catch((error) => {
        // An error occurred while registering the user
        console.log('error registering user:', error);
      });
  };

  const passwordValidationMessage = '*Password should be at least 6 characters long.';

  return (
    <section className='signup'>
    <div className="signup-page">
      {signUpSuccess ? (
        <div className="signup-success">
          <h2>You have signed up successfully!</h2>
          <Link to="/profile">Go to your profile.</Link>
        </div>
      ) : (
        <>
          <h1 className='error'>Create your Pawsonal account.</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="left-column">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <label>Phone Number:</label>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <br />
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {password.length < 6 && <p className="password-validation">{passwordValidationMessage}</p>}
            </div>
            <div className="right-column">
              <label>Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              <br />
              <label>Pet's Name:</label>
              <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
              <br />
              <label>Pet's Breed:</label>
              <input type="text" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
              <br />
              <label>Pet's Age:</label>
              <input type="text" value={petAge} onChange={(e) => setPetAge(e.target.value)} />
            </div>
            <br />
            <button type="submit">Sign Up</button>
            <Link to="/login">Already have an account? Log in here.</Link>
          </form>
        </>
      )}
    </div>
   </section>
  );
};

export default SignUp;
