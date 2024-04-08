import Image from "next/image";
import { Button } from "../../../../common/Button";
const vid = "consulting.mp4"; // No need to import, just provi
export default function FingerOne() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="w-[50%] p-3 flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Consulting</h2>
        <p className="text-xl w-[80%] text-[#B0C7EF]">
          Every Ashley DeFi consultant delivers concise, data-driven knowledge
          gained from extensive research on market catalysts, DeFi narratives,
          protocols and industry relevent events. We provide expert insights for
          well-informed, timely decision-making to all of our clientele. Go
          ahead and take the first step by engaging with one of our expert
          consultants today!
        </p>
        <Button variant="white" className="w-[28%]" size="lg">
          Learn More &#8594;
        </Button>
      </div>
      {/* <Image
        src="/Ashley-capital-logo.png"
        width={350}
        height={350}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
      <div className="w-[50%] h-full relative">
        <video
          src={vid}
          className="brightness-70 rounded-2xl px-4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
