import AboutBox from "./AboutBox";
import Info from "./InfoBox";
import { playfair, lato } from "../../../../fonts/font.js";

export default function About() {
  return (
    <div
      className={`grid xs:grid-cols-1 lg:grid-cols-2 
      max-w-[2200px] ${lato.className} lg:items-center
      xs:h-auto
      `}
    >
      <AboutBox />
      <Info />
    </div>
  );
}
