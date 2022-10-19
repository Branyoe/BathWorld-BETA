

import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import geolocationStore from '../../stores/geolocationStore';
import BathroomDrawer from './components/BathroomDrawer';
import Map from "./components/Map";
import AddFormDrawer from './components/BathroomDrawer/components/AddFormDrawer';
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

  return (
    <>
      {!locationPermission && <LocationDialog setLocationPermission={setLocationPermission} />}
      <SearchBar />
      <Map userLocation={userGeolocation} />
      <BathroomDrawer />
      <FabContainer setUserGeolocation={setUserLocation} userLocation={userLocation} />
      <AddFormDrawer />
    </>
  );
}