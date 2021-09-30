import { ThemeProvider } from "next-themes";
import "@assets/main.css";
import "typeface-open-sans";
import "typeface-merriweather";
import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("../components/common/Layout/index"), { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
      <LayoutComponent>
      <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
