"use client";
import { useState } from "react";

import { skills } from "./../../../../data/data";
import { FiChevronsRight } from "react-icons/fi";
import { FaVoteYea, FaHandshake } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";

const Example = () => {
  const [value, setValue] = useState(0);

  const { id, order, title, experience, stack, label } = skills[value];

  return (
    <section
      className=" mx-auto w-[100vw] h-[70vh] max-w-[1800px] pt-4
      custom-xs-448-skillsSecyion
      custom-xs-640-skillsSecyion 
      custom-xs3-680-skillsSecyion
      custom-xs4-660-skillsSecyion
      custom-xs4-550-skillsSecyion 
      custom-xs5-670-skillsSecyion
      custom-xs5-850-skillsSecyion
      custom-xs6-650-skillsSecyion
      custom-xs6-780-skillsSecyion
      custom-xs8-715-skillsSecyion
      custom-xs8-810-skillsSecyion
    md:h-[40vh]
    lg:h-[80vh]
    
    xl:h-[100vh]
    
    "
    >
      <h2
        className="text-4xl pt-4 mb-2
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-6 text-center text-white
      
      "
      >
        Try out one of our <span className="text-sky-400">Free </span>
        DeFi Strategies
      </h2>

      <>
        <div className=" relative md:w-[90%]  mx-auto">
          <div
            className="flex px-2 py-2 justify-center   text-white -mt-4 
            xs:text-2xl xs:w-[95%]
            md:gap-10
            md:text-3xl
            4xl:text-5xl
          "
          >
            {skills.map((skill, index) => {
              return (
                <button
                  key={skill.id + 1}
                  className={`m-2 mb-3 px-2  ${
                    index === value
                      ? "underline decoration-[#00bfff] underline-offset-8"
                      : ""
                  } 
              hover:text-sky-600 transition-colors duration-300`}
                  onClick={() => setValue(index)}
                >
                  {skill.title}
                </button>
              );
            })}
          </div>
          <div className="w-[80%] mx-auto max-w-screen-xl ">
            <article className="relative basis-4 pt-2 pb-4 text-white ">
              <div
                className="flex justify-between text-2xl
                xs:text-2xl
                md:text-3xl
              4xl:text-4xl
              "
              >
                <div className="flex-col">
                  <h3 className="mt-1 mb-2 ">{title}</h3>
                  <h4 className="mt-1 bg-[#00bfff] text-[#c] px-3 rounded-full py-[8px] text-center">
                    {label}
                  </h4>
                  <p
                    className="mt-2 xs:text-2xl
                    md:text-3xl
                  4xl:text-3xl
                  "
                  >
                    {experience}
                  </p>
                </div>
                {value === 0 && (
                  <GiFarmer className="mr-6 text-[#00bfff] xs:text-8xl sm:text-8xl lg:text-9xl" />
                )}
                {value === 1 && (
                  <FaVoteYea className="mr-6 text-[#00bfff] xs:text-8xl sm:text-8xl lg:text-9xl" />
                )}
                {value === 2 && (
                  <FaHandshake className="mr-6 text-[#00bfff] xs:text-8xl sm:text-8xl lg:text-9xl " />
                )}
              </div>
              {skills.map((_, i = 0) => {
                return (
                  <div
                    key={i + 1}
                    className="flex 
                  xs:pt-4
                  sm:mt-8 "
                  >
                    <p
                      className="my-auto flex text-2xl
                      xs:xl
                      md:text-2xl
                    4xl:text-4xl
                    "
                    >
                      {" "}
                      <FiChevronsRight className="text-sky-500 items-center justify-center my-auto mr-2 text-xl " />
                      {stack[i]}
                    </p>
                  </div>
                );
              })}
            </article>
            <hr className="mt-7 " />
          </div>
        </div>
      </>
    </section>
  );
};

export default Example;
