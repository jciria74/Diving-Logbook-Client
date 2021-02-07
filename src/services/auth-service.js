// auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true,
    });
    this.service = service;
  }
  signup = (username, email, password) => {
    return this.service
      .post('/registro', { username, email, password })
      .then((response) => response.data);
  };
  login = (username, password) => {
    return this.service
      .post('/inicio-sesion', { username, password })
      .then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get('/loggedin').then((response) => response.data);
  };

  logout = () => {
    return this.service
      .post('/cerrar-sesion', {})
      .then((response) => response.data);
  };
}

export default AuthService;
