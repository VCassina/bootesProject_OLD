import React, { useState, useEffect, useRef } from "react";
import data from "../datas/creationsSlider.json";
import AnchorTarget from "../items/AnchorTarget";
import CreationsUpperArticle from "../components/CreationsUpperArticle";
import CreationsBottomArticle from "../components/CreationsBottomArticle";
import titleAnimationHelper from "../helpers/titleAnimationHelper";

function MyCreations() {
  const dataSlider = data;
  const sleepingRef = useRef(null);
  const [selectedElement, setSelectedElement] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);
  const [nextElement, setNextElement] = useState(null);
  const [newData, setNewData] = useState(null);

  titleAnimationHelper(
    "creations_content_upper-title-sleepingAnimation",
    sleepingRef
  );
  // Gestion des animations du carrousel.
  const handleElementChange = (index) => {
    if (selectedElement === index) {
      return null;
    } else {
    }
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
    <article className="creations_container">
       <AnchorTarget id="creations" />
      <div className="importantComponent">
       
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
                  key={index}
                  item={item}
                  index={index}
                  handleElementChange={() => handleElementChange(index)}
                  selectedElement={selectedElement}
                />
              ))}
            </nav>
          </div>

          <div className="creations_content_carrousel">
            <CreationsBottomArticle
              webSiteScreen={newData?.webSiteScreen}
              altScreen={newData?.altScreen}
              description={newData?.description}
              title={newData?.title}
              siteUrl={newData?.siteUrl}
              gitUrl={newData?.gitUrl}
              animateOut={animateOut}
              nextElement={nextElement}
              setNextElement={setNextElement}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyCreations;
