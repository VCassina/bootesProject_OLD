import React, {useState, useEffect} from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Markup } from "interweave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
library.add(faGlobe);

function CreationsBottomArticle({
  webSiteScreen,
  altScreen,
  description,
  animateOut,
  title,
  siteUrl,
  gitUrl,
}) 
{
  const [lowTabletteDisplay, setLowTabletteDisplay] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setLowTabletteDisplay(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const classNames = lowTabletteDisplay
  ? "creations_content_carrousel-unit"
  : `creations_content_carrousel ${
      animateOut ? "slideout-animation" : "slidein-animation"
    }`;




  return (
    <article className={classNames}>

        <img
          src={webSiteScreen}
          alt={altScreen}
          className="creations_content_carrousel-img"
        />
        <div className="creations_content_carrousel-txt">
          <div className="creations_content_carrousel-txt-title">
            <h3 className="creations_content_carrousel-txt-title-main">
              {title}
            </h3>
            <span className="creations_content_carrousel-txt-title-subtitle"></span>
          </div>
          <div className="creations_content_carrousel-txt-links">
          {gitUrl && (
            <a href={gitUrl} aria-label="Lien vers le projet GitHub">

              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {siteUrl && (
            <a href={siteUrl} aria-label="Lien vers le site en ligne">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
          </div>
          <div className="creations_content_carrousel-txt-description">
            <Markup content={description} />
          </div>
        </div>
    </article>
  );
}

export default CreationsBottomArticle;