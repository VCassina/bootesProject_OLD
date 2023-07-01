import React from "react";
import ReactHtmlParser from "react-html-parser";
// import pralineByCatalysStuff from "../assets/pralineByCatalysStuff.webp";
import pralineByCatalysStuff from "../assets/pralineByCatalysStuff.webp";
function CreationsRightCarrousel({
  selectedElement,
  webSiteScreen,
  altScreen,
  title,
  description,
  siteUrl,
  gitHubUrl,
  animateOut,
}) {
  const classNames = `creations_content_carrousel_right ${
    animateOut ? "slideout-animation" : "slidein-animation"
  }`;

  return (
    <div className={classNames}>
      {selectedElement !== null && (
        <>
         {/* <h3 className="creations_content_carrousel_right-title">{title}</h3> */}
          <img
            src={webSiteScreen}
            alt={altScreen}
            className="creations_content_carrousel_right-img"
          />
            <div className="creations_content_carrousel_right-description">
              {ReactHtmlParser(description)}
            </div>
          {/* <div className="creations_content_carrousel_right-links">
             <a href={siteUrl}><span>Site</span></a>
             <a href={gitHubUrl}><span>GitHub</span></a>
          </div> */}
        </>
      )}

      {selectedElement == null && (
        <>
        <div className="creations_content_carrousel_right-void">
          <p className="creations_content_carrousel_right-void-title">Découvrez nos projets déjà réalisés !</p>
          <div className="creations_content_carrousel_right-void-txt">
          <p>
            Peut être un jour ferez-vous parti de cette liste.
          </p>
          <p>Ça m'émeut d'avance...</p>
          </div>
          <div>
            <img
              src={pralineByCatalysStuff}
              alt="Praline, notre chat, déssiné par CatalysStuff"
              className="creations_content_carrousel_right-void-img"
            ></img>
            <figcaption className="creations_content_carrousel_right-void-caption">Designed by CatalysStuff - Thank you !</figcaption>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CreationsRightCarrousel;
