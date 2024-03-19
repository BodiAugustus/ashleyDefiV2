import { lato } from "./../components/ui/fonts/font.js";
import Link from "next/link.js";
import { Button } from "../components/ui/common/Button.jsx";
import React from "react";
import Image from "next/image.js";

export default function Layout({ children }) {
  return (
    <nav
      className={`w-[100vw] h-[12vh] px-4 flex navbar items-center justify-between  max-w-[2200px] text-white  `}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/android-chrome-192x1922.png"
            width={60}
            height={60}
            className="opacity-90 rounded-lg"
          />
        </Link>
      </div>

      <ul className="flex gap-10 text-2xl font-sans font-thin">
        <li>
          <Link
            href="/"
            className="cursor-pointer  active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/consulting"
            className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
          >
            Consulting
          </Link>
        </li>
        <li>
          <Link
            href="/vaults"
            className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
          >
            Vaults
          </Link>
        </li>
        <li>
          <Link
            href="/members"
            className="cursor-pointer active:text-sky-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline"
          >
            Members
          </Link>
        </li>
      </ul>
      <div className="px-4">
        <Button variant="white" size="lg">
          Connect
        </Button>
      </div>
      {/* <ul className="flex items-center justify-between p-2 mr-1 text-3xl w-[17%] rounded-xl">
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
      </ul> */}
    </nav>
  );
}
