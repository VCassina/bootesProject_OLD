function SkillsArticle({img, alt, title, description, skills}) {
    return (
    <article>
<div className="services_content-titleGroup">
  <img
    src={img}
    alt={alt}
    className="services_content-img"
  ></img>
  <h3>{title}</h3>
</div>
<span className="services_content-description">{description}</span>
<div className="services_content-bar"></div>
<div className="services_content-articleListing">
    {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
</article>
  );
}

export default SkillsArticle;
