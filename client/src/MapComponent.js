import * as React from 'react';
import Map from 'react-map-gl/mapbox'; // Make sure you're using the correct path
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  return (
    <Map
      mapboxAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
      initialViewState={{
        longitude: -106.661965,
        latitude: 52.13028,
        zoom: 12,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
    />
  );
};

export default MapComponent;
