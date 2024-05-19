import { Button } from "../../../common/Button";

function ActionModal({ isOpen, onClose, actionType, poolDetails }) {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (actionType) {
      case "deposit":
        return (
          <div className="flex flex-col gap-1 ">
            <span>Current Wallet Balance: {poolDetails.walletTotal}</span>
            <div className="flex gap-4">
              <input
                className="indent-2 text-black w-[70%] rounded-2xl"
                type="number"
                placeholder="Amount to deposit"
              />
              <Button variant="green">Deposit</Button>
            </div>
          </div>
        );
      case "withdraw":
        return (
          <div className="flex flex-col ">
            <span>Deposited: {poolDetails.walletTotal}</span>
            <label className="pb-2">
              <input type="checkbox" /> Max
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Amount to withdraw"
                className="indent-2 rounded-2xl w-[70%]"
              />
              <Button variant="green">Withdraw</Button>
            </div>
          </div>
        );
      case "borrow":
        return (
          <div className="flex flex-col gap-1">
            <span>Available Liquidity: {poolDetails.walletTotal}</span>
            <div className="flex gap-4">
              <input
                className="indent-2 text-black w-[70%] rounded-2xl"
                type="number"
                placeholder="Amount to borrow"
              />
              <Button variant="green">Borrow</Button>
            </div>
          </div>
        );
      case "repay":
        return (
          <div className="flex flex-col">
            <span>Total Amount Borrowed: {poolDetails.borrowedAmount}</span>
            <label className="pb-2">
              <input type="checkbox" /> Max
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Amount to repay"
                className="indent-2 rounded-2xl w-[70%]"
              />
              <Button variant="green">Repay</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-green-500 p-4 rounded-lg max-w-2xl  xs:w-[95%] md:w-full">
        <div className="flex justify-between">
          <span>{poolDetails.tokenPair}</span>
          <img src={poolDetails.tokenLogo} alt="Token Logo" />
        </div>
        <div className="my-4">{renderContent()}</div>
        <div className="text-right mt-4">
          <button onClick={onClose} className="text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionModal;
