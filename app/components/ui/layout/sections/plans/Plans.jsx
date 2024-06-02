import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div
      className="
      xs:h-auto
     lg:h-[100vh] max-w-[2200px] flex flex-col items-center md:gap-y-5 text-white lg:w-[90vw] mx-auto xs:mb-10"
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
      xs4:text-3xl md:pt-5 md:text-5xl md:-mb-3"
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
              Our DeFi experts provide full-service Consulting solutions to
              assist you with anything related to decentralized finance. From
              questions about technical aspects to protocol explanations and
              walkthroughs to individual project tokenomics, our experts will
              provide you with the right information to help you make
              well-informed investing decisions.
            </p>
            <Link
              href="/consulting"
              className="text-sky-400 transition-all duration-300 md:inline transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline xs:w-[100%] md:w-[50%] hover:pl-3 xs:text-sm xs3:text-base
              xs5:text-lg xs6:text-lg md:text-xl lg:w-[60%]"
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
              We offer a fully-custodialized and permissionless staking vault
              that runs on the Fantom Sonic blockchain. This vaults allow for
              users to deposit their FTM tokens to receive a variable APR that
              is significantly above the traditional finance's average. Staked
              assets accrue rewards paid out in FTM to the user on a per second
              basis.
            </p>
            <Link
              href="/vaults"
              className=" text-sky-400 transition-all duration-300 md:inline transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline xs:block xs:w-[100%]  lg:w-[55%] hover:pl-3 xs:text-sm xs3:text-base xs5:text-lg md:text-xl"
            >
              Learn More About High Yield Staking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
