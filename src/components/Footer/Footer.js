import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="container" id="footer">
      <div class="column">
        <p class="github-text" id="footer-links">
          <a className="github" href="https://github.com/Kevin-Pulley">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a className="email" href="mailto:skippy1025@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/kevin-pulley-9711431b3/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
