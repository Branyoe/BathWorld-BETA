import { useEffect, useState } from "react";

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from "./Markers"
import UbicationDot from "./Components/UbicationDot";
import { dataBase } from "../../firebase";
import useBathrooms from "../../stores/useBathrooms";
import { collection, getDocs } from "firebase/firestore";


export default function Map({ userLocation }) {
  const [location] = useState([19.24191195680494, -103.72634366080396]);
  const [zoom] = useState(12.5);

  const { bathroomsList, setBathroomsList } = useBathrooms(state => ({
    bathroomsList: state.bathroomsList,
    setBathroomsList: state.setBathroomsList
  }))

  useEffect(() => {
    const getBathrooms = async () => {
      const bathrooms = [];
      const q = await getDocs(collection(dataBase, "bathrooms"));
      q.docs.forEach((doc) => bathrooms.push({...doc.data(), id: doc.id}))
      setBathroomsList(bathrooms);
    }
    getBathrooms();
  }, [bathroomsList, setBathroomsList])

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers bathrooms={bathroomsList} />
      <UbicationDot position={userLocation} />
    </MapContainer>
  )
}
