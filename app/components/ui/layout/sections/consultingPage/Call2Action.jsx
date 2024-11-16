import { Button } from "../../../../common/Button";

export default function Call2Action() {
  return (
    <div className="h-[75vh] max-w-[2200px] ">
      <div className="flex white-glassmorphism w-[90vw] h-[70vh] mx-auto text-white p-4 max-w-[1400px] shadow-xl shadow-indigo-700">
        <div className="bg-[url(/haad.jpg)] bg-cover bg-center rounded-2xl relative">
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70"></div>
          <div className="relative w-[55%] mx-auto flex flex-col items-center h-[100%] justify-center gap-8">
            <h2 className="text-center text-3xl font-bold">
              Come Discover What Really Matters.
            </h2>
            <p className="text-center text-xl text-[#B0C7EF]">
              At Ashley Capital & DeFi, we make your money work as hard and
              smart as possible so that you can have more of it back to do the
              things you love and enjoy. So if you like making extra money, then
              you've come to the right place. Ashley Capital & DeFi,
              <br /> <br />{" "}
              <span className="text-sky-400 font-bold text-2xl">
                where whales are born.
              </span>
            </p>
            <Button className="shadow-xl font-thin font-sans">
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
