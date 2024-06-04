"use client";
import ZenAnimation from "@/app/threeJS/ZenAnimation";
import { playfair, lato } from "../../../fonts/font.js";
import {
  GiAbstract070,
  GiConcentricCrescents,
  GiHalfTornado,
} from "react-icons/gi";
import ParentComponent from "@/app/threeJS/ParentComponent.jsx";

export default function Hero() {
  return (
    <div
      className="text-white 2xl:p-4 max-w-[2200px] 
    xs:p-1"
    >
      <div
        className="
      
      lg:w-[100vw]  xs:h-[88vh]   mx-auto overflow-visible relative"
      >
        <ParentComponent />
        <div
          className={`absolute top-0 text-center xs:h-[88vh]  ${playfair.className} w-[100vw]`}
        >
          <div className="flex flex-col xs:h-[100%] xs:pt-[16%]  md:justify-start lg:pt-[2%] xl:pt-[3%] ">
            <div className="">
              {/* custom-xs-448-hero-cards
            custom-xs-640-hero-cards
            custom-xs-340-hero-cards
            custom-xs-550-hero-cards */}
              <h1
                className="
            xs:text-3xl 
            xs4:text-4xl
            xs6:text-5xl 
            md:text-7xl
            lg:text-8xl  lg:mb-4"
              >
                Ashley Capital & DeFi
              </h1>
              {/* custom-xs-448-hero-title custom-xs-640-hero-title
            custom-xs-340-hero-title custom-xs-550-hero-title
            custom-xs-660-hero-title custom-xs-850-hero-title
            custom-xs-650-hero-title custom-xs-390780-hero-title
            custom-xs-410675-hero-title
            custom-xs-410810-hero-title */}
              <h2
                className="
            xs:text-2xl
            xs2:mb-4
            md:text-3xl md:pt-1
            lg:text-4xl lg:mb-4 "
              >
                Crypto Consulting and Wealth Management
              </h2>
            </div>

            <h4
              className={`
              xs:text-lg xs:justify-start xs:pb-[25%]
              xs3:text-xl
              xs4:text-2xl
              xs5:mt-5
              lg:pb-[5%]
            
              lg:text-3xl lg:pt-0 tracking-wide   text-sky-400 ${playfair.className}`}
            >
              Where whales are born.
            </h4>

            {/* custom-xs-640-snd-title
              custom-xs-410675-snd-title
              custom-xs-410810-snd-title */}

            {/* Starts cards */}
            <div className="text-white mt-3  ">
              {/* custom-xs-550-hero-cards */}
              <div
                className="flex md:justify-center xs:gap-[0.6rem]     
                lg:max-w-[1200px] lg:mx-auto md:gap-[1.5rem]  lg:gap-10 xl:gap-12 lg:overflow-hidden"
              >
                <div
                  className="bg-[#2b2b2b] text-xs md:w-[29%] rounded-lg white-glassmorphism 
                  
                  xs3:text-sm xs:h-auto xs:pb-1
                     xp:text-base
                    xs6:text-lg xs6:leading-6
                  
                    sm:text-lg  sm:w-[31%]
                    md:text-xl
                    lg:text-xl lg:w-[28%] xl:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]

                    "
                >
                  {/* custom-xs-448-hero-cards2 
                  custom-xs-640-hero-cards2 
                    custom-xs-360-hero-cards-height
                  custom-xs-550-hero-cards-height
                  custom-xs-660-hero-cards-height
                    custom-xs-390780-hero-cards-height 
                    custom-xs-410675-hero-cards-height
                    custom-xs-410810-hero-cards-height */}
                  <div
                    className="flex justify-between
                  xs:px-1 md:px-2
                   px-4 py-2 items-center xs6:leading-5"
                  >
                    <h4>Our Purpose</h4>
                    <GiAbstract070
                      className="fill-blue-500 text-2xl
                                    md:text-3xl
                                    xl:text-5xl
                                    "
                    />
                  </div>
                  <p
                    className="text-center px-[.2px]
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            "
                  >
                    Onboarding you into DeFi so that you can find and make
                    profitable investing decisions.
                  </p>
                </div>

                <div
                  className="bg-[#2b2b2b] text-xs md:w-[29%] rounded-lg white-glassmorphism 
                  
                  xs3:text-sm xs:h-auto xs:pb-1
                     xp:text-base
                    xs6:text-lg xs6:leading-6
                  
                    sm:text-lg  sm:w-[31%]
                    md:text-xl
                    lg:text-xl lg:w-[28%] xl:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  {/* custom-xs-448-hero-cards2 
                  custom-xs-640-hero-cards2 
                 custom-xs-360-hero-cards-height
                  custom-xs-550-hero-cards-height
                  custom-xs-660-hero-cards-height
                   custom-xs-390780-hero-cards-height 
                    custom-xs-410675-hero-cards-height
                    custom-xs-410810-hero-cards-height */}
                  <div
                    className="flex justify-between px-4 py-2  items-center
                  xs:px-2"
                  >
                    <h4>Why Us?</h4>
                    <GiConcentricCrescents
                      className="fill-indigo-500 text-2xl
                                    md:text-3xl
                                    xl:text-5xl
                                    "
                    />
                  </div>
                  <p
                    className="text-center
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            "
                  >
                    We have over four years of blockchain development and DeFi
                    investing experience.
                  </p>
                </div>

                <div
                  className="bg-[#2b2b2b] text-xs md:w-[29%] rounded-lg white-glassmorphism 
                  
                  xs3:text-sm xs:h-auto xs:pb-1
                     xp:text-base
                    xs6:text-lg xs6:leading-6
                  
                    sm:text-lg  sm:w-[31%]
                    md:text-xl
                    lg:text-xl lg:w-[28%] xl:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  {/* custom-xs-448-hero-cards2 
                  custom-xs-640-hero-cards2 
                custom-xs-360-hero-cards-height
                  custom-xs-550-hero-cards-height 
                  custom-xs-660-hero-cards-height
                     custom-xs-390780-hero-cards-height 
                    custom-xs-410675-hero-cards-height
                    custom-xs-410810-hero-cards-height */}
                  <div
                    className="flex xs:justify-around lg:justify-between md:px-4 py-2 items-center
                  xs:px-1"
                  >
                    <h4>Services</h4>
                    <GiHalfTornado
                      className="fill-sky-500 text-2xl 
                                    md:text-4xl
                                    xl:text-5xl"
                    />
                  </div>
                  <p
                    className="text-center
                    xs:px-[0.2rem]
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            "
                  >
                    We provide direct consulting with a high APR no permission
                    staking vault.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
