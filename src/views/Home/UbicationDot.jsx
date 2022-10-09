import { Marker, useMap } from "react-leaflet";
import AddIcon from '@mui/icons-material/LocationSearchingSharp';
import { Fab } from '@mui/material';
import { useState } from "react";

export default function UbicationDot({ position, icon }) {


  return (
    <>
      <Marker
        position={position}
        icon={icon}
      />
      <Fab className="fab" size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}