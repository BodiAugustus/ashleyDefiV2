import Image from "next/image";
import { Button } from "../../../../common/Button";
import Link from "next/link";
const vid = "consulting.mp4"; // No need to import, just provi
export default function FingerOne() {
  return (
    <div className="flex white-glassmorphism xs:w-[95vw] xl:w-[80vw]  mx-auto lg:items-center text-white md:p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="lg:w-[50%] p-3 md:flex md:flex-col md:gap-5">
        <h2
          className="font-bold
        xs:text-xl xs:pb-2
        xs5:text-2xl
         md:text-3xl md:inline-block"
        >
          Consulting
        </h2>
        <div className="xs:visible xs:pb-2 lg:hidden ">
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
        md:text-xl lg:w-[98%] text-[#B0C7EF] lg:pb-1 "
        >
          Every Ashley DeFi consultant provides concise, data-driven insights
          derived from extensive research on market catalysts, DeFi narratives,
          protocols, and industry-relevant events. We offer expert guidance for
          well-informed, timely decision-making to all our clients. Take the
          first step by engaging with one of our expert consultants today!
        </p>
        <Link href="/consulting" passHref>
          <Button
            variant="white"
            className="xs:mx-auto xs:mb-2  md:hidden xs5:text-xl"
            size="md"
          >
            Learn More &#8594;
          </Button>
        </Link>
        <Link href="/consulting" passHref>
          <Button
            variant="white"
            className="xs:hidden md:inline-block  lg:mx-auto "
            size="lg"
          >
            Learn More &#8594;
          </Button>
        </Link>
      </div>
      {/* <Image
        src="/Ashley-capital-logo.png"
        width={350}
        height={350}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
      <div className="xs:hidden lg:block lg:w-[50%] lg:h-full lg:relative">
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
