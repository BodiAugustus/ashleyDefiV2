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
    <div className=" text-white text-center max-w-[800px]">
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
        className="xs:w-[95%] md:w-[90%] h-[88vh] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2  white-glassmorphism shadow-xl shadow-indigo-700
        custom-xs-448-about-infobox
        custom-xs-640-about-infobox
        custom-xs-360-about-infobox
        custom-xs-550-about-infobox
        custom-xs-670-about-infobox
        custom-xs-850-about-infobox 
        custom-xs-410810-about-infobox
        "
      >
        <div className="  col-span-2 white-glassmorphism">
          <div className="relative h-full ">
            <Image
              src={tester2}
              layout="fill"
              alt="Venice, Italy"
              className="relative brightness-90 rounded-2xl"
            />
          </div>

          <div className="col-span-2 row-span-2 p-2 rounded-md  h-full relative">
            <div className="abstract text-white z-50 indent-3 first-letter:text-2xl xs:text-sm xs3:text-base xs6:text-lg">
              <p className="pb-1 xs:pt-0 ">
                Ashley Capital & DeFi was founded in order to help
                professionally onboard people into Decentralized Finance, the
                future of money. We accomplish our mission via our client-based
                consulting services and a high yields permissionless staking
                vault that offers consistent APR's far above the traditional
                finance industry average.
              </p>

              {isMobile && (
                <div className="overflow-y-auto h-[25vh]">
                  <p className="pb-4">
                    Whether you're seeking a temporary learning resource to
                    eventually become your own DeFi master, looking for
                    long-term crypto advisement, or simply interested in staking
                    inside of our vault to earn yields, we've got you covered!
                    Our consultants are professional DeFi investors, coders and
                    blockchain engineers who utilize and build upon DeFi
                    protocols everyday using the most advanced technologies and
                    analytics available, including AI.
                  </p>
                  <p>
                    We spend all the hours sifting through forums, posts, and
                    data in order to find and test the many constantly evolving
                    technologies so that you don't have to. Our years of learned
                    experience are constantly engaged in finding legitimate
                    protocols, figuring out their dynamics and utility cases and
                    then leveraging them in unique and novel ways to develop
                    highly profitable strategies within a fast-paced, constantly
                    changing environment.
                  </p>
                </div>
              )}
            </div>

            {!isMobile && (
              <p>
                Whether you're seeking a temporary learning resource to
                eventually become your own DeFi master, looking for long-term
                crypto advisement, or simply interested in staking inside of our
                vault to earn yields, we've got you covered! Our consultants are
                professional DeFi investors, coders and blockchain engineers who
                utilize and build upon DeFi protocols everyday using the most
                advanced technologies and analytics available, including AI. We
                spend all the hours sifting through forums, posts, and data in
                order to find and test the many constantly evolving technologies
                so that you don't have to. Our years of learned experience are
                constantly engaged in finding legitimate protocols, figuring out
                their dynamics and utility cases and then leveraging them in
                unique and novel ways to develop highly profitable strategies
                within a fast-paced, constantly changing environment.
              </p>
            )}

            <Image
              src={logo}
              layout="fill"
              alt="Venice, Italy"
              className="relative  rounded-xl opacity-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
