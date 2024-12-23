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
    default: {
      http: [
        "https://sonic-mainnet.g.alchemy.com/v2/3DEIAvFYsMWwN4jGjjxub1IGajE-RCT8",
      ],
    },
    public: {
      http: [
        "https://sonic-mainnet.g.alchemy.com/v2/3DEIAvFYsMWwN4jGjjxub1IGajE-RCT8",
      ],
    },
  },
  blockExplorers: {
    default: { name: "Sonic Explorer", url: "https://sonicscan.org" },
  },
  testnet: false,
};
