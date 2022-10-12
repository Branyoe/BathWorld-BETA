import { useState } from "react";

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from "../Markers"
import UbicationDot from "./Components/UbicationDot";

export default function Map({ userLocation }) {
  const [location] = useState([19.24191195680494, -103.72634366080396]);
  const [zoom] = useState(14);
  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      <Markers />
      <UbicationDot position={userLocation}/>
    </MapContainer>
  )
}
