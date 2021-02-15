import React, { useState, useEffect, useMemo } from 'react';
import Map from '../Map';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import styles from '../assets/Home.module.css';
const DEFAULT_CENTER = [38.907132, -77.036546];
export default function Home() {
  return (
    <LayoutComponent>
      <SEO title="Mappa segnalazioni UFO in Abruzzo" />

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
    </LayoutComponent>
  );
}
