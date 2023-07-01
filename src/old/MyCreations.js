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
  const [newData, setNewData] = useState(null);

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

  // Gestion des animations du carrousel.
  const handleElementChange = (index) => {
    if (selectedElement === index) {
      setSelectedElement(null); // Désélectionne l'élément actuel.
    } else {}
    setAnimateOut(true);
    setSelectedElement(index);
    setTimeout(() => {
      setAnimateOut(false);
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
              <div className="creations_content_carrousel_left-title-container">
            <span className="creations_content_carrousel_left-title">Selectionnez un projet !</span>
            <span className="creations_content_carrousel_left-title-border"></span>
            </div>
            <div className="creations_content_carrousel_left-articles" >
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
            </div>
            {/* <div className="creations_content_carrousel_middle"></div> */}
            {/*  // Utilise les nouvelles données uniquement. */}
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