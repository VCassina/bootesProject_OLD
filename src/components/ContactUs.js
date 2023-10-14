import React, { useRef } from "react";
import AnchorTarget from "../items/AnchorTarget";
import titleAnimationHelper from "../helpers/titleAnimationHelper";
import AllBubbles from "./AllBubbles";
import ContentBar from "../items/ContentBar";
import ContactLinks from "../items/ContactLinks";
import pralinePicture from "../assets/pralineByCatalysStuff.webp";
import lowDesktopMobilePralinePicture from "../assets/lowDesktopMobilePralinePicture.webp";
import tablettePralinePicture from "../assets/tablettePralinePicture.webp";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useStore } from "../store";
library.add(faFacebook, faLinkedin, faEnvelope);

function ContactUs() {
  const flowingRef = useRef(null);
  const isLowTabletteDisplay = useStore((state) => state.isLowTabletteDisplay);
  const isMobileDisplay = useStore((state) => state.isMobileDisplay);

  titleAnimationHelper("contact_content_title-flowingAnimation", flowingRef);

  return (
    <section className="contact_container darkComponent ocean">
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
              {!isLowTabletteDisplay && !isMobileDisplay ? (
                <article className="contact_content_lower-main-links">
                  <div>
                    <ContactLinks
                      href="mailto:victorCassina@gmail.com"
                      aria="Lien vers mon Gmail"
                      icon="fa-solid fa-envelope"
                      span="Gmail"
                    />
                    <ContactLinks
                      href="https://www.linkedin.com/in/victor-cassina-032a5816b/"
                      aria="Lien vers mon LinkedIn"
                      icon="fa-brands fa-linkedin"
                      span="LinkedIn"
                    />
                    <ContactLinks
                      href="https://www.facebook.com/profile.php?id=100006082485106"
                      aria="Lien vers mon Facebook"
                      icon="fa-brands fa-facebook"
                      span="Facebook"
                    />
                  </div>
                </article>
              ) : null}
              {!isLowTabletteDisplay && !isMobileDisplay ? (
                <ContentBar side="vertical" />
              ) : null}
              <article className="contact_content_lower-main-txt">
                <div className="contact_content_lower-main-txt-content">
                  <p className="contact_content_lower-main-txt-content-title">
                    <b>Contactez-nous !</b>
                  </p>
                  <span className="contact_content_lower-main-txt-content-subtitle">
                    <p>
                      Vous avez un projet où nous pouvons être utile à sa réalisation ? <b>Discutons ensemble !</b>
                      { } Notre porte est grande ouverte alors cliquez sur un des liens, celui qui vous plait le plus.
                    </p>
                    <p>
                      En attendant que je vous lise et réponde, je vous dit : "A très bientôt" !
                    </p>
                  </span>
                </div>
                {isLowTabletteDisplay || isMobileDisplay ? (
                  <ContentBar side="horizontal" />
                ) : null}
                {isLowTabletteDisplay || isMobileDisplay ? (
                  <article className="contact_content_lower-main-links">
                    <div>
                      <ContactLinks
                        href="mailto:victorCassina@gmail.com"
                        aria=""
                        icon="fa-solid fa-envelope"
                        span=""
                      />
                      <ContactLinks
                        href="https://www.linkedin.com/in/victor-cassina-032a5816b/"
                        aria="Lien vers mon LinkedIn"
                        icon="fa-brands fa-linkedin"
                        span=""
                      />
                      <ContactLinks
                        href="https://www.facebook.com/profile.php?id=100006082485106"
                        aria="Lien vers mon Facebook"
                        icon="fa-brands fa-facebook"
                        span=""
                      />
                    </div>
                  </article>
                ) : null}
              </article>
              <article className="contact_content_lower-mascot">
                <figure>
                  <img
                    src={pralinePicture}
                    alt="Praline, la mascotte adorée, designed by CatalysStuff"
                    srcSet={`${pralinePicture} 312w,
  ${lowDesktopMobilePralinePicture} 224w,
  ${tablettePralinePicture} 295w,
  ${lowDesktopMobilePralinePicture} 224w`}
                    sizes="(min-width: 1367px) 312px,
  (min-width: 1280px) 224px,
  (min-width: 768px) 295px,
  224px"
                    width="312"
                    height="312"
                  />
                  <figcaption>
                    Designed by CatalysStuff - Thank you !
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;