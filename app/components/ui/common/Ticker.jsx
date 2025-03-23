"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

// Fetcher function as before
const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed with status: ${res.status}`);
    const json = await res.json();
    return json.pairs[0]?.priceUsd
      ? parseFloat(json.pairs[0].priceUsd).toFixed(4)
      : null;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};

// Crypto data hook
const useCryptoData = (tokenAddress) => {
  const URL = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;
  const { data, error } = useSWR(URL, fetcher, { refreshInterval: 10000 });

  return {
    data,
    error,
  };
};

// Ticker component to display each crypto's price
const Ticker = ({ tokenAddress, symbol }) => {
  const { data, error } = useCryptoData(tokenAddress);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <span className="mx-4">
      {symbol}: ${data}
    </span>
  );
};

// Main component that includes the ticker animation
const CryptoTickerTable = () => {
  const tokenAddresses = [
    // Define token addresses and symbols here
    { address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38", symbol: "S" },
    { address: "0xddF26B42C1d903De8962d3F79a74a501420d5F19", symbol: "EQUAL" },
    { address: "0x3333b97138D4b086720b5aE8A7844b1345a33333", symbol: "SHADOW" },
    { address: "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e", symbol: "BEETS" },
    { address: "0x85dec8c4B2680793661bCA91a8F129607571863d", symbol: "BRUSH" },
    { address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C", symbol: "ANON" },
    { address: "0x71E99522EaD5E21CF57F1f542Dc4ad2E841F7321", symbol: "METRO" },
    { address: "0x6881B80ea7C858E4aEEf63893e18a8A36f3682f3", symbol: "NAVI" },
    { address: "0xA04BC7140c26fc9BB1F36B1A604C7A5a88fb0E70", symbol: "SWPx" },
    { address: "0x9fDbC3f8Abc05Fa8f3Ad3C17D2F806c1230c4564", symbol: "GOGLZ" },
    { address: "0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B", symbol: "WAGMI" },
    { address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955", symbol: "stS" },
    { address: "0x39551b1c26ce03714E4661833B0FA730174bd7e9", symbol: "PLUS" },
    { address: "0x005851f943ee2957B1748957F26319e4f9EdeBC1", symbol: "AG" },

    { address: "0xe920d1DA9A4D59126dC35996Ea242d60EFca1304", symbol: "DERP" },

    { address: "0x479673391b3818f5e3ED2fa69A58e13d685BEcf6", symbol: "THC" },

    { address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", symbol: "ETH" },
  ];

  const [viewportWidth, setViewportWidth] = useState(0);
  // Adjust ticker width/speed for diff screen sizes
  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const tickerWidth = tokenAddresses.length * 200; // Approximate width of one token in pixels
  const animationDuration = (tickerWidth / viewportWidth) * 25; // Base duration is 25s for default width

  return (
    <div
      className="overflow-hidden relative h-10 mt-10 col-span-2 xs:row-span-3 md:row-span-2"
      style={{ whiteSpace: "nowrap" }}
    >
      <div
        className="ticker"
        style={{
          animation: `tickerMove ${animationDuration}s linear infinite`,
        }}
      >
        {tokenAddresses.map(({ address, symbol }, index) => (
          <Ticker key={index} tokenAddress={address} symbol={symbol} />
        ))}
        {tokenAddresses.map(({ address, symbol }, index) => (
          <Ticker
            key={`repeat-${index}`}
            tokenAddress={address}
            symbol={symbol}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes tickerMove {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default CryptoTickerTable;
