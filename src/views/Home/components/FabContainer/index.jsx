import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Stack } from "@mui/system";
import addFormStore from "../../../../stores/addFormStore";



export default function FabContainer({ setUserGeolocation, userLocation }) {

  const { setIsOpen } = addFormStore(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  const handleOpenAddForm = () => {
    setIsOpen(true);
  }

  const activeGeolocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        if (currentLocation.lat !== userLocation.lat || currentLocation.lng !== userLocation.lng) {
          setUserGeolocation(currentLocation);
        }
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true
      }
    );
  }

  return (
    <>
      <Stack className="fab" gap={1} direction="column">
        <Fab onClick={activeGeolocation} size="normal" color="primary" aria-label="add">
          <MyLocationIcon/>
        </Fab>
        <Fab onClick={handleOpenAddForm} size="normal" color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
      </Stack>
    </>
  );
}