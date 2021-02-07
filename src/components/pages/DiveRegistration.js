import React, { useState, useEffect } from 'react';
import './DiveRegistration.scss';
import Navbar from '../Navbar/Navbar';
import useGeoLocation from '../../hooks/useGeoLocation';

const DiveRegistration = () => {
  // -------------------------------------- ESTADO ------------------------------------
  const location = useGeoLocation();

  const [state, setState] = useState({
    date: '',
    register: '',
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
      lat: '',
      lng: '',
    },
    wetsuit_thickness: '',
    wetsuit_size: '',
    jacket_size: '',
    fins_size: '',
    weight: '',
  });

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
                name='visibilily'
                id='visibilily'
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
              />
            </div>
          </div>
        </div>
        <div className='section map form-wrapper'>
          <h1>Localización</h1>
          <div className='columns is-mobile'>
            <div className='column is-2'>
              <p>LAT</p>
            </div>
            <div className='column is-4'>
              <input
                className='input-field'
                type='text'
                name='location.lat'
                id='location.lat'
                value={location.locationData.lat}
              />
            </div>
            <div className='column is-2 '>
              <p className='text-end'>LONG</p>
            </div>
            <div className='column is-4'>
              <input
                className='input-field'
                type='text'
                name='location.lng'
                id='location.lng'
                value={location.locationData.lng}
              />
            </div>
          </div>
          <div className='location-map'>
            <h1>MAPA</h1>
          </div>
          <button type='submit'>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default DiveRegistration;
