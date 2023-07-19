import React, { useState } from "react";
import Logo from "../assets/bootesDevLogo.webp";
import miniLogo from "../assets/bootesDevMiniLogo.webp";
import { FaLeaf, FaCode, FaFolderOpen, FaComments } from "react-icons/fa";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="header_container">
      <div className="header_content">
        <img
          className="header_content-logo"
          src={Logo}
          alt="Logo de l'entreprise bootesDev"
          width="250"
          height="74"
        />
        <img
          className="header_content-miniLogo"
          src={miniLogo}
          alt="Petit logo de l'entreprise bootesDev"
          width="75"
          height="75"
        />
        <nav className="header_content-nav">
          <ul className="header_content-ul">
            <li
              className={`header_content-li ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <a
                href="#bootes"
                aria-label="Lien vers la section Bootes"
                onClick={() => setActiveIndex(0)}
              >
                <span className="header_nav-unit">
                  <FaLeaf className="header_nav-svg" />
                  <span className="header_nav-mainTxt"> Boötes </span>
                  <span className="header_nav-prefixe">Project</span>
                </span>
              </a>
            </li>
            <li
              className={`header_content-li ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <a
                href="#skills"
                aria-label="Lien vers la section Compétences"
                onClick={() => setActiveIndex(1)}
              >
                <span className="header_nav-unit">
                  <FaCode className="header_nav-svg" />{" "}
                  <span className="header_nav-prefixe">Nos</span>
                  <span className="header_nav-mainTxt"> compétences</span>
                </span>
              </a>
            </li>
            <li
              className={`header_content-li ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <a
                href="#creations"
                aria-label="Lien vers la section Créations"
                onClick={() => setActiveIndex(2)}
              >
                <span className="header_nav-unit">
                  <FaFolderOpen className="header_nav-svg" />{" "}
                  <span className="header_nav-prefixe">Nos</span>
                  <span className="header_nav-mainTxt"> réalisations</span>
                </span>
              </a>
            </li>
            <li
              className={`header_content-li ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              <a
                href="#contact"
                aria-label="Lien vers la section Contact"
                onClick={() => setActiveIndex(3)}
              >
                <span className="header_nav-unit">
                  <FaComments className="header_nav-svg" />{" "}
                  <span className="header_nav-prefixe">Nous</span>
                  <span className="header_nav-mainTxt"> contact</span>
                  <span className="header_nav-prefixe">er</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;