import Ticker from "../../../../common/Ticker";
import AtAGlance from "./AtAGlance";
import MemberBenefits from "./MemberBenefits";

const Benefits = () => {
  return (
    <div
      className="md:h-[100vh]  text-white  xs:h-auto
        xs:pt-4 max-w-[2200px] md:grid
        xs:flex xs:flex-col xs:gap-5 xs:mb-10
         md:grid-cols-2 md:grid-rows-[3fr_1fr] mx-auto "
    >
      {/* custom-xs-448-benefits
        custom-xs-640-benefits
        custom-xs-550-benefits
        custom-xs-660-benefits
        custom-xs-670-benefits
        custom-xs-850-benefits
  custom-xs-860-benefits 
  custom-xs-410810-benefits */}
      <MemberBenefits />
      <AtAGlance />
      <Ticker />
    </div>
  );
};

export default Benefits;
