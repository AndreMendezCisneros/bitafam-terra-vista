import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Properties from '@/components/Properties';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <About />
      <Projects />
      <Contact />
      <FloatingContact />
    </div>
  );
};

export default Index;
