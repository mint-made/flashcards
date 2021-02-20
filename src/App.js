import React, { useState } from "react";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import TopicsMenu from "./components/TopicsMenu";
import topics from "./data/data";
import "./style.css";

const App = () => {
  const [flashcardsActive, setFlashcardsActive] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(topics[0].lessons[0]);

  // A callback for when the user selects a lesson
  const lessonSelectedCallback = ({ topicName, lessonName }) => {
    const selectedTopic = topics.find((topic) => topic.name === topicName);
    const selectedLesson = selectedTopic.lessons.find(
      (lesson) => lesson.name === lessonName
    );
    selectedLesson.topic = topicName;
    setCurrentLesson(selectedLesson);
    setFlashcardsActive(true);
  };
  // A callback for when the user completes the lesson
  const lessonCompleteCallback = () => {
    setFlashcardsActive(false);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        {flashcardsActive ? (
          <Questions
            lesson={currentLesson}
            lessonCompleteCallback={lessonCompleteCallback}
          />
        ) : (
          <TopicsMenu
            lessonSelectedCallback={lessonSelectedCallback}
            topics={topics}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default App;
