import React, { useState } from "react";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";
import AnchorTarget from "../items/AnchorTarget";
import data from "../datas/bootesArticle.json";
import BootesArticle from "../items/BootesArticle";
import { useStore } from '../store';
import Logo from "../assets/bootesDevLogo.webp";

function BootesProject() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const isTabletteDisplay = useStore((state) => state.isTabletteDisplay);
  const isLowTabletteDisplay = useStore((state) => state.isLowTabletteDisplay);
  const isMobileDisplay = useStore((state) => state.isMobileDisplay);

  return (
    <>
      <AnchorTarget id="bootes" isFirst={true} />
      <article className="bootes_container importantComponent">
      { isMobileDisplay ? (
        <div className="bootes_icn">
          <img src={Logo} alt="Bannière avec le logo de Boötes Dev" className="bootes_icn-img"/>
        </div>
      ) : null }
        <h2 className="bootes_title title">_Boötes Project</h2>
        <div className="bootes_content">
          {isTabletteDisplay || isLowTabletteDisplay || isMobileDisplay ? (
            <BootesArticle
              title={data.title}
              description={data[selectedItemIndex].description}
              titleIndex="first-title"
              secondElement={false}
              tabletteDisplay={true}
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
              tabletteDisplay={false}
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
          {isTabletteDisplay || isLowTabletteDisplay || isMobileDisplay ? null : (
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