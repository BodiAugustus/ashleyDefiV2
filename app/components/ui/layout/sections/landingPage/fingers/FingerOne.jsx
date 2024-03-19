import Image from "next/image";
import { Button } from "../../../../common/Button";

export default function FingerOne() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="w-[50%] p-3 flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Consulting</h2>
        <p className="text-xl w-[80%] text-[#B0C7EF]">
          Every Ashley DeFi consultant delivers concise, data-driven knowledge
          from extensive research on market catalysts, DeFi narratives and
          protocols, and critical events. We provide expert insights for
          well-informed decision-making to all of our clientele. Go ahead and
          take the first step by engaging with one of our expert consultants
          today!
        </p>
        <Button variant="white" className="w-[28%]" size="lg">
          Learn More &#8594;
        </Button>
      </div>
      <Image
        src="/Ashley-capital-logo.png"
        width={350}
        height={350}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
