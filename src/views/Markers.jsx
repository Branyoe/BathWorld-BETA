import { Marker, Popup } from 'react-leaflet';
import data from '../data.json';
import IconLocation from './IconLocation';

export default function Markers() {
  return data.bathrooms.map(bathroom => (
    <Marker 
      key={bathroom.id} 
      position={bathroom.coordinates} 
      icon={IconLocation}
      eventHandlers={{
        click: () => console.log(bathroom.id)
      }}
    >
      <Popup>{bathroom.name}</Popup>  
    </Marker>
  ));
}
