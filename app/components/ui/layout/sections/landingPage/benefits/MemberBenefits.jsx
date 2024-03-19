const BenefitItem = ({ children }) => (
  <div className="hover:bg-slate-100 hover:text-black text-2xl text-center transition-all p-3 cursor-pointer relative sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl">
    <h2 className="mt-3 sm:mt-8 md:mt-10 lg:mt-3 xl:mt-3">{children}</h2>
  </div>
);
const MemberBenefits = () => {
  return (
    <div className="col-span-1 row-span-1 text-white font max-w-[800px] p-2 lg:pt-2">
      <h2 className="text-4xl text-center pt-0 mb-1 md:text-5xl lg:text-4xl xl:text-4xl 2xl:mb-2 font-bold">
        Members Only Benefits
      </h2>
      <div className="p-2 rounded-2xl white-glassmorphism shadow-xl shadow-indigo-700">
        <div className="h-[70vh] bg-[#2b2b2b] mx-auto bg-transparent grid grid-rows-6 transition-all font-economica bg-[url(/android-chrome-512x512.png)] bg-cover bg-center rounded-2xl relative md:w-[80vw] lg:w-[47vw]">
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70"></div>

          <BenefitItem>Daily Updates and Individual Responses</BenefitItem>
          <BenefitItem>Weekly Half-Hour 1-on-1 Consultations</BenefitItem>
          <BenefitItem>Members-Only Telegram Chat</BenefitItem>
          <BenefitItem>In-Depth Projects Outlooks & Analysis</BenefitItem>
          <BenefitItem>Members-Only Learning Resources & Materials</BenefitItem>
          <BenefitItem>First Access for All Alpha News Drops</BenefitItem>
        </div>
      </div>
    </div>
  );
};

export default MemberBenefits;
