import Image from "next/image";
import { Button } from "../../../../common/Button";

export default function FingerThree() {
  return (
    <div className="flex white-glassmorphism w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700">
      <div className="w-[50%] p-3 flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Community</h2>
        <p className="text-xl w-[80%] text-[#B0C7EF]">
          Come and join a growing community where you can engage directly with
          builders, investors, enthusiasts and analysts. Our Discord and
          Telegram chats offer real, value-filled conversations that provide
          advance insights and answers. Plus we have the annual members Whale
          Party which happens in different amazing places all around the world!
        </p>
        <Button variant="white" className="w-[28%]" size="lg">
          Join Today &#8594;
        </Button>
      </div>
      <Image
        src="/Ashley-capital-logo.png"
        width={350}
        height={350}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
