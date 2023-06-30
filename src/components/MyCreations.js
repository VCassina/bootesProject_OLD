import React, { useState, useEffect } from "react";
import AnchorTarget from "../items/AnchorTarget";
import CreationsLeftSideArticle from "../items/CreationsLeftCarrouselUnit";
import CreationsRightCarrousel from "./CreationsRightCarrousel";
import data from "../datas/realisationsSlider.json";
import CreationsSleepingAnimationHelper from "../helpers/CreationsSleepingAnimationHelper";

function MyCreations() {
  const dataSlider = data;
  const { sleepingRef, wakingRef } = CreationsSleepingAnimationHelper();
  const [selectedElement, setSelectedElement] = useState(null);
  const [animateOut, setAnimateOut] = useState(false);
  const [nextElement, setNextElement] = useState(null);
  const [newData, setNewData] = useState(null); // Nouvelle donnée à transmettre !

  // Gestion de la mise à jour des données du carrousel.
  useEffect(() => {
    let timeoutId = null;
    if (selectedElement !== null) {
      console.log("selectedElement : ", selectedElement);
      // Annule le délai précédent s'il existe !
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Définit un nouveau délai de 500 ms avant d'effectuer les changements.
      timeoutId = setTimeout(() => {
        setNewData(dataSlider[selectedElement]);
        console.log("selectedElement AFTER : ", selectedElement);
      }, 500);
    }
    // Reset le délai si on spam.
    return () => clearTimeout(timeoutId);
  }, [selectedElement, dataSlider]);

   // Gestion des animations du carrousel.
   const handleElementChange = (index) => {
    if (selectedElement === index) {
      return; // Ne rien faire si selectedElement est déjà égal à l'index
    }
    
    console.log("INDEX : ", index);
    setAnimateOut(true); // Déclenche l'animation de slide-out.
    setSelectedElement(index); // Met à jour l'élément sélectionné.
    setTimeout(() => {
      setAnimateOut(false); // Met fin à l'animation de slide-out.
    }, 500);
  };

  return (
    <article className="creations_container">
      <div className="importantComponent">
        <AnchorTarget id="creations" />
        <h2 className="title-creations">
          <span ref={wakingRef} className="">
            _
          </span>
          <span ref={sleepingRef} className="">
            Nos réalisations
          </span>
        </h2>
        <div className="creations_content">
          <section className="creations_content_carrousel">
            <div className="creations_content_carrousel_left">
              {dataSlider.map((item, index) => (
                <CreationsLeftSideArticle
                  key={index}
                  index={index}
                  handleElementChange={() => handleElementChange(index)}
                  selectedElement={selectedElement}
                  title={item.title}
                  iconeClass={item.iconeClass}
                  alt={item.alt}
                />
              ))}
            </div>
            <div className="creations_content_carrousel_middle"></div>
            {/*  // Utilise les nouvelles données. */}
            <CreationsRightCarrousel
              selectedElement={selectedElement}
              webSiteScreen={newData?.webSiteScreen}
              altScreen={newData?.altScreen}
              title={newData?.title}
              description={newData?.description}
              siteUrl={newData?.siteUrl}
              gitHubUrl={newData?.gitHubUrl}
              animateOut={animateOut}
              nextElement={nextElement}
              setNextElement={setNextElement}
            />
          </section>
        </div>
      </div>
    </article>
  );
}

export default MyCreations;
