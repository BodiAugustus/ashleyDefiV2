// "use client";
// import {
//   query,
//   where,
//   getDocs,
//   collection,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import VaultModal from "./Modal";
// import { loadStripe } from "@stripe/stripe-js";
// import { db } from "../../../../../../firebase/firebaseConfig.js";
// import { useAccount } from "wagmi";
// import { useVault } from "../../../../../hooks/useVault.js"; // to call depositSonic
// import { ethers } from "ethers";
// import { Button } from "../../../common/Button.jsx";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

// // 1) Import Toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Sample liquidity pool data
// const liquidityPools = [
//   // ...
// ];

// export default function Vaults() {
//   // State for credit-card deposit flow
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVault, setSelectedVault] = useState(null);
//   const [investmentAmount, setInvestmentAmount] = useState("");

//   // State for direct Sonic deposit
//   const [sonicDeposit, setSonicDeposit] = useState("");

//   // State for displaying existing deposits from Firestore
//   const [deposits, setDeposits] = useState([]);

//   // Get the current connected user account from Wagmi
//   const { address: userAddress } = useAccount();

//   // Use the Vault contract from your custom hook
//   const { contract, signer } = useVault();

//   // Stripe config (existing code)
//   const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
//   );

//   // Modal handling
//   const handleRowClick = (pool) => {
//     setSelectedVault(pool);
//     setIsModalOpen(true);
//   };
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedVault(null);
//   };

//   // Handle investment for credit card deposit
//   const handleInvestmentChange = (event) => {
//     const amount = Number(event.target.value);
//     if (amount >= 50 && amount <= 10000) {
//       setInvestmentAmount(amount);
//     } else {
//       toast.error("Please enter an amount between $50 and $10,000.");
//     }
//   };

//   // Utility to create a deposit record in Firestore
//   async function createDepositRecord(data) {
//     try {
//       await addDoc(collection(db, "deposits"), {
//         ...data,
//         createdAt: serverTimestamp(),
//       });
//       console.log("Deposit record successfully created!");
//     } catch (e) {
//       console.error("Error adding deposit record: ", e);
//       toast.error("Failed to create deposit record.");
//     }
//   }

//   // Handle Stripe payment
//   const handleStripePayment = async () => {
//     if (!investmentAmount || Number(investmentAmount) < 50) {
//       toast.error("Please enter a valid amount (at least $50).");
//       return;
//     }

//     try {
//       const stripe = await stripePromise;

//       // Store the deposit record in Firebase
//       const userId = userAddress || "unknown"; // fallback to "unknown" if no user
//       await createDepositRecord({
//         userId,
//         amount: investmentAmount,
//         status: "pending",
//         depositType: "creditCard",
//       });

//       // Initiate Stripe payment
//       const response = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: investmentAmount * 100 }), // Convert to cents
//       });
//       const session = await response.json();

//       const result = await stripe.redirectToCheckout({
//         sessionId: session.sessionId,
//       });

//       if (result.error) {
//         toast.error(result.error.message);
//       }
//     } catch (err) {
//       console.error("Stripe payment failed:", err);
//       toast.error("Stripe payment failed. Check console for details.");
//     }
//   };

//   // ==========================
//   // Handle direct Sonic deposit
//   // ==========================
//   async function handleSonicDeposit(event) {
//     event.preventDefault();

//     if (!contract || !signer || !userAddress) {
//       toast.error("Please connect your wallet on Sonic before depositing.");
//       return;
//     }
//     if (!sonicDeposit || Number(sonicDeposit) <= 0) {
//       toast.error("Please enter a valid Sonic deposit amount.");
//       return;
//     }

//     try {
//       // 1) Call the depositSonic function on your Vault contract
//       const tx = await contract.depositSonic({
//         value: ethers.parseEther(sonicDeposit), // parse user input as Ether
//       });
//       const receipt = await tx.wait();

//       // 2) Create a deposit record in Firestore
//       await createDepositRecord({
//         userId: userAddress,
//         amount: sonicDeposit,
//         status: "completed",
//         depositType: "sonic",
//       });

//       // 3) Reset local state & re-fetch deposits
//       setSonicDeposit("");
//       fetchUserDeposits(); // refresh local deposits

//       // 4) Show success toast with transaction link
//       const blockExplorerLink = `https://sonicscan.org/tx/${receipt.transactionHash}`;

//       toast.success(
//         <div>
//           Successfully deposited {sonicDeposit} Sonic! <br />
//           <a
//             href={blockExplorerLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#4aa3f0", textDecoration: "underline" }}
//           >
//             View on SonicScan
//           </a>
//         </div>
//       );
//       setTimeout(() => {
//         window.location.reload();
//       }, 5000); // wait 5 seconds
//     } catch (error) {
//       console.error("Sonic deposit failed:", error);
//       toast.error("Sonic deposit failed. Check console for details.");
//     }
//   }

//   // ================
//   // Fetch Deposits
//   // ================
//   async function fetchUserDeposits() {
//     if (!userAddress) return;

//     try {
//       const depositsRef = collection(db, "deposits");
//       const q = query(depositsRef, where("userId", "==", userAddress));
//       const querySnapshot = await getDocs(q);

//       const fetchedDeposits = [];
//       querySnapshot.forEach((doc) => {
//         fetchedDeposits.push({ id: doc.id, ...doc.data() });
//       });
//       setDeposits(fetchedDeposits);
//     } catch (err) {
//       console.error("Failed to fetch user deposits:", err);
//       toast.error("Failed to fetch user deposits. Check console for details.");
//     }
//   }

//   // On component mount + whenever userAddress changes
//   useEffect(() => {
//     fetchUserDeposits();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userAddress]);

//   return (
//     <div className="min-h-[20vh] bg-midnight-blue xs:p-2 md:p-4 text-white">
//       <div className="max-w-7xl mx-auto">
//         <h1
//           className="text-2xl font-bold md:mb-4 pt-4
//         xs4:text-3xl"
//         >
//           High Yield Staking Vault -{" "}
//           <span className="font-sans font-thin xs:text-base xs8:text-lg md:text-xl ">
//             Please read the docs before staking.
//           </span>
//         </h1>

//         {/********************************************************************
//          *  SECTION 1: ADD FUNDS VIA SONIC
//          *********************************************************************/}
//         <h2 className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4  md:mt-0 lg:-mb-2 xs4:text-3xl">
//           Add Funds Via Sonic
//         </h2>
//         <div className="bg-[#292941] xs:w-[95%] md:w-[80vw] lg:w-[50vw] mx-auto min-h-[20vh] rounded-2xl mb-16 pb-8">
//           <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
//             Direct Deposit
//           </h3>
//           <form
//             onSubmit={handleSonicDeposit}
//             className="space-y-4 w-full mx-auto"
//           >
//             <div className="flex gap-5 p-2 items-center justify-center w-[95%] mx-auto">
//               <label>Deposit Amount (S):</label>
//               <input
//                 type="number"
//                 value={sonicDeposit}
//                 onChange={(e) => setSonicDeposit(e.target.value)}
//                 className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-[50%]"
//                 placeholder="e.g. 10"
//               />
//             </div>
//             <p className="px-4 text-center">
//               Only Sonic Tokens ($S) can be successfully deposited.{" "}
//               <span className="font-bold">
//                 All other token types will be lost.
//               </span>{" "}
//               To deposit Sonic tokens to the vault, you first must connect to
//               the Sonic Blockchain. Make sure to have enough Sonic remaining to
//               cover gas fees.
//             </p>
//             <div className="mx-auto text-center">
//               <Button
//                 type="submit"
//                 className="mx-auto font-bold py-2 px-3 rounded"
//               >
//                 Deposit S Tokens
//               </Button>
//             </div>
//           </form>
//         </div>

//         {/********************************************************************
//          *  SECTION 2: ADD FUNDS VIA CARD
//          *********************************************************************/}
//         <h2 className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4 xs:-mt-8 md:mt-0 lg:-mb-2 xs4:text-3xl">
//           Add Funds Via Card
//         </h2>
//         <div className="bg-[#292941] xs:w-[95%] md:w-[80vw] lg:w-[50vw] mx-auto min-h-[55vh] rounded-2xl mb-16 pb-8">
//           <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
//             Payment Form
//           </h3>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleStripePayment();
//             }}
//             className="space-y-4 w-full mx-auto"
//           >
//             <div className="flex gap-5 p-2 items-center justify-center w-[95%] mx-auto">
//               <label>Investment Amount (USD):</label>
//               <input
//                 type="number"
//                 value={investmentAmount}
//                 onChange={handleInvestmentChange}
//                 className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-[50%]"
//                 min="50"
//                 max="10000"
//                 placeholder="e.g. 10000"
//               />
//             </div>

//             <p className="px-4 text-center">
//               Please note that your total staked amount will be equal to the
//               amount invested minus third-party fees. Your FIAT will be
//               converted into Sonic tokens, using the ticker $S. Funds added by
//               credit card may take as long as 7 days to appear in the vault.
//             </p>
//             <p className="px-4 text-center">
//               Due to anti-money laundering laws, investments made by card are
//               limited to $10,000 USD per day. The minimum investment amount
//               using this method is $50 USD.
//             </p>
//             <div className="mx-auto text-center">
//               <Button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-700 shadow-green-500 text-white font-bold py-2 mx-auto px-3 rounded "
//               >
//                 Add Funds by Card
//               </Button>
//             </div>
//           </form>
//         </div>

//         {/********************************************************************
//          *  SECTION 3: YOUR DEPOSITS LIST
//          *********************************************************************/}
//         <div className="my-8">
//           <h3 className="text-white xs:text-2xl md:text-4xl font-bold text-center p-4">
//             Your Deposits
//           </h3>
//           <div className="overflow-x-auto">
//             {/* Header Row */}
//             <div className="flex justify-between items-center bg-dark-blue xs:p-2 md:p-4 rounded-lg text-sm font-bold xs:text-xs md:text-base mb-2">
//               <span className="flex-1 text-center xs:text-xs md:text-base">
//                 Amount
//               </span>
//               <span className="flex-1 text-center xs:text-xs md:text-base">
//                 Status
//               </span>
//               <span className="flex-1 text-center xs:text-xs md:text-base">
//                 Type
//               </span>
//               <span className="flex-1 text-center xs:text-xs md:text-base">
//                 Converted Amount
//               </span>
//               <span className="flex-1 text-center xs:text-xs md:text-base">
//                 Date
//               </span>
//             </div>

//             {/* Deposit Rows */}
//             {deposits.map((deposit) => {
//               let displayDate = "N/A";
//               if (deposit.createdAt) {
//                 const dateObj = deposit.createdAt.toDate();
//                 displayDate = dateObj.toLocaleString();
//               }
//               return (
//                 <div
//                   key={deposit.id}
//                   className="flex justify-between items-center bg-[#292941] p-4 rounded-lg mb-2"
//                 >
//                   <span className="flex-1 text-center xs:text-xs md:text-base">
//                     {deposit.amount}
//                     {deposit.depositType === "sonic" ? " S" : " USD"}
//                   </span>
//                   <span className="flex-1 text-center xs:text-xs md:text-base">
//                     {deposit.status}
//                   </span>
//                   <span className="flex-1 text-center xs:text-xs md:text-base">
//                     {deposit.depositType}
//                   </span>
//                   <span className="flex-1 text-center xs:text-xs md:text-base">
//                     {deposit.convertedAmount
//                       ? `$${deposit.convertedAmount}`
//                       : deposit.depositType === "sonic"
//                       ? "--"
//                       : "Pending"}
//                   </span>
//                   <span className="flex-1 text-center xs:text-xs md:text-base">
//                     {displayDate}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Modal for pool details (existing) */}
//       <VaultModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         pool={selectedVault || {}}
//       />

//       {/* 2) ToastContainer - Right side middle */}
//       <ToastContainer
//         position="top-right"
//         style={{ marginTop: "25%", transform: "translateY(-50%)" }}
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// }
"use client";
import {
  query,
  where,
  orderBy,
  limit,
  startAfter,
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
import { useVault } from "../../../../../hooks/useVault.js";
import { ethers } from "ethers";
import { Button } from "../../../common/Button.jsx";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// 1) Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sample liquidity pool data
const liquidityPools = [
  // ...
];

const PAGE_SIZE = 10; // Only show 10 deposits at a time

export default function Vaults() {
  // State for credit-card deposit flow
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVault, setSelectedVault] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");

  // State for direct Sonic deposit
  const [sonicDeposit, setSonicDeposit] = useState("");

  // State for displaying existing deposits from Firestore
  const [deposits, setDeposits] = useState([]);
  const [lastDoc, setLastDoc] = useState(null); // For pagination
  const [hasMore, setHasMore] = useState(false); // True if more docs to load

  // Get the current connected user account from Wagmi
  const { address: userAddress } = useAccount();

  // Use the Vault contract from your custom hook
  const { contract, signer } = useVault();

  // Stripe config
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  // Modal handling
  const handleRowClick = (pool) => {
    setSelectedVault(pool);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVault(null);
  };

  // Handle investment for credit card deposit
  const handleInvestmentChange = (event) => {
    const amount = Number(event.target.value);
    if (amount >= 50 && amount <= 10000) {
      setInvestmentAmount(amount);
    } else {
      toast.error("Please enter an amount between $50 and $10,000.");
    }
  };

  // Utility to create a deposit record in Firestore
  async function createDepositRecord(data) {
    try {
      await addDoc(collection(db, "deposits"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      console.log("Deposit record successfully created!");
    } catch (e) {
      console.error("Error adding deposit record: ", e);
      toast.error("Failed to create deposit record.");
    }
  }

  // Handle Stripe payment
  const handleStripePayment = async () => {
    if (!investmentAmount || Number(investmentAmount) < 50) {
      toast.error("Please enter a valid amount (at least $50).");
      return;
    }
    try {
      const stripe = await stripePromise;
      const userId = userAddress || "unknown";
      await createDepositRecord({
        userId,
        amount: investmentAmount,
        status: "pending",
        depositType: "creditCard",
      });

      // Initiate Stripe payment
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: investmentAmount * 100 }),
      });
      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (err) {
      console.error("Stripe payment failed:", err);
      toast.error("Stripe payment failed. Check console for details.");
    }
  };

  // ==========================
  // Handle direct Sonic deposit
  // ==========================
  async function handleSonicDeposit(event) {
    event.preventDefault();
    if (!contract || !signer || !userAddress) {
      toast.error("Please connect your wallet on Sonic before depositing.");
      return;
    }
    if (!sonicDeposit || Number(sonicDeposit) <= 0) {
      toast.error("Please enter a valid Sonic deposit amount.");
      return;
    }

    try {
      // 1) Call the depositSonic function on your Vault contract
      const tx = await contract.depositSonic({
        value: ethers.parseEther(sonicDeposit),
      });
      const receipt = await tx.wait();

      // 2) Create a deposit record in Firestore
      await createDepositRecord({
        userId: userAddress,
        amount: sonicDeposit,
        status: "completed",
        depositType: "sonic",
      });

      // 3) Reset local state & re-fetch deposits
      setSonicDeposit("");
      fetchUserDeposits(true); // reset to page 1

      // 4) Show success toast with transaction link
      const blockExplorerLink = `https://sonicscan.org/tx/${receipt.transactionHash}`;
      toast.success(
        <div>
          Successfully deposited {sonicDeposit} Sonic! <br />
          <a
            href={blockExplorerLink}
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
      }, 5000); // wait 5 seconds
    } catch (error) {
      console.error("Sonic deposit failed:", error);
      toast.error("Sonic deposit failed. Check console for details.");
    }
  }

  // ================
  // Fetch + Paginate
  // ================
  async function fetchUserDeposits(reset = false) {
    if (!userAddress) return;

    try {
      let q;
      const depositsRef = collection(db, "deposits");

      // If resetting, load first 10 docs
      if (reset) {
        q = query(
          depositsRef,
          where("userId", "==", userAddress),
          orderBy("createdAt", "desc"), // newest first => older at bottom
          limit(PAGE_SIZE)
        );
        setLastDoc(null);
      } else {
        // Next page
        if (!lastDoc) return; // no more docs
        q = query(
          depositsRef,
          where("userId", "==", userAddress),
          orderBy("createdAt", "desc"),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        );
      }

      const snapshot = await getDocs(q);
      if (snapshot.docs.length > 0) {
        const newDeposits = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // If reset, replace entirely
        if (reset) {
          setDeposits(newDeposits);
        } else {
          // else append
          setDeposits((prev) => [...prev, ...newDeposits]);
        }
        // Set the new lastDoc
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        // If we got PAGE_SIZE docs, we likely have more
        setHasMore(snapshot.docs.length === PAGE_SIZE);
      } else {
        // no new docs
        if (reset) {
          setDeposits([]);
        }
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch user deposits:", err);
      toast.error("Failed to fetch user deposits. Check console for details.");
    }
  }

  // On mount or whenever userAddress changes => reset + load first page
  useEffect(() => {
    if (userAddress) {
      fetchUserDeposits(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress]);

  return (
    <div className="min-h-[20vh] bg-midnight-blue xs:p-2 md:p-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Toast container at top for any messages */}
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

        <h1 className="text-2xl font-bold md:mb-4 pt-4 xs4:text-3xl">
          High Yield Staking Vault -{" "}
          <span className="font-sans font-thin xs:text-base xs8:text-lg md:text-xl">
            Please read the docs before staking.
          </span>
        </h1>

        {/* SONIC DEPOSIT SECTION */}
        <h2 className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4 md:mt-0 lg:-mb-2 xs4:text-3xl">
          Add Funds Via Sonic
        </h2>
        <div className="bg-[#292941] xs:w-[95%] md:w-[80vw] lg:w-[50vw] mx-auto min-h-[20vh] rounded-2xl mb-16 pb-8">
          <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
            Direct Deposit
          </h3>
          <form
            onSubmit={handleSonicDeposit}
            className="space-y-4 w-full mx-auto"
          >
            <div className="flex gap-5 p-2 items-center justify-center w-[95%] mx-auto">
              <label>Deposit Amount (S):</label>
              <input
                type="number"
                value={sonicDeposit}
                onChange={(e) => setSonicDeposit(e.target.value)}
                className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-[50%]"
                placeholder="e.g. 10"
              />
            </div>
            <p className="px-4 text-center">
              Only Sonic Tokens ($S) can be successfully deposited.{" "}
              <span className="font-bold">
                All other token types will be lost.
              </span>{" "}
              To deposit Sonic tokens to the vault, you first must connect to
              the Sonic Blockchain. Make sure to have enough Sonic to cover gas
              fees.
            </p>
            <div className="mx-auto text-center">
              <Button
                type="submit"
                className="mx-auto font-bold py-2 px-3 rounded"
              >
                Deposit S Tokens
              </Button>
            </div>
          </form>
        </div>

        {/* CARD DEPOSIT SECTION */}
        <h2 className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4 xs:-mt-8 md:mt-0 lg:-mb-2 xs4:text-3xl">
          Add Funds Via Card
        </h2>
        <div className="bg-[#292941] xs:w-[95%] md:w-[80vw] lg:w-[50vw] mx-auto min-h-[55vh] rounded-2xl mb-16 pb-8">
          <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
            Payment Form
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleStripePayment();
            }}
            className="space-y-4 w-full mx-auto"
          >
            <div className="flex gap-5 p-2 items-center justify-center w-[95%] mx-auto">
              <label>Investment Amount (USD):</label>
              <input
                type="number"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-[50%]"
                min="50"
                max="10000"
                placeholder="e.g. 10000"
              />
            </div>
            <p className="px-4 text-center">
              Please note that your total staked amount will be equal to the
              amount invested minus third-party fees...
            </p>
            <p className="px-4 text-center">
              Due to AML laws, investments by card are limited to $10k/day. The
              minimum is $50.
            </p>
            <div className="mx-auto text-center">
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-700 shadow-green-500 text-white font-bold py-2 mx-auto px-3 rounded"
              >
                Add Funds by Card
              </Button>
            </div>
          </form>
        </div>

        {/* USER DEPOSITS LIST (with pagination) */}
        <div className="my-8">
          <h3 className="text-white xs:text-2xl md:text-4xl font-bold text-center p-4">
            Your Deposits
          </h3>
          <div className="overflow-x-auto">
            {/* Header Row */}
            <div className="flex justify-between items-center bg-dark-blue xs:p-2 md:p-4 rounded-lg text-sm font-bold xs:text-xs md:text-base mb-2">
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Amount
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Status
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Type
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Converted
              </span>
              <span className="flex-1 text-center xs:text-xs md:text-base">
                Date
              </span>
            </div>

            {/* Deposit Rows */}
            {deposits.length === 0 ? (
              <p className="text-center">No deposits found.</p>
            ) : (
              deposits.map((deposit) => {
                let displayDate = "N/A";
                if (deposit.createdAt && deposit.createdAt.toDate) {
                  const dateObj = deposit.createdAt.toDate();
                  displayDate = dateObj.toLocaleString();
                }
                return (
                  <div
                    key={deposit.id}
                    className="flex justify-between items-center bg-[#292941] p-4 rounded-lg mb-2"
                  >
                    <span className="flex-1 text-center xs:text-xs md:text-base">
                      {deposit.amount}
                      {deposit.depositType === "sonic" ? " S" : " USD"}
                    </span>
                    <span className="flex-1 text-center xs:text-xs md:text-base">
                      {deposit.status}
                    </span>
                    <span className="flex-1 text-center xs:text-xs md:text-base">
                      {deposit.depositType}
                    </span>
                    <span className="flex-1 text-center xs:text-xs md:text-base">
                      {deposit.convertedAmount
                        ? `$${deposit.convertedAmount}`
                        : deposit.depositType === "sonic"
                        ? "--"
                        : "Pending"}
                    </span>
                    <span className="flex-1 text-center xs:text-xs md:text-base">
                      {displayDate}
                    </span>
                  </div>
                );
              })
            )}
          </div>
          {/* If there's another page of docs, show "Load More" button */}
          {hasMore && deposits.length > 0 && (
            <div className="text-center mt-4">
              <Button onClick={() => fetchUserDeposits(false)}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for pool details (existing) */}
      <VaultModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pool={selectedVault || {}}
      />
    </div>
  );
}
