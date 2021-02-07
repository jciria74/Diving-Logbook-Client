import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';
import './Auth.scss';
import blueLogo from '../../icons/logo-blue.svg';
import avatar from '../../icons/avatar.svg';
import usernameIcon from '../../icons/username.svg';
import locked from '../../icons/locked.svg';

const Login = () => {
  const { authState, handleSubmitLogin, handleChange } = useContext(
    AuthContext
  );
  return (
    <div className='Login'>
      <div className='.container.is-fullhd'>
        <div className='upper-section'>
          <img className='logo' src={blueLogo} alt='logo' />
          <div className='avatar avatar-login'>
            <h3>Login</h3>
            <img src={avatar} alt='avatar' />
          </div>
          <form onSubmit={handleSubmitLogin}>
            <div className='form-input'>
              <div className='icon-input'>
                <img className='s-icon' src={usernameIcon} alt='username' />
              </div>
              <input
                className='input-field'
                type='text'
                name='username'
                id='username'
                value={authState.newUser.username}
                onChange={handleChange}
                placeholder='username'
              />
            </div>
            <div className='form-input'>
              <div className='icon-input'>
                <img className='s-icon' src={locked} alt='locked' />
              </div>
              <input
                className='input-field'
                type='password'
                name='password'
                id='password'
                value={authState.newUser.password}
                onChange={handleChange}
                placeholder='password'
              />
            </div>
            <div className='error-message'>
              {authState.errorMessage && <p>{authState.errorMessage}</p>}
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
        <div className='lower-section'>
          <p>¿Aún no tienes una cuenta?</p>
          <Link to='/Signup'>
            <h4>Regístrate, AQUÍ</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
