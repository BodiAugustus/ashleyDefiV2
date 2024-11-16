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
import Link from "next/link";

export default function CnsltPlans() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (type) => {
    const content =
      type === "monthly" ? (
        <div className="md:p-4 ">
          <h2
            className="font-bold text-center 
          xs:text-xl 
          md:text-2xl "
          >
            Members Consulting Info
          </h2>
          <h3
            className="font-bold text-center 
          xs:text-base
          md:mb-5  
         "
          >
            Details regarding our monthly member's consulting services
          </h3>
          <div
            className="flex flex-col mx-auto
          xs:gap-1 xs:w-[95%]
          md:gap-5 md:w-[90%]"
          >
            <div>
              <div className="flex items-center gap-2">
                <FaUserFriends />
                <h4>2 hours of direct, 1-on-1 consultation per month</h4>
              </div>
              <p
                className="font-thin font-sans 
              xs:text-sm 
              md:text-base"
              >
                Consulting sessions are held via Zoom and include a thorough
                review of your portfolio by the consultant.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <FaFileAlt />
                <h4> Free access to technology reports</h4>
              </div>
              <p
                className="font-thin font-sans 
              xs:text-sm 
              md:text-base"
              >
                Members receive all technology reports and other produced
                content at no additional cost.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h4> Priority responses</h4>
              </div>
              <p
                className="font-thin font-sans 
              xs:text-sm 
              md:text-base"
              >
                Members receive priority response when communicating with their
                consultants.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaChartLine />
                <h4>Portfolio management</h4>
              </div>
              <p
                className="font-thin font-sans mb-5 
              xs:text-sm 
              md:text-base"
              >
                Ashley DeFi members benefit from industry-specific professionals
                overseeing their portfolios, ensuring the protection and
                enhancement of gains during both market upturns and downturns.
              </p>
            </div>
          </div>
          <h4 className="mb-5 text-center">
            Monthly Membership Fee: <span className="font-bold">$99.99</span>
          </h4>
          <Link href="https://buy.stripe.com/5kA4iL4ppeITc1ydQQ" passHref>
            <Button className="mx-auto">Buy Now</Button>
          </Link>
          {/* You can add more detailed sections here as needed */}
        </div>
      ) : (
        <div className="md:p-4  ">
          <h2
            className="font-bold text-center 
          xs:text-xl 
          md:text-2xl "
          >
            Hourly Consulting
          </h2>
          <h3 className=" mb-5 font-bold text-center">
            Details regarding our hourly consulting services
          </h3>
          <div
            className="flex flex-col gap-5 mx-auto 
          md:w-[90%]"
          >
            <div>
              <div className="flex items-center gap-2">
                <FaUserFriends />
                <h4>One hour of direct, 1-on-1 consultation</h4>
              </div>
              <p className="font-thin font-sans">
                Consulting sessions are done over ZOOM
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <FaFileAlt />
                <h4> Pay to access technology reports</h4>
              </div>
              <p className="font-thin font-sans">
                Non-members must pay $9.99 to access any of Ashley DeFi's
                technology or protocol reports.
              </p>
            </div>
          </div>
          <h4 className="mb-5 mt-5 text-center">
            Hourly Consulting Fee: <span className="font-bold">$60.00</span>
          </h4>
          <Link href="https://buy.stripe.com/6oEaH9g8730b3v2001" passHref>
            <Button className="mx-auto">Buy Now</Button>
          </Link>
          {/* You can add more detailed sections here as needed */}
        </div>
      );

    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <div
      className="max-w-[2200px] flex flex-col text-white mx-auto 
      items-center 
      xs:h-auto xs:gap-y-1 xs:-mt-10
      xs6:mb-5 
      md:gap-y-10 md:w-[90vw] md:pb-7 
      lg:gap-y-3 lg:pt-5"
    >
      <div
        className="text-center font-bold 
        xs:text-2xl 
        xs4:text-3xl
        md:text-4xl 
     
      "
      >
        <h2>Our Services</h2>
      </div>
      <div
        className="flex 
      xs:flex-col xs:gap-6 
      md:gap-10
      lg:flex-row  "
      >
        <div
          className="rounded-xl white-glassmorphism shadow-xl shadow-indigo-700
          xs:w-[95%] xs:h-auto xs:mx-auto
          md:w-[80vw] 
          lg:w-[40vw] 
        "
        >
          <div className="h-[35vh] relative">
            <Image
              src="/whales.webp"
              fill
              className="rounded-t-2xl"
              alt="Image of a whale."
            />
          </div>
          <div
            className="py-4 px-6 flex flex-col 
          xs:h-auto xs:gap-1  
          md:gap-3"
          >
            <h3
              className="font-bold
            xs:text-xl 
            xs5:text-2xl 
            md:text-3xl "
            >
              Members Consulting
            </h3>
            <p
              className="text-[#B0C7EF]
            xs:text-sm 
            xs5:text-base 
            xs6:text-lg 
            md:text-xl "
            >
              Our DeFi experts offer comprehensive consulting services to all
              members. From technical aspects and protocol explanations to
              project tokenomics and beyond, our specialists provide the
              essential information you need to make well-informed investment
              decisions.
            </p>
            <button
              onClick={() => handleOpenModal("monthly")}
              className="text-sky-400  hover:scale-105 active:scale-100 text-left  transition-all duration-300 inline 
              xs6:text-lg
              md:w-[65%] md:text-xl
              lg:w-[100%]  "
            >
              Learn More About Members Consulting
            </button>
          </div>
        </div>
        <div
          className="rounded-xl white-glassmorphism shadow-xl shadow-indigo-700
        xs:w-[95%] xs:h-auto xs:mx-auto xs:mb-6 
        md:w-[80vw] md:mb-0
        lg:w-[40vw]   "
        >
          <div className="h-[35vh] relative">
            <Image
              src="/whale.jpg"
              fill
              className="rounded-t-2xl"
              alt="Image of a pod of whales"
            />
          </div>
          <div
            className="py-4 px-6 flex flex-col
          xs:h-auto xs:gap-1 
          md:gap-3"
          >
            <h3
              className="font-bold
            xs:text-xl 
            xs5:text-2xl 
            md:text-3xl "
            >
              Hourly Consulting{" "}
            </h3>
            <p
              className="text-[#B0C7EF]
            xs:text-sm 
            xs5:text-base 
            xs6:text-lg
            md:text-xl  "
            >
              Our expert consultants provide ad hoc consulting services and
              technology reports for interested clients. Consultations are
              conducted via Zoom and scheduled within twenty-four hours of
              receiving your request. Additional services are available upon
              request.
            </p>
            <button
              onClick={() => handleOpenModal("hourly")}
              className="text-sky-400 hover:scale-105 active:scale-100 text-left transition-all duration-300 inline 
              xs6:text-lg
              md:w-[65%] md:text-xl
              lg:w-[100%]  "
            >
              Learn More About Hourly Consulting
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <Modal closeModal={closeModal} content={modalContent} />}
    </div>
  );
}
