/* Variables */
var startBtn = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var highScoreBtn = document.querySelector("#highscore-button");
var question = document.querySelector("#question");
var assessQuestions = document.querySelector("#assess-questions");
var multipleChoice = document.querySelector("#multiple-choice");
var answer = document.querySelector("#answer");
var choiceA = document.querySelector("#multiple-choice-A");
var choiceB = document.querySelector("#multiple-choice-B");
var choiceC = document.querySelector("#multiple-choice-C");
var choiceD = document.querySelector("#multiple-choice-D");
var checkAnswerIncorrect = document.querySelector(".check-answer-incorrect");
var checkAnswerCorrect = document.querySelector("#check-answer-correct");
var scoreBtn = document.querySelector("#score-button");
var inputScore = document.querySelector("#input-score");
var initialsBox = document.querySelector("#initials-box");
var highScore = document.querySelector("#high-score");
var backBtn = document.querySelector("#back-button");
var submitBtn = document.querySelector("#submit-button");
var clearBtn = document.querySelector("#clear-button");
var start = document.querySelector(".start");
/* Fin Variables*/
/* Number Variables */
var timeLeft = 61;
var i = 0;
var s = 0;
var selection = 0;
var score = 0;
var scoreList = [];
var setTimeInterval;
loadScore();

/* Questions Array */
var questionArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    selection: ["<javascript>", "<scripting>", "<script>", "<js>"],
    answer: "<script>",
  },
  {
    question:"Commonly used data types DO NOT include:",
    selection:["strings", "booleans", "alerts", "numbers"], 
    answer: "Alerts",
  },
  {
    question: "Which built-in method sorts the elements of an array?",
    selection: ["order()", "changeOrder(order)", "sort()", "None of the Above"],
    answer: "sort()",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in JavaScript?",
    selection: ["var", "let", "Both of the Above", "None of the Above"],
    answer: "Both of the Above",
  },
  {
    question: "Which method returns the character at the specified index?",
    selection: [
      "charAt()",
      "getCharAt()",
      "characterAt()",
      "None of the Above",
    ],
    answer: "charAt()",
  },
  {
    question: "Which of the following is not a mouse event?",
    selection: ["onmousemove", "onmouseover", "onclick", "onmousescroller"],
    answer: "onmousescroller",
  },
  {
    question: "The 'function' and 'var' are known as:",
    selection: [
      "Keywords",
      "Declaration Statements",
      "Data Types",
      "Prototypes",
    ],
    answer: "Declaration Statements",
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    selection: [
      "The Local Element",
      "Global Variable",
      "Both of the Above",
      "None of the Above",
    ],
    answer: "The Local Element",
  },
  {
    question:
      "Choose the correct snipped from the following to check if the variable 'a' is not equal to 'NULL':",
    selection: ["if (a!)", "if(a!null)", "if(a!==null)", "if(a!=null)"],
    answer: "if(a!==null)",
  },
  {
    question:
      "Among the following, which one is a ternary operator in JavaScript?",
    selection: ["#", "::", "&:", "?:"],
    answer: "?:",
  },
];
/* Fin Qand A */
/* display question and answer function */
function displayAssessment() {
  if (i < questionArray.length) {
    question.textContent = questionArray[i].question;
    choiceA.textContent = questionArray[i].selection[0];
    choiceB.textContent = questionArray[i].selection[1];
    choiceC.textContent = questionArray[i].selection[2];
    choiceD.textContent = questionArray[i].selection[3];
  } else {
    endAssessment();
  }
}



