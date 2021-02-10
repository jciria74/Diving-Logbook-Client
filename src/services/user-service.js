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
  createNewDive = (
    owner,
    date,
    register,
    place,
    country,
    outside_temperature,
    water_temperature,
    visibility,
    start_time,
    end_time,
    duration,
    start_pressure_tank,
    end_pressure_tank,
    nitrox,
    max_depth,
    location,
    wetsuit_thickness,
    wetsuit_size,
    jacket_size,
    fins_size,
    weight
  ) => {
    return this.service
      .post('/newDive', {
        owner,
        date,
        register,
        place,
        country,
        outside_temperature,
        water_temperature,
        visibility,
        start_time,
        end_time,
        duration,
        start_pressure_tank,
        end_pressure_tank,
        nitrox,
        max_depth,
        location,
        wetsuit_thickness,
        wetsuit_size,
        jacket_size,
        fins_size,
        weight,
      })
      .then((response) => response.data);
  };
}

export default UserService;
