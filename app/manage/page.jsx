import Footer from "../components/ui/layout/sections/footer/Footer";
import Manage from "./../components/ui/layout/sections/managePage/Manage";
import Layout from "../pages/layout";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
import Image from "next/image";
import sonicWallpaper from "../../public/sonicwallpaper.webp";

export default function ManagePage() {
  return (
    <div className="max-w-[2200px] mx-auto overflow-hidden">
      <Layout />
      <div className="flex flex-col items-center justify-center h-auto">
        <Image src={sonicWallpaper} alt="Under Construction" fill />
      </div>
      {/* <Manage />
      <ContactCTA />
      <Footer /> */}
    </div>
  );
}
