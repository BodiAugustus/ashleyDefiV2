"use client";
import React from "react";
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
    { address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870", symbol: "FTM" },
    { address: "0x3Fd3A0c85B70754eFc07aC9Ac0cbBDCe664865A6", symbol: "EQUAL" },
    { address: "0xE992bEAb6659BFF447893641A378FbbF031C5bD6", symbol: "WIGO" },
    { address: "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e", symbol: "BEET" },
    { address: "0x85dec8c4B2680793661bCA91a8F129607571863d", symbol: "BRUSH" },
    { address: "0x97bdAfe3830734acF12Da25359674277fcc33729", symbol: "KIRBY" },
    { address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", symbol: "BOO" },
    { address: "0x1e2Ea3f3209D66647f959CF00627107e079B870d", symbol: "fBUX" },
    { address: "0x479673391b3818f5e3ED2fa69A58e13d685BEcf6", symbol: "THC" },
    { address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963", symbol: "TREEB" },
    { address: "0x01e77288b38b416F972428d562454fb329350bAc", symbol: "MMY" },
    { address: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B", symbol: "SPIRIT" },
    { address: "0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1", symbol: "sFTMx" },
    { address: "0xE53aFA646d48E9EF68fCd559F2a598880a3f1370", symbol: "TOMB+" },
    { address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", symbol: "ETH" },
    // { address: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c", symbol: "SOL" },
    // { address: "0x1CE0c2827e2eF14D5C4f29a091d735A204794041", symbol: "AVAX" },
    // { address: "0x4200000000000000000000000000000000000042", symbol: "OP" },
    // { address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", symbol: "DOT" },
    // { address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", symbol: "MATIC" },
    // { address: "0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63", symbol: "NEAR" },
    // Add more tokens as needed
  ];

  return (
    <div
      className="overflow-hidden relative h-10 mt-10 col-span-2"
      style={{ whiteSpace: "nowrap" }}
    >
      <div
        className="ticker "
        style={{ animation: `tickerMove 25s linear infinite` }}
      >
        {tokenAddresses.map(({ address, symbol }, index) => (
          <Ticker key={index} tokenAddress={address} symbol={symbol} />
        ))}
        {/* Repeat tokens to ensure smooth looping */}
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
          animation-name: tickerMove;
        }
      `}</style>
    </div>
  );
};

export default CryptoTickerTable;
