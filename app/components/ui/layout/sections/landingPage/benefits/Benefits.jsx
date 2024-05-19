import Ticker from "../../../../common/Ticker";
import AtAGlance from "./AtAGlance";
import MemberBenefits from "./MemberBenefits";

const Benefits = () => {
  return (
    <div
      className="md:h-[100vh]  text-white font
        lg:pt-2 max-w-[2200px] grid
        xs:pt-2 xs:grid-cols-1 
        custom-xs-448-benefits
        custom-xs-640-benefits
        custom-xs-550-benefits
        custom-xs-660-benefits
        custom-xs-850-benefits
  custom-xs-860-benefits 

         xs:grid-rows-[3fr_3fr_1fr]
         md:grid-cols-2 md:grid-rows-[3fr_1fr] gap-y-5 mx-auto xs:gap-y-5"
    >
      <MemberBenefits />
      <AtAGlance />
      <Ticker />
    </div>
  );
};

export default Benefits;
