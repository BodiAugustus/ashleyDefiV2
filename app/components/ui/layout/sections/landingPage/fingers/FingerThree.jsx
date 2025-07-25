import { Button } from "../../../../common/Button";
import Link from "next/link";
const vid = "community.mp4"; // No need to import, just provi
export default function FingerThree() {
  return (
    <div className="flex white-glassmorphism xs:w-[95vw] xl:w-[80vw]  mx-auto text-white p-4 max-w-[1300px] shadow-xl shadow-indigo-700 lg:items-center">
      <div className="lg:w-[50%] md:p-3 flex flex-col xs:gap-3 md:gap-5">
        <h2
          className="font-bold 
        xs:text-xl
        xs5:text-2xl
        md:text-3xl"
        >
          Community
        </h2>
        <div className="xs:visible lg:hidden  rounded-2xl overflow-hidden">
          <video
            src={vid}
            className="brightness-70 px-4"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          />
        </div>
        <p className="xs:text-sm xs3:text-base xs6:text-lg md:text-xl xs:px-2 xs:indent-5 lg:indent-0 ] xs:mb-1 text-[#B0C7EF]">
          Join our growing online based community and connect directly with
          builders, investors, enthusiasts, and analysts from around the state.
          Our Telegram server provides valuable, in-depth conversations and
          advanced insights into all the latest news.
        </p>
        <Link
          href="https://t.me/+89dQjvU76cwxZGU9"
          passHref
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="white" className="xs:mx-auto xs:mb-2 " size="lg">
            Join Today &#8594;
          </Button>
        </Link>
      </div>
      <div className="xs:hidden lg:block w-[50%] h-full relative rounded-2xl overflow-hidden">
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
