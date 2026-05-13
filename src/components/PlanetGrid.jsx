import '../styles/Planets.css';

import PlanetCard from "./PlanetCard";
import planets from "./planets.json";

export default function PlanetGrid() {
  return (
    <section className="planet-grid">
      <div className="planet-grid__header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      </div>
      {planets.map((p) => (
        <PlanetCard
          key={p.planet}
          planet={p.planet}
          distanceFromSun={p.distanceFromSun}
          image={p.image}
        />
      ))}
    </section>
  );
}