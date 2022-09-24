/* Variables */
var startQuizBtn = document.querySelector("#start-button");
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

