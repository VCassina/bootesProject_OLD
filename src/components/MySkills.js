import React from "react";
import SkillsArticle from "../components/SkillsArticle";
import data from "../datas/skillsArticle.json";
import AnchorTarget from "../items/AnchorTarget";
import frontEndIcon from "../assets/frontEndByMacrovector.webp"
import backEndIcon from "../assets/backEndByMacrovector.webp"
import seoIcon from "../assets/seoByMacrovector.webp"

function MySkills() {
  const imgSrc = [frontEndIcon, backEndIcon, seoIcon];

  return (
    <section className="services_container" >
      <AnchorTarget id="skills"/>
      <div className="importantComponent">
        <div className="title-skills"><h2><span>_</span><span>Nos competences</span></h2></div>
        <div className="services_content">
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
        <figcaption>Drawn by Macrovector - Thank you !</figcaption>
      </div>
    </section>
  );
}

export default MySkills;
