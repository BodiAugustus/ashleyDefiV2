"use client";
import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import { VAULT_ADDRESS, VAULT_ABI } from "../constants/index";

export function useVault() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    async function init() {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          // 1) Create a new BrowserProvider (ethers v6)
          const tempProvider = new BrowserProvider(window.ethereum);

          // 2) Request account access
          await tempProvider.send("eth_requestAccounts", []);

          // 3) Get the signer & user address
          const tempSigner = await tempProvider.getSigner();
          const address = await tempSigner.getAddress();

          // 4) Instantiate the contract
          const vaultContract = new Contract(
            VAULT_ADDRESS,
            VAULT_ABI,
            tempSigner
          );

          // 5) Update state
          setProvider(tempProvider);
          setSigner(tempSigner);
          setContract(vaultContract);
          setUserAddress(address);
        } catch (err) {
          console.error("Failed to initialize Vault contract:", err);
        }
      }
    }
    init();
  }, []);

  useEffect(() => {
    console.log("Vault hook contract:", contract);
    console.log("Vault hook signer:", signer);
    console.log("Vault hook userAddress:", userAddress);
  }, [contract, signer, userAddress]);

  // Optionally, you can add direct helper functions here
  // e.g. depositSonic, requestWithdrawalSonic, etc.

  return { provider, signer, contract, userAddress };
}
