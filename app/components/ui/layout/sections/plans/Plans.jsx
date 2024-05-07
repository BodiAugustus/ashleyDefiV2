import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="h-[100vh] max-w-[2200px] flex flex-col items-center gap-y-10 text-white w-[90vw] mx-auto">
      <div className="text-center text-4xl font-bold">
        <h2>Our Services</h2>
      </div>
      <div className="flex gap-10">
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism shadow-xl shadow-indigo-700">
          <div className="h-[35vh] relative">
            <Image src="/cnslt.jpg" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl font-bold">Membership Consulting</h3>
            <p className="text-lg text-[#B0C7EF]">
              Our DeFi experts provide full-service Consulting solutions to
              assist you with anything related to decentralized finance. From
              questions about technical aspects to protocol explanations and
              walkthroughs to individual project tokenomics, our experts will
              provide you with the right information to help you make
              well-informed investing decisions.
            </p>
            <Link
              href="/consulting"
              className="text-sky-400 transition-all duration-300 inline transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline  w-[50%] hover:pl-3"
            >
              Learn More About Ashley Consulting
            </Link>
          </div>
        </div>
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism shadow-xl shadow-indigo-700">
          <div className="h-[35vh] relative">
            <Image src="/vault1.jpg" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl font-bold">Staking Vault </h3>
            <p className="text-lg text-[#B0C7EF]">
              We offer a fully-custodialized and permissionless staking vault
              that runs on the Fantom Sonic blockchain. This vaults allow for
              users to deposit their FTM tokens to receive a variable APR that
              is significantly above the traditional finance's average. Staked
              assets accrue rewards paid out in FTM to the user on a per second
              basis.
            </p>
            <Link
              href="/vaults"
              className=" text-sky-400 transition-all duration-300 inline transform-origin-center-bottom hover:scale-105 active:scale-100  custom-underline  w-[55%] hover:pl-3"
            >
              Learn More About Our High Yield Staking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
