import { useEffect, useState } from "react";
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
  const [planets, setPlanets] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchPlanets = async () => {
      try {
        const response = await fetch(PLANETS_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Planet data could not be loaded.");
        }

        const payload = await response.json();
        const normalizedPlanets = normalizePlanets(payload);

        setPlanets(normalizedPlanets);
        setStatus(normalizedPlanets.length ? "success" : "empty");
      } catch (fetchError) {
        if (fetchError.name === "AbortError") return;

        setError(fetchError.message || "Planet data could not be loaded.");
        setStatus("error");
      }
    };

    fetchPlanets();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetGrid planets={planets} status={status} error={error} />
      <PlanetTable planets={planets} status={status} error={error} />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
