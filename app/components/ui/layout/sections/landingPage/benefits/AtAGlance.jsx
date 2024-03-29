import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { AiOutlineStop } from "react-icons/ai";

// Function to create hoverable sections 4C5175
const HoverableSection = ({ content }) => (
  <div className="col-span-1 max-w-[800px] bg-[#1D3461] text-center hover:bg-[#4C5175] font-thin cursor-pointer p-3 xxs:pt-4 xs:pt-4 sm:pt-4 md:text-2xl md:p-3 lg:text-base  xl:text-xl xl:p-4 xl:pt-3">
    <h2>{content}</h2>
  </div>
);

const AtAGlance = () => {
  // Content for the hoverable sections
  const sectionsContent = [
    "Individualized portfolio strategies customized to your own desired levels of risk and exposure.",
    "Direct crypto and DeFi consulting services with regular client meetings and updates.",
    "Timely feedback from an actual DeFi consultant, not a customer service representative.",
    "Self-custodial, fully-permissionless, high-yields savings vaults whose collateral can be borrowed upon.",
    "Advanced technical expertise and insights from real world blockchain developers.",
    "First exposure to alpha news drops as revealed though our proven list of cultivated affiliates.",
  ];

  return (
    <div className="text-white lg:pt-2 col-span-1 row-span-1 px-4">
      <h2 className="text-4xl text-center text-white pt-0 mb-1 font-bold md:text-5xl lg:text-4xl xl:text-4xl 2xl:mb-2">
        What We Offer
      </h2>
      <div className="grid grid-cols-2 grid-rows-5 white-glassmorphism mx-auto  lg:h-[72vh] shadow-xl shadow-indigo-700">
        {/* Non-hoverable header section */}
        <div className="col-span-2 bg-[#0A3055] rounded-tl-2xl rounded-tr-2xl p-3 text-3xl sm:text-4xl  lg:text-3xl lg:p-2 xl:text-3xl">
          <div className="flex items-center text-white">
            <Gi3DStairs className="text-4xl md:text-6xl" />
            <AiOutlineStop className="absolute left-[2.5%] text-5xl fill-red-500" />
            <h3 className="mx-auto text-4xl">No Tier systems!</h3>
          </div>
          <h4 className="text-center text-white text-xl mt-2 sm:text-2xl sm:w-[70%] sm:mx-auto md:text-3xl md:w-[55%] lg:text-2xl lg:w-[80%] lg:-mt-3 xl:text-2xl xl:-mt-2">
            All members get all access all of the time.
          </h4>
        </div>

        {/* Dynamically created hoverable sections */}
        {sectionsContent.map((content, index) => (
          <HoverableSection key={index} content={content} />
        ))}

        {/* Non-hoverable footer section */}
        <div className="col-span-2 bg-[#0A3055] rounded-bl-2xl rounded-br-2xl p-3 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl">
          <h2 className="text-center text-white">
            Come and join us, <br /> the future is{" "}
            <span className="text-[#00bfff]">
              <b>NOW</b>
            </span>
            .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
