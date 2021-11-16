import "./App.css";
import React, { useState } from "react";
import { formatOptions } from "./formatOptions";

function App() {
  const [textInput, setTextInput] = useState("Here is some example text.");
  const [formatOptionIndex, setFormatOptionIndex] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form aria-label="form">
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={(e) => setTextInput(e.target.value)}
            value={textInput}
          />
        </div>
        {formatOptions.map(({ name }, index) => (
          <div className="form-control form-control__radio" key={name}>
            <input
              type="radio"
              name="conversion"
              id={`conversion-${index}`}
              value={name}
              checked={index === formatOptionIndex}
              onChange={() => setFormatOptionIndex(index)}
            />
            <label htmlFor={`conversion-${index}`}>{name}</label>
          </div>
        ))}
        <div className="result-wrapper form-control form-control__text">
          <label htmlFor="result">Converted text:</label>
          <output id="result">
            {formatOptions[formatOptionIndex].method(textInput)}
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
