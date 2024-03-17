import AboutBox from "./AboutBox";
import Info from "./InfoBox";
import { playfair, lato } from "../../../fonts/font.js";

export default function About() {
  return (
    <div
      className={`grid grid-cols-2 h-[100vh] max-w-[2200px] ${lato.className}`}
    >
      <AboutBox />
      <Info />
    </div>
  );
}
