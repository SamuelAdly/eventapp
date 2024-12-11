'use client'; // This directive is required for Next.js Client Components

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Map = ({eventLocation}) => {
  
  const [location, setLocation] = useState(eventLocation); // Default center
  const [mapLoaded, setMapLoaded] = useState(false);


  // Update location whenever eventLocation prop changes
  useEffect(() => {
    setLocation(eventLocation);
  }, [eventLocation]);
  // The center and zoom of the map
  const mapCenter = location;
  const mapZoom = 13;

  const onLoad = () => {
    setMapLoaded(true); // Update state when map is loaded
  };



  return (
    <LoadScript googleMapsApiKey={apiKey} onLoad={onLoad}>

      {/* Check if the map has loaded */}
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            height: '400px',
            width: '100%',
          }}
          center={mapCenter}
          zoom={mapZoom}
        >
          {/* Marker to indicate a location on the map */}
          <Marker position={mapCenter} />
        </GoogleMap>
      ) : (
        <div>Loading map...</div>
      )}
    </LoadScript>
  );
};

export default Map;
