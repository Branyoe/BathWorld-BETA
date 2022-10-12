import L from "leaflet";


const LocationIcon = L.icon({
  iconUrl: require('../assets/iconoUbicacion.png'),
  iconRetinaUrl: require('../assets/iconoUbicacion.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [50, 50],
  className: "leaflet-venue-icon"
});
export default LocationIcon; 
