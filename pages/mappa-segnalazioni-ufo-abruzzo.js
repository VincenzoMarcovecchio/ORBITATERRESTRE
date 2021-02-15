import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import styles from '../assets/Home.module.css';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import Head from 'next/head';
import { aggiungiDataLayer } from '../Map/aggiungiDataLayer';
import { initializeMap } from '../Map/initializeMap';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();
  const { data, error } = useSWR('/api/liveMusic', fetcher);

  if (error) {
    console.error(error);
  }

  mapboxgl.accessToken =
    'pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA';

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.02, 38.887],
      zoom: 12.5,
      pitch: 45,
      maxBounds: [
        [-77.875588, 38.50705], // Southwest coordinates
        [-76.15381, 39.548764], // Northeast coordinates
      ],
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on('load', function () {
        aggiungiDataLayer(Map, data);
      });
    }
  }, [pageIsMounted, setMap, data, Map]);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <LayoutComponent>
        <SEO title="Mappa segnalazioni UFO in Abruzzo" />

        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
          <div id="my-map" style={{ height: 500, width: '100%' }} />
        </div>
      </LayoutComponent>
    </>
  );
}
