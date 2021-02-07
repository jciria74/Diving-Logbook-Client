import React, { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    isLoaded: false,
    locationData: {},
  });

  //   const onSuccess = (location) => {
  //     setLocation({
  //       loaded: true,
  //       locationData: { location },
  //     });
  //   };

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `${process.env.REACT_APP_OPENCAGE_URL}?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_KEY}`
    )
      .then((response) => response.json())
      .then((dataJSON) => {
        setLocation({
          ...location,
          isLoaded: true,
          locationData: {
            lat: dataJSON.results[0].geometry.lat,
            lng: dataJSON.results[0].geometry.lng,
            bounds: {
              northeast: dataJSON.results[0].bounds.northeast,
              southwest: dataJSON.results[0].bounds.southwest,
            },
            city: dataJSON.results[0].components.city,
            state: dataJSON.results[0].components.state,
            country: dataJSON.results[0].components.country,
            continent: dataJSON.results[0].components.continent,
            road: dataJSON.results[0].components.road,
            postcode: dataJSON.results[0].components.postcode,
            suburb: dataJSON.results[0].components.suburb,
            formatted_address: dataJSON.results[0].formatted,
          },
        });
      });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        message: 'Geolocation not sipported',
      },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation((state) => ({
        ...state,
        isLoaded: true,
        error: {
          message: 'Geolocation not supported',
        },
      }));
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
