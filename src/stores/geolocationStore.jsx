import { collection, getDocs } from "firebase/firestore";
import create from "zustand";
import { dataBase } from "../firebase";

const geolocationStore = create((set, get) => ({
  userGeolocation: {
    lat: null,
    lng: null
  },
  setUserGeolocation: () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        // if (currentLocation.lat !== userLocation.lat || currentLocation.lng !== userLocation.lng) {
        //   setUserLocation(currentLocation);
        // }
        set({ userGeolocation: currentLocation });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true
      }
    )
  }
}));

export default geolocationStore;