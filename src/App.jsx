import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiciosSection from "./components/ServiciosSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiciosSection />
        <TeamSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
