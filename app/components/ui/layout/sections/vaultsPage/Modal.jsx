// components/LiquidityPoolModal.js
import { useState } from "react";
import ActionModal from "./ActionModal";

function VaultModal({ isOpen, onClose, pool }) {
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState("");
  if (!isOpen) return null;

  const handleDepositClick = () => {
    setCurrentAction("deposit");
    setIsActionModalOpen(true);
  };
  const handleWithdrawClick = () => {
    setCurrentAction("withdraw");
    setIsActionModalOpen(true);
  };
  const handleBorrowClick = () => {
    setCurrentAction("borrow");
    setIsActionModalOpen(true);
  };
  const handleRepayClick = () => {
    setCurrentAction("repay");
    setIsActionModalOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#292941]  p-4 rounded-lg max-w-md w-full">
        <h2 className="text-white text-lg font-bold text-center">
          {pool.pair}
        </h2>
        <div className="my-4">
          <div className="flex justify-between">
            <span>LTV</span>
            <span>{pool.ltv}%</span>
          </div>
          <div className="flex justify-between">
            <span>Threshold</span>
            <span>{pool.threshold}%</span>
          </div>
          <div className="flex justify-between">
            <span>Liquidation Penalty</span>
            <span>{pool.liquidationPenalty}%</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex justify-between">
            <span>Wallet Balance</span>
            <span>{pool.walletTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Available Liquidity</span>
            <span>{pool.availableLiquidity}</span>
          </div>
          <div className="flex justify-between">
            <span>Available to Borrow</span>
            <span>{pool.availableToBorrow}</span>
          </div>
        </div>

        <div className="flex justify-between my-4">
          <div>
            <h3 className="font-bold">Deposited</h3>
            <span>{pool.deposited}</span>
          </div>
          <div>
            <h3 className="font-bold">Borrowed</h3>
            <span>{pool.borrowed}</span>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleDepositClick}
          >
            Deposit
          </button>
          <button
            onClick={handleWithdrawClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Withdraw
          </button>
          <button
            onClick={handleBorrowClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Borrow
          </button>
          <button
            onClick={handleRepayClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Repay
          </button>
        </div>

        <div className="text-right mt-4">
          <button onClick={onClose} className="text-white">
            Close
          </button>
        </div>
      </div>
      <ActionModal
        isOpen={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
        actionType={currentAction}
        poolDetails={pool} // Assume `pool` contains all necessary details
      />
    </div>
  );
}

export default VaultModal;
