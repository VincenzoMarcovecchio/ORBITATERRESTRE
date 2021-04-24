import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';
import { NavBar } from './Navbar.js';
import { Bio } from '../Bio';
export function LayoutComponent({ children }) {
  return (
    <>
      <div className="w-full dark:bg-gray-700 antialiased dark:text-white font-body">
        <NavBar />
        <main className="container mx-auto">{children}</main>
        <footer className=" max-w-7xl mx-auto mt-12 px-4 sm:px-6 text-lg font-light">
          <Bio />© {new Date().getFullYear()}, Sito web creato con&nbsp;
          <a href="https://nextjs.org/">Next.js</a>
          &#128293;
        </footer>
      </div>
    </>
  );
}
