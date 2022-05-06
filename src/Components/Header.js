import React from "react";
import TypeWriter from "typewriter-effect";
import styles from "./Header.module.css";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var description = data.description;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#work">
              Experience
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#certifications">
              Certifications
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {name ? ` Hi, I'm ${name}.` : null}
          </h1>
          <div className={styles.typewriter_block}>
            <h3>
              <TypeWriter
                options={{
                  strings: description ? description : null,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>

          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
