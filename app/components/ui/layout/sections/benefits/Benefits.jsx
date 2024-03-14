import Ticker from "../../../common/Ticker";
import AtAGlance from "./AtAGlance";
import MemberBenefits from "./MemberBenefits";

const Benefits = () => {
  return (
    <div
      className="h-[100vh]  text-white font
        lg:pt-2 max-w-[2200px] grid grid-cols-2 grid-rows-[3fr_1fr] gap-y-5 mx-auto "
    >
      <MemberBenefits />
      <AtAGlance />
      <Ticker />
    </div>
  );
};

export default Benefits;
