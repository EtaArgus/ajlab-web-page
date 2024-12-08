import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiciosSection from "./components/ServiciosSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="top" className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiciosSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
