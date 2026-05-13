import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid";
import PlanetTable from "./components/PlanetTable";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PLANETS_API_URL = "https://anurella.github.io/json/planets.json";

const resolvePlanetImage = (imagePath) => {
  if (!imagePath) return "";

  try {
    return new URL(imagePath, PLANETS_API_URL).href;
  } catch {
    return "";
  }
};

const normalizePlanets = (payload) => {
  const planets = Array.isArray(payload) ? payload : payload?.planets || payload?.value || [];

  return planets
    .map((planet, index) => ({
      id: planet.id || planet.planet || planet.name || `planet-${index}`,
      name: planet.name || planet.planet || `Planet ${index + 1}`,
      distanceFromSun: planet.distanceFromSun ?? planet.distance_from_sun ?? planet.distance,
      image: resolvePlanetImage(planet.image),
    }))
    .filter((planet) => planet.name);
};

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