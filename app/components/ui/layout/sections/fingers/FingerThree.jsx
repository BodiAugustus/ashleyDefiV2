import Image from "next/image";

export default function FingerThree() {
  return (
    <div className="flex white-glassmorphism w-[80vw] mx-auto text-white p-4">
      <div>
        <h2>Reports</h2>
        <p>
          Each Delphi report presents the findings from extensive research into
          a singular, authoritative analysis of its topic. By consolidating a
          vast array of data and information, we provide clear, actionable
          insights designed to streamline your due diligence process in the
          crypto space and beyond.
        </p>
        <button>Access Pro</button>
      </div>
      <Image
        src="/Ashley-capital-logo.png"
        width={400}
        height={400}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
