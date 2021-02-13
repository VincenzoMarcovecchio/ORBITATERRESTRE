import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { useRouter } from 'next/router';

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://ll.thespacedevs.com/2.1.0/astronaut/?search=${query}`
  );
  const astronauta = await res.json();

  return {
    props: {
      astronauta,
    },
  };
}

function Page({ astronauta }) {
  return (
    <LayoutComponent>
      <SEO title="Astronauta" />

      {defaultResults.map((result) => {
        const { name, profile_image, nationality, bio } = result;
        return (
          <figure key={name}>
            <img src={profile_image} alt={name} />
            <figcaption>
              <h3>{name}</h3>
              <p>{nationality}</p>
              <p>{bio}</p>
            </figcaption>
          </figure>
        );
      })}
    </LayoutComponent>
  );
}

export default Page;
