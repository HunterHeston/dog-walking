import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
      <Analytics />
    </>
  );
}
