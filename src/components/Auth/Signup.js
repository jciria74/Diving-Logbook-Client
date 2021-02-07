import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import './Auth.scss';
import blueLogo from '../../icons/logo-blue.svg';
import avatar from '../../icons/avatar.svg';
import usernameIcon from '../../icons/username.svg';
import locked from '../../icons/locked.svg';
import email from '../../icons/email.svg';

const Signup = () => {
  const { authState, handleSubmitSignup, handleChange } = useContext(
    AuthContext
  );

  return (
    <div className='Signup'>
      <div className='.container.is-fullhd'>
        <div className='upper-section'>
          <img className='logo' src={blueLogo} alt='logo' />
          <div className='avatar avatar-signup'>
            <h3>Sign Up</h3>
            <img src={avatar} alt='avatar' />
          </div>
          <form onSubmit={handleSubmitSignup}>
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
                <img className='s-icon' src={email} alt='email' />
              </div>
              <input
                className='input-field'
                type='email'
                name='email'
                id='email'
                value={authState.newUser.email}
                onChange={handleChange}
                placeholder='e-mail'
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
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='lower-section'>
          <p>¿Ya tienes una cuenta?</p>
          <Link to='/Login'>
            <h4>Entra, AQUÍ</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
