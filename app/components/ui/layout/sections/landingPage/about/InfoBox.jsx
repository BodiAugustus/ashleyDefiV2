"use client";
import Image from "next/image";

import header2 from "./../../../../../../../public/ashley-defi-header-2.jpg";
import logo from "./../../../../../../../public/Ashley-capital-logo.png";

const Info = () => {
  return (
    <div className=" text-white text-center max-w-[800px]">
      <h2
        className="text-4xl pt-4 mb-2 font-bold
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3"
      >
        A <span className="text-green-500">Better</span> Way Forward
      </h2>
      <div className="w-[90%] h-[88vh] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2  white-glassmorphism shadow-xl shadow-indigo-700">
        <div className="  col-span-2 white-glassmorphism">
          <div className="relative h-full ">
            <Image
              src={header2}
              layout="fill"
              alt="Venice, Italy"
              className="relative brightness-50 rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2 p-2 rounded-md  h-full relative">
          <div className="abstract text-white z-50 indent-3 first-letter:text-2xl">
            <p className="pb-4">
              Ashley Capital & DeFi was founded in order to help professionally
              onboard people into Decenteralized Finance, the future of money.
              We accomplish our mission via our client-based consulting services
              and a series of high yields staking vaults that offer consistent
              APR's far above the traditional finance industry average.
            </p>

            <p className="pb-4">
              Whether you're seeking a temporary learning resource to eventually
              become your own DeFi master, looking for long-term crypto advisor,
              or simply interested in staking in our vaults to farm rewards,
              we've got you covered! Our consultants are professional coders and
              blockchain engineers who utilize and build upon DeFi protocols
              everyday using the most advanced technologies and analytics
              available, including AI.
            </p>
            <p>
              We spend all the hours sifting through forums, posts, and data in
              order to find and test the many constantly evolving narratives so
              that you don't have to. Our years of learned experience are
              engaged to find legitimate protocols, figure out their dynamics
              and utility cases and then leverage them either together or apart
              in order to develop highly profitable strategies within a
              fast-paced, constantly changing enviornment.
            </p>
          </div>

          <Image
            src={logo}
            layout="fill"
            alt="Venice, Italy"
            className="relative  rounded-xl opacity-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
