import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const handleSignUp = () => {
    // handle successful sign up
  };

  return (
    <div>
      <SignUpForm onSignUp={handleSignUp} />
    </div>
  );
};

export default SignUp;

