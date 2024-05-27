"use client";
import { useState, useEffect } from "react";

import { skillsk } from "../../../../../data/data";
import { FiChevronsRight } from "react-icons/fi";
import { FaVoteYea, FaHandshake } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";

const Example = () => {
  const [value, setValue] = useState(0);
  const [skills, setSkills] = useState(skillsk); // Initialize state with imported data
  const [stakingApr, setStakingApr] = useState(null); // State to store the staking APR value

  // Function to fetch staking APR from the GraphQL API
  const fetchStakingApr = async () => {
    const query = JSON.stringify({
      query: `
        query {
          sftmxGetStakingData {
            stakingApr
          }
        }
      `,
    });

    try {
      const response = await fetch("https://backend-v3.beets-ftm-node.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: query,
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.data && result.data.sftmxGetStakingData) {
        // Set the staking APR from the response into the component's state
        setStakingApr(result.data.sftmxGetStakingData.stakingApr);
      } else {
        console.log("No data returned from the query");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // Fetch the staking APR when the component mounts
  useEffect(() => {
    fetchStakingApr();
  }, []);

  useEffect(() => {
    if (stakingApr !== null && skills) {
      // Add a check for skills to ensure it's not null or undefined
      const updatedSkills = skills.map((skill) => {
        if (skill.title === "Staking") {
          return {
            ...skill,
            stack: skill.stack.map((item, index) => {
              if (index === 0) {
                // Assuming you want to update the first item of the stack array
                return `1) Stake FTM on Beethoven DEX to receive sFTMx at ${(
                  parseFloat(stakingApr) * 100
                ).toFixed(3)}% APR`;
              }
              return item;
            }),
          };
        }
        return skill;
      });

      setSkills(updatedSkills);
    }
  }, [stakingApr]); // Add skills as a dependency

  const { id, order, title, experience, stack, label } = skills[value];

  return (
    <section
      className=" mx-auto w-[100vw] h-[70vh] max-w-[1800px] pt-4
      xs:h-auto
    xs6:mb-4
    md:h-[40vh]
    lg:h-[80vh]
    
    xl:h-[90vh]
    
    "
    >
      <h2
        className="text-4xl pt-4 mb-2
        xs:text-2xl xs:mb-1
        xs4:text-3xl
        xs5:px-2
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-6 text-center text-white font-bold
      
      "
      >
        Try out one of our <span className="text-sky-400">Free </span>
        DeFi Strategies
      </h2>

      <>
        <div className=" relative md:w-[90%]  mx-auto">
          <div
            className="flex px-2 py-2 justify-center   text-white -mt-4 
            xs:text-xl xs:w-[95%]
xs5:text-2xl
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
          <div
            className="w-[80%] mx-auto max-w-screen-xl 
          xs:w-[95%]"
          >
            <article className="relative basis-4 pt-2 pb-4 text-white ">
              <div
                className="flex justify-between text-2xl
                xs:text-xl
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
                    className="mt-2 xs:text-xl
                    md:text-3xl
                  4xl:text-3xl
                  "
                  >
                    {experience}
                  </p>
                </div>
                {value === 0 && (
                  <GiFarmer className="mr-6 text-[#00bfff] xs:text-7xl sm:text-8xl lg:text-9xl" />
                )}
                {value === 1 && (
                  <FaVoteYea className="mr-6 text-[#00bfff] xs:text-7xl sm:text-8xl lg:text-9xl" />
                )}
                {value === 2 && (
                  <FaHandshake className="mr-6 text-[#00bfff] xs:text-7xl sm:text-8xl lg:text-9xl " />
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
                      xs:text-sm
                      xs4:text-base
                      xs6:text-lg
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
            <hr
              className="
            xs:mt-2
            mt-7 "
            />
          </div>
        </div>
      </>
    </section>
  );
};

export default Example;
