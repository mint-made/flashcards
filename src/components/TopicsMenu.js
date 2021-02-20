import React from "react";

const TopicsMenu = ({ topics, lessonSelectedCallback }) => {
  // Generates html elements to display all of the topics and lessons
  const list = topics.map((topic) => {
    const lessons = topic.lessons.map((lesson) => {
      return (
        <div
          key={`${topic.name}-${lesson.name}`}
          className="btn btn-lessons"
          onClick={() =>
            lessonSelectedCallback({
              topicName: topic.name,
              lessonName: lesson.name,
            })
          }
        >
          {lesson.name}
        </div>
      );
    });
    return (
      <div key={topic.name}>
        <div className="topic-name font-bold bg-blue">
          <h3 className="m-0">{topic.name}</h3>
        </div>
        <div className="topic-lessons-container bg-grey">{lessons}</div>
      </div>
    );
  });

  return (
    <div className="center-container">
      <h2 className="mt-0">
        Welcome to Flashcards App, where you can refresh your knowledge of
        topics. Get started by selecting a lesson below!
      </h2>
      {list}
    </div>
  );
};

export default TopicsMenu;
