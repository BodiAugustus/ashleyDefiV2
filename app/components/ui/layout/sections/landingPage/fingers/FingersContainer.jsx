import FingerOne from "./FingerOne";
import FingerThree from "./FingerThree";
import FingerTwo from "./FingerTwo";

export default function FingersContainer() {
  return (
    <div className="xs:h-[350vh] md:h-[185vh] max-w-[2200px] flex flex-col xs:gap-8 md:gap-10 xs:-mt-6 md:mt-0">
      <h2
        className="text-center text-white text-4xl md:-mb-4 font-bold
      xs:text-2xl xs:-mb-6"
      >
        A Center for Crypto
      </h2>
      <FingerOne />
      <FingerTwo />
      <FingerThree />
    </div>
  );
}
