import About from "./components/ui/layout/sections/about/About";
import Benefits from "./components/ui/layout/sections/benefits/Benefits";
import Call2Action from "./components/ui/layout/sections/call2action/Call2Action";
import Example from "./components/ui/layout/sections/example/Example";
import FAQsSection from "./components/ui/layout/sections/FAQ/FAQSection";
import FingersContainer from "./components/ui/layout/sections/fingers/FingersContainer";
import Footer from "./components/ui/layout/sections/footer/Footer";
import Hero from "./components/ui/layout/sections/Hero";
import Plans from "./components/ui/layout/sections/plans/Plans";
import Layout from "./pages/layout";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Layout />
      <Hero />
      <About />
      <Example />
      <Benefits />
      <FingersContainer />
      <Plans />
      <Call2Action />
      <FAQsSection />
      <Footer />
    </main>
  );
}
