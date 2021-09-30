import NavBar from "./Navbar";
import Bio from "../Bio";
import Link from "next/link";

export function LayoutComponent({ children }) {
  return (
    <>
      <div className="w-full dark:bg-gray-700 antialiased dark:text-white font-body">
        <center style={{ background: "cornflowerblue" }}>
          <span className="max-w-7xl mx-auto font-light text-center">
            😮 hey cosa passa sopra la tua{" "}
            <Link href={"/satelliti-di-passaggio/"} replace>
              testa&nbsp;
            </Link>
            🛰️
          </span>
        </center>
        <NavBar />
        <main className="container mx-auto">{children}</main>
        <footer className=" max-w-7xl mx-auto mt-12 px-4 sm:px-6 text-smaller">
          <Bio />© {new Date().getFullYear()}&nbsp;powered by&nbsp;
          <a href="https://nextjs.org/">Next.js</a>
          &#128293;
        </footer>
      </div>
    </>
  );
}
