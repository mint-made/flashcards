import React, { useState } from "react";
import Button from "./Button";

// Question>> text/decription/ answers>> text/correct

const Question = ({ question }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const selected = (answer) => {
    setQuestionAnswered(true);
    setSelectedAnswer(answer);
    console.log(answer);
  };

  const answers = question.answers.map((answer, index) => {
    return (
      <div
        key={index}
        onClick={() => selected(answer)}
        className="answers bg-grey"
      >
        {answer.text}
      </div>
    );
  });
  const answerFeedback = (
    <>
      <div
        className={`answers ${selectedAnswer.correct ? "bg-green" : "bg-red"}`}
      >
        {selectedAnswer.text}
      </div>
      <div className="question-description">
        <b>{selectedAnswer.correct ? "Correct! " : "Incorrect: "}</b>
        {question.description}
      </div>
    </>
  );

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      {questionAnswered ? answerFeedback : answers}
      {questionAnswered ? <Button text="next" /> : ""}
    </div>
  );
};

export default Question;
