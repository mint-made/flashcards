import React from "react";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import topics from "./data/data";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div>My flashcard app</div>
      <Questions topic={topics.react.basics} />
    </div>
  );
};

export default App;
