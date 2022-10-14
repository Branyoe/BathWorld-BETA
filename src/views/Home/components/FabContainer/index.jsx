import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Stack } from "@mui/system";
import addFormStore from "../../../../stores/addFormStore";
import geolocationStore from "../../../../stores/geolocationStore";



export default function FabContainer({  userLocation }) {

  const { setUserGeolocation } = geolocationStore(state => ({
    setUserGeolocation: state.setUserGeolocation
  }))
  const { setIsOpen } = addFormStore(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  const handleOpenAddForm = () => {
    setIsOpen(true);
  }

  // const activeGeolocation = () => {
  //   navigator.geolocation.watchPosition(
  //     (position) => {
  //       const currentLocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       }
  //       // if (currentLocation.lat !== userLocation.lat || currentLocation.lng !== userLocation.lng) {
  //       //   setUserGeolocation(currentLocation);
  //       // }
  //       setUserGeolocation(currentLocation);
  //     },
  //     (error) => console.log(error),
  //     {
  //       enableHighAccuracy: true
  //     }
  //   );
  // }

  return (
    <>
      <Stack 
        className="fab" 
        gap={1} 
        justifyContent="end"
        alignItems="end" direction="column">
        <Fab onClick={setUserGeolocation} size="small" color="primary" aria-label="add">
          <MyLocationIcon />
        </Fab>
        <Fab onClick={handleOpenAddForm} size="normal" color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Stack>
    </>
  );
}