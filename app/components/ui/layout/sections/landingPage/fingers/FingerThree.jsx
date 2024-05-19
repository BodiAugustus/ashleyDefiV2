import Image from "next/image";
import { Button } from "../../../../common/Button";
const vid = "community.mp4"; // No need to import, just provi
export default function FingerThree() {
  return (
    <div className="flex white-glassmorphism xs:w-[95vw] md:w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="md:w-[50%] md:p-3 flex flex-col xs:gap-3 md:gap-5">
        <h2
          className="font-bold 
        xs:text-xl
        xs5:text-2xl
        md:text-3xl"
        >
          Community
        </h2>
        <div className="xs:visible md:hidden  rounded-2xl overflow-hidden">
          <video
            src={vid}
            className="brightness-70 px-4"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          />
        </div>
        <p className="xs:text-sm xs3:text-base md:text-xl xs:px-2 xs:indent-5 md:indent-0 md:w-[80%] xs:mb-1 text-[#B0C7EF]">
          Come and join our growing community where you can engage directly with
          builders, investors, enthusiasts and analysts alike. Our Discord and
          Telegram servers offer real, value-filled conversations that provide
          advance insights and answers. We also have the annual members only
          "Whale Party," which happens in different amazing places all around
          the world!
        </p>
        <Button
          variant="white"
          className="xs:mx-auto xs:mb-2 md:w-[28%]"
          size="lg"
        >
          Join Today &#8594;
        </Button>
      </div>
      <div className="xs:hidden md:visible w-[50%] h-full relative rounded-2xl overflow-hidden">
        <video
          src={vid}
          className="brightness-70 px-4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        />
      </div>
    </div>
  );
}
