import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { AiOutlineStop } from "react-icons/ai";

// Function to create hoverable sections
const HoverableSection = ({ content }) => (
  <div className="col-span-1 bg-sky-500 text-center hover:bg-sky-400 font-thin cursor-pointer p-3 xxs:pt-4 xs:pt-4 sm:pt-4 md:text-2xl md:p-3 lg:text-base xl:text-xl xl:p-4 xl:pt-4">
    <h2>{content}</h2>
  </div>
);

const AtAGlance = () => {
  // Content for the hoverable sections
  const sectionsContent = [
    "Individualized risk assessments custom tailored to your desired level of exposure.",
    "Personal portfolio management and recommendations with regular updates.",
    "Timely feedback from an actual consultant, not a customer service representative.",
    "Market outlooks and projections compiled using real-time market metrics.",
    "Advanced technical expertise from real world blockchain developers.",
    "Alpha news drops revealed though our cultivated list of proven affiliates.",
  ];

  return (
    <div className="text-white lg:pt-2 col-span-1 row-span-1 px-4">
      <h2 className="text-4xl text-center text-white pt-0 mb-1 md:text-5xl lg:text-4xl xl:text-4xl 2xl:mb-2">
        What we Offer
      </h2>
      <div className="grid grid-cols-2 grid-rows-5 white-glassmorphism mx-auto  lg:h-[70vh]">
        {/* Non-hoverable header section */}
        <div className="col-span-2 bg-[#00bfff] rounded-tl-lg rounded-tr-lg p-3 text-3xl sm:text-4xl  lg:text-3xl lg:p-2 xl:text-3xl">
          <div className="flex items-center text-white">
            <Gi3DStairs className="text-4xl md:text-6xl" />
            <AiOutlineStop className="absolute -top-[28%] -right-[40%] text-5xl fill-red-500" />
            <h3 className="mx-auto">No Tier systems!</h3>
          </div>
          <h4 className="text-center text-white text-xl mt-2 sm:text-2xl sm:w-[70%] sm:mx-auto md:text-3xl md:w-[55%] lg:text-2xl lg:w-[80%] lg:-mt-3 xl:text-2xl xl:-mt-2">
            All members, all access.{" "}
            <span className="text-amber-900 font-bold">No bull.</span>
          </h4>
        </div>

        {/* Dynamically created hoverable sections */}
        {sectionsContent.map((content, index) => (
          <HoverableSection key={index} content={content} />
        ))}

        {/* Non-hoverable footer section */}
        <div className="col-span-2 bg-[#00bfff] rounded-bl-lg rounded-br-lg p-3 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl">
          <h2 className="text-center text-white">
            Come join us, <br /> the future is{" "}
            <span className="text-green-400">
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
