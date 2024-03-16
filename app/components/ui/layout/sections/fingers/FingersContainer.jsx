import FingerOne from "./FingerOne";
import FingerThree from "./FingerThree";
import FingerTwo from "./FingerTwo";

export default function FingersContainer() {
  return (
    <div className="h-[210vh] max-w-[2200px] flex flex-col gap-10">
      <h2 className="text-center text-white text-4xl -mb-4">A hub of Crypto</h2>
      <FingerOne />
      <FingerTwo />
      <FingerThree />
    </div>
  );
}
