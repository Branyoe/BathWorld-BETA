import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Stack } from "@mui/system";
import addFormStore from "../../../../stores/addFormStore";
import geolocationStore from "../../../../stores/geolocationStore";



export default function FabContainer({  userLocation }) {

  const { updateUserGeolocation } = geolocationStore(state => ({
    updateUserGeolocation: state.updateUserGeolocation
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
        justifyContent="end"
        alignItems="end" direction="column">
        <Fab onClick={updateUserGeolocation} size="medium" color="primary" aria-label="add">
          <MyLocationIcon />
        </Fab>
        {/* <Fab onClick={handleOpenAddForm} size="normal" color="" aria-label="add">
          <AddIcon />
        </Fab> */}
      </Stack>
    </>
  );
}