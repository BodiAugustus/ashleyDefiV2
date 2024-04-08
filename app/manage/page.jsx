import Footer from "../components/ui/layout/sections/footer/Footer";
import Manage from "./../components/ui/layout/sections/managePage/Manage";
import Layout from "../pages/layout";
import ContactCTA from "../components/ui/layout/sections/vaultsPage/Help";

export default function ManagePage() {
  return (
    <div className="max-w-[2200px] mx-auto overflow-hidden">
      <Layout />
      <Manage />
      <ContactCTA />
      <Footer />
    </div>
  );
}
