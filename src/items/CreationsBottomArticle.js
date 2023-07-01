import React from "react";
import ReactHtmlParser from "react-html-parser";
// import pralineByCatalysStuff from "../assets/pralineByCatalysStuff.webp";
function CreationsCarrousel({
  selectedElement,
  webSiteScreen,
  altScreen,
  description,
  animateOut,
  title,
}) {
  const classNames = `creations_content_carrousel ${
    animateOut ? "slideout-animation" : "slidein-animation"
  }`;

  return (
    <div className={classNames}>
        <>
          <img
            src={webSiteScreen}
            alt={altScreen}
            className="creations_content_carrousel-img"
          />
          <div className="creations_content_carrousel-txt">
            <div>
            <h3 className="creations_content_carrousel-txt-title">{title}</h3>
            <span className="creations_content_carrousel-txt-subtitle"></span>
            </div>
            <div className="creations_content_carrousel-txt-description">
              {ReactHtmlParser(description)}
            </div>
          </div>
        </>
      
    </div>
  );
}

export default CreationsCarrousel;
