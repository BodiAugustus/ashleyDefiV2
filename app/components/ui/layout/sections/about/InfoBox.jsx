"use client";
import Image from "next/image";

import header2 from "./../../../../../../public/ashley-defi-header-2.jpg";
import logo from "./../../../../../../public/Ashley-capital-logo.png";

const Info = () => {
  return (
    <div className=" text-white text-center">
      <h2
        className="text-4xl pt-4 mb-2
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3"
      >
        A <span className="text-green-500">Better</span> Way Forward
      </h2>
      <div className="w-[90%] h-[88vh] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2  white-glassmorphism">
        <div className="  col-span-2 white-glassmorphism">
          <div className="relative h-full ">
            <Image
              src={header2}
              layout="fill"
              alt="Venice, Italy"
              className="relative brightness-50 rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2 p-2 rounded-md  h-full relative">
          <div className="abstract text-white z-50 indent-3 first-letter:text-2xl">
            <p className="pb-4">
              Ashley Capital & DeFi was founded and built by{" "}
              <span className="hover:scale-105 active:scale-100 transition-all duration-300">
                {" "}
                <a
                  href="https://www.tristannettles.com"
                  target="_blank"
                  className="font-bold text-green-500 cursor-pointer 
              "
                >
                  Tristan Nettles
                </a>
              </span>
              , a full-stack web3 developer, DeFi consultant and published
              author who has been working in the crypto space since 2017. Ashley
              DeFi differentiate's ourselves from the competition by offering a
              niche approach that is tailor-fitted to each one of our clients
              wants and needs.
            </p>
            <p className="pb-4">
              Whether or not you are just looking for a learning source to
              become your own DeFi master, or if you rather prefer to sit back
              and let us do all the heavy lifting for you, we've got you
              covered! Whether or not you are just looking for a learning source
              to become your own DeFi master, or if you rather prefer to sit
              back and let us do all the heavy lifting for you, we've got you
              covered!
            </p>
            <p>
              Whether or not you are just looking for a learning source to
              become your own DeFi master, or if you rather prefer to sit back
              and let us do all the heavy lifting for you, we've got you
              covered! Whether or not you are just looking for a learning source
              to become your own DeFi master, or if you rather prefer to sit
              back and let us do all the heavy lifting for you, we've got you
              covered!
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
