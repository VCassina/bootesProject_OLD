import React, { useRef } from "react";
import AnchorTarget from "../items/AnchorTarget";
import titleAnimationHelper from "../helpers/titleAnimationHelper";
import AllBubbles from "./AllBubbles";
import ContentBar from "../items/ContentBar";
import pralinePicture from "../assets/pralineByCatalysStuff.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useStore } from '../store';
library.add(faDiscord, faLinkedin, faEnvelope);

function ContactUs() {
  const flowingRef = useRef(null);
  const isLowTabletteDisplay = useStore((state) => state.isLowTabletteDisplay);

  titleAnimationHelper("contact_content_title-flowingAnimation", flowingRef);
  
  return (
    <article className="contact_container darkComponent ocean">
      <AllBubbles />
      <AnchorTarget id="contact" />
      <div className="importantComponent">
        <div className="contact_content">
          <div className="contact_content_title">
            <h2 className="contact_content_title-item">
              _
              <span
                ref={flowingRef}
                className="contact_content_title-animation"
              >
                Nous contacter
              </span>
            </h2>
            <p>Les abysses du site, vous ne tomberez pas plus bas.</p>
          </div>
          <div className="contact_content_lower">
            <div className="contact_content_lower-main">
            
              {!isLowTabletteDisplay ? (<section className="contact_content_lower-main-links">
              <div>
                  <a href="mailto:BoötesDev@gmail.com">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
                    <span>BoötesDev@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/victor-cassina-032a5816b/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> <span>Victor
                    Cassina</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100006082485106">
                    <FontAwesomeIcon icon="fa-brands fa-discord" /> <span>Victor
                    Cassina</span>
                  </a>
                </div>
              </section>
              ) : null }
            {!isLowTabletteDisplay ? (<ContentBar side="vertical" />) : null }
              <section className="contact_content_lower-main-txt">
                <div className="contact_content_lower-main-txt-content">
                  <p className="contact_content_lower-main-txt-content-title">
                    <b>Ecrivez-nous !</b>
                  </p>
                  <span className="contact_content_lower-main-txt-content-subtitle">
                    <p>
                      Nous pouvons voir ensemble la formule la plus adaptée à
                      vos besoins, comment cela se passe pour l'hébergement, nos
                      disponibilités, etc.
                    </p>
                    <p>
                      Si vous voulez simplement savoir comment se porte Praline,
                      c'est possible aussi...
                    </p>
                  </span>
                </div>
                {isLowTabletteDisplay ? (<ContentBar side="horizontal" />) : null }
                {isLowTabletteDisplay ? (<section className="contact_content_lower-main-links">
              <div>
                  <a href="mailto:BoötesDev@gmail.com">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
                    <span>BoötesDev@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/victor-cassina-032a5816b/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> <span>Victor
                    Cassina</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100006082485106">
                    <FontAwesomeIcon icon="fa-brands fa-discord" /> <span>Victor
                    Cassina</span>
                  </a>
                </div>
              </section>
              ) : null }
              </section>
              <section className="contact_content_lower-mascot">
                <figure>
                  <img
                    src={pralinePicture}
                    alt="Praline designed by CatalysStuff"
                  />
                  <figcaption>
                    Designed by CatalysStuff - Thank you !
                  </figcaption>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ContactUs;