"use client";

import React from "react";
import FAQItem from "./FAQItem"; // Adjust the import path as necessary

const FAQsSection = () => {
  const faqs = [
    {
      question: "How do I sign up?",
      answer:
        "You can sign up by clicking the sign up button on the top right corner.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "How often do you update your resources?",
      answer:
        "We update our resources monthly to ensure you have the latest information.",
    },
    {
      question: "Can I share my account with others?",
      answer:
        "No, each account is for individual use only and should not be shared.",
    },
  ];

  return (
    <div className="py-8 px-4 text-white max-w-[2200px] w-[70vw] mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
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
