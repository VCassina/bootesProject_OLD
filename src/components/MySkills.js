import React from "react";
import SkillsArticle from "../items/SkillsArticle";
import data from "../datas/skillsArticle.json";
import AnchorTarget from "../items/AnchorTarget";
import frontEndIcon from "../assets/frontEndByMacrovector.webp";
import backEndIcon from "../assets/backEndByMacrovector.webp";
import seoIcon from "../assets/seoByMacrovector.webp";
import { useStore } from "../store";

function MySkills() {
  const imgSrc = [frontEndIcon, backEndIcon, seoIcon];
  const isLowTabletteDisplay = useStore((state) => state.isLowTabletteDisplay);
  const isMobileDisplay = useStore((state) => state.isMobileDisplay);

  return (
    <section className="skills_container darkComponent">
      <AnchorTarget id="skills" />
      <div className="importantComponent">
        <div className="skills_content">
          <h2 className="title-skills">
            <span>_</span>
            <span>Nos competences</span>
          </h2>
          {isLowTabletteDisplay || isMobileDisplay ? (
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
    </section>
  );
}

export default MySkills;
