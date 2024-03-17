import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="h-[100vh] max-w-[2200px] flex flex-col items-center gap-y-10 text-white w-[90vw] mx-auto">
      <div className="text-center text-4xl ">
        <h2>Our Services</h2>
      </div>
      <div className="flex gap-10">
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism">
          <div className="h-[35vh] relative">
            <Image src="/earth.jpg" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl">Ashley Capital Consulting</h3>
            <p className="text-lg">
              We offer real-life, face-to-face consulting with real people using
              the most sophisticated tools and technology available to
              successfully manage our clients portfolios. This service caters to
              individuals seeking a very active, hands-on type of approach to
              investing.
            </p>
            <Link href="/" className="text-sky-400">
              Learn More About Consulting
            </Link>
          </div>
        </div>
        <div className="w-[40vw] h-[75vh] rounded-xl white-glassmorphism">
          <div className="h-[35vh] relative">
            <Image src="/earth.jpg" fill className="rounded-t-2xl" />
          </div>
          <div className="h-[40vh] py-4 px-6 flex flex-col gap-3">
            <h3 className="text-3xl">Ashley DeFi Staking</h3>
            <p className="text-lg">
              We offer a fully-custodialized vault that runs on the Fantom Sonic
              blockchain which allows for users to deposit their FTM tokens for
              a variable APR of between 0.00% and 0.00%. Staked assets accrue
              rewards paid out in ### to the user on a per second basis. User
              funds can be added or removed permisionlessly.
            </p>
            <Link href="/" className="text-sky-400">
              Learn More About Staking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
