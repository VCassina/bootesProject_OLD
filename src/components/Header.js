import React from "react";
import "../styles/Header.css";
import Logo from "../assets/bootesDevLogo.webp";
import { FaLeaf, FaCode, FaFolderOpen, FaComments } from "react-icons/fa";
import AnchorTarget from "../items/AnchorTarget";

function Header() {

  return (
    <header className="header_container">
      <div className="header_content">
        <img src={Logo} alt="" />
        <nav>
          <ul>
            <li>
              <a href="#bootes">
                <span className="header_nav-unit"><FaLeaf /> Boötes Project</span>
              </a>
            </li>
            <li>
              <a href="#skills">
              <span className="header_nav-unit"><FaCode /> Nos compétences</span>
              </a>
            </li>
            <li>
              <a href="#projets">
              <span className="header_nav-unit"><FaFolderOpen /> Nos réalisations</span>
              </a>
            </li>
            <li>
              <a href="#contact">
              <span className="header_nav-unit"><FaComments /> Nous contacter</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
        <AnchorTarget id="bootes"/>
    </header>
  );
}

export default Header;
