import ReactHtmlParser from "react-html-parser";

function BootesArticle({ title, description, titleIndex }) {
  return (
    <section className="bootes_content-article second-element">
      <h3 className={`bootes_content-article-title ${titleIndex}`}>{title}</h3>
      <div className="bootes_content-article-txt">
        {ReactHtmlParser(description)}
      </div>
    </section>
  );
}

export default BootesArticle;
