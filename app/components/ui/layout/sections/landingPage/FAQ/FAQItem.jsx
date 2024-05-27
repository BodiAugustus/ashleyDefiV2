"use client";

import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Import Plus and Minus icons

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-10">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold xs6:text-xl">{question}</h3>
        {isOpen ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
      </div>
      <div
        className={`transition-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-scroll`}
        style={{
          transitionProperty: "max-height",
          transitionDuration: "500ms",
        }}
      >
        <p className="pt-2 xs6:text-lg">{answer}</p>
      </div>
    </div>
  );
}
