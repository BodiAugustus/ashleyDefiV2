import Footer from "../components/ui/layout/sections/footer/Footer";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";
import Hero from "../components/ui/layout/sections/vaultsPage/Hero";
import Vaults from "../components/ui/layout/sections/vaultsPage/Vaults";
import Layout from "../pages/layout";

export default function Page() {
  return (
    <main className="max-w-[2200px] overflow-hidden">
      <Layout />
      <Hero />
      <Vaults />
      <ContactCTA />
      <Footer />
    </main>
  );
}
