"use client";

import { TbReportSearch } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import { RiShieldKeyholeFill } from "react-icons/ri";
import React, { useRef } from "react";
import ServicesItem from "./ServicesItem"; // Adjust the import path as necessary

const Services = ({ formRef }) => {
  const faqs = [
    {
      title: "Technology Asessment Reports",
      description:
        "Our Technology Assessment Reports are crucial tools provided as part of our consulting services. These reports are meticulously crafted by our team of experts, who conduct thorough due diligence with founders and project teams in navigating the complex landscape of DeFi technology. The focus areas of our reports include, but are not limited to:",
      insideheader1: "Implementation Strategy - Initial Due Dilligence",
      insideDescription1:
        "The initial phase of our consulting process involves evaluating the technical feasibility and optimal approaches for deploying new DeFi technologies. Key activities include: Dev interviews, technical reviews, regulatory considerations, risk assessment and market-related risks and analysis.",
      insideheader2: "Infrastructure Analysis - Scaleability",
      insideDescription2:
        "In this critical component of our Technology Assessment Reports, we conduct an in-depth analysis of the underlying blockchain infrastructure to ensure it meets high standards of scalability, along with interoperability and security. This analysis involves several key aspects such as capacity evaluation, network expansion readiness, resource optimization and tokennomics, interoperability assessments, security protocol reviews and future-proofing strategies.",
      insideheader3: "Market Strategy - Profitability",
      insideDescription3:
        "In the Market Strategy component of our Technology Assessment Reports, we focus on developing comprehensive strategies aimed at maximizing profitability while aligning with current market trends and anticipating future growth opportunities. This involves several detailed steps: Market analysis, trend forecasting, revenue modeling, risk mitigation, sustainability practices and performance metrics and KPIs.",
      insideheader4: "Risk Profile - Overall Strategy",
      insideDescription4:
        "In the Risk Profile component of our Technology Assessment Reports, we synthesize comprehensive research and data into a coherent and accessible summary that outlines the investment landscape over short, mid, and long-term horizons. This detailed process involves several key steps: Data aggregation, risk assessment, investment outlook, strategic recommendations, and actionable insights.",
      header: "Deep Dives",
      icon: <TbReportSearch className="text-8xl" />,
    },
    {
      title: "Portfolio Management",
      description:
        "Our Portfolio Management service is crafted to assist clients in navigating the volatile crypto markets while achieving balanced and diversified investment portfolios. By applying advanced analysis and strategic asset allocation, we aim to optimize returns and minimize risks for our clients, ensuring their investments are well-positioned for both stability and growth.",
      insideheader1: "Asset Allocation Strategy",
      insideDescription1:
        "We develop a customized asset allocation strategy for each client based on their individual risk tolerance, investment goals, and market conditions. This strategy involves the selection of a mix of cryptocurrencies, tokens, and possibly other blockchain-based assets to provide a balanced approach that mitigates risk while aiming for optimal returns.",
      insideheader2: "Risk Management Techniques",
      insideDescription2:
        "Effective risk management is central to successful portfolio management. We implement a variety of techniques such as stop-loss orders, position sizing, and diversification across different types of crypto assets and sectors. These practices are designed to protect the portfolio against significant losses and ensure long-term stability.",
      insideheader3: "Regular Portfolio Reviews and Rebalancing",
      insideDescription3:
        "Our service includes regular review sessions with our clients to assess the performance of their portfolio and make adjustments as needed. Rebalancing is done to realign the portfolio with the client’s strategic goals and to adapt to changes in market dynamics or in the client's personal circumstances.",
      insideheader4: "Advanced Analytics and Reporting",
      insideDescription4:
        "We provide detailed analytics and reports that track the performance of the portfolio against established benchmarks and goals. These reports offer insightful data on asset performance, sector trends, and potential opportunities for further diversification or consolidation.",
      header: "Wealth Fund",
      icon: <AiFillPieChart className="text-8xl" />,
    },

    {
      title: "Market Entry and Growth Strategies",
      description:
        "Our Market Entry and Growth Strategy service is tailored to guide clients through the complexities of launching and scaling operations in the decentralized finance market. From initial market analysis to implementing growth hacking techniques, we provide strategic insights and practical solutions to help our clients achieve sustainable growth and a competitive edge in the DeFi space.",
      insideheader1: "Market Analysis and Positioning",
      insideDescription1:
        "This crucial first step involves a thorough analysis of the current market conditions, competitor evaluations, and identifying target customer segments. We help clients position their offerings effectively by aligning their unique value propositions with market demands, ensuring they stand out in the crowded DeFi landscape.",
      insideheader2: "Product Strategy and Roadmap Development",
      insideDescription2:
        "We assist clients in defining clear and compelling product strategies, including the creation of a detailed roadmap that outlines key milestones and timelines for product development and launch. This includes prioritizing product features based on market research, user feedback, and potential regulatory requirements.",
      insideheader3: "Growth Hacking and User Acquisition",
      insideDescription3:
        "Our strategies involve innovative growth hacking techniques aimed at rapidly increasing user base and engagement. We utilize a mix of SEO, content marketing, social media campaigns, and partnership building to drive adoption and maintain a high growth trajectory.",
      insideheader4: "Performance Metrics and Scaling",
      insideDescription4:
        "To ensure sustainable growth, we establish critical key performance indicators (KPIs) and metrics to monitor and evaluate the success of the market entry strategies. This includes user growth rate, engagement metrics, conversion rates, and ROI. We also provide insights on scaling operations efficiently, optimizing resources to meet increasing demand without compromising on service quality.",
      header: "Market Entry",
      icon: <MdTrendingUp className="text-8xl" />,
    },

    {
      title: "Security and Wallet Management",
      description:
        "Our Security and Wallet Management service provides clients with comprehensive strategies and solutions to secure their cryptocurrency holdings. We emphasize educating clients on best practices and implementing robust security measures to protect against theft, hacks, and other vulnerabilities. Our approach combines practical guidance with advanced technologies to ensure the safety of digital assets.",
      insideheader1: "Digital Wallet Setup and Management",
      insideDescription1:
        "We guide clients through the selection and setup of digital wallets, including hardware, software, and mobile wallets. Our service includes configuring wallets for optimal security, educating on backup and recovery procedures, and providing ongoing support to manage and maintain wallet integrity.",
      insideheader2: "Security Best Practices Training",
      insideDescription2:
        "Education is key to security. We offer training sessions on security best practices such as two-factor authentication, the use of strong, unique passwords, and recognizing phishing attacks. We also cover more advanced topics such as key management and multi-signature transactions to ensure clients are well-versed in protecting their assets.",
      insideheader3: "Regular Security Audits",
      insideDescription3:
        "To ensure that security measures remain effective, we conduct regular audits of our clients’ security setups. These audits help identify vulnerabilities and ensure compliance with the latest security standards. Recommendations for improvements and updates to security protocols are provided as part of this service.",
      insideheader4: "Incident Response and Recovery",
      insideDescription4:
        "In the event of a security breach, we provide immediate incident response support to minimize losses and restore security. This includes helping clients recover access to their assets when possible, navigating the steps to mitigate the damage, and implementing preventative measures to avoid future incidents.",
      header: "Asset Protection",
      icon: <RiShieldKeyholeFill className="text-8xl" />,
    },
    {
      title: "Education and Training",
      description:
        "Our Education and Training program is designed to help newcomers navigate the often complex world of cryptocurrencies and decentralized finance (DeFi). Tailored to individual learning curves, our comprehensive curriculum covers everything from the basics of blockchain technology to advanced DeFi applications. Our aim is to empower our clients with the knowledge they need to make informed decisions and confidently participate in the crypto space.",
      insideheader1: "Cryptocurrency Basics",
      insideDescription1:
        "This foundational module introduces clients to the world of cryptocurrencies, including the history and evolution of major digital currencies, basic concepts like blockchain and mining, and how to understand market dynamics. Key activities include interactive workshops, engaging webinars, and real-world examples.",
      insideheader2: "Blockchain Technology",
      insideDescription2:
        "In this module, we delve deeper into the mechanics of blockchain technology, exploring its architecture, how transactions are recorded, and the security mechanisms that underpin it. Clients learn through hands-on activities like setting up a blockchain simulation, which provides a practical understanding of blocks, hashing, and the proof-of-work system.",
      insideheader3: "Investing in Crypto",
      insideDescription3:
        "This segment focuses on the intricacies of investing in cryptocurrencies and DeFi. It covers various investment strategies, how to analyze cryptocurrencies, understanding risk management, and portfolio diversification. Our experts provide market insights, trend analysis, and tools to track and manage investments effectively.",
      insideheader4: "Security and Wallet Management",
      insideDescription4:
        "A critical aspect of dealing with cryptocurrencies, this module covers the best practices for securing digital assets. Topics include choosing the right type of wallet, setting up and using hardware wallets, and implementing security measures such as two-factor authentication and multi-signature addresses. Interactive demonstrations and real-life scenario analyses are used to underscore the importance of security.",
      header: "Mastering DeFi",
      icon: <FaChalkboardTeacher className="text-8xl" />,
    },
  ];

  return (
    <div className="py-8 md:px-4 text-white max-w-[2200px] xs:h-auto xs:w-[95%] lg:w-[80vw] mx-auto">
      <h2
        className="xs:text-2xl md:text-4xl font-bold text-center xs:mb-1 md:mb-6 lg:mb-1
      xs4:text-3xl"
      >
        Consulting Services
      </h2>
      <p className="xs:text-sm md:text-xl  text-center xs:mb-4 md:mb-6 xs:w-[95%] lg:w-[80%] xl:w-[60%] mx-auto text-[#B0C7EF] xs5:text-base xs6:text-lg">
        Our full-suite of DeFi consulting services are designed to cater to
        every level of our clients needs, regardless of their portfolio sizes
      </p>
      <div className="xs:space-y-5 md:space-y-10">
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
            formRef={formRef}
          />
        ))}
      </div>
      <p className="xs:mt-8 md:mt-16 text-center xs5:text-lg xs6:text-xl">
        Have any more questions?{" "}
        <span className="font-bold">
          Please write to us using the contact form below:
        </span>
      </p>
    </div>
  );
};

export default Services;
