import Image from "next/image";
import { Button } from "../../../../common/Button";
const vid = "community.mp4"; // No need to import, just provi
export default function FingerThree() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="w-[50%] p-3 flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Community</h2>
        <p className="text-xl w-[80%] text-[#B0C7EF]">
          Come and join our growing community where you can engage directly with
          builders, investors, enthusiasts and analysts alike. Our Discord and
          Telegram servers offer real, value-filled conversations that provide
          advance insights and answers. We also have the annual members only
          party which happens in different amazing places all around the world!
        </p>
        <Button variant="white" className="w-[28%]" size="lg">
          Join Today &#8594;
        </Button>
      </div>
      <div className="w-[50%] h-full relative rounded-2xl overflow-hidden">
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
