function CreationsUpperArticle({ index, handleElementChange }) {
;
      return (
        <>
          <input
            type="radio"
            id={`element${index + 1}`}
            name="elements"
            value={`Element${index + 1}`}
            // checked={selectedElement === `Element${index + 1}`}
            onClick={() => handleElementChange(index + 1)}
          />
          <label htmlFor={`element${index + 1}`} className="creations_content_upper-label">
            <span>{index+1}</span>
          </label>
        </>
      );
    }

  
  export default CreationsUpperArticle;
  