'use client'
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const MapPage = () => {
  const gMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP || "";

  return (
    <APIProvider apiKey={gMapApiKey}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 48.4284, lng: 123.3656 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export default MapPage;
