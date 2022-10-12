import L from "leaflet";


const LocationIcon = L.icon({
  iconUrl: require('../assets/iconoUbicacion.png'),
  iconRetinaUrl: require('../assets/iconoUbicacion.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [70, 70],
  className: "leaflet-venue-icon"
});
export default LocationIcon; 
