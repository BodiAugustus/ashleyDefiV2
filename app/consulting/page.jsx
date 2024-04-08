import Footer from "@/app/components/ui/layout/sections/footer/Footer";
import Layout from "../pages/layout";
import Hero from "../components/ui/layout/sections/consultingPage/Hero";
import AshleyAdv from "../components/ui/layout/sections/consultingPage/AshleyAdv";
import Services from "../components/ui/layout/sections/consultingPage/Services";
import ContactForm from "../components/ui/layout/sections/consultingPage/ContactForm";
import Plans from "../components/ui/layout/sections/plans/Plans";
import Call2Action from "../components/ui/layout/sections/landingPage/call2Action/Call2Action";

export default function Page() {
  return (
    <main className="max-w-[2200px] overflow-hidden">
      <Layout />
      <Hero />
      <AshleyAdv />
      <Services />
      <ContactForm />
      <Plans />
      <Call2Action />
      <Footer />
    </main>
  );
}
