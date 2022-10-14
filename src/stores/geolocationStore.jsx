
import create from "zustand";

const geolocationStore = create((set, get) => ({
  userGeolocation: {
    lat: null,
    lng: null
  },
  geolocationWatch: () => {
    return navigator.geolocation.watchPosition(
      (position) => {
        console.log(position);
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        if (currentLocation.lat !== get().userGeolocation.lat || currentLocation.lng !== get().userGeolocation.lng) {
          set({ userGeolocation: currentLocation });
        }
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true
      }
    )
  },
  setUserGeolocation: () => {
    get().geolocationWatch()
  },
  updateUserGeolocation: () => {
    navigator.geolocation.clearWatch(get().geolocationWatch());
    get().setUserGeolocation();
  }
}));

export default geolocationStore;