import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './contexts/authContext';
import Portada from './components/Portada/Portada';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import UserPage from './components/pages/UserPage';
import DiveRegistration from './components/pages/DiveRegistration';
import 'bulma/css/bulma.css';
import './App.scss';

const App = () => {
  // ------------- CONTEXTO AUTENTICACIÓN ---------------
  const { authState, checkIfLoggedIn } = useContext(AuthContext);

  // ---------------- ESTADO DE APP ---------------------
  const [state, setState] = useState();
  const [portadaOn, setPortadaOn] = useState(true);

  const jumpToLoginComponent = () => {
    <Redirect to='/login' />;
  };

  useEffect(() => {
    setTimeout(() => {
      setPortadaOn(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {portadaOn ? (
        <Portada />
      ) : (
        <>
          <Route
            exact
            path='/'
            render={() =>
              !authState.isLogged ? (
                <Login />
              ) : (
                <Redirect to='/dive-registration' />
              )
            }
          />

          <Route path='/Signup' component={Signup} />
          <Route path='/user-page' component={UserPage} />
          <Route path='/dive-registration' component={DiveRegistration} />
        </>
      )}
    </div>
  );
};

export default App;
