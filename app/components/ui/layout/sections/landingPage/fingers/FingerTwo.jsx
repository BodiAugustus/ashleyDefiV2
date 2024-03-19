import Image from "next/image";
import { Button } from "../../../../common/Button";

export default function FingerTwo() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="w-[50%]">
        <Image
          src="/Ashley-capital-logo.png"
          width={350}
          height={350}
          className="hidden md:block "
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="w-[50%] p-3 flex  flex-col gap-5 ">
        <h2 className="font-bold text-3xl">Staking</h2>
        <p className="text-xl w-[90%] text-[#B0C7EF]">
          Our high APY vaults work as Yield Aggregators, maximizing yield
          potentials from farms via auto-compounding and other strategies. A
          yield aggregator is a service that helps investors earn the highest
          possible return on their crypto investments by using automation to
          manage their investments in various pools, continually seeking out the
          best opportunities for earning yield.
        </p>
        <Button variant="white" className="w-[27%]" size="lg">
          Visit Vaults &#8594;
        </Button>
      </div>
    </div>
  );
}
