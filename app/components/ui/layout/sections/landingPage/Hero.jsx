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
      className="text-white lg:p-4 max-w-[2200px]
    xs:p-1"
    >
      <div
        className="
      
      lg:w-[100vw] med:h-[82vh] xs:h-[88vh] mx-auto overflow-visible relative"
      >
        <ParentComponent />
        <div
          className={`absolute top-0 text-center xs:h-[88vh] md:h-[82vh] ${playfair.className} w-[100vw]`}
        >
          <div
            className="
      
            custom-xs-448-hero-cards
            custom-xs-640-hero-cards
            custom-xs-340-hero-cards
            custom-xs-550-hero-cards
          
          lg:pb-16"
          >
            <h1
              className="
            xs:text-3xl 
            custom-xs-448-hero-title
            custom-xs-640-hero-title 
            custom-xs-340-hero-title
            xs4:text-4xl
            custom-xs-550-hero-title
            custom-xs-660-hero-title
            custom-xs-850-hero-title
            custom-xs-650-hero-title
            custom-xs-390780-hero-title xs6:text-5xl 
            custom-xs-410675-hero-title
            custom-xs-410810-hero-title
           
            lg:text-8xl lg:pt-10 lg:mb-4"
            >
              Ashley Capital & DeFi
            </h1>
            <h2
              className="
            xs:text-2xl
            
            xs2:mb-4
            
            lg:text-4xl lg:mb-14 "
            >
              Crypto Consulting and Wealth Management
            </h2>
            <h4
              className={`
              xs:text-lg
              xs3:text-xl
              xs4:text-2xl
              xs5:mt-5
              custom-xs-640-snd-title
              custom-xs-410675-snd-title
              custom-xs-410810-snd-title
              lg:text-3xl lg:pt-10 tracking-wide  text-sky-400 ${playfair.className}`}
            >
              Where whales are born.
            </h4>
          </div>
          <div>
            <div
              className="text-white mt-3
            custom-xs-550-hero-cards 
          
            lg:pt-16"
            >
              <div
                className="flex md:justify-between xs:gap-[0.6rem]
               
          lg:max-w-7xl lg:mx-auto lg:gap-16
                "
              >
                <div
                  className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism 
                  
                  xs3:text-sm xs:h-auto
                     xp:text-base
                    xs6:text-lg xs6:leading-6
                  
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
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
                  xs:px-1
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
                  className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism 
                 
                  xs3:text-sm xs:h-auto
                    xp:h-[25vh] xp:text-base
                    xs6:text-lg xs6:leading-6
                 
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
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
                  className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism  
                 
                  xs3:text-sm xs:h-auto
                    xp:h-[25vh] xp:text-base
                    xs6:text-lg xs6:leading-6
               
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
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
                    className="flex justify-around md:px-4 py-2 items-center
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
