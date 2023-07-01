function CreationsUpperArticle({ index, handleElementChange, selectedElement }) {
  const isChecked = index === selectedElement;
      return (
        <>
          <input
            type="radio"
            id={`element${index + 1}`}
            name="elements"
            value={`Element${index + 1}`}
            checked={index === selectedElement}
            onClick={() => handleElementChange(index + 1)}
          />
                <label
        htmlFor={`element${index + 1}`}
        className={`creations_content_upper-label ${isChecked ? "checked" : ""}`}
      >
            <span>{index+1}</span>
          </label>
        </>
      );
    }

  
  export default CreationsUpperArticle;
  