import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import WhoIWorkWith from "./components/WhoIWorkWith";
import About from "./components/About";
import Office from "./components/Office";
import Approach from "./components/Approach";
import Credibility from "./components/Credibility";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--color-ivory)] text-[color:var(--color-ink)]">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <WhoIWorkWith />
        <About />
        <Office />
        <Approach />
        <Credibility />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
