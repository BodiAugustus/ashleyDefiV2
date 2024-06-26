export default function Manage() {
  return (
    <div>
      <h1
        className="text-center font-bold xs:text-3xl md:text-5xl text-white pt-5 md:pb-4 xs:-mb-0
      xs4:text-3xl"
      >
        Manage Finances
      </h1>
      <div className="xs:p-2 md:p-6 text-white max-w-[2200px] md:w-[90%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {/* Container 1 */}
          <div className="flex flex-col gap-5 bg-[#292941] p-4 rounded-2xl ">
            <h2 className="text-2xl text-center">Total Staked</h2>
            {/* Global Stake */}
            <div className="grid grid-cols-3 items-center xs:text-sm xs6:text-base xs8:text-lg md:text-base lg:text-lg">
              <div>Global Stake</div>
              <div>10,000 XYZ</div>
              <div>5% APR</div>
            </div>
            {/* Global Lock */}
            <div className="grid grid-cols-3 items-center xs:text-sm xs6:text-base xs8:text-lg md:text-base lg:text-lg">
              <div>Global Lock</div>
              <div>5,000 XYZ</div>
              <div>7% APR</div>
            </div>
            {/* Total Amount Claimable */}
            <div className="grid grid-cols-3 items-center xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <div>Total Amount Claimable</div>
              <div>2,000 XYZ</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-3 md:px-4 rounded-md   xs:text-sm md:text-base">
                Vest
              </button>
            </div>
            {/* Unlocked/Staked */}
            <div className="grid grid-cols-3 items-center mb-5 xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <div>Staked</div>
              <div>0 XYZ</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Withdraw
              </button>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-between xs:flex-col xs:gap-3 md:gap-0 md:flex-row">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-4 md:px-2 lg:px-4 xl:px-3 rounded">
                Stake
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-4 md:px-2 lg:px-4 xl:px-3 rounded">
                Lock
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-4 md:px-2 lg:px-4 xl:px-3 rounded">
                Withdraw
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-4 md:px-2 lg:px-4 xl:px-3 rounded">
                Add LP
              </button>
            </div>
          </div>

          {/* Container 2 */}
          <div className="flex flex-col gap-2 bg-[#292941] p-4 rounded-2xl">
            <h2 className="text-2xl text-white text-center ">Total Vested</h2>
            <div className="flex justify-around xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>Vested</span>
              <span>12 XYZ</span>
            </div>
            <div className="flex justify-around xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>Penalty</span>
              <span>6%</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-10 justify-items-center xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span className="font-bold">Amount</span>
              <span className="font-bold">Exp.</span>
              <span>12 XYZ</span>
              <span>3 mnth</span>
            </div>
          </div>

          {/* Container 3 (Identical to Container 2) */}
          <div className="flex flex-col gap-2 bg-[#292941] p-4 rounded-2xl">
            {/* Reuse the structure from Container 2 */}
            <h2 className="text-2xl text-white text-center ">Total Locked</h2>
            <div className="flex justify-around xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>Locked</span>
              <span>12 XYZ</span>
            </div>
            <div className="flex justify-around xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>Penalty</span>
              <span>6%</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-10 justify-items-center xs:text-sm md:text-base xs6:text-base xs8:text-lg">
              <span className="font-bold">Amount</span>
              <span className="font-bold">Exp.</span>
              <span>12 XYZ</span>
              <span>3 mnth</span>
            </div>
          </div>

          {/* Container 4 (Staking Rewards) */}
          <div className="flex flex-col gap-2 bg-[#292941] p-4 rounded-2xl">
            <span className="text-2xl text-center pb-4">Staking Rewards</span>
            <div className="grid grid-cols-3 gap-2 xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>XYZ</span>
              <span>100 XYZ</span>
              <span>$300 USD</span>
              {/* Add more rows as needed */}
              <span>XYZ</span>
              <span>100 XYZ</span>
              <span>$300 USD</span>
              <span>XYZ</span>
              <span>100 XYZ</span>
              <span>$300 USD</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Claim
            </button>
          </div>

          {/* Container 5 (Deposit / Debt) */}
          <div className="flex flex-col gap-2 bg-[#292941] p-4 rounded-2xl">
            <span className="text-center text-2xl pb-4">Deposit / Debt</span>
            <div className="grid grid-cols-4 gap-2 justify-items-center xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <span>Asset</span>
              <span>Balance</span>
              <span>Deposited</span>
              <span>Borrowed</span>
              {/* Dummy row 1 */}
              <span>XYZ</span>
              <span>50 XYZ</span>
              <span>20 XYZ</span>
              <span>10 XYZ</span>
              {/* Dummy row 2 */}
              {/* Add more as needed */}
              <span>XYZ</span>
              <span>50 XYZ</span>
              <span>20 XYZ</span>
              <span>10 XYZ</span>
              <span>XYZ</span>
              <span>50 XYZ</span>
              <span>20 XYZ</span>
              <span>10 XYZ</span>
            </div>
          </div>

          {/* Container 6 (Health) */}
          <div className="flex flex-col gap-2 bg-[#292941] p-4 rounded-2xl">
            <span className="text-2xl text-center pb-4">Account Health</span>
            <div className="flex flex-col gap-2 xs:text-sm md:text-base xs6:text-base xs8:text-lg lg:text-lg">
              <div className="flex justify-around pb-2 ">
                <span>Health</span>
                <span>1.24</span>
              </div>
              <div className="flex justify-around pb-2">
                <span>LTV</span>
                <span>75%</span>
              </div>
              <div className="flex justify-around pb-2">
                <span>Threshold</span>
                <span>80%</span>
              </div>
              <div className="flex justify-around pb-2">
                <span>Collateral</span>
                <span>$3.2k</span>
              </div>
              <div className="flex justify-around pb-2">
                <span>Liquidity</span>
                <span>$529.12</span>
              </div>
              <div className="flex justify-around pb-4">
                <span>Debt</span>
                <span>$3k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
