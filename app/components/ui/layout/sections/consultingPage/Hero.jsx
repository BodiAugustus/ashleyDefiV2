import { Button } from "../../../common/Button";
import CryptoTickerTable from "../../../common/Ticker";
import { lato, playfair } from "../../../fonts/font";
export default function Hero({ formRef, ashleyAdvRef }) {
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollToForm();
    }
  };

  const scrollToAshleyAdv = () => {
    if (ashleyAdvRef.current) {
      ashleyAdvRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-[100vw] xs:h-[88vh] md:h-[80vh] mx-auto bg-[url(/consultingBg.jpg)]  bg-center bg-cover relative max-w-[2200px]">
      <div className="absolute inset-0 bg-black md:rounded-2xl bg-opacity-40 "></div>
      <div
        className="relative flex flex-col 
     
      
        items-center  h-[100%] xs:pt-[15%] md:-mb-6  xs:gap-[10%] lg:pt-16 xl:pt-8 xl:gap-[13%]"
      >
        {/* custom-xs-448-mobile-consulting-hero
      custom-xs-640-mobile-consulting-hero
      custom-xs-360-mobile-consulting-hero
      custom-xs-550-mobile-consulting-hero 
      custom-xs-390780-mobile-consulting-hero */}
        <h1
          className={`xs:text-3xl xs:text-center xs5:text-4xl
          
          md:text-5xl text-white font-bold tracking-tight ${lato.className} xs:pt-14
          xs3:pt-0 md:pt-6`}
        >
          Ashley Consulting: Your Partners in DeFi
        </h1>
        <h3 className="text-[#d3dcf0] xs:text-base md:text-2xl xs:px-2 xs5:px-4 xs5:text-lg lg:w-[70%] xl:w-[50%] text-center xs8:text-xl lg:text-xl">
          Our advisory covers the Sonic and Monero blockchains, including
          protocol assessments, trading strategies, tokenomics, education, and
          investing services.
        </h3>
        <div className="flex gap-5 w-[100%] items-center justify-center xs:pt-5 md:pt-0 ">
          <Button
            variant="blue"
            className="md:w-[20%] flex justify-center shadow-md xs5:text-xl"
            onClick={scrollToForm}
          >
            Get in touch
          </Button>
          <Button
            variant="white"
            className="md:w-[20%] flex justify-center xs5:text-xl"
            onClick={scrollToAshleyAdv}
          >
            Learn more
          </Button>
        </div>
        <h4 className="xs:mt-4 md:mt-16 uppercase text-[#d3dcf0] font-bold xs:text-sm md:text-xl xs8:text-base">
          Serving Clients since 2025
        </h4>
      </div>
      <div className="text-white">
        <CryptoTickerTable />
      </div>
    </div>
  );
}
