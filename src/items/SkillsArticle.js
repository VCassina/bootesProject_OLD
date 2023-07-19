import ContentBar from "../items/ContentBar";

function SkillsArticle({ img, alt, title, description, skills }) {
  return (
    <article>
      <div className="skills_content-titleGroup">
        <img src={img} alt={alt} className="skills_content-img"></img>
        <h3 className="skills_subTitle">{title}</h3>
      </div>
      <span className="skills_content-description">{description}</span>
      <ContentBar side="horizontal" />
      <div className="skills_content-articleListing">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

export default SkillsArticle;
