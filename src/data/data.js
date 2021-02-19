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
      {
        text: "How do you access the 'class' element of an HTML Element?",
        description:
          "className is the property that corresponds to the class attribute you set in the HTML.",
        answers: [
          {
            text: "element.className",
            correct: true,
          },
          {
            text: "element.class",
            correct: false,
          },
          {
            text: "element.class()",
            correct: false,
          },
        ],
      },
      {
        text: "Create an anchor element in React with the text 'Contact us'.",
        description: "",
        answers: [
          {
            text: "React.createElement('a', {}, 'Contact us');",
            correct: true,
          },
          {
            text: "React.createElement('anchor', {}, 'Contact us');",
            correct: false,
          },
          {
            text: "React.createElement('a', 'Contact us');",
            correct: false,
          },
        ],
      },
      {
        text: "Complete the code such that the link has the class 'primary'.",
        codeSnippet: `
        import React from "React";
        const link = React.createElement("a", __________ , "Contact us");
        `,
        description: "",
        answers: [
          {
            text: "{className: 'primary}",
            correct: true,
          },
          {
            text: "'primary'",
            correct: false,
          },
          {
            text: "{class: 'primary}",
            correct: false,
          },
        ],
      },
      {
        text: "How do you get the React version?",
        description: "version is a property not a function.",
        answers: [
          {
            text: "React.version()",
            correct: false,
          },
          {
            text: "React.version",
            correct: true,
          },
          {
            text: "version",
            correct: false,
          },
        ],
      },
    ],
  },
};

export default topics;

// Template

// {
//   text: "",
//   description: "",
//   answers: [
//     {
//       text: "",
//       correct: true,
//     },
//     {
//       text: "",
//       correct: false,
//     },
//     {
//       text: "",
//       correct: false,
//     },
//   ],
// },
