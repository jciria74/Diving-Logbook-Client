import React, { createContext, useState } from 'react';
import AuthService from '../services/auth-service';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const authService = new AuthService();

  const [authState, setAuthState] = useState({
    isLogged: false,
    newUser: { username: '', email: '', password: '' },
    loggedinUser: { _idUser: '', username: '' },
    errorMessage: '',
    dives: '',
  });

  const checkIfLoggedIn = () => {
    authService.loggedin().then((result) => {
      setAuthState({
        ...authState,
        isLogged: result.username,
        dives: result.dives,
      });
    });
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    authService
      .signup(
        authState.newUser.username,
        authState.newUser.email,
        authState.newUser.password
      )
      .then((result) => {
        console.log(result);
        if (result.message) {
          setAuthState({ ...authState, errorMessage: result.message });
        } else {
          setAuthState({
            ...authState,
            errorMessage: '',
            loggedinUser: { _idUser: result._id, username: result.username },
            newUser: { username: '', email: '', password: '' },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    authService
      .login(authState.newUser.username, authState.newUser.password)
      .then((result) => {
        // console.log(result);
        if (result.message) {
          setAuthState({ ...authState, errorMessage: result.message });
        } else {
          setAuthState({
            ...authState,
            errorMessage: '',
            loggedinUser: { _idUser: result._id, username: result.username },
            newUser: { username: '', email: '', password: '' },
            isLogged: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setAuthState({
      ...authState,
      newUser: { ...authState.newUser, [e.target.name]: e.target.value },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        handleSubmitSignup,
        handleSubmitLogin,
        handleChange,
        checkIfLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
