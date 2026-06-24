import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Features from './sections/Features/Features';
import Coaches from './sections/Coaches/Coaches';
import Pricing from './sections/Pricing/Pricing';
import TrainingCamps from './sections/TrainingCamps/TrainingCamps';
import WhyUs from './sections/WhyUs/WhyUs';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
import FAQ from './sections/FAQ/FAQ';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Coaches />
        <Pricing />
        <TrainingCamps />
        <WhyUs />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
