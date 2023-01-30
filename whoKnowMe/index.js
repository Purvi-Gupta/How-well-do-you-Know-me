var chalk = require('chalk');
var read = require('readline-sync');


console.log(chalk.hex('#890cc7').bold("Hello! WElcome to my game"));

var player = read.question(chalk.cyan("Please Enter your Name\n"));

var welcomeMessage = `Hey! ${player} It's good to have here `;

console.log(chalk.hex('#890cc7')(welcomeMessage));

var score = 0;

function gamePlay(question,correctAnswer){
    var isAnswerCorrect;
    var answer = read.question(chalk.cyan(`${question}\n`));

    if(answer === correctAnswer){
        isAnswerCorrect = "True";
        score += 2;
    }else{
        isAnswerCorrect = false;
        score -=2;
    }
    return isAnswerCorrect;
}

const questionList = [
    {question:"what is my fav food ?", answer:"dhabeli"},
    {question:"what is my Hobby ?", answer:"painting"},
    {question:"where i live ?", answer:"Mathura"},
    {question:"which book i love to read ?", answer:"Bhagvad Gita"},
    {question:"which type of song i liked ?", answer:"soft song"}
];

var i = 0;

while (i < questionList.length) {
    var isCorrect = gamePlay(questionList[i].question,questionList[i].answer);
    console.log(chalk.blue.italic(`Is your answer correct  `), isCorrect ? chalk.green.bold(isCorrect) : chalk.red.bold(isCorrect));
    console.log(chalk.yellow(`your score is ::: ${score}\n`));
    i++;
}

console.log(chalk.magenta.bold(`${player} your total score is ==>`),chalk.yellow(score));

