import React from "react";
import tick from "../images/tick.svg";
import cross from "../images/cross.svg";

const Progress = ({ progress, duration, results }) => {
  // Calculates the percentage width the progress bar should display
  const percentProgress = () => {
    const percentNum = (progress / duration) * 100;
    return percentNum.toString() + "%";
  };
  // Dispalys ticks or crosses if the user gets answers right or wrong
  const displayResults = results.map((result, index) => {
    return result ? (
      <img className="icon" src={tick} alt="tick" key={`icon-${index}`} />
    ) : (
      <img className="icon" src={cross} alt="cross" key={`icon-${index}`} />
    );
  });

  // Modifies the border radius if progress bar is complete
  const borderRadius = () => {
    console.log(progress, duration);
    if (progress !== duration) {
      return "6px 0px 0px 6px";
    } else {
      return "6px 6px 6px 6px";
    }
  };

  return (
    <React.Fragment>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: percentProgress(), borderRadius: borderRadius() }}
        ></div>
      </div>
      <div className="results-display">{displayResults}</div>
    </React.Fragment>
  );
};

export default Progress;
