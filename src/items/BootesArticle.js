import ReactHtmlParser from "react-html-parser";

function BootesArticle({ title, description, titleIndex, secondElement }) {
  const sectionClasses = `bootes_content-article ${secondElement ? "second-element" : "first-element"}`;

  return (
    <section className={sectionClasses}>
      <h3 className={`bootes_content-article-title ${titleIndex}`}>{title}</h3>
      <div className="bootes_content-article-txt">
        {ReactHtmlParser(description)}
      </div>
    </section>
  );
}

export default BootesArticle;
