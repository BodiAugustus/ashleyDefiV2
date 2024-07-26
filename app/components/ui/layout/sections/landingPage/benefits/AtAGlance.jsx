import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { AiOutlineStop } from "react-icons/ai";

// Function to create hoverable sections 4C5175
const HoverableSection = ({ content }) => (
  <div
    className="col-span-1  md:row-span-1 max-w-[800px] bg-[#1D3461] text-center hover:bg-[#4C5175] font-thin cursor-pointer p-3 xs:pt-4 xs:text-sm
    xs3:text-base
    xs6:text-lg
  sm:pt-4 md:text-2xl md:p-3 lg:text-base  xl:text-xl xl:p-4 xl:pt-3"
  >
    <h2>{content}</h2>
  </div>
);

const AtAGlance = () => {
  // Content for the hoverable sections
  const sectionsContent = [
    "Individualized portfolio strategies customized to your own desired levels of risk and exposure.",
    "Direct crypto and DeFi consulting services with regular client meetings and updates.",
    "Timely feedback from an actual DeFi consultant, not a customer service representative.",
    "Self-custodial, fully-permissionless, high-yields savings vaults based within the Sonic ecosystem.",
    "Advanced technical expertise and insights from real world blockchain developers.",
    "Two-hours of direct, individual DeFi consultations conducted via ZOOM very month.",
  ];

  return (
    <div className="text-white lg:pt-2 col-span-1 row-span-1 xs:px-2 md:px-4">
      <h2
        className="text-4xl text-center text-white pt-0 mb-1 font-bold 
      xs:text-2xl xs:mb-1
      xs4:text-3xl
      md:text-5xl lg:text-4xl xl:text-4xl md:mb-2 md:pt-4 lg:pt-1"
      >
        What We Offer
      </h2>
      <div
        className="grid grid-cols-2 md:grid-rows-5 white-glassmorphism mx-auto lg:h-[72vh] shadow-xl shadow-indigo-700
      xs:grid-rows-[0.5fr_1fr_1fr_1fr_.5fr]
      "
      >
        {/* Non-hoverable header section */}
        <div
          className="col-span-2 row-span-1 bg-[#0A3055] rounded-tl-2xl rounded-tr-2xl p-4 text-3xl 
        
        sm:text-4xl  lg:text-3xl lg:p-1 xl:text-3xl"
        >
          <div
            className="flex items-center text-white
          "
          >
            <Gi3DStairs className="text-4xl md:text-6xl" />
            <AiOutlineStop className="absolute left-[2.5%] text-5xl fill-red-500" />
            <h3
              className="mx-auto text-4xl
            xs:text-xl
            xs5:text-2xl
            "
            >
              No Tier systems!
            </h3>
          </div>
          <h4
            className="text-center text-white text-xl mt-2 
          xs:text-lg
          xs6:text-xl
          sm:text-2xl sm:w-[70%] sm:mx-auto md:text-3xl md:w-[55%] lg:text-2xl lg:w-[80%] lg:-mt-3 xl:text-2xl xl:-mt-2"
          >
            All members get full access, all the time.
          </h4>
        </div>

        {/* Dynamically created hoverable sections */}
        {sectionsContent.map((content, index) => (
          <HoverableSection key={index} content={content} />
        ))}

        {/* Non-hoverable footer section */}
        <div
          className="col-span-2 bg-[#0A3055] rounded-bl-2xl rounded-br-2xl p-3 text-3xl 
        xs:text-2xl
        sm:text-4xl md:text-5xl lg:text-3xl xl:text-3xl"
        >
          <h2 className="text-center text-white">
            Come and join us, <br /> the future is{" "}
            <span className="text-[#00bfff]">
              <b>NOW</b>
            </span>
            !
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
