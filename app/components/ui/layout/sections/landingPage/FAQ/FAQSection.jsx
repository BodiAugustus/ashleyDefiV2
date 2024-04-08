"use client";

import React from "react";
import FAQItem from "./FAQItem"; // Adjust the import path as necessary

const FAQsSection = () => {
  const faqs = [
    {
      question: "What is DeFi?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "Why should I invest in DeFi?",
      answer:
        "We update our resources monthly to ensure you have the latest information.",
    },
    {
      question: "Do I have to be a member to utilize the vaults?",
      answer:
        "No, all of our auto-compounding vaults are permissionless and open to anyone at anytime.",
    },
    {
      question: "How long does a subscription last?",
      answer: "All subscriptions are monthly based and can be auto-renewed.",
    },
    {
      question: "Can I share my account with others?",
      answer:
        "No, each account is for individual use only and should not be shared.",
    },
  ];

  return (
    <div className="py-8 px-4 text-white max-w-[2200px] w-[70vw] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <p className="mt-16 text-center">
        Still have questions?{" "}
        <span className="font-bold">Write to us at support@ashleydefi.com</span>
      </p>
    </div>
  );
};

export default FAQsSection;
