import '../styles/Planets.css';

import planets from "../assets/images/planets.jpeg";

export default function PlanetCard({ planet, distanceFromSun, image, }) {
  return (
    <div className="planet-card" id="planets">
      <img src={planets} alt={planet} className="planet-image" />
      <h2 className="planet-name">{planet}</h2>
      <p>Distance from Sun</p>
      <p>{distanceFromSun} million km</p>
    </div>
  );
};
