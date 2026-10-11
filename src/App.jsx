
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Bridal from "./Components/Bridal";
import Gallery from "./Components/Gallery"
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
 
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Bridal />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;