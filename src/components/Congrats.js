import React from "react";

const Congrats = ({ results }) => {
  let resultsScore = 0;
  results.forEach((result) => (resultsScore += result));

  return (
    <div className="text-box bg-green">
      <h2 className="m-0">Flashcards complete!</h2>
      <h2 className="m-0">
        You got {resultsScore} out of {results.length} correct
      </h2>
    </div>
  );
};

export default Congrats;
