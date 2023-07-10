import React from "react";
import Logo from "../assets/bootesDevLogo.webp";
import miniLogo from "../assets/bootesDevMiniLogo.webp";
import { FaLeaf, FaCode, FaFolderOpen, FaComments } from "react-icons/fa";

function Header() {
  return (
    <header className="header_container">
      <div className="header_content">
        <img className="header_content-logo" src={Logo} alt="Logo de l'entreprise bootesDev" />
        <img className="header_content-miniLogo" src={miniLogo} alt="Petit logo de l'entreprise bootesDev" />
        <nav className="header_content-nav">
          <ul className="header_content-ul">
            <li className="header_content-li">
              <a href="#bootes">
                <span className="header_nav-unit">
                  <FaLeaf className="header_nav-svg" /> Boötes Project
                </span>
              </a>
            </li>
            <li className="header_content-li">
              <a href="#skills">
                <span className="header_nav-unit">
                  <FaCode className="header_nav-svg" /> <span className="header_nav-prefixe">Nos</span> compétences
                </span>
              </a>
            </li>
            <li className="header_content-li">
              <a href="#creations">
                <span className="header_nav-unit">
                  <FaFolderOpen className="header_nav-svg" /> <span className="header_nav-prefixe">Nos</span> réalisations
                </span>
              </a>
            </li>
            <li className="header_content-li">
              <a href="#contact">
                <span className="header_nav-unit">
                  <FaComments className="header_nav-svg" /> <span className="header_nav-prefixe">Nous</span> contact<span className="header_nav-prefixe">er</span>
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