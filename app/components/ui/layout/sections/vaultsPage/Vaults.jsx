// Components/Vaults.js or similar
"use client";
import {
  query,
  where,
  getDocs,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import VaultModal from "./Modal";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "../../../../../../firebase/firebaseConfig.js";
import { useAccount } from "wagmi";

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
  const [investmentAmount, setInvestmentAmount] = useState();
  const [deposits, setDeposits] = useState([]);

  // Get the current connected user account
  const { address: userAddress } = useAccount();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handleRowClick = (pool) => {
    setSelectedVault(pool);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVault(null);
  };

  const handleInvestmentChange = (event) => {
    const amount = Number(event.target.value);
    if (amount >= 50 && amount <= 10000) {
      setInvestmentAmount(amount);
    } else {
      console.error("Please enter an amount between $50 and $10,000.");
    }
  };

  async function createDepositRecord(userId, amount) {
    try {
      await addDoc(collection(db, "deposits"), {
        userId: userId, // Use userId or any identifier to link this to the user
        amount: amount,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      console.log("Deposit record successfully created!");
    } catch (e) {
      console.error("Error adding deposit record: ", e);
    }
  }

  const handleStripePayment = async () => {
    const stripe = await stripePromise;

    //Store the deposit record in Firebase
    const userId = userAddress; //Uses wallet address as userID
    await createDepositRecord(userId, investmentAmount);

    //Initiate Stripe payment process
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: investmentAmount * 100 }), // Convert to cents
    });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  //fetches user deposites from Firestore
  // useEffect(() => {
  //   async function fetchUserDeposits() {
  //     const userId = "user123"; // Replace this with actual user ID or identifier
  //     const depositsRef = collection(db, "deposits");
  //     const q = query(depositsRef, where("userId", "==", userId));
  //     const querySnapshot = await getDocs(q);

  //     const fetchedDeposits = [];
  //     querySnapshot.forEach((doc) => {
  //       fetchedDeposits.push({ id: doc.id, ...doc.data() });
  //     });
  //     setDeposits(fetchedDeposits);
  //   }

  //   fetchUserDeposits();
  // }, []);
  useEffect(() => {
    async function fetchUserDeposits() {
      if (!userAddress) return; // Wait until the user is authenticated

      const depositsRef = collection(db, "deposits");
      const q = query(depositsRef, where("userId", "==", userAddress));
      const querySnapshot = await getDocs(q);

      const fetchedDeposits = [];
      querySnapshot.forEach((doc) => {
        fetchedDeposits.push({ id: doc.id, ...doc.data() });
      });
      setDeposits(fetchedDeposits);
    }

    fetchUserDeposits();
  }, [userAddress]); // Add userAddress as a dependency to update when the user logs in

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
        <h2 className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4 xs:-mt-8 md:mt-0 lg:-mb-2 xs4:text-3xl">
          Add Funds Via Card
        </h2>
        <div className="bg-[#292941] xs:w-[95%] md:w-[80vw] lg:w-[50vw] mx-auto min-h-[55vh] rounded-2xl mb-16 pb-8">
          <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
            Payment Form
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              handleStripePayment(); // Call your payment handler here
            }}
            className="space-y-4 w-full mx-auto"
          >
            <div className="flex gap-5 p-2 items-center justify-center w-[95%] mx-auto">
              <label>Investment Amount:</label>
              <input
                type="number"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-[50%]"
                min="50"
                max="10000"
                placeholder="Enter investment amount"
              />
            </div>

            <p className="px-4 text-center">
              Please note that your total staked amount will be equal to the
              amount invested minus the fees taken by your credit card provider,
              Stripe, and the centralized exchange that will convert your FIAT
              into Sonic tokens, using the ticker $S. Funds added by credit card
              may take as long as 7 days to appear in the vault when using this
              method.
            </p>
            <p className="px-4 text-center">
              Depositing directly using an accepted Web3 wallet, like MetaMask,
              transfers funds instantly. Due to anti-money laundering laws,
              investments made by credit card are limited to $10,000 USD per
              day. The minimum investment amount using this method is $50 USD.
            </p>
            <div className="mx-auto text-center">
              <button
                type="submit" // Change button to submit the form
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded w-auto "
              >
                Add Funds by Card
              </button>
            </div>
          </form>
        </div>

        {/* Add Section for Displaying Deposits */}
        <div className="my-8">
          <h3 className="text-white xs:text-2xl md:text-4xl font-bold text-center p-4">
            Your Deposits
          </h3>
          <div className="overflow-x-auto">
            {/* Header Row for Deposits */}
            <div className="flex justify-between items-center bg-dark-blue xs:p-2 md:p-4 rounded-lg text-sm font-bold xs:text-xs md:text-base mb-2">
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Amount
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Status
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Converted Amount
              </span>
            </div>

            {/* Deposit Rows */}
            {deposits.map((deposit) => (
              <div
                key={deposit.id}
                className="flex justify-between items-center bg-[#292941] p-4 rounded-lg mb-2"
              >
                <span className="flex-1 text-center xs:text-xs md:text-base">
                  ${deposit.amount}
                </span>
                <span className="flex-1 text-center xs:text-xs md:text-base">
                  {deposit.status}
                </span>
                <span className="flex-1 text-center xs:text-xs md:text-base">
                  {deposit.convertedAmount
                    ? `$${deposit.convertedAmount}`
                    : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Liquidity Pools Section */}
        <div className="overflow-x-auto my-8">
          <h3 className="text-white xs:text-2xl md:text-4xl font-bold text-center p-4">
            Liquidity Pools
          </h3>
          {/* Header Row for Liquidity Pools */}
          <div className="flex justify-between items-center bg-dark-blue xs:p-2 md:p-4 rounded-lg text-sm font-bold xs:text-xs md:text-base mb-2">
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Pair
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              APR
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              TVL / Tokens
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Wallet / Pair
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Staked % / Proportion
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Borrowed
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Borrowed APR
            </span>
            <span className="flex-1 text-center xs:text-xs md:text-base">
              Actions
            </span>
          </div>

          {/* Liquidity Pool Rows */}
          {liquidityPools.map((pool) => (
            <div
              key={pool.id}
              onClick={() => handleRowClick(pool)}
              className="flex justify-between items-center bg-[#292941] p-4 rounded-lg mb-2"
            >
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.pair}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.depositAPR}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.tvlTotal} / {pool.tvlTokens}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.walletTotal} / {pool.walletPair}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.stakedPercentage} / {pool.stakedProportion}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.borrowedAmount}
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                {pool.borrowedAPR}
              </span>
              <span className="flex-1 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs md:text-lg lg:text-xl">
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
