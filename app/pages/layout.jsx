import { lato } from "./../components/ui/fonts/font.js";
import Link from "next/link.js";
import { GiDrakkar } from "react-icons/gi";
import { socials } from "../components/data/data.jsx";
import { Button } from "../components/ui/common/Button.jsx";
export default function Layout({ children }) {
  return (
    <nav
      className={`w-[100vw] h-[12vh] px-4 flex navbar items-center justify-between ${lato.className} max-w-[2200px] text-white`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <span>Ashley</span>
          <GiDrakkar />
          <span>DeFi</span>
        </div>
      </div>

      <ul className="flex gap-22 ">
        <li>
          <Link
            href="/"
            className="cursor-pointer active:text-indigo-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem] "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pages/services"
            className="cursor-pointer active:text-indigo-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem] "
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/pages/subscribe"
            className="cursor-pointer active:text-indigo-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem] "
          >
            Member
          </Link>
        </li>
        <li>
          <Link
            href="/pages/contact"
            className="cursor-pointer active:text-indigo-400 transition-all duration-300 inline-block transform-origin-center-bottom hover:scale-105 active:scale-100 w-[10rem] "
          >
            Contact
          </Link>
        </li>
      </ul>
      <Button variant="blue">Connect</Button>
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
