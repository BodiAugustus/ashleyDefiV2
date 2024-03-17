import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white mt-28">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h5 className="font-bold text-lg mb-4">Company</h5>
          <ul>
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h5 className="font-bold text-lg mb-4">Services</h5>
          <ul>
            <li>
              <a
                href="#webdesign"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                href="#development"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Development
              </a>
            </li>
            <li>
              <a
                href="#hosting"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Hosting
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h5 className="font-bold text-lg mb-4">Support</h5>
          <ul>
            <li>
              <a
                href="#faq"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h5 className="font-bold text-lg mb-4">Social</h5>
          <ul>
            <li>
              <a
                href="#facebook"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
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
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 pt-20">
        <p>
          &copy; {new Date().getFullYear()} Ashley Capital & DeFi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
