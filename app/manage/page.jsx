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
import Manage from "./../components/ui/layout/sections/managePage/Manage";
import Layout from "../pages/layout";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
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

export default function ManagePage() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
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
          <div className="max-w-[2200px] mx-auto overflow-hidden">
            <Layout />
            <div className="flex flex-col items-center justify-center h-auto">
              <Image src={sonicWallpaper} alt="Under Construction" fill />
            </div>
            {/* <Manage />
            <ContactCTA />
            <Footer /> */}
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
