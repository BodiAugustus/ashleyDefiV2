import Head from "next/head";
import { lato } from "./components/ui/fonts/font.js";
import "./globals.css";

export const metadata = {
  title: "Ashley DeFi",
  description:
    "A crypto wealth management and consulting company whose main objective is onboarding millions into deceneralized finance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${lato.className} antialiased bg-[#000033]`}>
        {children}
      </body>
    </html>
  );
}
