// user-service.js

import axios from 'axios';

class UserService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true,
    });
    this.service = service;
  }
  getAllDives = (_idUser) => {
    return this.service
      .post('/myDives', { _idUser })
      .then((response) => response.data);
  };
  getLastDive = (_idUser) => {
    return this.service
      .post('/lastDive', { _idUser })
      .then((response) => response.data);
  };
}

export default UserService;
