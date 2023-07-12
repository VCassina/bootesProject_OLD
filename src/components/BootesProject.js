import React, { useState, useEffect } from "react";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";
import AnchorTarget from "../items/AnchorTarget";
import data from "../datas/bootesArticle.json";
import BootesArticle from "../items/BootesArticle";

function BootesProject() {
  const [tabletteDisplay, setTabletteDisplay] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setTabletteDisplay(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AnchorTarget id="bootes" isFirst={true} />
      <article className="bootes_container importantComponent">
        <h2 className="bootes_title title">_Boötes Project</h2>
        <div className="bootes_content">
          {tabletteDisplay ? (
            <BootesArticle
              title={data.title}
              description={data[selectedItemIndex].description}
              titleIndex="first-title"
              secondElement={false}
              tabletteDisplay={tabletteDisplay}
              data={data}
              selectedItemIndex={selectedItemIndex}
              setSelectedItemIndex={setSelectedItemIndex}
            />
          ) : (
            <BootesArticle
              title={data[0].title}
              description={data[0].description}
              titleIndex="first-title"
              secondElement={false}
              tabletteDisplay={tabletteDisplay}
            />
          )}
          <figure>
            <img
              className="bootes_content-picture"
              src={meByCatalysStuff}
              alt="Représentation de Victor faites par un⸱e artiste nommé⸱e CatalysStuff"
            />
            <figcaption>Designed by CatalysStuff - Thank you !</figcaption>
          </figure>
          {tabletteDisplay ? null : (
            <BootesArticle
              title={data[1].title}
              description={data[1].description}
              titleIndex="second-title"
              secondElement={true}
            />
          )}
        </div>
      </article>
    </>
  );
}

export default BootesProject;
