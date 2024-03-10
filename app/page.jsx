import About from "./components/ui/layout/sections/about/About";
import Example from "./components/ui/layout/sections/example/Example";
import Hero from "./components/ui/layout/sections/Hero";
import Layout from "./pages/layout";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Layout />
      <Hero />
      <About />
      <Example />
    </main>
  );
}
