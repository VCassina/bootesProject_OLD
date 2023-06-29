import React, { useState } from "react";
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
  const [newData, setNewData] = useState(null); // Nouvelle donnée.

  // Gère le changement d'élément dans le carrousel
  const handleElementChange = (index) => {
    if (selectedElement === index) {
      return; // Si l'élément sélectionné est le même que celui cliqué, ne rien faire.
    }

    setAnimateOut(true); // Déclenche l'animation de slide-out.
    setSelectedElement(index); // Met à jour l'élément sélectionné.

    // Attente de 500 ms avant de déclencher l'animation de slide-in et la mise à jour des données.
    setTimeout(() => {
      setAnimateOut(false); // Met fin à l'animation de slide-out.

      // Met à jour les nouvelles données avec un délai supplémentaire.
      setTimeout(() => {
        setNewData(dataSlider[selectedElement]);
      });
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
