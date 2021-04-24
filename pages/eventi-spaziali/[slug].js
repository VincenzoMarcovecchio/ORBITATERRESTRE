import { React, useState } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function Slug({ curiosity }) {
  console.log(curiosity);
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO title={`${curiosity.results[0]?.name}`} />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          {curiosity.results[0]?.name}
        </h1>
        <h2>
          <b>Un evento di tipo:</b>&nbsp;{curiosity.results[0]?.type.name}
        </h2>
        <h2>
          <strong>Location:</strong>&nbsp;{curiosity.results[0]?.location}
        </h2>
        {curiosity.results[0]?.video_url.length > 1 ? (
          <iframe
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full flex mb-4"
            width="420"
            height="515"
            src={curiosity.results[0]?.video_url}
            alt={curiosity.results[0]?.name}
          ></iframe>
        ) : (
          "il video non si e`caricato oppure non c'e`"
        )}
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.1.0/event/?slug=${pageNumber}`
  );

  const news = await res.json();

  const curiosity = news;

  // Pass data to the page via props

  return {
    props: {
      curiosity,
    },
  };
}
export default Slug;
