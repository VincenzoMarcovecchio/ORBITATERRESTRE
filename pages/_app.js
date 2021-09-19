import { ThemeProvider } from "next-themes";
import "@assets/main.css";
import "typeface-open-sans";
import "typeface-merriweather";
import { LayoutComponent } from "@components/common";


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <LayoutComponent>
      <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
