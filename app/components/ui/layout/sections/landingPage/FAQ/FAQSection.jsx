import React from "react";
import FAQItem from "./FAQItem"; // Adjust the import path as necessary
import Link from "next/link";
import { Button } from "../../../../common/Button";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What is DeFi?",
      answer:
        "Decentralized Finance (DeFi) is a financial system built on blockchain technology that operates without traditional intermediaries such as banks, brokers, or exchanges. DeFi platforms allow users to lend, borrow, trade, earn interest, and access a variety of financial services directly from their digital wallets through smart contracts. These self-executing agreements, with terms encoded in blockchain, offer transparency, security, and minimized risk of manipulation. Designed to be open, inclusive, and interoperable, DeFi provides a global, permissionless, and democratized alternative to conventional financial systems.",
    },
    {
      question: "Why should I invest in DeFi?",
      answer:
        "The future is digital and the DeFi industry is projected to reach trillion dollar TVL's before 2030. DeFi platforms boast significantly higher interest rates on savings and deposits compared to traditional banks. This is due to the efficiency of blockchain technology and the elimination of intermediaries, which lowers operational costs. DeFi also makes financial services accessible to anyone with an internet connection, regardless of geography or economic background. This democratizes access to financial tools that were previously available only to a subset of the population while also vastle increasing the amount of easily accessible liquidity. DeFi as an industry is at the forefront of financial innovation, offering novel investment products and services that are not available in traditional finance. This allows for greater diversification of your investment portfolio. In addition, blockchain technology provides unparalleled transparency. All transactions are recorded on a public ledger, making them easily verifiable and reducing the risk of fraud. Furthermore, DeFi gives you full control over your assets without the need for intermediaries. DeFi protocols are designed to work seamlessly with one another, creating a connected and integrated financial ecosystem. This interoperability opens up a range of investment strategies and opportunities that are both fluid and flexible.",
    },
    {
      question: "Why should I invest in Monero, Fantom, or Sonic?",
      answer:
        "Monero (XMR) is the only truly anonymous cryptocurrency. It powers an entire product-based economy to the tune of tens of millions of dollars daily, not including regular trading. Monero is among the oldest, most active, and most well-funded projects in existence and is one of our prime focuses for those reasons and more. Sonic is the new, industry-leading technical upgrade of Fantom, which will slowly be deprecated. The Fantom ecosystem is moving to Sonic, along with many new, very large players, including operators such as Curve, Aave, and Frax, to name just a few. With 10,000 transactions per second and sub-second time to finality, this EVM-compatible blockchain, featuring Andre Cronje—the godfather of DeFi—as Chief Technical Officer, is an easy choice for our firm to adopt. It has a seven-year, self-funded strategy free from VCs, with tremendous room to grow, offering real and sustained growth to our clients for many years to come.",
    },
    {
      question: "Why should I use Ashley DeFi?",
      answer:
        "Here at Ashley DeFi, we go beyond the spot holdings of most firms and dive deep into the blockchain ecosystem, where hundreds of tokenized and non-tokenized decentralized applications exist with much smaller market caps that can be utilized to vastly increase the typical returns experienced through trading or holding spot. We put our clients' funds to work by providing liquidity to LPs, staking as collateral for low-interest loans to increase holdings, locking for voting rewards and emissions, utilizing liquid staking, and much more to fully unlock the potential and profits that exist within decentralized finance. We understand how to navigate the complex landscape to bring home the largest and most sustainable profits for the long-term.",
    },

    {
      question: "Do I have to be a member to utilize the vaults?",
      answer:
        "No, our auto-compounding vaults are permissionless and open to anyone at anytime.",
    },
    {
      question: "How long does a member subscription last?",
      answer:
        "All member subscriptions are monthly based and can also be auto-renewed.",
    },
    {
      question: "Can I share my subscription with others?",
      answer:
        "Each subscription is for individual use only; member services cannot be shared.",
    },
  ];

  return (
    <div className="py-8 px-4 text-white max-w-[2200px] lg:w-[70vw] mx-auto">
      <h2 className=" md:mb-6 md:text-4xl font-bold xs:text-2xl xs6:text-3xl xs:pt-5 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <p className="xs:mt-10 md:mt-16 text-center xs5:text-lg xs6:text-xl">
        Have more questions? <br />
        <Link
          href="https://t.me/+89dQjvU76cwxZGU9"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold inline-block"
        >
          <Button className="mx-auto mt-6 inline-block md:text-xl">
            {" "}
            Write to us on Telegram!
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default FAQsSection;
