import '../styles/Navbar.css';

const Navbar = () => { 
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" aria-label="Planet Creative World home">
          <span className="navbar-logo__planet" aria-hidden="true">
            <span className="navbar-logo__orbit"></span>
          </span>
          <span className="navbar-logo__text">
            <span className="navbar-logo__name">planet</span>
            <span className="navbar-logo__tagline">creative world</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
