import React, { useEffect, useState } from 'react';
import { useUbication } from '../hooks/useUbication';
import { Radio } from 'react-loader-spinner'
import Search from './Search';
const LocationPermission: React.FC = () => {
  const { setUbication } = useUbication();
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(position.coords);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocation();

    return () => {
      
    }
  }, [])

  useEffect(() => {
    if (location) {
      setUbication({ latitude: location.latitude, longitude: location.longitude });
    }
  }, [location, setUbication]);

  return (
    <div className='w-full justify-center items center'>
      {error &&
        <>
          <div className='flex flex-col gap-7 justify-center items-center mt-5'>
            <p>Activa la Localización en tus ajustes para una mejor experiencia</p>
            <div className='flex lg:justify-center items-center' >
              <Search/>
            </div>
            
          </div>
          
        </>
      }
      {!location && !error && <div className='w-full justify-center items-center flex flex-col'> 
        <Radio
        visible={true}
        height="80"
        width="80"
        colors={["#4fa94d", "#4fa94d", "#4fa94d"]}
        ariaLabel="radio-loading"
        
        /> 
        <p className='text-center text-2xl '>Accediendo a tu ubicación</p>
      </div>}
    </div>
  );
};

export default LocationPermission;
