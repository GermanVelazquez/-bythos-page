import { useReveal } from './hooks/useReveal';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Privacy } from './components/Privacy/Privacy';
import { Export } from './components/Export/Export';
import { FinalCta } from './components/FinalCta/FinalCta';
import { Footer } from './components/Footer/Footer';

export function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Privacy />
      <Export />
      <FinalCta />
      <Footer />
    </>
  );
}
