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

export const skills = [
  {
    id: "1bxb",
    order: 1,
    title: "Staking",
    experience: "Farm Yields",
    stack: [
      "1) Stake FTM on Beethoven DEX to receive sFTMx at 4.17% APR",
      "2) Deposit sFTMx into Polter Finance for 22.55% APR",
      "3) Borrow 30% of your sFTMx for 3.93% interest and 89.42% APR",
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
      "1) Acquire EQUAL tokens via staking or market",
      "2) Create a max-locked veNFT on Equalizer DEX",
      "3) Vote weekly on LP pool rewards to earn a portion of that pools total fees",
    ],
    label: "veNFT's",
  },
  {
    id: "3bzb",
    order: 3,
    title: "Loans",
    experience: "Increase Capital",
    stack: [
      "1) Take out a low interest FTM/axlUSDC loan on Debita Finance",
      "2) Use the newly acquired axlUSDC to buy 50/50 fBUX/WFTM",
      "3) Deposit fBUX/WFTM in Equalizer LP for 340% APR",
    ],
    label: "Peer-2-Peer",
  },
];
