"use client";
import { playfair, lato } from "../../../fonts/font.js";
import {
  GiAbstract070,
  GiConcentricCrescents,
  GiHalfTornado,
} from "react-icons/gi";
import ParentComponent from "../../../../../threeJS/ParentComponent.jsx";

export default function Hero() {
  return (
    <div
      className="text-white  max-w-[2200px] 
    xs:p-0 xl:p-0"
    >
      <div
        className="
      
      lg:w-[100vw]  xs:h-[88vh]   mx-auto overflow-hidden relative"
      >
        <ParentComponent />
        <div
          className={`absolute top-0 text-center xs:h-[88vh] ${playfair.className} w-[100vw]`}
        >
          <div className="flex flex-col xs:h-[100%] xs:pt-[16%]  md:justify-start lg:pt-[2%] xl:pt-[3%] ">
            <div>
              <h1
                className="
            xs:text-3xl xs:mb-[4%]
            xs4:text-4xl
            xs6:text-5xl 
            md:text-7xl
            lg:text-8xl  md: mb-[3%]
            "
              >
                Ashley Capital & DeFi
              </h1>
              {/* <h2
                className="
             text-[#23b2ee] font-bold
            xs:text-2xl
           
            md:text-3xl md:pt-1
            lg:text-5xl lg:mb-1 "
              >
                Jacksonville Florida's Premier
              </h2> */}

              <h2
                className="
            text-sky-400 font-bold
            xs:text-2xl xs:pb-[25%]
            xs2:mb-4
            md:text-3xl md:pt-1
            lg:text-5xl lg:mb-4 lg:pb-[3%]"
              >
                Crypto Consulting and Wealth Management
              </h2>
            </div>

            {/* <h4
              className={`
              xs:text-lg xs:justify-start xs:pb-[25%]
              xs3:text-xl
              xs4:text-2xl
              xs5:mt-5
              lg:pb-[5%]
            
              lg:text-3xl lg:pt-0 tracking-wide   text-sky-400 ${playfair.className}
              `}
            >
              Where whales are born.
            </h4> */}

            {/* Starts cards */}
            <div className="text-white mt-3 xs:px-1 md:px-0 ">
              <div
                className="flex md:justify-center xs:gap-[0.4rem]     
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
                    

                    "
                >
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
                            xl:w-[90%] xl:mx-auto xl:mt-2 lg:px-2
                            "
                  >
                    Onboarding you into the new realm of decentralized finance,
                    the future of money.
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
                    We have over seven years experience in blockchain technology
                    and DeFi.
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
                    Direct consulting, technology reports, and a high-APR,
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
