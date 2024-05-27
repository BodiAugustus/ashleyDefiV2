import { Button } from "../../../../common/Button";

export default function Call2Action() {
  return (
    <div className="xs:h-auto md:h-[75vh] max-w-[2200px] z-0">
      <div
        className="flex white-glassmorphism xs:w-[95%] md:w-[90vw] 
      custom-xs-448-call2
      custom-xs-640-call2
      custom-xs-660-call2
      custom-xs-670-call2 
      custom-xs-850-call2
      custom-xs-860-call2
      custom-xs-410675-call2
      custom-xs-410810-call2
       md:h-[70vh]  mx-auto text-white xs:p-2 md:p-4 max-w-[1400px] shadow-xl shadow-indigo-700 xs6:mb-10  xs8:mb-0"
      >
        <div className="bg-[url(/haad.jpg)] bg-cover bg-center rounded-2xl relative">
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70"></div>
          <div
            className="relative xs:w-[100%] md:w-[60%] mx-auto flex flex-col items-center  md:h-[100%] justify-center xs:gap-5 
          xs4:p-3 md:gap-8"
          >
            <h2 className="md:text-3xl font-bold xs:text-2xl xs:pt-5 text-center lg:text-4xl">
              Come Win With Us!
            </h2>
            <p className="text-center xs:text-sm xs3:text-base xs6:text-lg md:text-xl text-[#B0C7EF]">
              At Ashley Capital & DeFi, we make your money work as hard and
              smart as possible so that you can have more of it back to do the
              things you love and enjoy. So if you like having extra money, then
              you've come to the right place. Welcome to Ashley Capital & DeFi,
              <br /> <br />{" "}
              <span className="text-sky-400 font-bold xs:text-xl xs6:text-2xl md:text-2xl ">
                where whales are born.
              </span>
            </p>
            <Button className="shadow-xl font-thin font-sans xs5:text-xl">
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
