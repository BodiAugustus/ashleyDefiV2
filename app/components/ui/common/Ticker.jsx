"use client";

import React, { useState, useEffect } from "react";

// Dummy stock data should be defined outside the component
// if it's not going to change or will be fetched from an API
const dummyStockData = [
  { symbol: "AAPL", price: "$150.10" },
  { symbol: "GOOGL", price: "$99.50" },
  { symbol: "MSFT", price: "$280.30" },
  { symbol: "AMZN", price: "$110.00" },
  { symbol: "FB", price: "$200.65" },
  { symbol: "TSLA", price: "$250.75" },
];

const Ticker = ({ stocks, speed = 10 }) => {
  const [tickerKey, setTickerKey] = useState(0);

  useEffect(() => {
    // Restart the animation by changing the key
    const interval = setInterval(() => {
      setTickerKey((prevKey) => prevKey + 1);
    }, 30000); // Adjust time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="overflow-hidden relative h-10"
      style={{ whiteSpace: "nowrap" }}
    >
      <div
        key={tickerKey}
        className="animate-ticker"
        style={{
          display: "inline-block",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {stocks.map((stock, index) => (
          <span key={index} className="mx-4">
            {stock.symbol}: {stock.price}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes tickerMove {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-ticker {
          animation-name: tickerMove;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Stock Ticker Demo</h1>
      <Ticker stocks={dummyStockData} speed={20} />
    </div>
  );
};

export default App;
