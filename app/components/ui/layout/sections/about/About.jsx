import AboutBox from "./AboutBox";
import Info from "./InfoBox";

export default function About() {
  return (
    <div className="grid grid-cols-2 h-[100vh] max-w-[2200px]">
      <AboutBox />
      <Info />
    </div>
  );
}
