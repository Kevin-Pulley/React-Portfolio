import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer__container" id="footer">
      <div class="column">
        <p class="github-text" id="footer-links">
          <a className="footer__github" href="https://github.com/Kevin-Pulley">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a className="footer__email" href="mailto:skippy1025@gmail.com">
            <i class="fas fa-envelope fa-2x"></i>
          </a>
          <a className="footer__linkedin" href="https://www.linkedin.com/in/kevin-pulley-9711431b3/">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
