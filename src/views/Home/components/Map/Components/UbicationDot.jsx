import { Marker } from "react-leaflet";
import LocationIcon from "../../../../../icons/LocationIcon";

export default function UbicationDot({ position }) {


  return (
    <>
      <Marker
        position={position}
        icon={LocationIcon}
      />
    </>
  );
}