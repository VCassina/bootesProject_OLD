import React, { useState, useEffect } from "react";
import data from "../datas/realisationsSlider.json";
import AnchorTarget from "../items/AnchorTarget";
import CreationsSleepingAnimationHelper from "../helpers/CreationsSleepingAnimationHelper";
import CreationsUpperArticle from "../items/CreationsUpperArticle";
import CreationsBottomArticle from "../items/CreationsBottomArticle";

function MyCreations() {
  const dataSlider = data;
  const { sleepingRef } = CreationsSleepingAnimationHelper();
  const [selectedElement, setSelectedElement] = useState(null);
  const [animateOut, setAnimateOut] = useState(false);
  const [nextElement, setNextElement] = useState(null);
  const [newData, setNewData] = useState(null);

   // Gestion des animations du carrousel.
   const handleElementChange = (index) => {
    if (selectedElement === index) {
      setSelectedElement(null);
    } else {}
    setAnimateOut(true);
    setSelectedElement(index);
    setTimeout(() => {
      setAnimateOut(false);
    }, 500);
  };

  // Gestion de la mise à jour des données du carrousel & gestion du temps.
  useEffect(() => {
    let timeoutId = null;
    if (selectedElement !== null) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setNewData(dataSlider[selectedElement]);
      }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [selectedElement, dataSlider]);


  return (
    <section className="creations_container">
      <div className="importantComponent">
        <AnchorTarget id="creations" />
        <div className="creations_content">
          <div className="creations_content_upper">
            <h2 className="creations_content_upper-title">
              <span>_</span>
              <span ref={sleepingRef} className="">
                Nos réalisations
              </span>
            </h2>
            <nav className="creations_content_upper-nav">
            {dataSlider.map((item, index) => (
  <CreationsUpperArticle
    item={item}
    index={index}
    selectedElement={selectedElement}
    handleElementChange={() => handleElementChange(index)}
  />
))}
            </nav>
          </div>

          <div className="creations_content_carrousel">
            <CreationsBottomArticle 
              selectedElement={selectedElement}
              webSiteScreen={newData?.webSiteScreen}
              altScreen={newData?.altScreen}
              description={newData?.description}
              animateOut={animateOut}
              nextElement={nextElement}
              setNextElement={setNextElement}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCreations;
