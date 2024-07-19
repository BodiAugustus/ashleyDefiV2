import Image from "next/image";
import { Button } from "../../../../common/Button";
import Link from "next/link";
const vid = "vault.mp4";

export default function FingerTwo() {
  return (
    <div className="flex white-glassmorphism xs:w-[95vw] xl:w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700 lg:items-center">
      <div className="lg:w-[50%] lg:h-full md:relative ">
        <video
          src={vid}
          className="brightness-70 rounded-2xl px-4 xs:hidden lg:block"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="lg:w-[50%] md:p-3 flex  flex-col xs:gap-3 md:gap-5 ">
        <h2
          className="font-bold 
        xs:text-xl
        xs5:text-2xl
        md:text-3xl lg:text-right lg:px-4"
        >
          Staking
        </h2>
        <div className="lg:w-[50%] md:h-full md:relative ">
          <video
            src={vid}
            className="brightness-70 rounded-2xl px-4 xs:visible lg:hidden"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p
          className=" xs:text-sm
        xs3:text-base xs6:text-lg md:text-xl w-[100%] xs:indent-5 xs:mb-1 xl:indent-0 xs:px-2 text-[#B0C7EF]"
        >
          Our high APY vault works as a Yield Aggregators, maximizing yield
          potentials from liquidity pools via auto-compounding and other
          strategies. A yield aggregator is a service that helps investors earn
          the highest possible return on their crypto investments by using
          automation to manage their investments in various pools, continually
          seeking out the best opportunities.
        </p>
        <Link href="/vaults" passHref>
          <Button variant="white" className="xs:mx-auto xs:mb-2 " size="lg">
            Visit Vaults &#8594;
          </Button>
        </Link>
      </div>
    </div>
  );
}
