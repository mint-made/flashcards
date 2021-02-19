import React from "react";

const TopicsMenu = ({ topics }) => {
  const list = topics.map((topic) => {
    const lessons = topic.lessons.map((lesson) => {
      return (
        <div key={`${topic.name}-${lesson.name}`} className="btn btn-lessons">
          {lesson.name}
        </div>
      );
    });
    return (
      <div key={topic.name}>
        <div className="topic-name font-bold bg-blue">{topic.name}</div>
        <div className="topic-lessons-container bg-grey">{lessons}</div>
      </div>
    );
  });
  console.log(list);
  return (
    <div class="topic-menu-container">
      <h2 class="header">
        Welcome to Flashcards App, where you can refresh your knowledge of
        topics. To get started select a lesson below!
      </h2>
      {list}
    </div>
  );
};

export default TopicsMenu;
