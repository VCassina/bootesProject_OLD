import React, { useState } from "react";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";
import lowDesktopMeByCatalysStuff from "../assets/lowDesktopMeByCatalysStuff.webp";
import mobileMeByCatalsStuff from "../assets/mobileMeByCatalsStuff.webp";
import AnchorTarget from "../items/AnchorTarget";
import data from "../datas/bootesArticle.json";
import BootesArticle from "../items/BootesArticle";
import { useStore } from "../store";
import Logo from "../assets/bootesDevLogo.webp";

function BootesProject() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const isTabletteDisplay = useStore((state) => state.isTabletteDisplay);
  const isLowTabletteDisplay = useStore((state) => state.isLowTabletteDisplay);
  const isMobileDisplay = useStore((state) => state.isMobileDisplay);

  return (
    <>
      <AnchorTarget id="bootes" isFirst={true} />
      <section className="bootes_container importantComponent">
        {isMobileDisplay ? (
          <div className="bootes_icn">
            <img
              src={Logo}
              alt="Bannière avec le logo de Boötes Dev"
              className="bootes_icn-img"
              width="356"
              height="120"
            />
          </div>
        ) : null}
        <h1 className="bootes_title title">
          _Boötes Project
          <p>Commande accessible de sites associatifs modernes</p>
        </h1>
        {isMobileDisplay ? (
          <h1 className="bootes_title-mobile title">
            Commandez votre site associatif moderne
          </h1>
        ) : null}
        <div className="bootes_content">
          {isTabletteDisplay || isLowTabletteDisplay || isMobileDisplay ? (
            <BootesArticle
              title={data.title}
              description={data[selectedItemIndex].description}
              titleIndex="first-title"
              secondElement={false}
              dynDisplay={true}
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
              dynDisplay={false}
            />
          )}
          <figure>
            <img
              className="bootes_content-picture"
              src={meByCatalysStuff}
              alt="Représentation de Victor, le développeur, faite par un⸱e artiste nommé⸱e CatalysStuff"
              srcSet={`${mobileMeByCatalsStuff} 200w,
  ${lowDesktopMeByCatalysStuff} 300w,
  ${meByCatalysStuff} 380w`}
              sizes="(max-width: 767px) 200px, (max-width: 1366px) 300px, 380px"
              width="380"
              height="435"
            />
            <figcaption>Designed by CatalysStuff - Thank you !</figcaption>
          </figure>
          {isTabletteDisplay ||
          isLowTabletteDisplay ||
          isMobileDisplay ? null : (
            <BootesArticle
              title={data[1].title}
              description={data[1].description}
              titleIndex="second-title"
              secondElement={true}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default BootesProject;