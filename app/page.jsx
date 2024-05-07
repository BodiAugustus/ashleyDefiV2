import About from "./components/ui/layout/sections/landingPage/about/About";
import Benefits from "./components/ui/layout/sections/landingPage/benefits/Benefits";
import Call2Action from "./components/ui/layout/sections/landingPage/call2Action/Call2Action";
import Example from "./components/ui/layout/sections/landingPage/example/Example";
import FAQsSection from "./components/ui/layout/sections/landingPage/FAQ/FAQSection";
import FingersContainer from "./components/ui/layout/sections/landingPage/fingers/FingersContainer";
import Footer from "./components/ui/layout/sections/footer/Footer";
import Hero from "./components/ui/layout/sections/landingPage/Hero";
import Plans from "./components/ui/layout/sections/plans/Plans";
import Layout from "./pages/layout";
export default function Home() {
  return (
    <main className="overflow-hidden max-w-[2200px] min-h-screen">
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
