import Image from "next/image";
import { Button } from "../../../../common/Button";
const vid = "consulting.mp4"; // No need to import, just provi
export default function FingerOne() {
  return (
    <div className="flex white-glassmorphism xs:w-[95vw] md:w-[80vw]  mx-auto text-white md:p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="md:w-[50%] p-3 md:flex md:flex-col md:gap-5">
        <h2
          className="font-bold
        xs:text-xl xs:pb-2
        xs5:text-2xl
         md:text-3xl"
        >
          Consulting
        </h2>
        <div className="xs:visible xs:pb-2 md:hidden md:w-[50%] md:h-full md:relative">
          <video
            src={vid}
            className="brightness-70 rounded-2xl px-4"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p
          className="
        xs:text-sm xs:w-[100%] xs:indent-5 xs:pb-4 xs:px-2
        xs3:text-base
        xs6:text-lg
        md:indent-0
        md:text-xl md:w-[80%] text-[#B0C7EF]"
        >
          Every Ashley DeFi consultant delivers concise, data-driven knowledge
          gained from extensive research on market catalysts, DeFi narratives,
          protocols and industry relevent events. We provide expert insights for
          well-informed, timely decision-making to all of our clientele. Go
          ahead and take the first step by engaging with one of our expert
          consultants today!
        </p>
        <Button
          variant="white"
          className="xs:mx-auto xs:mb-2 md:w-[28%] md:hidden xs5:text-xl"
          size="md"
        >
          Learn More &#8594;
        </Button>
        <Button
          variant="white"
          className="xs:hidden md:visible md:w-[28%]"
          size="lg"
        >
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
      <div className="xs:hidden md:visible md:w-[50%] md:h-full md:relative">
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
