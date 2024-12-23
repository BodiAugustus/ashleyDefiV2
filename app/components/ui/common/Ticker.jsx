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
    { address: "0xAD29AbB318791D579433D831ed122aFeAf29dcfe", symbol: "FTM" },
    { address: "0x3Fd3A0c85B70754eFc07aC9Ac0cbBDCe664865A6", symbol: "EQUAL" },
    { address: "0xE992bEAb6659BFF447893641A378FbbF031C5bD6", symbol: "WIGO" },
    { address: "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e", symbol: "BEETS" },
    { address: "0x85dec8c4B2680793661bCA91a8F129607571863d", symbol: "BRUSH" },
    { address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", symbol: "BOO" },
    { address: "0x1e2Ea3f3209D66647f959CF00627107e079B870d", symbol: "fBUX" },
    { address: "0xb7C2ddB1EBAc1056231ef22c1b0A13988537a274", symbol: "TAROT" },
    { address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963", symbol: "TREEB" },
    { address: "0x01e77288b38b416F972428d562454fb329350bAc", symbol: "MMY" },
    { address: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B", symbol: "SPIRIT" },
    { address: "0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1", symbol: "sFTMx" },
    { address: "0x39551b1c26ce03714E4661833B0FA730174bd7e9", symbol: "PLUS" },
    { address: "0xD702993613686Ab0f706Ef07883870a97D36fdcf", symbol: "SNS" },

    { address: "0x43F9a13675e352154f745d6402E853FECC388aA5", symbol: "sGOAT" },
    { address: "0x662B3d319e693aA578EDd4BD8a5c9395BC49e9F4", symbol: "GOGLZ" },
    { address: "0x479673391b3818f5e3ED2fa69A58e13d685BEcf6", symbol: "THC" },
    { address: "0x5DeB27e51dbeEF691Ba1175A2E563870499c2AcB", symbol: "MCLB" },
    { address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", symbol: "ETH" },
  ];

  const [viewportWidth, setViewportWidth] = useState(0);

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
