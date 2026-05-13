import 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__about">
          <h2>About</h2>
          <p>
            Group 9 is Benjamin, Ayo, Cletus, Chidimma, and Daniel. We built
            this planet data explorer as part of the TS Academy software
            engineering capstone.
          </p>
        </div>
        <div className="footer__bottom">
          <div className="footer__credit">
            <p>&copy;2026 Design by Amaka & Ifeoma A.</p>
            <p>
              Built by{" "}
              <a
                href="https://github.com/Skol-Chie/TS-Academy-SDC-Project-Group-9"
                target="_blank"
                rel="noreferrer"
              >
                Group 9
              </a>
              . All rights reserved
            </p>
          </div>
          <div className="footer__links">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
