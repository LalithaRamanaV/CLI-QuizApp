

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;
const bgGreen = chalk.black.bgGreen;
// highscore.map(score => console.log(score.name, " : ", score.topScore))


var highscore = { name: "Bhavya", topScore: "8" }
var score = 0;

quizList = [
  {
    question: "What is my zodiac sign? \n",
    answer: "Aries"
  },
  {
    question: "Am I a beach or mountain person? \n",
    answer: "Beach"
  },
  {
    question: "Where do I live? \n",
    answer: "Visakhapatnam"
  },
  {
    question: "What is my nickname? \n",
    answer: "Bunny"
  },
  {
    question: "What is my favourite food? \n",
    answer: "Biryani"
  },
  {
    question: "What is favourite dog species? \n",
    answer: "Pug"
  },
  {
    question: "Do I prefer coffee or tea? \n",
    answer: "Coffee"
  },
  {
    question: "Guess when is my birthday month? \n",
    answer: "May"
  },
  {
    question: "What is my favourite colour? \n",
    answer: "Black"
  },
  {
    question: "What is my hobby? \n",
    answer: "Drawing"
  },


]

function welcomeMessage() {
  console.log(bgGreen("Lalith's Quiz"));
  console.log("A quiz to check how well do you know me? ")

  console.log("\n");


  var userName = readlineSync.question("Hola! Who's this?\n");

  console.log((("Welcome to") + chalk.cyan(" How well do you know Lalitha's quiz ") + chalk.bold.white(userName)));

  console.log("Let's play! ");
  readlineSync.question(chalk.cyan("Press enter to play! \n"));
  playGame();
}


function checkAnswer(n, question, answer) {
  var userAnswer = readlineSync.question(n + "." + chalk.cyan(question));

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(correct("You are right! "));
    score++;
    console.log("Current Score: " + chalk.green(score));


  }
  else {
    console.log(error("You are wrong! "));
    console.log("Current Score: " + chalk.red(score));
  }
  console.log("\n");
}

function playGame() {
  for (var i = 0; i < quizList.length; i++) {
    checkAnswer(i + 1, quizList[i].question, quizList[i].answer);
  }
  displayScore();
}



function displayScore() {
  console.log((chalk.cyan("Hurray! Your total score is " + chalk.green(score))));


  if (score > highscore.topScore) {
    highscore.topScore = score;
    console.log("Congratulations! You have beaten the highscore.Don't forget to share the screenshot!");
    console.log(chalk.green("New HIGHSCORE: " + score));
  }
  console.log(chalk.cyan("Thanks for playing."));

  //leaderboard
  console.log(chalk.keyword('green').bold("\n*****Check out highscore*****"));
  printScoreBoard(highscore);
}


//function to print leaderBoard
function printScoreBoard(highscore) {
    console.log(chalk.keyword('green').bold(highscore.name + " : " + highscore.topScore));
}
welcomeMessage();


