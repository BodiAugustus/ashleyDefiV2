// app/chains/sonicMainnet.ts
import { defineChain } from "@wagmi/chains";

export const sonicMainnet = {
  id: 146,
  name: "Sonic",
  network: "sonic",
  nativeCurrency: {
    name: "Sonic Mainnet",
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
