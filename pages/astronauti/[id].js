import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { useRouter } from 'next/router';
import { server } from '../config/server';

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
      <ul>
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
      </ul>

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start"></div>
    </LayoutComponent>
  );
}

export default Page;
