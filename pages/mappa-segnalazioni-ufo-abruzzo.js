import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import styles from '../assets/Home.module.css';
import dynamic from 'next/dynamic';

const DEFAULT_CENTER = [38.907132, -77.036546];
export default function Home() {
  const MapWithNoSSR = useMemo(() =>
    dynamic(() => import('../Map/Map.js'), {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    })
  );
  return (
    <LayoutComponent>
      <SEO title="Mappa segnalazioni UFO in Abruzzo" />

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <MapWithNoSSR />
      </div>
    </LayoutComponent>
  );
}
