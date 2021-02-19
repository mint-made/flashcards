import React, { useState } from "react";

// Question>> text/decription/ answers>> text/correct

const Questions = ({ topic }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);

  // Event callback when the user clicks one of the answers
  const answerClicked = (answer) => {
    setQuestionAnswered(true);
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
    }
  };

  // Event callback when the user wants to progress to the next question
  const nextQuestion = () => {
    console.log("nextQuestion");
    setProgress(progress + 1);
    setQuestionAnswered(false);
  };

  // Generates html for the answers the user can choose
  const answers = topic[progress].answers.map((answer, index) => {
    return (
      <div
        key={index}
        onClick={() => answerClicked(answer)}
        className="answers bg-grey"
      >
        {answer.text}
      </div>
    );
  });

  // Displays feedback to the user on their selected answer to the question
  const answerFeedback = (
    <React.Fragment>
      <div className="answers bg-blue">{selectedAnswer.text}</div>
      <div
        className={`text-box ${selectedAnswer.correct ? "bg-green" : "bg-red"}`}
      >
        <b>{selectedAnswer.correct ? "Correct! " : "Incorrect: "}</b>
        {topic[0].description}
      </div>
    </React.Fragment>
  );

  return (
    <div className="question-container">
      {progress + 1}/{topic.length} <b>{score}</b>
      <h2>{topic[progress].text}</h2>
      {questionAnswered ? answerFeedback : answers}
      {questionAnswered ? (
        <div onClick={() => nextQuestion()} className="btn">
          Next Question
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Questions;
