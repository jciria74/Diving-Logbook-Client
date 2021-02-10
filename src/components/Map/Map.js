import React, { useState } from 'react';
import './Map.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

export const flag = new Icon({
  iconUrl: '/../icons/logo-blue.svg',
  iconSize: [25, 25],
});

const Map = () => {
  const [activeSpot, setActiveSpot] = useState(null);

  const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
  const ATTRIBUTION =
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

  const YOUR_LOCATION = [39.5945038, 2.6106201];

  return (
    <MapContainer center={YOUR_LOCATION} zoom={7}>
      <TileLayer url={URL} attribution={ATTRIBUTION} />
      <Marker position={YOUR_LOCATION}>
        <Popup>
          <b>Tower of Hercules</b>
          <br />
          UNESCO World Heritage site
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
