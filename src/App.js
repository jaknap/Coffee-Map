import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
const myIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
 iconSize: [20,32]
})

function App() {
  return (
      <MapContainer
        center={[51.505, -0.09]}  // Initial position latitude and longitude
        zoom={12}                  // Initial zoom level
        style={{ height: '600px', width: '100%' }}
      >
        {/* Map layers go here */}
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

      <Marker position={[51.505, -0.09]} icon={myIcon}>
      <Popup>
      Coffee Shop!
      </Popup>
      </Marker> 
      </MapContainer>
    );

}

export default App;
