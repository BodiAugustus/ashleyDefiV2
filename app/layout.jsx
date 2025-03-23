import Head from "next/head";
import { lato } from "./components/ui/fonts/font.js";
import "./globals.css";

export const metadata = {
  title: "Ashley DeFi",
  description:
    "Welcome to Ashley DeFi! A Jacksonville, Florida based crypto consulting and wealth management service specializing in the Sonic, and Monero blockchains. Maximize your earnings today!",
  keywords:
    "Jacksonville, FL, Florida, Fruit Cove, Financial Consulting, Consultant, Cryptocurrency, Crypto, DeFi Consulting, Blockchain Consulting, Ashley DeFi, Fantom Blockchain, Sonic Blockchain, Monero Blockchain, Decentralized Finance, Sonic Token",
};

export const viewport = "width=device-width, initial-scale=1";

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
