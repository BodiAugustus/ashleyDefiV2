"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import header2 from "./../../../../../../../public/ashley-defi-header-2.jpg";
import logo from "./../../../../../../../public/Ashley-capital-logo.png";
import tester2 from "./../../../../../../../public/cnslt.png";

const Info = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-white text-center max-w-[800px]">
      <h2
        className="text-4xl pt-4 mb-2 font-bold
        xs:text-2xl xs:mb-1 xs:mt-2
        xs4:text-3xl
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3"
      >
        A <span className="text-green-500">Better</span> Way Forward
      </h2>
      <div
        className="xs:w-[95%] xs:h-auto lg:h-[88vh]
         md:w-[90%] mx-auto p-2 white-glassmorphism shadow-xl shadow-indigo-700"
      >
        <div className="col-span-2 white-glassmorphism lg:h-full">
          <div className="relative block">
            <Image
              src={tester2}
              alt="Man sitting at laptop in paradise investing in crypto"
              className="relative brightness-90 rounded-2xl"
            />
          </div>

          <div className="p-2 rounded-md relative h-[45%] overflow-hidden">
            <div className="abstract text-white z-50 indent-3 first-letter:text-2xl xs:text-sm xs3:text-base xs6:text-lg md:text-xl lg:text-lg h-full overflow-y-scroll relative">
              <p className="pb-1 xs:pt-0">
                Ashley Capital & DeFi was founded in order to help
                professionally onboard people into Decentralized Finance, the
                future of money. We accomplish our mission via our client-based
                consulting services and a high yields permissionless staking
                vault that offers consistent APR's far above the traditional
                finance industry average.
              </p>
              <p className="pb-4">
                Whether you're seeking a temporary learning resource to
                eventually become your own DeFi master, looking for long-term
                crypto advisement, or simply interested in staking inside of our
                vault to earn yields, we've got you covered! Our consultants are
                professional DeFi investors, coders and blockchain engineers who
                utilize and build upon DeFi protocols everyday using the most
                advanced technologies and analytics available, including AI.
              </p>
              <p>
                We spend all the hours sifting through forums, posts, and data
                in order to find and test the many constantly evolving
                technologies so that you don't have to. Our years of learned
                experience are constantly engaged in finding legitimate
                protocols, figuring out their dynamics and utility cases and
                then leveraging them in unique and novel ways to develop highly
                profitable strategies within a fast-paced, constantly changing
                environment.
              </p>
            </div>

            <Image
              src={logo}
              layout="fill"
              alt="Venice, Italy"
              className="relative rounded-xl opacity-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
