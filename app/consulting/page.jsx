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
import Layout from "../pages/layout";
import Hero from "../components/ui/layout/sections/consultingPage/Hero";
import AshleyAdv from "../components/ui/layout/sections/consultingPage/AshleyAdv";
import Services from "../components/ui/layout/sections/consultingPage/Services";
import ContactForm from "../components/ui/layout/sections/consultingPage/ContactForm";
import Call2Action from "../components/ui/layout/sections/landingPage/call2Action/Call2Action";
import CnsltPlans from "../components/ui/layout/sections/consultingPage/CnsltPlans";
import React, { useRef } from "react";
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
  const formRef = useRef(null);
  const ashleyAdvRef = useRef(null);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Head>
            <title>
              DeFi Consulting Services | Fantom, Sonic, & Monero Experts |
              Ashley DeFi
            </title>
            <meta
              name="description"
              content="Professional decentralized finance consulting services by Ashley DeFi. Specializing in Fantom, Sonic, and Monero blockchains. Maximize your DeFi potential today."
            />
            <meta
              name="keywords"
              content="DeFi Consulting, Blockchain Consulting, Fantom Blockchain, Sonic Blockchain, Monero Blockchain, Decentralized Finance"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <main className="max-w-[2200px] overflow-hidden min-h-screen">
            <Layout />
            <Hero formRef={formRef} ashleyAdvRef={ashleyAdvRef} />
            <div ref={ashleyAdvRef}>
              <AshleyAdv />
            </div>
            <Services formRef={formRef} />
            <ContactForm ref={formRef} />
            <CnsltPlans />
            <Call2Action />
            <Footer />
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
