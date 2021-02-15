import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../assets/Home.module.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
const Map = () => {
  let mapClassName = styles.map;
  return (
    <MapContainer
      center={[42.192, 13.7289]}
      zoom={8}
      scrollWheelZoom={false}
      className={styles.homeMap}
    >
      <TileLayer
        className="z-10"
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[41.8979, 14.4898]} draggable={true} animate={true}>
        <Popup>Segnalazione Fraine</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
