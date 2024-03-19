"use client";

import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Import Plus and Minus icons
import { Button } from "../../../common/Button";

export default function ServicesItem({
  title,
  answer,
  header,
  icon,
  description,
  insideheader1,
  insideheader2,
  insideheader3,
  insideheader4,
  insideDescription1,
  insideDescription2,
  insideDescription3,
  insideDescription4,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer bg-[#292941] w-[100%] h-[40vh] rounded-tl-2xl p-4 rounded-tr-2xl"
        onClick={toggleOpen}
      >
        <div className=" h-[100%] w-[20%] flex flex-col items-center justify-center gap-5">
          {icon}
          <h3 className="text-2xl font-bold">{header}</h3>
        </div>
        <div className="w-[80%] p-4 flex flex-col gap-3">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-[#B0C7EF] text-lg">{description}</p>
        </div>
        {isOpen ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
      </div>
      <div
        className={`transition-height bg-[#292941] px-4 duration-500 ease-in-out pb-1 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        } overflow-hidden`}
        style={{
          transitionProperty: "max-height",
          transitionDuration: "500ms",
        }}
      >
        <div className="flex flex-col gap-5">
          <h3 className="pt-2 text-xl">{insideheader1}</h3>
          <p className="text-[#B0C7EF] pb-16">{insideDescription1}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="pt-2 text-xl">{insideheader2}</h3>
          <p className="text-[#B0C7EF] pb-16">{insideDescription2}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="pt-2 text-xl">{insideheader3}</h3>
          <p className="text-[#B0C7EF] pb-16">{insideDescription3}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="pt-2 text-xl">{insideheader4}</h3>
          <p className="text-[#B0C7EF] pb-16">{insideDescription4}</p>
        </div>
      </div>
      <div className="bg-[#292941] h-[15vh] flex items-center justify-center rounded-bl-2xl rounded-br-2xl border-t-2">
        <Button>Enquire about this service</Button>
      </div>
    </div>
  );
}
