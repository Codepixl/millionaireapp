import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In which country is the world's largest coral reef located?",
      answers: [
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Indonesia",
          correct: false,
        },
        {
          text: "New Zealand",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "In Greek mythology, who was the goddess of wisdom and warfare?",
      answers: [
        {
          text: "Athena",
          correct: true,
        },
        {
          text: "Aphrodite",
          correct: false,
        },
        {
          text: "Hera",
          correct: false,
        },
        {
          text: "Artemis",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the symbol for gold?",
      answers: [
        {
          text: "Go",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Na",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which author wrote the novel Pride and Prejudice ?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Jack London",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Leo Tolstoy",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the value of 'x' in the equation 3x + 7 = 16?",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
        {
          text: "9",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Uranus",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the name of the strait separating the United Kingdom and France?",
      answers: [
        {
          text: "Macellan",
          correct: false,
        },
        {
          text: "Dover",
          correct: true,
        },
        {
          text: "Bering",
          correct: false,
        },
        {
          text: "Cook",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who was the 40th President of the United States (POTUS)?",
      answers: [
        {
          text: "Ronald Reagan",
          correct: true,
        },
        {
          text: "John F. Kennedy",
          correct: false,
        },
        {
          text: "George H.W. Bush",
          correct: false,
        },
        {
          text: "Richard Nixon",
          correct: false,
        },
      ],
    },
    
  ];
  const moneyPyramid = [
    {id:1, amount: "$ 100"},
    {id:2, amount: "$ 200"},
    {id:3, amount: "$ 300"},
    {id:4, amount: "$ 500"},
    {id:5, amount: "$ 1.000"},
    {id:6, amount: "$ 2.000"},
    {id:7, amount: "$ 4.000"},
    {id:8, amount: "$ 8.000"},
    {id:9, amount: "$ 16.000"},
    {id:10, amount: "$ 32.000"},
    {id:11, amount: "$ 64.000"},
    {id:12, amount: "$ 125.000"},
    {id:13, amount: "$ 250.000"},
    {id:14, amount: "$ 500.000"},
    {id:15, amount: "$ 1.000.000"},
  ].reverse();

  return (
    <div className="app">
    <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom"><Trivia data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
      </div>
    </div>
    <div className="pyramid">
      <ul className="moneyList">
      {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
      </li>
      ))}
      </ul>
      </div>
    </div>
  );
}

export default App;