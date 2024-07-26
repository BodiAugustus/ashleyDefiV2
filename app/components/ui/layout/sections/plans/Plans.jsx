import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div
      className="
      xs:h-auto
      max-w-[2200px] flex flex-col items-center md:gap-y-5 text-white lg:w-[90vw] mx-auto xs:mb-10"
    >
      {/* custom-xs-448-plans
    custom-xs-640-plans
    custom-xs-660-plans 
    custom-xs-850-plans
    custom-xs-390780-plans
    custom-xs-410675-plans 
    custom-xs-410810-plans  */}
      <div
        className="text-center  font-bold xs:text-2xl xs:mb-1
      xs4:text-3xl md:pt-5 md:text-5xl md:-mb-3 lg:text-4xl"
      >
        <h2>Our Services</h2>
      </div>
      <div className="flex md:gap-10 xs:flex-col xs:gap-7 lg:flex-row">
        <div
          className="xs:w-[95%] xs:h-auto lg:w-[40vw] 
        rounded-xl white-glassmorphism shadow-xl shadow-indigo-700 xs:mx-auto"
        >
          {/* custom-xs-448-plans-box
         custom-xs-640-plans-box
         custom-xs-660-plans-box
         custom-xs-850-plans-box
         custom-xs-410675-plans-box
         custom-xs-410810-plans-box */}
          <div className="h-[35vh] relative">
            <Image
              src="/cnslt.jpg"
              fill
              className="rounded-t-2xl"
              alt="Image of consulting"
            />
          </div>
          <div className=" py-4 px-6 flex flex-col gap-3">
            <h3
              className="xs:text-xl md:text-3xl font-bold xs:text-center
            xs5:text-2xl
             md:text-left xs:-mb-2 md:mb-0"
            >
              Membership Consulting
            </h3>
            <p className="xs:text-sm xs3:text-base xs6:text-lg xs:indent-5 md:indent-0 md:text-xl text-[#B0C7EF]">
              Our DeFi experts offer comprehensive consulting solutions to
              support you with all aspects of decentralized finance. Whether you
              have questions about technical details, need protocol
              explanations, require walkthroughs, or seek insights into
              individual project tokenomics, our experts are here to provide you
              with the information you need to make well-informed investment
              decisions.
            </p>
            <Link
              href="/consulting"
              className="text-sky-400 transition-all duration-300 md:inline transform-origin-center-bottom hover:scale-105 active:scale-100   xs:w-[100%] md:w-[50%] hover:pl-3 xs:text-sm xs3:text-base
              xs5:text-lg xs6:text-lg md:text-xl lg:w-[100%]"
            >
              Learn More About Ashley Consulting
            </Link>
          </div>
        </div>
        <div
          className="xs:w-[95%] xs:h-auto lg:w-[40vw]
        mx-auto rounded-xl white-glassmorphism shadow-xl shadow-indigo-700"
        >
          {/* custom-xs-448-plans-box
        custom-xs-640-plans-box 
        custom-xs-660-plans-box
        custom-xs-850-plans-box
        custom-xs-410675-plans-box
        custom-xs-410810-plans-box */}
          <div className="h-[35vh] relative">
            <Image
              src="/vault1.jpg"
              fill
              className="rounded-t-2xl"
              alt="Image of a vault."
            />
          </div>
          <div className=" py-4 px-6 flex flex-col gap-3">
            <h3 className="xs:text-xl xs5:text-2xl md:text-3xl font-bold xs:text-center md:text-left xs:-mb-2 md:mb-0">
              Staking Vault{" "}
            </h3>
            <p className="xs:text-sm xs3:text-base xs6:text-lg md:text-xl xs:indent-5 md:indent-0  text-[#B0C7EF]">
              We provide fully-custodial and permissionless staking vaults on
              the revolutionary Sonic blockchain. Users can seemlessly deposit
              their sonic tokens ($S) into one of our vaults to earn variable
              APR's well above traditional financial averages. Rewards are
              accrued and paid out in sonic tokens on a per-second basis,
              maximizing your staking returns with industry leading,
              cutting-edge technology.
            </p>
            <Link
              href="/vaults"
              className=" text-sky-400 transition-all duration-300 md:inline transform-origin-center-bottom hover:scale-105 active:scale-100   xs:block xs:w-[100%]  lg:w-[100%] hover:pl-3 xs:text-sm xs3:text-base xs5:text-lg md:text-xl"
            >
              Learn More About High Yield Staking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
