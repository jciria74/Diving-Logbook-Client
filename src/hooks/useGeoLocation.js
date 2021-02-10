import { useState, useEffect, useCallback } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    isLoaded: false,
    locationData: {},
  });
  const url = process.env.REACT_APP_OPENCAGE_URL;

  const onSuccess = useCallback(
    (position) => {
      const { latitude, longitude } = position.coords;

      fetch(
        `${url}?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_KEY}`
      )
        .then((response) => response.json())
        .then((dataJSON) => {
          setLocation((prevState) => {
            return {
              ...prevState,
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
            };
          });
        });
    },
    [url]
  );

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
  }, [url, onSuccess]);

  return location;
};

export default useGeoLocation;
