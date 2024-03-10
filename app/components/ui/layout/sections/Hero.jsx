"use client";
import ZenAnimation from "@/app/threeJS/ZenAnimation";
import { playfair, lato } from "../../fonts/font.js";
import {
  GiAbstract070,
  GiConcentricCrescents,
  GiHalfTornado,
} from "react-icons/gi";

export default function Hero() {
  return (
    <div className="text-white p-4 max-w-[2200px] ">
      <div className="w-[100vw] h-[82vh] mx-auto overflow-visible relative">
        <ZenAnimation />
        <div
          className={`absolute top-0 text-center h-[82vh] ${playfair.className} w-[100vw]`}
        >
          <div className="pb-16">
            <h1 className="text-8xl">Ashley Capital & DeFi</h1>
            <h2 className="text-4xl mb-14 ">
              Crypto Consulting and Wealth Management
            </h2>
            <h4 className={`text-2xl  font-thin font-sans text-sky-300`}>
              Where whales are made.
            </h4>
          </div>
          <div>
            <div className="text-white mt-3">
              <div
                className="flex justify-between h-[20vh] 
          lg:max-w-7xl lg:mx-auto lg:gap-16
                "
              >
                <div
                  className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism
                    xs:h-[19vh]
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  <div className="flex justify-between p-2 items-center">
                    <h4>Our Job</h4>
                    <GiAbstract070
                      className="fill-blue-500 text-2xl
                                    md:text-3xl
                                    xl:text-5xl
                                    "
                    />
                  </div>
                  <p
                    className="text-center px-[0.2px]
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            "
                  >
                    To teach you how to make your own well informed investing
                    decisions.
                  </p>
                </div>

                <div
                  className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism
                    xs:h-[19vh]
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  <div className="flex justify-between p-2 items-center">
                    <h4>Why Us?</h4>
                    <GiConcentricCrescents
                      className="fill-purple-600 text-2xl
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
                    We are actual blockchain developers with years of DeFi
                    experience.
                  </p>
                </div>

                <div
                  className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism 
                    xs:h-[19vh]
                    xp:h-[25vh] xp:text-base
                    sm:text-lg sm:h-[28vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    2xl:w[-32%]
                    "
                >
                  <div className="flex justify-between p-2 items-center">
                    <h4>Services</h4>
                    <GiHalfTornado
                      className="fill-red-400 text-2xl 
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
                    We offer both custodial and non-custodial support
                    strategies.
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
