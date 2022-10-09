import { useState } from "react";

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import IconUbication from "../IconUbication";
import Markers from "../Markers"

export default function Map({ userLocation }) {
  const [location] = useState([19.24191195680494, -103.72634366080396]);
  const [zoom] = useState(14);

  if (userLocation) {

  }

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  
      <Markers />
      <Marker
        position={userLocation}
        icon={IconUbication}
      />
    </MapContainer>
  )
}
