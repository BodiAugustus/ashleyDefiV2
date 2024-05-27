// Components/Vaults.js or similar
"use client";
import { useState } from "react";
import VaultModal from "./Modal";
const liquidityPools = [
  {
    id: 1,
    pair: "FTM/USDC",
    depositAPR: "5.5%",
    tvlTotal: "$2M",
    tvlTokens: "1500 FTM / 450,000 USDC",
    walletTotal: "0.5 FTM",
    walletPair: "0.25 FTM / 75 USDC",
    stakedPercentage: "30%",
    stakedProportion: "0.3 FTM / 90 USDC",
    borrowedAmount: "$600",
    borrowedAPR: "7.0%",
  },
  {
    id: 2,
    pair: "FTM/USDC",
    depositAPR: "5.5%",
    tvlTotal: "$2M",
    tvlTokens: "1500 FTM / 450,000 USDC",
    walletTotal: "0.5 FTM",
    walletPair: "0.25 FTM / 75 USDC",
    stakedPercentage: "30%",
    stakedProportion: "0.3 FTM / 90 USDC",
    borrowedAmount: "$600",
    borrowedAPR: "7.0%",
  },
  {
    id: 3,
    pair: "FTM/USDC",
    depositAPR: "5.5%",
    tvlTotal: "$2M",
    tvlTokens: "1500 FTM / 450,000 USDC",
    walletTotal: "0.5 FTM",
    walletPair: "0.25 FTM / 75 USDC",
    stakedPercentage: "30%",
    stakedProportion: "0.3 FTM / 90 USDC",
    borrowedAmount: "$600",
    borrowedAPR: "7.0%",
  },
  // Add more pools as needed...
];

export default function Vaults() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVault, setSelectedVault] = useState(null);

  const handleRowClick = (pool) => {
    setSelectedVault(pool);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVault(null);
  };
  return (
    <div className="min-h-[20vh]] bg-midnight-blue xs:p-2 md:p-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-2xl font-bold  md:mb-4 pt-4 
        xs4:text-3xl"
        >
          High Yield Staking Vaults -{" "}
          <span className="font-sans font-thin xs:text-base xs8:text-lg md:text-xl ">
            Please read the docs before staking.
          </span>
        </h1>
        <div className="overflow-x-auto">
          <div className="mb-0">
            <div className="flex justify-between bg-dark-blue xs:p-2 md:p-4 rounded-lg text-sm font-bold xs:text-xs md:text-base">
              <span className="xs:text-xs md:text-base">Pair</span>
              <span className="xs:text-xs md:text-base"> APR</span>
              <span className="xs:hidden md:visible">TVL / Tokens</span>
              <span className="xs:hidden md:visible">Wallet / Pair</span>
              <span className="xs:hidden md:visible">
                Staked % / Proportion
              </span>
              <span className="xs:text-xs md:text-base">Borrowed</span>
              <span className="xs:text-xs md:text-base">Borrowed APR</span>
              <span className="xs:text-xs md:text-base">Actions</span>
            </div>
          </div>
          {liquidityPools.map((pool) => (
            <div
              key={pool.id}
              onClick={() => handleRowClick(pool)}
              className="flex justify-between bg-[#292941]  p-4 rounded-lg mb-2"
            >
              <span className="xs:text-xs md:text-base ">{pool.pair}</span>
              <span className="xs:text-xs md:text-base">{pool.depositAPR}</span>
              <span className="xs:hidden md:visible">
                {pool.tvlTotal} / {pool.tvlTokens}
              </span>
              <span className="xs:hidden md:visible">
                {pool.walletTotal} / {pool.walletPair}
              </span>
              <span className="xs:hidden md:visible">
                {pool.stakedPercentage} / {pool.stakedProportion}
              </span>
              <span className="xs:text-xs md:text-base">
                {pool.borrowedAmount}
              </span>
              <span className="xs:text-xs md:text-base">
                {pool.borrowedAPR}
              </span>
              <span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs">
                  Deposit
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
      <VaultModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pool={selectedVault || {}}
      />
    </div>
  );
}
