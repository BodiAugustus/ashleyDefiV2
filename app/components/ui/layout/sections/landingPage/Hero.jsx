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
      
      lg:w-[100vw] h-[82vh] mx-auto overflow-visible relative"
      >
        <ParentComponent />
        <div
          className={`absolute top-0 text-center h-[82vh] ${playfair.className} w-[100vw]`}
        >
          <div
            className="
          xs:pb-14
          lg:pb-16"
          >
            <h1
              className="
            xs:text-3xl xs:pt-3
            lg:text-8xl"
            >
              Ashley Capital & DeFi
            </h1>
            <h2
              className="
            xs:text-2xl
            lg:text-4xl lg:mb-14 "
            >
              Crypto Consulting and Wealth Management
            </h2>
            <h4
              className={`
              xs:text-lg
              lg:text-2xl  tracking-wide  text-sky-400 ${playfair.className}`}
            >
              Where whales are born.
            </h4>
          </div>
          <div>
            <div className="text-white mt-3">
              <div
                className="flex md:justify-between xs:gap-[0.6rem]
                
          lg:max-w-7xl lg:mx-auto lg:gap-16
                "
              >
                <div
                  className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism 
                    xs:h-[35vh] 
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  <div
                    className="flex justify-between
                  xs:px-1
                   px-4 py-2 items-center"
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
                  xs:h-[35vh]
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
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
                  xs:h-[35vh]
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center
                  xs:px-1"
                  >
                    <h4>Offered Services</h4>
                    <GiHalfTornado
                      className="fill-sky-500 text-2xl 
                                    md:text-4xl
                                    xl:text-5xl"
                    />
                  </div>
                  <p
                    className="text-center
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            "
                  >
                    We provide direct consulting along with a high APR
                    permissionless staking vault.
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
