import "../style.css";
import type { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <main className="container mx-auto py-4 px-2">
    <Component {...pageProps} />
  </main>;
}
