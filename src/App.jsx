import ServiciosSection from "./components/ServiciosSection"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiciosSection />
        <TeamSection />
      </div>
    </>
  );
};

export default App;
