"use client";
import React, { useEffect, useState } from "react";
import { useVault } from "../../../../../hooks/useVault.js";
import { ethers } from "ethers";
import { Button } from "../../../common/Button.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1) Import your Vault’s ABI and address if needed (or reuse from useVault)
const VAULT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "DepositRecorded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newInterval",
        type: "uint256",
      },
    ],
    name: "FeeIntervalUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Invested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "intendedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "actualAmount",
        type: "uint256",
      },
    ],
    name: "InvestmentWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LiquidityRebalanced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ManagementSharesMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawalApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawalCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "WithdrawalPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sharesRequested",
        type: "uint256",
      },
    ],
    name: "WithdrawalRequested",
    type: "event",
  },
  {
    inputs: [],
    name: "approveWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assessManagementFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateAPR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateRateOfReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositSonic",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserPendingWithdrawals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawalQueueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "invest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "investedAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastFeeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "managementFeeAnnual",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "performanceFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebalanceLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "requestWithdrawalSonic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newInterval",
        type: "uint256",
      },
    ],
    name: "setFeeInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pendingWithdrawals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDeposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDepositTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgCostPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawInvestment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdrawalQueue",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalQueueStartIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const VAULT_ADDRESS = "0x6099892c21C473435e2486398991aDEb61e07A31"; // Must match your deployed vault

export default function Manage() {
  const { contract, signer, userAddress } = useVault();

  // Price from DexScreener
  const [ftmPriceUsd, setFtmPriceUsd] = useState(0);

  // State for user data
  const [userShares, setUserShares] = useState("0");
  const [userBalance, setUserBalance] = useState("0");
  const [pendingWithdrawals, setPendingWithdrawals] = useState("0");
  const [rateOfReturn, setRateOfReturn] = useState("0");
  const [apr, setApr] = useState("0");

  // ─────────────────────────────────────────────────────────────────────────
  //  *** NEW: always-fetched vault-wide data (read-only) ***
  // ─────────────────────────────────────────────────────────────────────────
  const [pricePerShare, setPricePerShare] = useState("0");
  const [investedAssets, setInvestedAssets] = useState("0");
  const [totalVaultAssets, setTotalVaultAssets] = useState("0");

  // For always showing total vault value (S)
  const [globalVaultAssets, setGlobalVaultAssets] = useState("0");

  // Inputs
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawShares, setWithdrawShares] = useState("");

  // ─────────────────────────────────────────────────────────────────────────
  // 1) Fetch FTM price from DexScreener
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

    fetchFtmPrice();
    const interval = setInterval(() => {
      fetchFtmPrice();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // 2) Always fetch vault-wide data (read-only)
  //    (Total Vault Assets, Price Per Share, Total Invested, etc.)
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    async function fetchGlobalVaultData() {
      try {
        // 2A) Create a read-only provider
        const readOnlyProvider = new ethers.JsonRpcProvider(
          "https://rpc.soniclabs.com"
          // or your Alchemy endpoint e.g. "https://sonic-mainnet.g.alchemy.com/v2/abc123..."
        );

        // 2B) Instantiate the Vault contract in read-only mode
        const readOnlyContract = new ethers.Contract(
          VAULT_ADDRESS,
          VAULT_ABI,
          readOnlyProvider
        );

        // 2C) Fetch totalAssets() (for top display)
        const totalBN = await readOnlyContract.totalAssets();
        setGlobalVaultAssets(ethers.formatEther(totalBN));

        // 2D) Fetch pricePerShare()
        const ppsBN = await readOnlyContract.pricePerShare();
        setPricePerShare(ethers.formatEther(ppsBN));

        // 2E) Fetch investedAssets()
        const investedBN = await readOnlyContract.investedAssets();
        setInvestedAssets(ethers.formatEther(investedBN));

        // 2F) Also set totalVaultAssets so we can show it in the vault overview
        setTotalVaultAssets(ethers.formatEther(totalBN));
      } catch (err) {
        console.error("Could not fetch global vault data:", err);
      }
    }

    fetchGlobalVaultData();
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // 3) Fetch user-specific vault data (only if user is connected)
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

        // NO LONGER fetching pricePerShare / investedAssets / totalAssets here
        // Because we now always fetch them via read-only (above).
      } catch (error) {
        console.error("Failed to fetch user-specific vault data:", error);
      }
    }
    fetchData();
  }, [contract, signer, userAddress]);

  // ─────────────────────────────────────────────────────────────────────────
  // 4) Calculate USD values
  // ─────────────────────────────────────────────────────────────────────────
  const userBalanceUsd = (Number(userBalance) * ftmPriceUsd).toFixed(2);
  const pricePerShareUsd = (Number(pricePerShare) * ftmPriceUsd).toFixed(4);

  // We already have totalVaultAssets and globalVaultAssets
  const globalVaultValueUsd = (Number(globalVaultAssets) * ftmPriceUsd).toFixed(
    2
  );

  // ─────────────────────────────────────────────────────────────────────────
  // 5) Deposit / Withdraw functions (unchanged)
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
  // 6) Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto p-4 text-white">
      {/* TOP: Always Show Global Vault Value (USD) */}
      {/* <div className="text-center mb-8 md:pt-10">
        <h2 className="text-3xl font-bold">Total Vault Value (USD)</h2>
        <div className="text-4xl font-bold mt-2">${globalVaultValueUsd}</div>
      </div> */}

      {/* The "Your Vault Data" heading, etc. */}
      <h2 className="text-3xl font-bold text-center mb-6 md:pt-10">
        Your Vault Data:
      </h2>

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
          {userAddress ? (
            <div>
              <div className="mb-2">
                <strong>Price Per Share (S):</strong>{" "}
                {Number(pricePerShare).toFixed(4)}
              </div>
              <div className="mb-2">
                <strong>Price Per Share (USD):</strong> {pricePerShareUsd}
              </div>
              <div className="mb-2">
                <strong>Total Vault Assets (S):</strong>{" "}
                {Number(totalVaultAssets).toFixed(4)}
              </div>
              <div className="mb-4">
                <strong>Total Invested Assets (S):</strong>{" "}
                {Number(investedAssets).toFixed(4)}
              </div>
            </div>
          ) : (
            <p className="mb-4">No wallet connected</p>
          )}

          {/* Withdraw input */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Number of shares to withdraw"
              value={withdrawShares}
              onChange={(e) => setWithdrawShares(e.target.value)}
              className="text-black rounded px-2 py-1 w-64"
            />
            <Button onClick={handleWithdraw} className="py-2 px-4 rounded">
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
