
import { Fab } from '@mui/material';
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Map from '../Map';
import LocationDialog from './components/LocationDialog';

import AddIcon from '@mui/icons-material/LocationDisabled';

export default function Home() {

  const [locationPermission, setLocationPermission] = useLocalStorage("location-permission", false);
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    // console.log(userLocation);
  }, [userLocation]);

  navigator.geolocation.watchPosition(
    (position) => {
      const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      if (currentLocation.lat !== userLocation.lat || currentLocation.lng !== userLocation.lng) {
        setUserLocation(currentLocation);
      }
    },
    (error) => console.log(error),
    {
      enableHighAccuracy: true
    }
  );

  const handleFabClick = () => {

  }

  return (
    <div>
      <Fab onClick={handleFabClick} className="fab" size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Map userLocation={userLocation} />
      {!locationPermission && <LocationDialog setLocationPermission={setLocationPermission} />}
    </div>
  );
}