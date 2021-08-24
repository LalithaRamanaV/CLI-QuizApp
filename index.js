var readlineSync = require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;

var highscore = { 
  name: "Bhavya",
  topScore: 8
};
var score = 0;

quizList = [
  {
    question: "What is my zodiac sign? ",
    answer: "Aries"
  },
  {
    question: "Am I a beach or mountain person? ",
    answer: "Beach"
  },
  {
    question: "Where do I live? ",
    answer: "Visakhapatnam"
  },
  {
    question: "What is my nickname? ",
    answer: "Bunny"
  },
  {
    question: "What is my favourite food? ",
    answer: "Biryani"
  },
  {
    question: "What is favourite dog species? ",
    answer: "Pug"
  },
  {
    question: "Do I prefer coffee or tea? ",
    answer: "Coffee"
  },
   {
  question : "Guess when is my birthday month? ",
  answer: "May"
},
  {
    question: "What is my favourite colour? ",
    answer: "Black"
  },
 {
   question: "What is my hobby? ",
   answer: "Drawing"
 },
 
  
]

function welcomeMessage(){
  var userName = readlineSync.question("Hola! Who's this? " );
  console.log(chalk.bold.yellow("Welcome to How well do you know Lalitha's quiz " + chalk.bold.white(userName ) ));
  console.log("Let's play! ");
  readlineSync.question( chalk.yellow("Can you beat this HIGHSCORE " + highscore.topScore +" ? Press enter to play! ") );
  playGame();
}
 

function checkAnswer(n,question, answer){
  var userAnswer = readlineSync.question(n + "." +question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(correct("You are right! "));
    score++;
    console.log("Current Score: "+ chalk.green(score));
    

  }
  else{
    console.log(error("You are wrong! "));
    console.log("Current Score: " + chalk.red(score) );
  }
  console.log("--------!");
}

function playGame(){
  for(var i=0; i<quizList.length; i++){
    checkAnswer(i+1, quizList[i].question, quizList[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log((chalk.yellow("Hurray! Your total score is " + chalk.green(score))));

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("Congratulations! You have beaten the highscore");
    console.log("New HIGHSCORE: "+ highscore);
  }
  console.log(chalk.yellow("Thanks for playing. Don't forget to share the screenshot!") );
}

welcomeMessage();