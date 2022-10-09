import { Marker, Popup} from "react-leaflet";

export default function MarkerComponent({ key, position, icon, eventHandlers, popupText}) {
  
  return (
    <Marker
      key={key}
      position={position}
      icon={icon}
      eventHandlers={eventHandlers}
    >
      {popupText && <Popup>{popupText}</Popup>}
    </Marker>
  );
}