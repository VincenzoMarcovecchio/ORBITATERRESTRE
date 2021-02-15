import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';

export default function Home() {
  const MapWithNoSSR = useMemo(() =>
    dynamic(() => import('../Map/Index.js'), {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    })
  );

  return (
    <LayoutComponent>
      <SEO title="Home" />

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <MapWithNoSSR />
      </div>
    </LayoutComponent>
  );
}
