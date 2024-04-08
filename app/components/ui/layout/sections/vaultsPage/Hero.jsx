import { Button } from "../../../common/Button";
import CryptoTickerTable from "../../../common/Ticker";
import { lato, playfair } from "../../../fonts/font";
export default function Hero() {
  return (
    <div className="w-[100vw] h-[88vh] mx-auto   relative max-w-[2200px] p-4 flex flex-col justify-center items-center bg-[url(/garden.webp)]  bg-center bg-no-repeat bg-cover ">
      <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-30"></div>
      <h1
        className={`text-5xl text-white font-bold text-center tracking-normal ${playfair.className} pb-4 brightness-125`}
      >
        The Vaults of Ashley
      </h1>
      <div className="bg-[url(/vaults.webp)]  bg-center bg-no-repeat bg-contain h-[90%] flex justify-center items-center ">
        <div className="relative flex flex-col  items-center justify-end h-[100%] py-10 gap-10 ">
          <h3 className="text-white font-thin font-sans text-2xl w-[60%] text-center">
            High-yielding, permisionless, auto-compounding vaults with TVL based
            allowances for borrowing against collateral
          </h3>
          <div className="flex gap-5 w-[100%] items-center justify-center ">
            <Button variant="white" className="w-[20%] flex justify-center">
              Read the Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
