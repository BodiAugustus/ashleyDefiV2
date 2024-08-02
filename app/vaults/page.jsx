"use client";
import Head from "next/head";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  fantom,
  fantomSonicTestnet,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Footer from "../components/ui/layout/sections/footer/Footer";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
import Hero from "../components/ui/layout/sections/vaultsPage/Hero";
import Vaults from "../components/ui/layout/sections/vaultsPage/Vaults";
import Layout from "../pages/layout";
import Image from "next/image";
import sonicWallpaper from "../../public/sonicwallpaper.webp";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "Ashley DeFi",
  projectId: "ad4c70fe9eed9f1622487e0e2c7a7889", // Replace with your actual WalletConnect project ID
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    fantom,
    fantomSonicTestnet,
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Page() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Head>
            <title>Secure DeFi Vaults on Sonic | Ashley DeFi</title>
            <meta
              name="description"
              content="Explore secure decentralized finance vaults with Ashley DeFi. Maximize your DeFi assets securely in our Sonic Blockchain vaults."
            />
            <meta
              name="keywords"
              content="DeFi Vaults, Blockchain Vaults, Sonic Vaults,  Decentralized Finance"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <main className="max-w-[2200px] overflow-hidden">
            <Layout />
            {/* <Hero />
            <Vaults />
            <ContactCTA /> */}
            <div className="flex flex-col items-center justify-center h-auto">
              <Image src={sonicWallpaper} alt="Under Construction" fill />
            </div>
            {/* <Footer /> */}
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
