"use client";
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
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// 1) Import your custom Sonic chain with correct path
import { sonicMainnet } from "../chains/SonicMainnet.js";
// If your tsconfig or next.config is set so @ is an alias for /app/
// Otherwise, use a relative path: import { sonicMainnet } from "../chains/sonicMainnet";

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
  projectId: "ad4c70fe9eed9f1622487e0e2c7a7889",
  chains: [mainnet, polygon, optimism, arbitrum, base, fantom, sonicMainnet],
  ssr: true,
});

export default function Page() {
  const formRef = useRef(null);
  const ashleyAdvRef = useRef(null);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          chains={[
            mainnet,
            polygon,
            optimism,
            arbitrum,
            base,
            fantom,
            sonicMainnet,
          ]}
        >
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
