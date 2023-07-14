'use client'

import React from 'react'
import L from "leaflet"
import { MapContainer , Marker , TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png' 
const Map = () => {
  return (
    <div>
        <MapContainer 
        center={[25.394990,55.469590]}
        zoom={15}
        scrollWheelZoom={false}
        className='h-[35vh] rounded-lg'
        >
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            
        </MapContainer>
    </div>
  )
}

export default Map