import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

const SignUp = ({ onSignUp }) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    console.log('email:', email, 'password:', password);
    // Perform user registration and sign up
    // ...
    // Call onSignUp function passed as prop to notify parent component
    onSignUp();
  };

  return (
    <div className="signup-page">
      <h1>Create your Pawsonal account.</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>First Name:</label>
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />
        <label>Pet Name:</label>
        <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
        <br />
        <label>Pet Breed:</label>
        <input type="text" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
        <br />
        <label>Pet Age:</label>
        <input type="text" value={petAge} onChange={(e) => setPetAge(e.target.value)} />
        <br />
        <Link to="/profile">
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;







// USE THIS WHEN THE BACKEND IS AVAILABLE

// import React, { useState } from 'react';
// import './SignUpForm.css';

// const SignUp = ({ onSignUp }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('handleSubmit called');
//     console.log('email:', email, 'password:', password);
//     // Perform user registration and sign up
//     // ...
//     // Call onSignUp function passed as prop to notify parent component
//     onSignUp();
//   };

//   return (
//     <div className="signup-page">
//       <h1>Create your Pawsonal account.</h1>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <label>First Name:</label>
//         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         <br />
//         <label>Last Name:</label>
//         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//         <br />
//         <label>Phone Number:</label>
//         <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         <br />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
