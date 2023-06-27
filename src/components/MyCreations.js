import React, { useState, useEffect } from "react";
import "../styles/MyCreations.css";
// import SkillsArticle from "../components/SkillsArticle";
// import data from "";
import AnchorTarget from "../items/AnchorTarget";

function MyCreations() {
  const [selectedElement, setSelectedElement] = useState("");
  const [animateOut, setAnimateOut] = useState(false);

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);
    setAnimateOut(true);
  };

  useEffect(() => {
    // Réinitialise l'animation après la sortie
    if (animateOut) {
      const timer = setTimeout(() => {
        setAnimateOut(false);
      }, 500); // Durée de l'animation en millisecondes (0.5s)
      return () => clearTimeout(timer);
    }
  }, [animateOut]);

  return (
    <section className="creations_container">
      <AnchorTarget id="creations" />

      <div className="creations_carrousel_container importantComponent">
        <div className="creations_carrousel_left">
          <input
            type="radio"
            name="elements"
            value="Element1"
            checked={selectedElement === "Element1"}
            onChange={handleElementChange}
          />
          <label htmlFor="element1">Element 1</label>

          <input
            type="radio"
            name="elements"
            value="Element2"
            checked={selectedElement === "Element2"}
            onChange={handleElementChange}
          />
          <label htmlFor="element2">Element 2</label>

          <input
            type="radio"
            name="elements"
            value="Element3"
            checked={selectedElement === "Element3"}
            onChange={handleElementChange}
          />
          <label htmlFor="element3">Element 3</label>
        </div>

        <div className="creations_carrousel_middle"></div>

        <div
          className={`creations_carrousel_right ${
            selectedElement ? (animateOut ? "slideout" : "slidein") : ""
          }`}
        >
          {selectedElement && <p>{selectedElement}</p>}
        </div>
      </div>
    </section>
  );
}

export default MyCreations;
