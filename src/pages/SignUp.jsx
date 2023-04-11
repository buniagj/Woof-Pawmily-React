import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const handleSignUp = async ({ email, password }) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // handle successful sign up
    } catch (error) {
      console.error(error);
      // handle sign up error
    }
  };

  return (
    <div>
      <SignUpForm onSignUp={handleSignUp} />
    </div>
  );
};

export default SignUp;
