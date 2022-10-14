import { useEffect, useState } from "react";

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from "./Components/Markers"
import UbicationDot from "./Components/UbicationDot";
import bathroomStore from "../../stores/bathroomStore";


export default function Map({ userLocation }) {
  const [location] = useState([19.24191195680494, -103.72634366080396]);
  const [zoom] = useState(12.5);

  const { bathrooms, setBathrooms } = bathroomStore(state => ({
    bathrooms: state.bathrooms,
    setBathrooms: state.setBathrooms
  }))

  useEffect(() => {
    const getBathrooms = async () => {
      try {
        await setBathrooms();
      } catch (error) {
        console.log(error);
      }
    }
    getBathrooms();
  }, [])

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers bathrooms={bathrooms} />
      <UbicationDot position={userLocation} />
    </MapContainer>
  )
}
