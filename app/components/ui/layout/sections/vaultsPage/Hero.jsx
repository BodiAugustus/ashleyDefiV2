import { Button } from "../../../common/Button";
import CryptoTickerTable from "../../../common/Ticker";
import { lato, playfair } from "../../../fonts/font";
export default function Hero() {
  return (
    <div className="w-[100vw] h-[88vh] mx-auto   relative max-w-[2200px] xs:p-2 md:p-4 flex flex-col justify-center items-center bg-[url(/garden.webp)]  bg-center bg-no-repeat bg-cover ">
      <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-30"></div>
      <h1
        className={`xs:text-3xl md:text-5xl text-white font-bold text-center tracking-normal ${playfair.className} md:pb-4 brightness-125 
        custom-xs-448-mobile-vaults-hero-title
        custom-xs-640-mobile-vaults-hero-title
        custom-xs-850-mobile-vaults-hero-title
        custom-xs-390780-mobile-vaults-hero-title
        custom-xs-410810-mobile-vaults-hero-title 
        xs3:text-4xl
        xs8:text-5xl
        
         md:pt-0`}
      >
        The Vaults of Ashley
      </h1>
      <div className="bg-[url(/vaults.webp)]  bg-center bg-no-repeat bg-contain h-[90%] flex justify-center items-center ">
        <div
          className="relative flex flex-col  items-center md:justify-end h-[100%] md:py-10 md:gap-10 
        custom-xs-448-mobile-vaults-hero 
        custom-xs-640-mobile-vaults-hero
        custom-xs-850-mobile-vaults-hero
        custom-xs-860-mobile-vaults-hero 
        xs3:gap-14 "
        >
          <h3 className="text-white font-thin font-sans xs:text-xl xs5:text-2xl md:text-2xl xs:w-[95%] md:w-[60%] text-center custom-xs-410810-mobile-vaults-hero-text">
            High-yielding, permisionless, auto-compounding vaults with TVL based
            allowances for borrowing against collateral
          </h3>
          <div className="flex  md:gap-5 w-[100%] items-center justify-center ">
            <Button
              variant="white"
              className="md:w-[20%] flex justify-center xs:mt-10 md:mt-0 xs5:text-xl"
            >
              Read the Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
