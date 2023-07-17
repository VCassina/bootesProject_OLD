import { Markup } from "interweave";

function BootesArticle({
  title,
  description,
  titleIndex,
  secondElement,
  tabletteDisplay,
  data,
  selectedItemIndex,
  setSelectedItemIndex
}) {
  const sectionClasses = `bootes_content-article ${
    secondElement ? "second-element" : "first-element"
  }`;
  return (
    <article className={sectionClasses}>
      {tabletteDisplay && data ? (
        <div className="bootes_titleBundle">
          {data.map((item, index) => (
            <h2
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={index === selectedItemIndex ? "active bootes_content-article-title" : "unactive bootes_content-article-title"}
            >
              {item.titleShort}
            </h2>
          ))}
        </div>
      ) : (
        <h2 className={`bootes_content-article-title ${titleIndex}`}>{title}</h2>
      )}
      <div className="bootes_content-article-txt">
        <Markup content={description} />
      </div>
    </article>
  );
}

export default BootesArticle;
