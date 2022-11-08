import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Trygooglemaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyApW0ni4F25MsYfJrHRtR9kapN7SgOiRI8"
  })

//   "AIzaSyApW0ni4F25MsYfJrHRtR9kapN7SgOiRI8"
  const {id} = useParams();

    const [data, setData] = useState({});
  
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/events/"+id)
    .then((response) => response.json())
    .then((resp) => setData(resp));
  }, [])
      
      const containerStyle = {
        width: '1300px',
        height: '600px'
      };
      const center = {
        lat : 40.758415,
        lng : -73.829462
      };
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      
  ) : <></>
}

export default React.memo(Trygooglemaps)