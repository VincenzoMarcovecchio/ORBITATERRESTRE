import { React, useState } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function SingoloLancio({ newsar }) {
  console.log(newsar);
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO title={`${newsar.name}`} description={`${newsar.mission}`} />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Lancio {newsar.name}
        </h1>
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launch/${pageNumber}`
  );

  const newsar = await res.json();

  // Pass data to the page via props

  return {
    props: {
      newsar,
    },
  };
}
export default SingoloLancio;
