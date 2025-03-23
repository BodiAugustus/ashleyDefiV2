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
      title: "Portfolio Management",
      description:
        "Our Jacksonville based portfolio management service is crafted to assist clients in navigating the volatile crypto markets while achieving balanced and diversified investment portfolios. By applying advanced analysis and strategic asset allocation, we aim to optimize returns and minimize risks for our clients, ensuring their investments are well-positioned for both stability and growth.",
      insideheader1: "Asset Allocation Strategy",
      insideDescription1:
        "We develop a customized asset allocation strategy for each client based on their individual risk tolerance, investment goals, and market conditions. This strategy involves the selection of a mix of protocols, tokens, and strategies to provide a balanced approach that mitigates risk while aiming for sustainable double digit returns.",
      insideheader2: "Risk Management Techniques",
      insideDescription2:
        "Effective risk management is central to successful portfolio management. We implement a variety of techniques such as position sizing, the use of stable coins during corrections, and diversification across different protocols. These practices are designed to protect the portfolio against significant losses and ensure long-term stability.",
      insideheader3: "Regular Portfolio Reviews and Rebalancing",
      insideDescription3:
        "Our service includes regular review sessions, either online or around Jacksonville, with our clients to assess the performance of their portfolio and make adjustments as needed. Rebalancing is done to realign the portfolio with the client's strategic goals and to adapt to changes in market dynamics or in the client's personal circumstances.",
      insideheader4: "Advanced Analytics and Reporting",
      insideDescription4:
        "We provide instantaneous analytics that track the performance of individual client assets on the user dashboard.  ",
      header: "Wealth Fund",
      icon: <AiFillPieChart className="text-8xl" />,
    },

    {
      title: "Market Entry and Growth Strategies",
      description:
        "Our Market Entry and Growth Strategy service is designed to educate individual investors on how to effectively gauge when to enter or exit the market. We provide comprehensive guidance on market analysis, timing strategies, and risk management to help you make informed decisions. From understanding market trends to employing tactical entry and exit techniques, our service equips you with the knowledge and strategies needed to navigate the DeFi market confidently and achieve your investment goals.",
      insideheader1: "Market Analysis and Positioning",
      insideDescription1:
        "In this essential first step, we provide a detailed analysis of current market conditions, trends, and key indicators to help you understand the best times to enter or exit the market. We educate you on evaluating market signals, assessing competitor activity, and identifying emerging opportunities. Our guidance will empower you to make informed decisions on positioning your investments strategically, ensuring you capitalize on favorable conditions and achieve optimal results.",
      insideheader2: "Protecting Gains using Stable Coins",
      insideDescription2:
        "We guide clients in developing robust strategies to safeguard their assets during market downturns by utilizing stable coins. This involves educating you on the role of stable coins in providing stability and liquidity in volatile markets. We help you craft a strategic plan that includes asset diversification into stable coins, setting clear guidelines for allocation, and understanding how to leverage these assets to minimize risk and maintain portfolio value. This approach ensures you are well-prepared to navigate market fluctuations and protect your investments effectively.",
      insideheader3: "Knowing when and how to take Profit",
      insideDescription3:
        "Our guidance includes developing effective strategies for taking profits at the right moments. We teach clients how to monitor market indicators and set strategic exit points to maximize returns. This involves understanding market cycles, evaluating asset performance, and using analytical tools to identify optimal times for profit-taking. By applying these principles, you can make informed decisions on when to realize gains, ensuring you benefit from your investments while managing risk effectively.",
      insideheader4: "Performance Metrics and Scaling",
      insideDescription4:
        "We guide clients in establishing and interpreting key performance metrics to assess their investment's progress and make informed decisions. By tracking indicators such as return on investment (ROI), asset growth rates, and market trends, clients can gain insights into their current investment phase. We also teach how to evaluate these metrics in the context of their overall strategy, helping you determine whether to buy, hold, or sell based on performance and market conditions. This approach ensures that you can better gauge your investment’s potential and timing for optimal results.",
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
        "In the event of any client suffering a security breach while managing their own funds, we provide immediate incident response support to minimize losses and restore security. This includes helping clients recover access to their assets when possible, navigating the steps to mitigate the damage, and implementing preventative measures to avoid future incidents. It should be noted that depositing to the Ashley Vault, instead of opting for self-management of funds, mitigates this risk.",
      header: "Asset Protection",
      icon: <RiShieldKeyholeFill className="text-8xl" />,
    },
    {
      title: "Technology Asessment Reports",
      description:
        "Our Technology Assessment Reports are crucial tools provided as part of our consulting services. These reports are meticulously crafted by our team of experts, who conduct thorough due diligence with founders and project teams in navigating the complex landscape of DeFi technology. The focus areas of our reports include, but are not limited to:",
      insideheader1: "Implementation Strategy - Initial Due Dilligence",
      insideDescription1:
        "The initial phase of our consulting process involves evaluating the technical feasibility and optimal approaches for deploying new DeFi technologies. Key activities include: Developer interviews, technical reviews, regulatory considerations, risk assessment and market-related risks and analysis.",
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
      title: "Education and Training",
      description:
        "Our Jacksonville, Florida based education and training program is designed to help newcomers navigate the often complex world of cryptocurrencies and decentralized finance (DeFi). Tailored to individual learning curves, our comprehensive consulting, and other educational material, such as YouTube videos, covers everything from the basics of blockchain technology to advanced DeFi applications. Our aim is to empower our clients with the knowledge they need to make informed decisions and confidently participate in the crypto space.",
      insideheader1: "Cryptocurrency Basics",
      insideDescription1:
        "This foundational support offers clients a comprehensive introduction to the world of cryptocurrencies. It covers the history and evolution of major digital currencies, fundamental concepts such as blockchain technology and mining, and insights into market dynamics. Clients will gain a solid understanding of these topics to navigate and engage with the cryptocurrency landscape effectively.",
      insideheader2: "Blockchain Technology",
      insideDescription2:
        "We provide an in-depth exploration of blockchain technology, including its architecture, transaction recording processes, and underlying security mechanisms. Clients will gain practical insights into how blockchain operates through various methods, enhancing their understanding of concepts such as blocks, hashing, and the proof-of-stake system.",
      insideheader3: "Investing in Crypto",
      insideDescription3:
        "We teach the intricacies of investing in cryptocurrencies and DeFi by covering various investment strategies, such as: how to analyze cryptocurrencies, understanding risk management, and portfolio diversification. Our experts provide market insights, trend analysis, and tools to track and manage investments effectively.",
      insideheader4: "Security and Wallet Management",
      insideDescription4:
        "This support emphasizes essential practices for safeguarding cryptocurrencies. Topics include selecting appropriate wallets, utilizing hardware wallets, and implementing robust security measures like two-factor authentication, PGP encryption, and multi-signature addresses. Clients will understand the critical importance of securing digital assets and how to do so effectively.",
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
