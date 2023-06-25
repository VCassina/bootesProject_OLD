import React from "react";
import "../styles/Header.css";
import Logo from "../assets/bootesDevLogo.webp";
import { FaLeaf, FaCode, FaFolderOpen, FaComments } from 'react-icons/fa';

function Header() {
  return (
    <header className="welcome-header">
        <img src={Logo} alt="" />
        <nav>
          <ul>
            <li>
              <a href="#bootes">
                <span className="welcome_nav-unit"><FaLeaf /> Boötes Project</span>
              </a>
            </li>
            <li>
              <a href="#services">
              <span className="welcome_nav-unit"><FaCode /> Nos compétences</span>
              </a>
            </li>
            <li>
              <a href="#projets">
              <span className="welcome_nav-unit"><FaFolderOpen /> Nos réalisations</span>
              </a>
            </li>
            <li>
              <a href="#contact">
              <span className="welcome_nav-unit"><FaComments /> Nous contacter</span>
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
