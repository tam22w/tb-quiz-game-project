var countDownTimer;
var timerInterval;
var arrayOfQuestions = []
var gameScore =0;
const timePenalty = 30;
const maxTime = 5*60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime
    console.log("countDownTimer:", countDownTimer);

    timerInterval =setInterval(updateTimer, 1000);

    function updateTimer() {
        countDownTimer--;
        showTimer();
    }
}



function presentTimer() {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log
}


function showScoreBoard(){
    let scoreBoard = document.getElementById('score-board');
    //scoreBoard.classList.toggle('hide, false);
    console. log("showScoreBoard: scoreBoard");
     scoreBoard.classList.remove('hide');
}
function presentScore() {
    let currentScore = document.getElementById('score');
    currentScore.innerText =gameScore;
}

function hideGreeting(){
    let scoreBoard = document.getElementById('score-board');
    //scoreBoard.classList.toggle('hide, false);
    console.log("hidegreeting: greeting ");
     scoreBoard.classList.remove('hide');


function doGame() {
    setCountDownTimer();
    startTimer();
    hideGreeting();
    setUpQuestionsAndAnswers();
    showScoreBoard();
    presentScore();
}

function prepareQuestionAndAnswers(questionindex){
    let questionSection = document.getElementById('questions')
    let newQuestion = document.createElementByC
}

