"use client";
import { TbReportSearch } from "react-icons/tb";
import React from "react";
import ServicesItem from "./ServicesItem"; // Adjust the import path as necessary

const Services = () => {
  const faqs = [
    {
      title: "Technology Asessment Reports",
      description:
        "Delphis due dilligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and market strategy among others",
      insideheader1: "Discover - Initial Due Dilligence",
      insideDescription1:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader2: "Discover - Initial Due Dilligence",
      insideDescription2:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader3: "Discover - Initial Due Dilligence",
      insideDescription3:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader4: "Discover - Initial Due Dilligence",
      insideDescription4:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      header: "The Process",
      icon: <TbReportSearch className="text-8xl" />,
    },
    {
      title: "Technology Asessment Reports",
      description:
        "Delphis due dilligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and market strategy among others",
      insideheader1: "Discover - Initial Due Dilligence",
      insideDescription1:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader2: "Discover - Initial Due Dilligence",
      insideDescription2:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader3: "Discover - Initial Due Dilligence",
      insideDescription3:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader4: "Discover - Initial Due Dilligence",
      insideDescription4:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      header: "The Process",
      icon: <TbReportSearch className="text-8xl" />,
    },
    {
      title: "Technology Asessment Reports",
      description:
        "Delphis due dilligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and market strategy among others",
      insideheader1: "Discover - Initial Due Dilligence",
      insideDescription1:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader2: "Discover - Initial Due Dilligence",
      insideDescription2:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader3: "Discover - Initial Due Dilligence",
      insideDescription3:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader4: "Discover - Initial Due Dilligence",
      insideDescription4:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      header: "The Process",
      icon: <TbReportSearch className="text-8xl" />,
    },
    {
      title: "Technology Asessment Reports",
      description:
        "Delphis due dilligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and market strategy among others",
      insideheader1: "Discover - Initial Due Dilligence",
      insideDescription1:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader2: "Discover - Initial Due Dilligence",
      insideDescription2:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader3: "Discover - Initial Due Dilligence",
      insideDescription3:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader4: "Discover - Initial Due Dilligence",
      insideDescription4:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      header: "The Process",
      icon: <TbReportSearch className="text-8xl" />,
    },
    {
      title: "Technology Asessment Reports",
      description:
        "Delphis due dilligence reports play a pivotal role in guiding founders and teams through critical design choices, spanning implementation, privacy measures, infrastructure and market strategy among others",
      insideheader1: "Discover - Initial Due Dilligence",
      insideDescription1:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader2: "Discover - Initial Due Dilligence",
      insideDescription2:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader3: "Discover - Initial Due Dilligence",
      insideDescription3:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      insideheader4: "Discover - Initial Due Dilligence",
      insideDescription4:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
      header: "The Process",
      icon: <TbReportSearch className="text-8xl" />,
    },
  ];

  return (
    <div className="py-8 px-4 text-white max-w-[2200px] w-[70vw] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">
        Consulting Services
      </h2>
      <p className="text-xl  text-center mb-6 w-[50%] mx-auto text-[#B0C7EF]">
        Partnering with Ashley DeFi means we become an integral part of your
        team, dedicated to assisting you in achieving your overarching obectives
        ansd mission.
      </p>
      <div className="space-y-10">
        {faqs.map((faq, index) => (
          <ServicesItem
            key={index}
            title={faq.title}
            answer={faq.answer}
            header={faq.header}
            icon={faq.icon}
            description={faq.description}
            insideheader1={faq.insideheader1}
            insideheader2={faq.insideheader2}
            insideheader3={faq.insideheader3}
            insideheader4={faq.insideheader4}
            insideDescription1={faq.insideDescription1}
            insideDescription2={faq.insideDescription2}
            insideDescription3={faq.insideDescription3}
            insideDescription4={faq.insideDescription4}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
