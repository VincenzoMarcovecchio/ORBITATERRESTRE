import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import Map from '../Map';
export default function Home() {
  return (
    <LayoutComponent>
      <SEO title="Mappa segnalazioni ufo Abruzzo" />

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <Map center={[42.192, 13.7289]} zoom={8}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker animate={true} position={[41.8979, 14.4898]}>
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
