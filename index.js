const readlineSync = require("readline-sync");
const chalk = require('chalk');

let userName = readlineSync.question("Enter your name: "+"\r\n" );

console.log('Welcome ' + chalk.bold.rgb(210,105,30)(userName) + '!! Do you watch Marvel Movies? '+"\r\n" );

let score = 0;

let highest_score = {
  name: 'Mudit',
  score: '7'
}

//play function
function play(question, answer){
  let userAnswer = readlineSync.question(chalk.bold(question)+"\r\n");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold('Your answer is right'));
    score++;
  }else{
    console.log(chalk.redBright.bold('Your answer is wrong'));
  }
  console.log('current score: ' + chalk.bold(score)+"\r\n");
}


// question and answer
let questionOne = {
  question: 'How many Infinity Stones are there? ',
  answer : 'six'
}

let questionTwo = {
  question: 'What do the Avengers eat after defeating Loki in New York? ',
  answer : 'Shawarma'
}

let questionThree = {
  question: 'What kind of doctor was Dr. Stephen Strange? ',
  answer : 'Neurosurgeon'
}

let questionFour = {
  question: 'What was Wanda Maximoff’s brother’s first name?  ',
  answer : 'Pietro'
}

let questionFive = {
  question: 'What video game is Thor playing in Avengers: Endgame? ',
  answer: 'Fortnite'
}

let questionSix = {
  question: 'What is the name of Thor’s hammer? ',
  answer: 'Mjolnir'
}

let questionSeven = {
  question: 'In which movie does Black Widow first appear? ',
  answer: 'Iron Man 2'
}

// array of question,answer object
let QnA = [questionOne , questionTwo , questionThree , questionFour, questionFive, questionSix, questionSeven];

for(let i = 0; i < QnA.length; i++){
  
  // make function call
  play(QnA[i].question, QnA[i].answer);
}

console.log('Total score: ' + score);

if(score == highest_score.score){
  console.log(chalk.bold.rgb(210,105,30)('Yes!! You have beat the highest score'));
}
console.log(chalk.bold.rgb(210,105,30)('Thanks for playing game. Hope you enjoyed!!'));
