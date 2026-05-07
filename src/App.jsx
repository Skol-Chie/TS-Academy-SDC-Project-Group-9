import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import PlanetTable from "./components/PlanetTable";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetGrid />
      <PlanetTable />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;