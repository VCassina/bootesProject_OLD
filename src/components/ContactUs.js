import React, { useRef } from "react";
import AnchorTarget from "../items/AnchorTarget";
import titleAnimationHelper from "../helpers/titleAnimationHelper";


function ContactUs() {
    const flowingRef = useRef(null);

    titleAnimationHelper(
        "contact_content_title-flowingAnimation",
        flowingRef
      );

  return (
    <section className="contact_container darkComponent ocean">
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>
      <div className="bubble bubble--13"></div>
      <div className="bubble bubble--14"></div>
      <div className="bubble bubble--15"></div>
      <AnchorTarget id="contact" />
      <div className="importantComponent">
        <div className="contact_content">
          <div className="contact_content_title">
          <h2 className="contact_content_title-item">_<span ref={flowingRef} className="contact_content_title-animation">Nous contacter</span></h2>
            <p>Les abysses du site, vous ne tomberez pas plus bas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
