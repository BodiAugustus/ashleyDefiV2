import { Button } from "../../../common/Button";
import CryptoTickerTable from "../../../common/Ticker";
import { lato, playfair } from "../../../fonts/font";
export default function Hero() {
  return (
    <div className="w-[100vw] h-[80vh] mx-auto bg-[url(/consultingBg.jpg)]  bg-center bg-cover relative max-w-[2200px]">
      <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-40"></div>
      <div className="relative flex flex-col gap-8 items-center justify-center h-[100%] -mb-6">
        <h1
          className={`text-5xl text-white font-bold tracking-tight ${lato.className}`}
        >
          Ashley Consulting: Your Partners in Crypto
        </h1>
        <h3 className="text-[#B0C7EF] text-2xl w-[60%] text-center">
          Our advisory spans across technology assessment reports, token
          advisory, asset intellifence, education, and design services.
        </h3>
        <div className="flex gap-5 w-[100%] items-center justify-center ">
          <Button variant="blue" className="w-[20%] flex justify-center">
            Get in touch
          </Button>
          <Button variant="white" className="w-[20%] flex justify-center">
            Get in touch
          </Button>
        </div>
        <h4 className="mt-16 uppercase text-[#B0C7EF] font-bold text-xl">
          Making people money since 2019
        </h4>
      </div>
      <div className="text-white">
        <CryptoTickerTable />
      </div>
    </div>
  );
}
