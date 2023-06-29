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
    <article className="skills_container darkComponent" >
      <AnchorTarget id="skills"/>
      <div className="importantComponent">
        <div className="title-skills"><h2><span>_</span><span>Nos competences</span></h2></div>
        <section className="skills_content">
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
        </section>
        <figcaption className="skills_content-credit">Designed by Macrovector - Thank you !</figcaption>
      </div>
    </article>
  );
}

export default MySkills;
