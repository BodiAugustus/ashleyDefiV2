"use client";

import React, { useState, useEffect } from "react";

// Dummy stock data should be defined outside the component
// if it's not going to change or will be fetched from an API
const dummyStockData = [
  { symbol: "1AAPL", price: "$150.10" },
  { symbol: "2GOOGL", price: "$99.50" },
  { symbol: "3MSFT", price: "$280.30" },
  { symbol: "4AMZN", price: "$110.00" },
  { symbol: "5FB", price: "$200.65" },
  { symbol: "6TSLA", price: "$250.75" },
  { symbol: "7AAPL", price: "$150.10" },
  { symbol: "8GOOGL", price: "$99.50" },
  { symbol: "9MSFT", price: "$280.30" },
  { symbol: "0AMZN", price: "$110.00" },
  { symbol: "11FB", price: "$200.65" },
  { symbol: "12TSLA", price: "$250.75" },
  { symbol: "13AAPL", price: "$150.10" },
  { symbol: "14GOOGL", price: "$99.50" },
  { symbol: "15MSFT", price: "$280.30" },
  { symbol: "16AMZN", price: "$110.00" },
  { symbol: "17FB", price: "$200.65" },
  { symbol: "18TSLA", price: "$250.75" },
  { symbol: "19AAPL", price: "$150.10" },
  { symbol: "20GOOGL", price: "$99.50" },
  { symbol: "21MSFT", price: "$280.30" },
  { symbol: "22AMZN", price: "$110.00" },
  { symbol: "23FB", price: "$200.65" },
  { symbol: "24TSLA", price: "$250.75" },
];

const Ticker = ({ stocks, speed = 60 }) => {
  return (
    <div
      className="overflow-hidden relative h-10 mt-10"
      style={{ whiteSpace: "nowrap" }}
    >
      <div
        className="ticker"
        style={{
          display: "inline-block",
          animation: `tickerMove ${speed}s linear infinite`,
        }}
      >
        {stocks.map((stock, index) => (
          <span key={index} className="mx-4">
            {stock.symbol}: {stock.price}
          </span>
        ))}
        {/* Repeat stocks to ensure smooth looping */}
        {stocks.map((stock, index) => (
          <span key={`repeat-${index}`} className="mx-4">
            {stock.symbol}: {stock.price}
          </span>
        ))}
      </div>

      <style>{`
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

const App = () => {
  return (
    <div className="col-span-2 text-white ">
      <Ticker stocks={dummyStockData} speed={60} />
    </div>
  );
};

export default App;
