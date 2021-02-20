import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

// Question>> text/decription/ answers>> text/correct

const Questions = ({ lesson, lessonCompleteCallback }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);

  //console.log("questions component", lesson.questions);
  if (lesson === undefined) {
    return (
      <div>
        <b>questions is undefined</b>
      </div>
    );
  }

  // Event callback when the user clicks one of the answers
  const answerClicked = (answer) => {
    setQuestionAnswered(true);
    setSelectedAnswer(answer);
    answer.correct
      ? setResults((results) => [...results, 1])
      : setResults((results) => [...results, 0]);
  };
  // Event callback when the user wants to progress to the next question
  const nextQuestion = () => {
    console.log(progress, lesson.questions.length);
    if (progress < lesson.questions.length - 1) {
      setProgress(progress + 1);
      setQuestionAnswered(false);
    } else {
      setProgress(0);
      lessonCompleteCallback();
    }
  };

  // Generates html for the answers the user can choose
  const answers = lesson.questions[progress].answers.map((answer, index) => {
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
        {lesson.questions[0].description}
      </div>
    </React.Fragment>
  );

  return (
    <div className="center-container">
      <h2 className="mt-0">
        {lesson.topic}: <i>{lesson.name}</i>
      </h2>
      <ProgressBar
        progress={progress + 1}
        duration={lesson.questions.length}
        results={results}
      />
      <h2 className="mt-0">{lesson.questions[progress].text}</h2>
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
