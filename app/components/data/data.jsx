import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export const links = [
  {
    id: "home",
    name: "Home",
    url: "/",
  },
  {
    id: "services",
    name: "Services",
    url: "/services",
  },
  {
    id: "contact",
    name: "Contact",
    url: "/contact",
  },
  {
    id: "Sign-Up",
    name: "sign up",
    url: "/subscribe",
  },
];

export const socials = [
  {
    id: "twit",
    name: "Twitter",
    url: "https://twitter.com/AshleyDefi",
    icon: <AiFillTwitterCircle />,
    color: "text-sky-400",
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.com/channels/939647986856767570/939647986856767573",
    icon: <BsDiscord />,
    color: "text-yellow-400",
  },
  {
    id: "23gfss",
    name: "Telegram",
    url: "https://t.me/BodiAugustus",
    icon: <FaTelegramPlane />,
    color: "text-white",
  },
];
