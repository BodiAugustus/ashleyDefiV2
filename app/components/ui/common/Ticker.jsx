// "use client";
// import React from "react";
// import useSWR from "swr";

// // Fetcher function as before
// const fetcher = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Fetch failed with status: ${res.status}`);
//     const json = await res.json();
//     return json.pairs[0]?.priceUsd
//       ? parseFloat(json.pairs[0].priceUsd).toFixed(4)
//       : null;
//   } catch (error) {
//     console.error("Error fetching data", error);
//     return null;
//   }
// };

// // Crypto data hook
// const useCryptoData = (tokenAddress) => {
//   const URL = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;
//   const { data, error } = useSWR(URL, fetcher, { refreshInterval: 10000 });

//   return {
//     data,
//     error,
//   };
// };

// // Ticker component to display each crypto's price
// const Ticker = ({ tokenAddress, symbol }) => {
//   const { data, error } = useCryptoData(tokenAddress);

//   if (error) return <div>Error...</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <span className="mx-4">
//       {symbol}: ${data}
//     </span>
//   );
// };

// // Main component that includes the ticker animation
// const CryptoTickerTable = () => {
//   const tokenAddresses = [
//     // Define token addresses and symbols here
//     { address: "0xAD29AbB318791D579433D831ed122aFeAf29dcfe", symbol: "FTM" },
//     { address: "0x3Fd3A0c85B70754eFc07aC9Ac0cbBDCe664865A6", symbol: "EQUAL" },
//     { address: "0xE992bEAb6659BFF447893641A378FbbF031C5bD6", symbol: "WIGO" },
//     { address: "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e", symbol: "BEETS" },
//     { address: "0x85dec8c4B2680793661bCA91a8F129607571863d", symbol: "BRUSH" },
//     { address: "0x5c725631FD299703D0A74C23F89a55c6B9A0C52F", symbol: "POLTER" },
//     { address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", symbol: "BOO" },
//     { address: "0x1e2Ea3f3209D66647f959CF00627107e079B870d", symbol: "fBUX" },
//     { address: "0xb7C2ddB1EBAc1056231ef22c1b0A13988537a274", symbol: "TAROT" },
//     { address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963", symbol: "TREEB" },
//     { address: "0x01e77288b38b416F972428d562454fb329350bAc", symbol: "MMY" },
//     { address: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B", symbol: "SPIRIT" },
//     { address: "0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1", symbol: "sFTMx" },
//     { address: "0x39551b1c26ce03714E4661833B0FA730174bd7e9", symbol: "PLUS" },
//     { address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", symbol: "ETH" },
//     // { address: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c", symbol: "SOL" },
//     // { address: "0x1CE0c2827e2eF14D5C4f29a091d735A204794041", symbol: "AVAX" },
//     // { address: "0x4200000000000000000000000000000000000042", symbol: "OP" },
//     // { address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", symbol: "DOT" },
//     // { address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", symbol: "MATIC" },
//     // { address: "0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63", symbol: "NEAR" },
//     // Add more tokens as needed
//   ];

//   return (
//     <div
//       className="overflow-hidden relative h-10 mt-10 col-span-2 xs:row-span-3 md:row-span-2 "
//       style={{ whiteSpace: "nowrap" }}
//     >
//       <div
//         className="ticker "
//         style={{ animation: `tickerMove 25s linear infinite` }}
//       >
//         {tokenAddresses.map(({ address, symbol }, index) => (
//           <Ticker key={index} tokenAddress={address} symbol={symbol} />
//         ))}
//         {/* Repeat tokens to ensure smooth looping */}
//         {tokenAddresses.map(({ address, symbol }, index) => (
//           <Ticker
//             key={`repeat-${index}`}
//             tokenAddress={address}
//             symbol={symbol}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes tickerMove {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .ticker {
//           animation-name: tickerMove;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CryptoTickerTable;

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
    { address: "0x5c725631FD299703D0A74C23F89a55c6B9A0C52F", symbol: "POLTER" },
    { address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", symbol: "BOO" },
    { address: "0x1e2Ea3f3209D66647f959CF00627107e079B870d", symbol: "fBUX" },
    { address: "0xb7C2ddB1EBAc1056231ef22c1b0A13988537a274", symbol: "TAROT" },
    { address: "0xc60D7067dfBc6f2caf30523a064f416A5Af52963", symbol: "TREEB" },
    { address: "0x01e77288b38b416F972428d562454fb329350bAc", symbol: "MMY" },
    { address: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B", symbol: "SPIRIT" },
    { address: "0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1", symbol: "sFTMx" },
    { address: "0x39551b1c26ce03714E4661833B0FA730174bd7e9", symbol: "PLUS" },
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
