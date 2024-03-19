import Footer from "@/app/components/ui/layout/sections/footer/Footer";
import Layout from "../pages/layout";
import Hero from "../components/ui/layout/sections/consultingPage/Hero";
import AshleyAdv from "../components/ui/layout/sections/consultingPage/AshleyAdv";
import Services from "../components/ui/layout/sections/consultingPage/Services";

export default function Page() {
  return (
    <main className="max-w-[2200px] overflow-hidden">
      <Layout />
      <Hero />
      <AshleyAdv />
      <Services />
      <Footer />
    </main>
  );
}
