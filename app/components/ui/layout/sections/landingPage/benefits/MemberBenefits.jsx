const BenefitItem = ({ children }) => (
  <div
    className="hover:bg-slate-100 rounded-2xl hover:text-black text-2xl text-center transition-all p-3 cursor-pointer relative 
  xs:text-sm xs:p-2
  xs3:text-base
  xs5:text-lg
  xs8:text-xl
  
  
  md:text-3xl lg:text-2xl xl:text-3xl"
  >
    <h2 className="mt-3 sm:mt-8 md:mt-10 lg:mt-3 xl:mt-3">{children}</h2>
  </div>
);
const MemberBenefits = () => {
  return (
    <div className="md:col-span-1 row-span-1 text-white font max-w-[800px] p-2 lg:pt-2 xs:col-span-2">
      <h2
        className="text-4xl text-center pt-0  
       xs:text-2xl xs:mb-1
       xs4:text-3xl
      md:text-5xl lg:text-3xl xl:text-2xl md:mb-3 font-bold"
      >
        Members Only Benefits
      </h2>
      <div className="p-2 rounded-2xl white-glassmorphism shadow-xl shadow-indigo-700 ">
        <div className="h-[70vh] bg-[#2b2b2b] mx-auto bg-transparent grid grid-rows-6 transition-all font-economica bg-[url(/android-chrome-512x512.png)] bg-cover bg-center rounded-2xl relative  lg:w-auto">
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70"></div>

          <BenefitItem>Daily Updates & Individualized Responses</BenefitItem>
          <BenefitItem>2 Hours of Monthly Consultations</BenefitItem>
          <BenefitItem>Members-Only Telegram Channel</BenefitItem>
          <BenefitItem>In-Depth Protocol Walkthroughs</BenefitItem>
          <BenefitItem>New and Updated DeFi Strategies</BenefitItem>
          <BenefitItem>Custom Portfolio Management</BenefitItem>
        </div>
      </div>
    </div>
  );
};

export default MemberBenefits;
