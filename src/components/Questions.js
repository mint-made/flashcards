import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Congrats from "./Congrats";

// Question>> text/decription/ answers>> text/correct

const Questions = ({ lesson, lessonCompleteCallback }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [lessonComplete, setLessonComplete] = useState(false);
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
    if (progress < lesson.questions.length - 1) {
      setProgress(progress + 1);
      setQuestionAnswered(false);
    } else {
      setLessonComplete(true);
    }
  };

  // Displays answers or feedback to a users answer depending on the boolean {questionAnswered}

  const answers = () => {
    if (!questionAnswered) {
      // Possible answers to the question
      return lesson.questions[progress].answers.map((answer, index) => {
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
    } else {
      // answer feedback after the use have chosen an answer
      return (
        <React.Fragment>
          <div className="answers bg-blue">{selectedAnswer.text}</div>
          <div
            className={`text-box ${
              selectedAnswer.correct ? "bg-green" : "bg-red"
            }`}
          >
            <b>{selectedAnswer.correct ? "Correct! " : "Incorrect: "}</b>
            {lesson.questions[0].description}
          </div>
        </React.Fragment>
      );
    }
  };

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

      {lessonComplete ? (
        <React.Fragment>
          <Congrats results={results} />
          <div onClick={() => lessonCompleteCallback()} className="btn">
            Choose Next Lesson
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2 className="mt-0">{lesson.questions[progress].text}</h2>
          {answers()}
        </React.Fragment>
      )}

      {questionAnswered && !lessonComplete ? (
        <div onClick={() => nextQuestion()} className="btn">
          Next Question
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

//{questionAnswered ? answerFeedback : answers}

export default Questions;
