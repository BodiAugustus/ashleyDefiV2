"use client";
import React, { useEffect, useState } from "react";
import { useVault } from "../../../../../hooks/useVault.js";
import { ethers } from "ethers";
import { Button } from "../../../common/Button.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Manage() {
  const { contract, signer, userAddress } = useVault();

  // --------------------------
  // Price from DexScreener
  // --------------------------
  const [ftmPriceUsd, setFtmPriceUsd] = useState(0);

  // --------------------------
  // State for user data
  // --------------------------
  const [userShares, setUserShares] = useState("0");
  const [userBalance, setUserBalance] = useState("0");
  const [pendingWithdrawals, setPendingWithdrawals] = useState("0");
  const [rateOfReturn, setRateOfReturn] = useState("0");
  const [apr, setApr] = useState("0");
  const [lastDepositTime, setLastDepositTime] = useState(null);

  // --------------------------
  // State for vault-wide data
  // --------------------------
  const [pricePerShare, setPricePerShare] = useState("0");
  const [investedAssets, setInvestedAssets] = useState("0");
  const [totalVaultAssets, setTotalVaultAssets] = useState("0");

  // --------------------------
  // Inputs for deposit/withdraw
  // --------------------------
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawShares, setWithdrawShares] = useState("");

  // ─────────────────────────────────────────────────────────────────────────
  // 1) Fetch FTM price from DexScreener every 30 seconds
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    async function fetchFtmPrice() {
      try {
        const response = await fetch(
          "https://api.dexscreener.com/latest/dex/tokens/0xAD29AbB318791D579433D831ed122aFeAf29dcfe"
        );
        const data = await response.json();
        if (data?.pairs?.[0]?.priceUsd) {
          setFtmPriceUsd(Number(data.pairs[0].priceUsd));
        }
      } catch (error) {
        console.error("Failed to fetch FTM price:", error);
      }
    }

    // Initial fetch
    fetchFtmPrice();

    // Then fetch every 30 seconds
    const interval = setInterval(() => {
      fetchFtmPrice();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // 2) Fetch vault / user data
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    async function fetchData() {
      if (!contract || !signer || !userAddress) return;

      try {
        // user data
        const sharesBN = await contract.getUserShares(userAddress);
        const balanceBN = await contract.getUserBalance(userAddress);
        const pendingBN = await contract.getUserPendingWithdrawals(userAddress);
        const rorBN = await contract.calculateRateOfReturn(userAddress);
        const userAprBN = await contract.calculateAPR(userAddress);

        setUserShares(sharesBN.toString());
        setUserBalance(ethers.formatEther(balanceBN));
        setPendingWithdrawals(ethers.formatEther(pendingBN));

        const rorPct = (Number(rorBN.toString()) / 1e18) * 100;
        const aprPct = (Number(userAprBN.toString()) / 1e18) * 100;
        setRateOfReturn(rorPct.toFixed(2));
        setApr(aprPct.toFixed(2));

        // vault data
        const ppsBN = await contract.pricePerShare();
        const investedBN = await contract.investedAssets();
        const totalBN = await contract.totalAssets();

        setPricePerShare(ethers.formatEther(ppsBN));
        setInvestedAssets(ethers.formatEther(investedBN));
        setTotalVaultAssets(ethers.formatEther(totalBN));
      } catch (error) {
        console.error("Failed to fetch vault data:", error);
      }
    }
    fetchData();
  }, [contract, signer, userAddress]);

  // ─────────────────────────────────────────────────────────────────────────
  // 3) Helper calculations using ftmPriceUsd
  // ─────────────────────────────────────────────────────────────────────────
  const userBalanceUsd = (Number(userBalance) * ftmPriceUsd).toFixed(2);
  const pricePerShareUsd = (Number(pricePerShare) * ftmPriceUsd).toFixed(4);
  const totalVaultValueUsd = (Number(totalVaultAssets) * ftmPriceUsd).toFixed(
    2
  );

  // ─────────────────────────────────────────────────────────────────────────
  // 4) Deposit / Withdraw
  // ─────────────────────────────────────────────────────────────────────────
  async function handleDeposit() {
    if (!contract || !signer || !userAddress) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (!depositAmount || Number(depositAmount) <= 0) {
      toast.error("Please enter a valid deposit amount.");
      return;
    }

    try {
      const tx = await contract.depositSonic({
        value: ethers.parseEther(depositAmount),
      });
      const receipt = await tx.wait();

      setDepositAmount("");

      const explorerLink = `https://sonicscan.org/tx/${receipt.transactionHash}`;
      toast.success(
        <div>
          Successfully deposited {depositAmount} FTM! <br />
          <a
            href={explorerLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4aa3f0", textDecoration: "underline" }}
          >
            View on SonicScan
          </a>
        </div>
      );

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error("Deposit failed:", error);
      toast.error("Deposit failed. Check console for details.");
    }
  }

  async function handleWithdraw() {
    if (!contract || !signer || !userAddress) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (!withdrawShares || Number(withdrawShares) <= 0) {
      toast.error("Please enter a valid (non-zero) share amount.");
      return;
    }

    const userSharesBN = userShares ? BigInt(userShares) : 0n;
    const withdrawBN = BigInt(withdrawShares);

    if (withdrawBN > userSharesBN) {
      toast.error("You cannot withdraw more shares than you own.");
      return;
    }

    try {
      const tx = await contract.requestWithdrawalSonic(withdrawBN);
      const receipt = await tx.wait();

      setWithdrawShares("");

      const explorerLink = `https://sonicscan.org/tx/${receipt.transactionHash}`;
      toast.success(
        <div>
          Withdrawal requested for {withdrawShares} shares! <br />
          <a
            href={explorerLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4aa3f0", textDecoration: "underline" }}
          >
            View on SonicScan
          </a>
        </div>
      );

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error("Withdrawal request failed:", error);
      toast.error("Withdrawal request failed. Check console for details.");
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 5) Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto p-4 text-white">
      {/* TOP: Total Vault Value */}
      <div className="text-center mb-8 md:pt-10">
        <h2 className="text-3xl font-bold">Total Vault Value (USD)</h2>
        <div className="text-4xl font-bold mt-2">${totalVaultValueUsd}</div>
      </div>

      {/* Then the "Your Vault Data" heading, etc. */}
      <h2 className="text-3xl font-bold text-center mb-6">Your Vault Data:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: user info */}
        <div className="bg-[#292941] p-4 rounded-2xl">
          <h3 className="text-xl mb-4">User Dashboard</h3>

          {userAddress ? (
            <p className="mb-4">Connected as: {userAddress}</p>
          ) : (
            <p className="mb-4">No wallet connected</p>
          )}

          <div className="mb-2">
            <strong>Your Shares:</strong> {userShares}
          </div>
          <div className="mb-2">
            <strong>Your S Balance:</strong> {Number(userBalance).toFixed(4)}
          </div>
          <div className="mb-2">
            <strong>Your USD Balance (approx):</strong> ${userBalanceUsd}
          </div>
          <div className="mb-2">
            <strong>Pending Withdrawals (S):</strong>{" "}
            {Number(pendingWithdrawals).toFixed(4)}
          </div>
          <div className="mb-2">
            <strong>Rate of Return:</strong> {rateOfReturn}%
          </div>
          <div className="mb-2">
            <strong>APR:</strong> {apr}%
          </div>
        </div>

        {/* Right Column: vault info */}
        <div className="bg-[#292941] p-4 rounded-2xl">
          <h3 className="text-xl mb-4">Vault Overview</h3>

          <div className="mb-2">
            <strong>Price Per Share (S):</strong>{" "}
            {Number(pricePerShare).toFixed(4)}
          </div>
          <div className="mb-2">
            <strong>Price Per Share (USD):</strong>{" "}
            {(Number(pricePerShare) * ftmPriceUsd).toFixed(4)}
          </div>
          <div className="mb-2">
            <strong>Total Vault Assets (S):</strong>{" "}
            {Number(totalVaultAssets).toFixed(4)}
          </div>
          <div className="mb-4">
            <strong>Total Invested Assets (S):</strong>{" "}
            {Number(investedAssets).toFixed(4)}
          </div>

          {/* Withdraw input */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Number of shares to withdraw"
              value={withdrawShares}
              onChange={(e) => setWithdrawShares(e.target.value)}
              className="text-black rounded px-2 py-1 w-64"
            />
            <Button onClick={handleWithdraw} className=" py-2 px-4 rounded">
              Withdraw
            </Button>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        style={{ marginTop: "25%", transform: "translateY(-50%)" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
