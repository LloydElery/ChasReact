import { useUserLocationStore } from "../store/useUserLocationStore";

const GeoLocationComponent = () => {
  /*   const [userPosition, setUserPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
 */
  const APIKEY = import.meta.env.VITE_API_KEY;
  const lat = "";
  const lon = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
  const userPosition = useUserLocationStore((state: any) => state.userLocation);
  console.log(userPosition);
  const setUserPosition = useUserLocationStore(
    (state: any) => state.updateUserLocation
  );

  const getUserPosition = () => {
    // Success -> get current device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setUserPosition({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching geolocation", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <button onClick={() => getUserPosition()}>Get Location</button>
      <p>Latitude: {userPosition.latitude}</p>
      <p>Longitude: {userPosition.longitude}</p>
    </>
  );
};

export default GeoLocationComponent;
