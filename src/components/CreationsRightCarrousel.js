import React from "react";
import ReactHtmlParser from "react-html-parser";
// import pralineByCatalysStuff from "../assets/pralineByCatalysStuff.webp";
import leftArrow from "../assets/leftArrow.webp";
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
          <img
            src={webSiteScreen}
            alt={altScreen}
            className="creations_content_carrousel_right-img"
          />
          <div className="creations_content_carrousel_right-txt">
            <p className="creations_content_carrousel_right-title">{title}</p>
            <div className="creations_content_carrousel_right-description">
              {ReactHtmlParser(description)}
            </div>
          </div>
          <div className="creations_content_carrousel_right-links">
            {/* <span><b>GitHub</b> : </span><a href={siteUrl}>{siteUrl}</a>
            <span> </span>
            <span><b>Web : </b></span> <a href={gitHubUrl}>{gitHubUrl}</a> */}
          </div>
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
              src={leftArrow}
              alt="Praline, notre chat, déssiné par CatalysStuff"
              className="creations_content_carrousel_right-void-img"
            ></img>
            {/* <figcaption className="creations_content_carrousel_right-void-caption">Designed by CatalysStuff - Thank you !</figcaption> */}
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CreationsRightCarrousel;
