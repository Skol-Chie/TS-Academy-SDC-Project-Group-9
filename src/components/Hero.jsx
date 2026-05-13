import '../styles/Hero.css';
import heroPlanet from '../assets/hero-planet-transparent.png';

const Hero = () => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">Explore Our Solar System Through Data</h1>
        <p className="hero__copy">
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>
        <div className="hero__actions" aria-label="Home page actions">
          <a className="button button--primary" href="#planets">
            Explore the Data
          </a>
          <a className="button button--secondary" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
      <figure className="hero__visual" aria-label="Blue planet illustration">
        <img
          src={heroPlanet}
          alt="A blue planet floating in space"
        />
      </figure>
    </section>
  );
};

export default Hero;
