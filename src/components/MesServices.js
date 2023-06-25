import React from "react";
import "../styles/MesServices.css";

function MesServices() {
  return (
    <section className="services_container" id="services">
      <h2 className="title">_Nos compétences</h2>
      <div className="services_content">
        <article>
          <i></i>
          <h3>Front-End</h3>
          <p>La partie visible de votre site.</p>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
            <li>SASS</li>
            <li>Git/GitHub</li>
            <li>Intégration d'API</li>
          </ul>
        </article>
        <article>
          <h3>Back-End</h3>
          <p>Sous l'iceberg du web !</p>
          <ul>
            <li>working progress...</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>SEO</h3>
          <p>Votre visibilité en ligne.</p>
          <ul>
            <li>Optimisation technique.</li>
            <li>Injection de Micro-données.</li>
            <li>Analyse du référencement.</li>
          </ul>
        </article>
      </div>
      <figcaption>
            Drawn by Macrovector - Thank you !
      </figcaption>
    </section>
  );
}

export default MesServices;
