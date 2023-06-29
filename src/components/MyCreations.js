import React, { useState, useEffect } from "react";
import AnchorTarget from "../items/AnchorTarget";
import BankPicto from "../assets/bankPictoByIbrandify.png";
import BankPicto2 from "../assets/seoByMacrovector.webp";

function MyCreations() {
  const [selectedElement, setSelectedElement] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const [nextImage, setNextImage] = useState("");

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);
    setAnimateOut(true);
  };

  const getSelectedImage = (selectedElement) => {
    switch (selectedElement) {
      case "Element1":
        return BankPicto;
      case "Element2":
        return BankPicto2;
      case "Element3":
        return BankPicto;
      default:
        return "";
    }
  };

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setAnimateOut(false);
        setNextImage(getSelectedImage(selectedElement));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animateOut, selectedElement]);

  return (
    <section className="creations_container">
      <AnchorTarget id="creations" />

      <div className="creations_carrousel_container importantComponent">
        <div className="creations_carrousel_left">
          <input
            type="radio"
            id="element1"
            name="elements"
            value="Element1"
            checked={selectedElement === "Element1"}
            onChange={handleElementChange}
          />
          <label htmlFor="element1" className="creations_label">
          <img src={BankPicto} alt="A modifier" className="creations_label-img"/>
          <span>Element 1</span>
          </label>

          <input
            type="radio"
            id="element2"
            name="elements"
            value="Element2"
            checked={selectedElement === "Element2"}
            onChange={handleElementChange}
          />
          <label htmlFor="element2" className="creations_label">
          <img src={BankPicto2} alt="A modifier" className="creations_label-img"/>
            <span>Element 2</span>
          </label>

          <input
            type="radio"
            id="element3"
            name="elements"
            value="Element3"
            checked={selectedElement === "Element3"}
            onChange={handleElementChange}
          />
          <label htmlFor="element3" className="creations_label">
          <img src={BankPicto} alt="A modifier" className="creations_label-img"/>
          <span>Element 3</span>
          </label>
        </div>

        <div className="creations_carrousel_middle"></div>

        <div
          className={`creations_carrousel_right ${
            selectedElement
              ? animateOut
                ? "slideout-animation"
                : "slidein-animation"
              : ""
          }`}
        >
          {selectedElement && <p>{selectedElement}</p>}
          <img src={nextImage} alt="A modifier" className="creations_label-img"/>
        </div>
      </div>
    </section>
  );
}

export default MyCreations;
