import React from "react";
import meByCatalysStuff from "../assets/meByCatalysStuff.webp";
import AnchorTarget from "../items/AnchorTarget";
import data from "../datas/bootesArticle.json";
import BootesArticle from "../items/BootesArticle";

function BootesProject() {
  return (
    <>
    <AnchorTarget id="bootes" isFirst={true} />
    <article className="bootes_container importantComponent"> 
      <h2 className="bootes_title title" >_Boötes Project</h2>
      <div className="bootes_content">
      <BootesArticle title={data[0].title} description={data[0].description} titleIndex="first-title" secondElement={false}/>
        <figure>
          <img
            className="bootes_content-picture"
            src={meByCatalysStuff}
            alt="Représentation de Victor faites par un artiste nommé(e) CatalysStuff"
          />
          <figcaption>Designed by CatalysStuff - Thank you !</figcaption>
        </figure>
        <BootesArticle title={data[1].title} description={data[1].description} titleIndex="second-title" secondElement={true} />
      </div>
    </article>
    </>
  );
}

export default BootesProject;