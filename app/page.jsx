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
import { sonicMainnet } from "./chains/SonicMainnet";
import About from "./components/ui/layout/sections/landingPage/about/About";
import Benefits from "./components/ui/layout/sections/landingPage/benefits/Benefits";
import Call2Action from "./components/ui/layout/sections/landingPage/call2Action/Call2Action";
import Example from "./components/ui/layout/sections/landingPage/example/Example";
import FAQsSection from "./components/ui/layout/sections/landingPage/FAQ/FAQSection";
import FingersContainer from "./components/ui/layout/sections/landingPage/fingers/FingersContainer";
import Footer from "./components/ui/layout/sections/footer/Footer";
import Hero from "./components/ui/layout/sections/landingPage/Hero";
import Plans from "./components/ui/layout/sections/plans/Plans";
import Layout from "./pages/layout";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "Ashley DeFi",
  projectId: "ad4c70fe9eed9f1622487e0e2c7a7889", // WalletConnect project ID
  chains: [mainnet, polygon, optimism, arbitrum, base, fantom, sonicMainnet],
  ssr: true, // server side rendering (SSR)
});

export default function Home({ component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <main className="overflow-hidden max-w-[2200px] min-h-screen mx-auto">
            <Layout />
            <Hero />
            <About />
            <Example />
            <Benefits />
            <FingersContainer />
            <Plans />
            <Call2Action />
            <FAQsSection />
            <Footer />
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
