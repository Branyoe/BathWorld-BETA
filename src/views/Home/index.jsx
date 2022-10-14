

import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import geolocationStore from '../../stores/geolocationStore';
import BathroomView from '../BathroomDrawer';
import Map from '../Map';
import AddFormDrawer from './components/AddFormDrawer';
import FabContainer from './components/FabContainer';
import LocationDialog from './components/LocationDialog';
import SearchBar from './components/SearchBar';



export default function Home() {
  const [locationPermission, setLocationPermission] = useLocalStorage("location-permission", false);
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null
  });

  const { setUserGeolocation, userGeolocation } = geolocationStore(state => ({
    setUserGeolocation: state.setUserGeolocation,
    userGeolocation: state.userGeolocation
  }));

  setUserGeolocation();

  // navigator.geolocation.watchPosition(
  //   (position) => {
  //     const currentLocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }
  //     // if (currentLocation.lat !== userLocation.lat || currentLocation.lng !== userLocation.lng) {
  //     //   setUserLocation(currentLocation);
  //     // }
  //     setUserLocation(currentLocation);
  //   },
  //   (error) => console.log(error),
  //   {
  //     enableHighAccuracy: true
  //   }
  // );


  return (
    <div>
      {!locationPermission && <LocationDialog setLocationPermission={setLocationPermission} />}
      <SearchBar />
      <div>
        <Map userLocation={userGeolocation} />
      </div>
      <BathroomView />
      <FabContainer setUserGeolocation={setUserLocation} userLocation={userLocation} />
      <AddFormDrawer />
    </div>
  );
}