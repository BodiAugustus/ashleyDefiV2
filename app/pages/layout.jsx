// "use client";
// import { useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import { playfair, lato } from "./../components/ui/fonts/font.js";
// import { FaTelegram, FaTwitter } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import ConnectButtonFr from "../components/ui/web3/ConnectButtonFr";

// export default function Layout({ children }) {
//   const menuRef = useRef(null);

//   const openMenu = () => {
//     menuRef.current.style.transform = "scale(1)";
//     menuRef.current.style.opacity = "1";
//   };

//   const closeMenu = () => {
//     menuRef.current.style.transform = "scale(0)";
//     menuRef.current.style.opacity = "0";
//   };

//   return (
//     <div>
//       <nav className="w-full h-[12vh] px-4 flex items-center justify-between max-w-[2200px] mx-auto text-white">
//         {/* Logo Container */}
//         <div className="flex-shrink-0 w-1/6 flex items-center justify-start">
//           <Link href="/">
//             <Image
//               src="/android-chrome-192x1922.png"
//               width={40}
//               height={40}
//               className="opacity-90 rounded-lg xs:visible xs2:hidden"
//               alt="Logo"
//             />

//             <Image
//               src="/android-chrome-192x1922.png"
//               width={60}
//               height={60}
//               className="opacity-90 rounded-lg xs:hidden xs2:inline"
//               alt="logo"
//             />
//           </Link>
//           <button
//             className="md:hidden xs:text-4xl xs2:text-5xl hover:scale-105 active:scale-100 transition-transform duration-300"
//             onClick={openMenu}
//           >
//             <GiHamburgerMenu />
//           </button>
//         </div>

//         {/* Navigation Links Container */}
//         <ul className="flex-shrink-0 w-2/6 flex justify-center gap-10 text-2xl font-sans font-thin">
//           <li>
//             <Link
//               className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 custom-underline"
//               href="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/consulting"
//               className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 custom-underline"
//             >
//               Consulting
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/vaults"
//               className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 custom-underline"
//             >
//               Vaults
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/manage"
//               className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 custom-underline"
//             >
//               Manage
//             </Link>
//           </li>
//         </ul>

//         {/* Connect Button Container */}
//         <div className="flex-shrink-0 w-1/6 flex justify-end">
//           <ConnectButtonFr />
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       <div
//         ref={menuRef}
//         className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50 transition-transform duration-300 transform scale-0 opacity-0"
//       >
//         <div className="bg-[#292941] relative xs:p-2 xs4:p-5 rounded-lg shadow-lg flex flex-col items-center h-full w-full">
//           <Image
//             src="/Ashley-capital-logo.png"
//             alt="Logo"
//             layout="fill"
//             objectFit="contain"
//             className="rounded-2xl opacity-20"
//           />

//           <div className="z-30 flex flex-col p-2 relative w-full h-full custom-xs-448-mobile-gap custom-xs-640-mobile-gap custom-xs-860-mobile-gap custom-xs-390780-mobile-gap custom-xs-410675-mobile-gap custom-xs-410810-mobile-gap">
//             <div className="flex items-center justify-between">
//               <h2 className="invisible">logo</h2>
//               <Image
//                 src="/android-chrome-192x1922.png"
//                 width={70}
//                 height={70}
//                 className="opacity-90 rounded-lg mb-0 xs:visible xs:mt-3 xs2:hidden"
//                 alt="logo"
//               />
//               <Image
//                 src="/android-chrome-192x1922.png"
//                 width={90}
//                 height={90}
//                 className="opacity-90 rounded-lg mb-5 xs:hidden xs2:block"
//                 alt="logo"
//               />
//               <button
//                 onClick={closeMenu}
//                 className="self-start text-3xl font-bold text-red-500"
//               >
//                 <span>X</span>
//               </button>
//             </div>
//             <ul className="text-center text-2xl text-white flex flex-col gap-10 mb-8 custom-xs-448-mobile-gap-list custom-xs-640-mobile-gap-list custom-xs-360-mobile-gap-list custom-xs-550-mobile-gap-list custom-xs-660-mobile-gap-list custom-xs-850-mobile-gap-list custom-xs-390780-mobile-gap-list custom-xs-410675-mobile-gap-list xs4:text-3xl">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/consulting">Consulting</Link>
//               </li>
//               <li>
//                 <Link href="/vaults">Vaults</Link>
//               </li>
//               <li>
//                 <Link href="/manage">Manage</Link>
//               </li>
//             </ul>
//             <div className="flex gap-24 text-white mx-auto mb-1 text-4xl xs:text-3xl xs3:text-4xl xs4:text-5xl">
//               <Link
//                 href="https://t.me/+89dQjvU76cwxZGU9"
//                 passHref
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTelegram />
//               </Link>
//               <Link
//                 href="https://x.com/AshleyDeFi"
//                 passHref
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter />
//               </Link>
//             </div>
//             <div className="flex flex-col">
//               <h4
//                 className={`text-center text-white font-bold text-2xl ${playfair.className} xs:text-xl`}
//               >
//                 Ashley Capital & DeFi
//               </h4>
//               <p className="text-center font-bold text-sky-400 xs:text-sm">
//                 Where Whales are Born
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main>{children}</main>
//     </div>
//   );
// }

"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { playfair, lato } from "./../components/ui/fonts/font.js";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Button } from "../components/ui/common/Button.jsx";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectButtonFr from "../components/ui/web3/ConnectButtonFr";
import CustomConnectButton from "../components/ui/web3/CustomConnectButton.jsx";
import Logo from "../../public/Ashley-capital-logo.png";

export default function Layout({ children }) {
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.transform = "scale(1)";
    menuRef.current.style.opacity = "1";
  };

  const closeMenu = () => {
    menuRef.current.style.transform = "scale(0)";
    menuRef.current.style.opacity = "0";
  };

  return (
    <div>
      <nav className="w-full h-[12vh] px-4 flex items-center navbar justify-between max-w-[2200px] text-white mx-auto">
        <div className="flex flex-shrink-0 w-1/6 items-center justify-between xs:w-[100%] md:w-[7%] ">
          <Link href="/">
            <Image
              src="/android-chrome-192x1922.png"
              width={40}
              height={40}
              className="opacity-90 rounded-lg xs:visible xs2:hidden"
              alt="Logo"
            />

            <Image
              src="/android-chrome-192x1922.png"
              width={60}
              height={60}
              className="opacity-90 rounded-lg xs:hidden xs2:inline

              "
              alt="logo"
            />
          </Link>
          <div className="md:hidden rounded-xl">
            {/* <ConnectButtonFr /> */}
            <CustomConnectButton />
          </div>
          <button
            className="md:hidden xs:text-4xl xs2:text-5xl hover:scale-105 active:scale-100 transition-transform duration-300"
            onClick={openMenu}
          >
            {/* Icon or button to open menu */}
            <GiHamburgerMenu />
          </button>
        </div>

        <ul
          className={`flex-shrink-0 w-2/6 hidden md:flex md:justify-between gap-10 text-2xl font-sans font-thin `}
        >
          {/* Navigation Links */}
          <li>
            <Link
              className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/consulting"
              className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
            >
              Consulting
            </Link>
          </li>
          <li>
            <Link
              href="/vaults"
              className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
            >
              Vaults
            </Link>
          </li>
          <li>
            <Link
              href="/manage"
              className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
            >
              Manage
            </Link>
          </li>
        </ul>
        <div className="flex-shrink-0 md:w-1/6  hidden md:flex md:justify-end px-0 ">
          {/* <Button variant="white" size="md">
            Connect
          </Button> */}
          <CustomConnectButton />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50 transition-transform duration-300 transform scale-0 opacity-0"
      >
        <div className="bg-[#292941] relative xs:p-2 xs4:p-5 rounded-lg shadow-lg flex flex-col items-center  h-full w-full">
          <Image
            src={Logo}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl opacity-20 "
          />

          <div
            className=" z-30 flex flex-col  p-2 relative w-full h-full
          custom-xs-448-mobile-gap
          custom-xs-640-mobile-gap
          custom-xs-860-mobile-gap
          custom-xs-390780-mobile-gap
          custom-xs-410675-mobile-gap
          custom-xs-410810-mobile-gap
          "
          >
            <div className="flex items-center justify-between">
              <h2 className="invisible">logo</h2>
              <Image
                src="/android-chrome-192x1922.png"
                width={70}
                height={70}
                className="opacity-90 rounded-lg mb-0 xs:visible xs:mt-3 xs2:hidden"
                alt="logo"
              />
              <Image
                src="/android-chrome-192x1922.png"
                width={90}
                height={90}
                className="opacity-90 rounded-lg mb-5 xs:hidden xs2:block"
                alt="logo"
              />
              <button
                onClick={closeMenu}
                className="self-start text-3xl font-bold text-red-500"
              >
                {/* Close button */}
                <span>X</span>
              </button>
            </div>
            <ul
              className={`text-center text-2xl text-white flex flex-col gap-10 mb-8

              custom-xs-448-mobile-gap-list
              custom-xs-640-mobile-gap-list
              custom-xs-360-mobile-gap-list
              custom-xs-550-mobile-gap-list
              custom-xs-660-mobile-gap-list
              custom-xs-850-mobile-gap-list
              custom-xs-390780-mobile-gap-list
              custom-xs-410675-mobile-gap-list
              xs4:text-3xl
              `}
            >
              {/* Mobile Navigation Links */}
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/consulting">Consulting</Link>
              </li>
              <li>
                <Link href="/vaults">Vaults</Link>
              </li>
              <li>
                <Link href="/manage">Manage</Link>
              </li>
            </ul>
            <div
              className="flex gap-24 text-white mx-auto mb-1 text-4xl
            xs:text-3xl xs3:text-4xl xs4:text-5xl
            "
            >
              <Link
                href="https://t.me/+89dQjvU76cwxZGU9"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </Link>
              <Link
                href="https://x.com/AshleyDeFi"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
            </div>
            <div className="flex flex-col">
              <h4
                className={`text-center text-white font-bold text-2xl ${playfair.className}
                xs:text-xl
                `}
              >
                Ashley Capital & DeFi
              </h4>
              <p
                className="text-center font-bold text-sky-400
              xs:text-sm;
              "
              >
                Where Whales are Born
              </p>
            </div>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}

// import Link from "next/link.js";
// import { Button } from "../components/ui/common/Button.jsx";
// import Image from "next/image.js";

// export default function Layout({ children }) {
//   return (
//     <nav
//       className={`w-full h-[12vh] px-4 flex navbar items-center justify-between  max-w-[2200px] text-white  `}
//     >
//       <div className="flex items-center justify-between">
//         <Link href="/">
//           <Image
//             src="/android-chrome-192x1922.png"
//             width={60}
//             height={60}
//             className="opacity-90 rounded-lg"
//           />
//         </Link>
//       </div>

//       <ul className="flex gap-10 text-2xl font-sans font-thin">
//         <li>
//           <Link
//             href="/"
//             className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/consulting"
//             className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
//           >
//             Consulting
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/vaults"
//             className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
//           >
//             Vaults
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/manage"
//             className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
//           >
//             Manage
//           </Link>
//         </li>
//       </ul>
//       <div className="hidden md:block px-4">
//         <Button variant="white" size="lg">
//           Connect
//         </Button>
//       </div>
//     </nav>
//   );
// }

{
  /* <ul className="flex items-center justify-between p-2 mr-1 text-3xl w-[17%] rounded-xl">
        {socials.map((item) => {
          const { id, url, icon, color } = item;
          return (
            <li
              key={id}
              className={`${color} hover:scale-110 transition-all active:scale-100`}
            >
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul> */
}
