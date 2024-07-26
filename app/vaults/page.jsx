import Footer from "../components/ui/layout/sections/footer/Footer";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
import Hero from "../components/ui/layout/sections/vaultsPage/Hero";
import Vaults from "../components/ui/layout/sections/vaultsPage/Vaults";
import Layout from "../pages/layout";
import Image from "next/image";
import sonicWallpaper from "../../public/sonicwallpaper.webp";

export default function Page() {
  return (
    <main className="max-w-[2200px] overflow-hidden">
      <Layout />
      {/* <Hero />
      <Vaults />
      <ContactCTA /> */}
      <div className="flex flex-col items-center justify-center h-auto">
        <Image src={sonicWallpaper} alt="Under Construction" fill />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
