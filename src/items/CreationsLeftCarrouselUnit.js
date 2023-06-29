function LeftCarrouselUnit({ index, handleElementChange, selectedElement, title, iconeClass }) {

  return (
    <>
    <input
      type="radio"
      id={`element${index + 1}`}
      name="elements"
      value={`Element${index + 1}`}
      checked={selectedElement === `Element${index + 1}`}
      onClick={() => handleElementChange(index + 1)}
    />
    <label htmlFor={`element${index + 1}`} className="creations_content_carrousel-label">
    <i className={`creations_content_carrousel-label-img ${iconeClass}`}></i>
      <span>{title}</span>
    </label>
  </>
  );
}

export default LeftCarrouselUnit;
