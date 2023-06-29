import React from "react";
import Logo from "../assets/bootesDevLogo.webp";
import { FaLeaf, FaCode, FaFolderOpen, FaComments } from "react-icons/fa";

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
              <a href="#creations">
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
    </header>
  );
}

export default Header;
