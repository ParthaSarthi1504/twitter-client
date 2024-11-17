import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geistMono.variable}>
      <Component {...pageProps} />
    </div>
  );
}
