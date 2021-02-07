import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import UserService from '../../services/user-service';
import Navbar from '../Navbar/Navbar';
import './UserPage.scss';
import medal from '../../icons/medal-purple.svg';
import equipo from '../../icons/miEquipo.svg';
import inmersiones from '../../icons/misInmersiones.svg';
import registro from '../../icons/registro.svg';
import watch from '../../icons/diving-watch.svg';
import termometro from '../../icons/termometer.svg';
import depth from '../../icons/depth-blue.svg';
import gaugeIni from '../../icons/gauge_ini.svg';
import gaugeFin from '../../icons/gauge_fin.svg';
import tank from '../../icons/oxygen-tank.svg';

const UserPage = () => {
  const userService = new UserService();

  // ------------- CONTEXTO AUTENTICACIÓN ---------------
  const { authState, setAuthState } = useContext(AuthContext);

  //------------------ ESTADOS -------------------
  const [actualDate, setActualDate] = useState('');
  const [actualTime, setActualTime] = useState('');

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
    setActualDate(currentDate);
    setActualTime(currentTime);

    //------- Petición para obtener los dives del usuario ---------
    userService.getAllDives(authState.loggedinUser._idUser).then((result) => {
      console.log(result);
      setAuthState({
        ...authState,
        dives: result,
        lastDive: result[result.length - 1],
      });
    });
  }, []);

  return (
    <div className='UserPage'>
      <div className='container is-fullhd'>
        <Navbar />

        <div className='upper-user-section'>
          <div className='date'>
            {/* <p>{actualTime}</p> */}
            <p>{actualDate}</p>
          </div>
          <div className='icons'>
            <div className='icon-info'>
              <img src={equipo} alt='icon-equipo' />
              <p>Mis</p>
              <p>inmersiones</p>
            </div>
            <div className='icon-info'>
              <img src={inmersiones} alt='icon-registro' />
              <p>Registrar</p>
              <p>inmersión</p>
            </div>
            <div className='icon-info'>
              <img src={registro} alt='icon-inmersiones' />
              <p>Mi </p>
              <p>equipo</p>
            </div>
          </div>
        </div>

        <div className='middle-user-section'>
          <div className='category'>
            <div className='divings-number'>
              <h1>{authState.dives && authState.dives.length}</h1>
            </div>
            <hr />
            <div className='diving-level'>
              <p>Instructor</p>
              <img src={medal} alt='medal' />
            </div>
          </div>
          <div className='info'>
            <p>Última inmersión</p>
            <div className='location-info'>
              <p>
                {authState.lastDive &&
                  `${authState.lastDive.place}, ${authState.lastDive.country}`}
              </p>
            </div>
            <div className='icon-info'>
              <div className='general-info'>
                <div className='diving-info'>
                  <img src={tank} alt='oxigen-tank' />
                  <p>
                    {authState.lastDive && authState.lastDive.tank_capacity}
                  </p>
                </div>
                <div className='diving-info'>
                  <img src={gaugeIni} alt='manometer' />
                  <p>
                    {authState.lastDive &&
                      authState.lastDive.start_pressure_tank}
                  </p>
                </div>
                <div className='diving-info'>
                  <img src={gaugeFin} alt='manometer' />
                  <p>
                    {authState.lastDive && authState.lastDive.end_pressure_tank}
                  </p>
                </div>
                <div className='diving-info'>
                  <img src={depth} alt='depth' />
                  <p>{authState.lastDive && authState.lastDive.max_depth}</p>
                </div>
                <div className='diving-info'>
                  <img src={termometro} alt='termometer' />
                  <p>
                    {authState.lastDive &&
                      `${authState.lastDive.water_temperature} ºC`}
                  </p>
                </div>
              </div>
              <div className='time-info'>
                <img src={watch} alt='diving-watch' />
                <h1>
                  {authState.lastDive &&
                    `${authState.lastDive.water_temperature}`}{' '}
                  <br /> min
                </h1>
              </div>
            </div>
            <button>ver detalles</button>
          </div>
        </div>

        <div className='lower-user-section'></div>
      </div>
    </div>
  );
};

export default UserPage;
