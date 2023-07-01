import React from "react";
import ReactHtmlParser from "react-html-parser";
import pralineByCatalysStuff from "../assets/pralineByCatalysStuff.webp";
function CreationsbottomCarrousel({
  selectedElement,
  webSiteScreen,
  altScreen,
  description,
  animateOut,
}) {
  const classNames = `creations_content_carrousel_bottom ${
    animateOut ? "slideout-animation" : "slidein-animation"
  }`;

  return (
    <div className={classNames}>
      {selectedElement !== null && (
        <>
         {/* <h3 className="creations_content_carrousel_bottom-title">{title}</h3> */}
          <img
            src={webSiteScreen}
            alt={altScreen}
            className="creations_content_carrousel_bottom-img"
          />
            <div className="creations_content_carrousel_bottom-description">
              {ReactHtmlParser(description)}
            </div>
        </>
      )}

      {selectedElement == null && (
        <>
        <div className="creations_content_carrousel_bottom-void">
          <p className="creations_content_carrousel_bottom-void-title">Découvrez nos projets déjà réalisés !</p>
          <div className="creations_content_carrousel_bottom-void-txt">
          <p>
            Peut être un jour ferez-vous parti de cette liste.
          </p>
          <p>Ça m'émeut d'avance...</p>
          </div>
          <div>
            <img
              src={pralineByCatalysStuff}
              alt="Praline, notre chat, déssiné par CatalysStuff"
              className="creations_content_carrousel_bottom-void-img"
            ></img>
            <figcaption className="creations_content_carrousel_bottom-void-caption">Designed by CatalysStuff - Thank you !</figcaption>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CreationsbottomCarrousel;
