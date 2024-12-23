"use client";

import React from "react";
import Head from "next/head";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  fantom,
} from "@wagmi/chains";

// ────────────────────────────────────────────────────────────────────────────────
// 1. Define Sonic chain (same code as before; just ensure it’s above usage)
// ────────────────────────────────────────────────────────────────────────────────
const sonicChain = {
  id: 146,
  name: "Sonic",
  network: "Sonic Mainnet",
  nativeCurrency: {
    name: "Sonic",
    symbol: "S",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rpc.soniclabs.com"] },
    public: { http: ["https://rpc.soniclabs.com"] },
  },
  blockExplorers: {
    default: { name: "Sonic Explorer", url: "https://sonicscan.org" },
  },
  testnet: false,
};

// ────────────────────────────────────────────────────────────────────────────────
// 2. Prepare all the chains you want
// ────────────────────────────────────────────────────────────────────────────────
const chains = [mainnet, polygon, optimism, arbitrum, base, fantom, sonicChain];

// ────────────────────────────────────────────────────────────────────────────────
// 3. Create wagmi + RainbowKit config using getDefaultConfig
//    (similar to your consulting page)
// ────────────────────────────────────────────────────────────────────────────────
const config = getDefaultConfig({
  appName: "Ashley DeFi",
  projectId: "ad4c70fe9eed9f1622487e0e2c7a7889", // (Your WalletConnect project ID)
  chains,
  ssr: true, // If your dApp is rendered on the server
});

// ────────────────────────────────────────────────────────────────────────────────
// 4. Setup your TanStack Query client
// ────────────────────────────────────────────────────────────────────────────────
const queryClient = new QueryClient();

// ────────────────────────────────────────────────────────────────────────────────
// 5. Import your page components
// ────────────────────────────────────────────────────────────────────────────────
import Layout from "../pages/layout";
import Footer from "../components/ui/layout/sections/footer/Footer";
import Manage from "../components/ui/layout/sections/managePage/Manage";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
// (Remove or uncomment if needed)
// import Image from "next/image";
// import sonicWallpaper from "../../public/sonicwallpaper.webp";

// ────────────────────────────────────────────────────────────────────────────────
// 6. Final page component
// ────────────────────────────────────────────────────────────────────────────────
export default function ManagePage() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/*
          If you need to restrict which chains appear in the RainbowKit chain switcher,
          you can pass `chains={chains}` to <RainbowKitProvider>:
        */}
        <RainbowKitProvider chains={chains}>
          <Head>
            <title>
              Manage Your DeFi Assets on the Sonic Blockchain | Ashley DeFi
            </title>
            <meta
              name="description"
              content="Efficiently manage your decentralized finance assets with Ashley DeFi. Specializing in Sonic Blockchain vaults. Maximize your DeFi potential."
            />
            <meta
              name="keywords"
              content="DeFi Management, Asset Management, Blockchain Management, Sonic Management, Decentralized Finance"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <main className="max-w-[2200px] mx-auto overflow-hidden">
            <Layout />
            {/* 
              If you want a full background image, uncomment:
              
              <div className="relative w-full h-[500px]">
                <Image src={sonicWallpaper} alt="Sonic wallpaper" fill />
              </div>
            */}
            <Manage />
            <ContactCTA />
            <Footer />
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
