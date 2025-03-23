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
export const links90 = [
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
    url: "https://t.me/+89dQjvU76cwxZGU9",
    icon: <FaTelegramPlane />,
    color: "text-white",
  },
];

export const skillsk = [
  {
    id: "1bxb",
    order: 1,
    title: "Staking",
    experience: "Farm Yields",
    stack: [
      "1) Stake S on Beets DEX to receive stS",
      "2) Deposit stS into Silo & earn an auto-compounded APR + SILO",
      "3) Borrow against your stS and then pay off the loan using SILO emissions",
      ,
      ,
    ],
    label: "Liquidity Pool's",
  },
  {
    id: "2byb",
    order: 2,
    title: "Voting ",
    experience: "Earn Rewards",
    stack: [
      "1) Acquire SHADOW tokens via liquidity staking, voting, or market buying",
      "2) Create a max-locked veNFT on SHADOW DEX's governance tab",
      "3) Vote weekly on LP pool's to earn a portion of that pools total fees and bribes",
    ],
    label: "veNFT's",
  },
  {
    id: "3bzb",
    order: 3,
    title: "Loans",
    experience: "Increase Capital",
    stack: [
      "1) Take out a low interest S/USDCe loan using AAVE on Sonic",
      "2) Use the newly acquired USDCe to buy more S tokens",
      "3) When S price increases, sell back a portion to unlock your original collateral",
    ],
    label: "Peer-2-Peer",
  },
];
