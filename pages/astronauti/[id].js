import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { useRouter } from 'next/router';

function Page({ astronauta }) {
  return (
    <LayoutComponent>
      <SEO title="Astronauta" />
      <div>
        <h2>ciao</h2>
      </div>
    </LayoutComponent>
  );
}

export default Page;
