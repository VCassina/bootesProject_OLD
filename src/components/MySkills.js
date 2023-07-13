import React, { useState, useEffect } from "react";
import SkillsArticle from "../items/SkillsArticle";
import data from "../datas/skillsArticle.json";
import AnchorTarget from "../items/AnchorTarget";
import frontEndIcon from "../assets/frontEndByMacrovector.webp";
import backEndIcon from "../assets/backEndByMacrovector.webp";
import seoIcon from "../assets/seoByMacrovector.webp";

function MySkills() {
  const imgSrc = [frontEndIcon, backEndIcon, seoIcon];
  const [tabletteDisplay, setTabletteDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTabletteDisplay(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="skills_container darkComponent">
      <AnchorTarget id="skills" />
      <div className="importantComponent">
        <div className="skills_content">
          <h2 className="title-skills">
            <span>_</span>
            <span>Nos competences</span>
          </h2>
          {tabletteDisplay ? (
    <div className="skills_carousel_wrapper">
      <div className="skills_carousel_content">
      <div className="skills_content_low">
    {data.map((article, index) => (
      <SkillsArticle
        key={index}
        alt={article.alt}
        img={imgSrc[index]}
        title={article.title}
        description={article.description}
        skills={article.skills}
      />
    ))}
  </div>
      </div>
    </div>

) : (
  <div className="skills_content_low">
    {data.map((article, index) => (
      <SkillsArticle
        key={index}
        alt={article.alt}
        img={imgSrc[index]}
        title={article.title}
        description={article.description}
        skills={article.skills}
      />
    ))}
  </div>
)}

          <figcaption className="skills_content-credit">
            Icones designed by Macrovector - Thank you !
          </figcaption>
        </div>
      </div>
    </article>
  );
}

export default MySkills;
