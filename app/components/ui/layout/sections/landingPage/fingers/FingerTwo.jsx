import Image from "next/image";
import { Button } from "../../../../common/Button";
const vid = "vault.mp4";

export default function FingerTwo() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700 ">
      <div className="w-[50%] h-full relative ">
        <video
          src={vid}
          className="brightness-70 rounded-2xl px-4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="w-[50%] p-3 flex  flex-col gap-5 ">
        <h2 className="font-bold text-3xl">Staking</h2>
        <p className="text-xl w-[90%] text-[#B0C7EF]">
          Our high APY vaults work as Yield Aggregators, maximizing yield
          potentials from liquidity pools via auto-compounding and other
          strategies. A yield aggregator is a service that helps investors earn
          the highest possible return on their crypto investments by using
          automation to manage their investments in various pools, continually
          seeking out the best opportunities for earning yield.
        </p>
        <Button variant="white" className="w-[27%]" size="lg">
          Visit Vaults &#8594;
        </Button>
      </div>
    </div>
  );
}
