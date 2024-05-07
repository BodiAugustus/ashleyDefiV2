"use client";
import Image from "next/image";

import { useState } from "react";
import Modal from "./modal/Modal";
import { Button } from "../../../common/Button";
import {
  FaUserFriends,
  FaSearch,
  FaFileAlt,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
export default function CnsltPlans() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleOpenModal = (type) => {
    const content =
      type === "monthly" ? (
        <div className="p-4">
          <h2 className=" text-2xl font-bold text-center">
            Members Consulting Details
          </h2>
          <h3 className=" mb-5 font-bold text-center">
            Details regarding our monthly membership consulting services.
          </h3>
          <div className="flex flex-col gap-5 mx-auto w-[90%]">
            <div>
              <div className="flex items-center gap-2">
                <FaUserFriends />
                <h4>2 hours of direct 1-on-1 consultation monthly</h4>
              </div>
              <p className="font-thin font-sans">
                Consulting sessions are done in person or over Google
                Meets/ZOOM.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaSearch />
                <h4> 1 hour of preparation work</h4>
              </div>
              <p className="font-thin font-sans">
                Before each consultation your portfolio and all of its
                paremeters will be individually researched and checked to ensure
                you have the best information and position possible.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaFileAlt />
                <h4> Free access to all technology reports</h4>
              </div>
              <p className="font-thin font-sans">
                Members are not required to pay to see any reports or other
                informationals put out by Ashley DeFi. All members will be kept
                notified.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h4> Priority given to responses</h4>
              </div>
              <p className="font-thin font-sans">
                Members always get first priortiy to response times for
                communication with their consultants.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaChartLine />
                <h4>Portfolio management</h4>
              </div>
              <p className="font-thin font-sans mb-5">
                Holding a membership with Ashley DeFi means having a
                professional watching over your portfolio, ready to advise to
                protect and extend your gains during uptimes and down.
              </p>
            </div>
          </div>
          <h4 className="mb-5 text-center">
            Monthly Membership Fee: <span className="font-bold">$119.99</span>
          </h4>
          <Button className="mx-auto">Buy Now</Button>
          {/* You can add more detailed sections here as needed */}
        </div>
      ) : (
        <div className="p-4">
          <h2 className=" text-2xl font-bold text-center">Hourly Consulting</h2>
          <h3 className=" mb-5 font-bold text-center">
            Details regarding our hourly consulting services
          </h3>
          <div className="flex flex-col gap-5 mx-auto w-[90%]">
            <div>
              <div className="flex items-center gap-2">
                <FaUserFriends />
                <h4>1 hour of direct 1-on-1 consultation per session</h4>
              </div>
              <p className="font-thin font-sans">
                Consulting sessions are done in person or over Google
                Meets/ZOOM.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <FaFileAlt />
                <h4> Pay to access technology reports</h4>
              </div>
              <p className="font-thin font-sans">
                Non-members are required to pay $9.99 to see any of Ashley
                DeFi's technology or protocol reports.
              </p>
            </div>
          </div>
          <h4 className="mb-5 text-center">
            Hourly Consulting Fee: <span className="font-bold">60 USD</span>
          </h4>
          <Button className="mx-auto">Buy Now</Button>
          {/* You can add more detailed sections here as needed */}
        </div>
      );

    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <div className="h-[100vh] max-w-[2200px] flex flex-col items-center gap-y-10 text-white w-[90vw] mx-auto">
      <div className="text-center text-4xl font-bold">
        <h2>Our Services</h2>
      </div>
      <div className="flex gap-10 ">
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism shadow-xl shadow-indigo-700">
          <div className="h-[35vh] relative">
            <Image src="/whales.webp" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl font-bold">Members Consulting</h3>
            <p className="text-lg text-[#B0C7EF]">
              Our DeFi experts provide full-service Consulting solutions to our
              members to assist them with anything related to decentralized
              finance. From technical aspects to protocol explanations and
              walkthroughs to project tokenomics, our experts will provide you
              with the right information to help you make well-informed
              investing decisions.
            </p>
            <button
              onClick={() => handleOpenModal("monthly")}
              className="text-sky-400  hover:scale-105 active:scale-100 text-left  transition-all duration-300 inline w-[65%]"
            >
              Learn More About Our Members DeFi Consulting
            </button>
          </div>
        </div>
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism shadow-xl shadow-indigo-700">
          <div className="h-[35vh] relative">
            <Image src="/whale.jpg" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl font-bold">Hourly Consulting </h3>
            <p className="text-lg text-[#B0C7EF]">
              We offer hourly consulting services for customers who are looking
              for a more part-time partner. Once requested one of our
              consultants will reach out within 24 hours of your initial request
              to determine the nature of your needs and to schedule the
              appointment. All consultations occur 1-on-1 in person, by zoom, or
              if you prefer by phone as well.
            </p>
            <button
              onClick={() => handleOpenModal("hourly")}
              className="text-sky-400  hover:scale-105 active:scale-100 text-left  transition-all duration-300 inline w-[65%]"
            >
              Learn More About Our Hourly DeFi Consulting
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <Modal closeModal={closeModal} content={modalContent} />}
    </div>
  );
}
