import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" text-white xs:mt-6 md:mt-28 max-w-[2200px] ">
      <div className="max-w-[1400px]  px-2 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-items-center lg:text-xl">
        {/* Column 1 */}
        <div>
          <h5 className="font-bold text-lg md:mb-4 xs6:text-xl">Services</h5>
          <ul>
            <li>
              <Link
                href="/consulting"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/vaults"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Staking Vault
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h5 className="font-bold text-lg md:mb-4 xs6:text-xl">Support</h5>
          <ul>
            <li>
              <Link
                href="#help"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h5 className="font-bold text-lg md:mb-4 xs6:text-xl">Social</h5>
          <ul>
            <li>
              <a
                href="#twitter"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#instagram"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 xs:pt-10 xs:leading-4 xs:text-sm xs6:text-base xs6:leading-4 md:pt-20">
        <p>
          &copy; {new Date().getFullYear()} Ashley Capital & DeFi.
          <br /> Where whales are born.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
