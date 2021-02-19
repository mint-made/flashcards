import React, { useState } from "react";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import TopicsMenu from "./components/TopicsMenu";
import topics from "./data/data";
import "./style.css";

const App = () => {
  const [flashcardsActive, setFlashcardsActive] = useState(false);

  const topicSelectedCallback = () => {
    console.log("topic selected");
  };

  return (
    <div className="container">
      <Navbar />
      {flashcardsActive ? (
        <Questions topic={topics.react[0].questions} />
      ) : (
        <TopicsMenu
          topicSelectedCallback={topicSelectedCallback}
          topics={topics}
        />
      )}
    </div>
  );
};

export default App;
