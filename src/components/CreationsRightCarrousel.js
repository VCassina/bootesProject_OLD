import React from "react";

function CreationsRightCarrousel({
  selectedElement,
  webSiteScreen,
  altScreen,
  title,
  description,
  siteUrl,
  gitHubUrl,
  animateOut
}) {
  const classNames = `creations_content_carrousel_right ${animateOut ? "slideout-animation" : "slidein-animation"}`;

  return (
    <div className={classNames}>
         {selectedElement !== null && (
          <>
            <img src={webSiteScreen} alt={altScreen} className="creations_label-img" />
            <p>{title}</p>
            <p>{description}</p>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">Site Web</a>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </>
        )}
      </div>
    );
  }
  
  export default CreationsRightCarrousel;