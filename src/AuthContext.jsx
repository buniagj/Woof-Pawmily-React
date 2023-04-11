import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    // implementation for sign up
  };

  const signIn = (email, password) => {
    // implementation for sign in
  };

  const signOut = () => {
    // implementation for sign out
  };

  const resetPassword = (email) => {
    // implementation for reset password
  };

  const updateEmail = (email) => {
    // implementation for update email
  };

  const updatePassword = (password) => {
    // implementation for update password
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};