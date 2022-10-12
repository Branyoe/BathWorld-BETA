

import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import BathroomView from '../BathroomDrawer';
import Map from '../Map';
import AddFormDrawer from './components/AddFormDrawer';
import FabContainer from './components/FabContainer';
import LocationDialog from './components/LocationDialog';



export default function Home() {
  const [locationPermission, setLocationPermission] = useLocalStorage("location-permission", false);
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    // console.log(userLocation);
  }, [userLocation]);

  if(locationPermission) {
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
  }

  return (
    <div>
      <Map userLocation={userLocation}/>
      {!locationPermission && <LocationDialog setLocationPermission={setLocationPermission} />}
      <BathroomView/>
      <FabContainer/>
      <AddFormDrawer/>
    </div>
  );
}