import ServiciosSection from "./components/ServiciosSection"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiciosSection />
      </div>
    </>
  );
};

export default App;
