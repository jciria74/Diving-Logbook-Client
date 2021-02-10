import React, { useState, useContext, useEffect } from 'react';
import './DiveRegistration.scss';
import UserService from '../services/user-service';
import { AuthContext } from '../contexts/authContext';
import { UserContext } from '../contexts/userContext';
import Map from '../components/Map/Map';
import Navbar from '../components/Navbar/Navbar';
import useGeoLocation from '../hooks/useGeoLocation';

const DiveRegistration = (props) => {
  const userService = new UserService();

  // ---------------------- CONTEXTOS de AUTENTICACIÓN y de USUARIO--------------------
  const { authState, setAuthState } = useContext(AuthContext);
  const { userState, setUserState } = useContext(UserContext);

  // ------------------------------------ ESTADOS --------------------------------------
  const { locationData } = useGeoLocation();
  const [isRegistered, setIsRegistered] = useState(false);
  const [state, setState] = useState({
    owner: authState.loggedinUser._idUser,
    date: '',
    register: userState.dives.length + 1,
    place: '',
    country: '',
    outside_temperature: '',
    water_temperature: '',
    visibility: '',
    start_time: '',
    end_time: '',
    duration: '',
    start_pressure_tank: '',
    end_pressure_tank: '',
    nitrox: '',
    max_depth: '',
    location: {
      lat: locationData.lat,
      lng: locationData.lng,
    },
    wetsuit_thickness: '',
    wetsuit_size: '',
    jacket_size: '',
    fins_size: '',
    weight: '',
  });

  // ------------------------------------ FUNCIONES --------------------------------------
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .createNewDive(
        state.owner,
        state.date,
        state.register,
        state.place,
        state.country,
        state.outside_temperature,
        state.water_temperature,
        state.visibility,
        state.start_time,
        state.end_time,
        state.duration,
        state.start_pressure_tank,
        state.end_pressure_tank,
        state.nitrox,
        state.max_depth,
        state.location,
        state.wetsuit_thickness,
        state.wetsuit_size,
        state.jacket_size,
        state.fins_size,
        state.weight
      )
      .then((result) => {
        console.log(result);
        setState({
          owner: authState.loggedinUser._idUser,
          date: '',
          register: userState.dives.length + 1,
          place: '',
          country: '',
          outside_temperature: '',
          water_temperature: '',
          visibility: '',
          start_time: '',
          end_time: '',
          duration: '',
          start_pressure_tank: '',
          end_pressure_tank: '',
          nitrox: '',
          max_depth: '',
          location: {
            lat: locationData.lat,
            lng: locationData.lng,
          },
          wetsuit_thickness: '',
          wetsuit_size: '',
          jacket_size: '',
          fins_size: '',
          weight: '',
        });
        setIsRegistered(true);
        props.history.push('/user-page');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //------- Getting actual data and time ---------
    let today = new Date();
    const monthNames = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'setiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();
    const currentDate = dd + ' ' + mm + ' ' + yyyy;
    const currentTime = today.getHours() + ':' + today.getMinutes();

    setState((prevState) => {
      return {
        ...prevState,
        date: currentDate,
        location: {
          lat: locationData.lat,
          lng: locationData.lng,
        },
      };
    });
  }, [locationData]);

  return (
    <div className='DiveRegistration'>
      <Navbar />
      <div className='container is-fullhd main'>
        <h1>Registro</h1>
        <div className='section purple form-wrapper'>
          <div className='columns is-mobile '>
            <div className='column is-3 '>
              <p>Fecha</p>
            </div>
            <div className='column is-4'>
              <input
                className='input-field'
                type='text'
                name='date'
                id='date'
                value={state.date}
                onChange={handleChange}
              />
            </div>
            <div className='column is-2'>
              <p className='text-end'>Nº</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='register'
                id='register'
                value={state.register}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Lugar</p>
            </div>
            <div className='column is-9'>
              <input
                className='input-field'
                type='text'
                name='place'
                id='place'
                value={state.place}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>País</p>
            </div>
            <div className='column is-9'>
              <input
                className='input-field'
                type='text'
                name='country'
                id='country'
                value={state.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Temp exterior (ºC)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='outside_temperature'
                id='outside_temperature'
                value={state.outside_temperature}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>Temp agua (ºC)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='water_temperature'
                id='water_temperature'
                value={state.water_temperature}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Visibilidad</p>
            </div>
            <div className='column is-9'>
              <input
                className='input-field'
                type='text'
                name='visibility'
                id='visibility'
                value={state.visibility}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Hora entrada</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='start_time'
                id='start_time'
                value={state.start_time}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>Hora salida</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='end_time'
                id='end_time'
                value={state.end_time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Duración (min)</p>
            </div>
            <div className='column is-9'>
              <input
                className='input-field'
                type='text'
                name='duration'
                id='duration'
                value={state.duration}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>bares/psi entrada</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='start_pressure_tank'
                id='start_pressure_tank'
                value={state.start_pressure_tank}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>bares/psi salida</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='end_pressure_tank'
                id='end_pressure_tank'
                value={state.end_pressure_tank}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Nitrox (%)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='nitrox'
                id='nitrox'
                value={state.nitrox}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>Profundidad máxima</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='max_depth'
                id='max_depth'
                value={state.max_depth}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='section blue form-wrapper'>
          <h1>Equipo</h1>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Traje (mm)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='wetsuit_thickness'
                id='wetsuit_thickness'
                value={state.wetsuit_thickness}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>Traje (Talla)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='wetsuit_size'
                id='wetsuit_size'
                value={state.wetsuit_size}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Jacket (Talla)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='jacket_size'
                id='jacket_size'
                value={state.jacket_size}
                onChange={handleChange}
              />
            </div>
            <div className='column is-3 '>
              <p className='text-end'>Aletas (Talla)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='fins_size'
                id='fins_size'
                value={state.fins_size}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <p>Lastre (Kg)</p>
            </div>
            <div className='column is-3'>
              <input
                className='input-field'
                type='text'
                name='weight'
                id='weight'
                value={state.weight}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='section map form-wrapper'>
          <h1>Localización</h1>
          <div className='columns is-mobile'>
            <div className='column is-2 coord-lat'>
              <p>LAT</p>
            </div>
            <div className='column is-4'>
              <input
                className='input-field coord'
                type='text'
                name='location.lat'
                id='location.lat'
                // value={state.location.lat}
                placeholder={locationData.lat}
                onChange={handleChange}
              />
            </div>
            <div className='column is-2 '>
              <p className='text-end'>LONG</p>
            </div>
            <div className='column is-4'>
              <input
                className='input-field coord'
                type='text'
                name='location.lng'
                id='location.lng'
                // value={state.location.lng}
                placeholder={locationData.lng}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='location-map'>
            <Map />
          </div>
          <button onClick={handleSubmit}>
            <h2>Registrar</h2>
          </button>
        </div>
      </div>
      {/* {isRegistered ? <Modal /> : ''} */}
    </div>
  );
};

export default DiveRegistration;
