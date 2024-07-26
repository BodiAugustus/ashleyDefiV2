import { Button } from "../../../../common/Button";
import Link from "next/link";

export default function Call2Action() {
  return (
    <div className="xs:h-auto  max-w-[2200px]  xl:pt-6">
      <div
        className="flex white-glassmorphism xs:w-[95%] md:w-[90vw]  
     
        mx-auto text-white xs:p-2 md:p-4 max-w-[1400px] shadow-xl shadow-indigo-700 xs6:mb-10  xs8:mb-0"
      >
        {/* custom-xs-448-call2
      custom-xs-640-call2
      custom-xs-660-call2
      custom-xs-670-call2 
      custom-xs-850-call2
      custom-xs-860-call2
      custom-xs-410675-call2
      custom-xs-410810-call2 */}
        <div className="bg-[url(/haad.jpg)] bg-cover bg-center rounded-2xl relative">
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70"></div>
          <div
            className="relative xs:w-[100%] lg:w-[70%] mx-auto flex flex-col items-center  md:h-[100%] justify-center xs:gap-5 
          xs4:p-3 md:gap-8"
          >
            <h2 className=" font-bold xs:text-2xl xs:pt-5 text-center md:text-4xl">
              Come Win With Us!
            </h2>
            <p className="text-center xs:text-sm xs3:text-base xs6:text-lg md:text-xl text-[#B0C7EF]">
              At Ashley Capital & DeFi, we ensure your money works as hard and
              smart as possible, maximizing your returns so you can enjoy more
              of what you love. If you’re looking to grow your wealth, you’ve
              come to the right place. Welcome to Ashley Capital & DeFi,
              <br /> <br />{" "}
              <span className="text-sky-400 font-bold xs:text-xl xs6:text-2xl md:text-2xl ">
                where whales are born.
              </span>
            </p>
            <Link href="/consulting" passHref>
              <Button className="shadow-xl font-thin font-sans xs5:text-xl xs:mb-2">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
