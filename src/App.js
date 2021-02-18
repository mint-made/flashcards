import React from "react";
import Question from "./components/Question";
import "./style.css";

const topics = {
  react: {
    basics: [
      {
        text: "How do you import React?",
        description: "React is the default export of the 'react' package.",
        answers: [
          {
            text: "import react from 'react';",
            correct: false,
          },
          {
            text: "import {react} from 'react';",
            correct: false,
          },
          {
            text: "import React from 'react';",
            correct: true,
          },
        ],
      },
    ],
  },
};

const App = () => {
  return (
    <div className="container">
      <div>My flashcard app</div>
      <Question question={topics.react.basics[0]} />
    </div>
  );
};

export default App;
