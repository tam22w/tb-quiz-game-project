var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
var gameScore = 0;
const timePenalty = 30; //time in seconds
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer: ", countDownTimer);
}

//When the person clicks the begin button the timer starts
//start time
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    console.log("startTimer: ", timerInterval);
}

function updateTimer() {
    console.log("updateTimer: begun");
    countDownTimer--;
    console.log("updateTimer: countDownTimer", countDownTimer);
    presentTimer();
}

function presentTimer() {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log("presentTimer: currentTime", currentTime);
}

function showScoreBoard() {
    let scoreBoard = document.getElementById('score-board');
    console.log("showScoreBoard: scoreBoard", scoreBoard);
    //scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.remove('hide');
}

function presentScore() {
    let currentScore = document.getElementById('score');
    currentScore.innerText = gameScore;
    console.log("presentScore: currentScore", currentScore);
}

function hideGreeting() {
    let greeting = document.getElementById('greeting');
    console.log("hideGreeting: greeting", greeting);
    //greeting.classList.toggle('hide', false);
    greeting.classList.add('hide');
}



//questions is asked
function  setupQuestionsAndAnswers() {
    console.log("SetupQuestions started");
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: " write a semicolon (;) character, followed by the class name.",
        answer2: " write a period (.) character, followed by the class name.",
        answer3: " write a period (.) character",
        answer4: "write a comma (,) character",
        correctAnswer: 2
    };

    let question2 = {
        id: "quest1",
        question: "In CSS, a color can be specified by using a predefined color name.",
        answer1: "yes",
        answer2: "no",
        answer3: null,
        answer4: null,
        correctAnswer: 1
    };

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);

}

function getQuestion(questionId) {
    console.log('getQuestion questionId', questionId);

    let found = false;

    for(let i = 0; i<arrayOfQuestions.length; i++) {
        if(questionId == arrayOfQuestions[i].id) {
            prepareQuestionAndAnswers(i);
        }
    }
}

function prepareQuestionAndAnswers(questionIndex) {
    console.log('prepareQuestionAndAnswers questionIndex', questionIndex);
    let questionSection = document.getElementById('questions');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionIndex].id;
    newQuestion.classList.add('question');
    
    let qSpan = document.createElement('span');
    qSpan.innerText = arrayOfQuestions[questionIndex].question;
    newQuestion.appendChild(qSpan);


    if(arrayOfQuestions[questionIndex].answer1) {
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
        rdoBtn.setAttribute('type', 'radio');
        rdoBtn.value = 1
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add(`${arrayOfQuestions[questionIndex].id}`);
        rdoBtn.name = arrayOfQuestions[questionIndex].id;

        label.innerText = arrayOfQuestions[questionIndex].answer1;
        label.setAttribute('for', `${rdoBtn.id}`);

        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        newQuestion.appendChild(answer);

        console.log('prepareQuestionAndAnswers answer', answer);
    }

    if(arrayOfQuestions[questionIndex].answer2) {
        let answer = document.createElement('div');
        answer.innerText = arrayOfQuestions[questionIndex].answer2;
        answer.classList.add('answer');
        answer.id = `${arrayOfQuestions[questionIndex].id}_answer2`;
        newQuestion.appendChild(answer);

        console.log('prepareQuestionAndAnswers answer', answer);
    }


    questionSection.appendChild(newQuestion);

    console.log('prepareQuestionAndAnswers newQuestion', newQuestion);
}






//if question is correct next question

//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all questions have been answered give options
//once all questions have been answered give options to save score or exit
//If user chooses to save score show the scoreboard



function doGame() {
    setCountDownTimer();
    startTimer();
    hideGreeting();
    setupQuestionsAndAnswers();
    showScoreBoard();
    presentScore();
    getQuestion('quest0');
}




/*let question1 = {
    id: "quest1",
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


//submitBtn.addEventListener ('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})


        
        
        
        
        
        //question is asked
        function SetupQuestions() {
            console.log("SetupQuestions started");           
            let question1 = {
               id: "quest0",
               question: "To select elements with a specific class:",
               answer1: "Write a semocolon (;) character, followed by the class name ",
               answer2: "Write a period (.) character, followed by the class name",
               answer3: "Write a coma (,) character",
               answer4: "Write a period (.) character",
               correctAnswer:2
           }; 

            let question2 = {
               id: "quest1",
               question: "In CSS a color can be specified by using a predefined color name:",
               answer1: "yes",
               answer2: "no",
               answer3: null,
               answer4: null,
               correctAnswer:1
            
           }; 

           let question3 = {
               id: "quest2",
               question: "To horizontally center a block element:",
               answer1: "width: auto",
               answer2: "border:auto",
               answer3: "padding:auto",
               answer4: "margin:auto",
               correctAnswer:4






    
       {var countDownTimer; 
        var timerInterval 
        var arrayOfQuestions= [];
        const maxTime = 5 * 60 *1000 ;
     function setCountDownTimer () {
        countDownTimer = maxTime
    }

    //When the person clicks the begin button the timer starts
  //start time
    timerInterval = setInterval ( updateTimer, 1000);
  function updateTimer() {
      countDownTimer = countDownTimer -1
   
  }
    //question is asked
     function SetupQuestions () {
        console.log ("SetupQuestions started");
       let question1 = {
           id: "quest0",
           question: "To select elements with a specific class:",
           answer1: "Write a semocolon (;) character, followed by the class name ",
           answer2: "Write a period (.) character, followed by the class name",
           answer3: "Write a coma (,) character",
           answer4: "Write a period (.) character",
           correctAnswer:2
       }; 

        let question2 = {
           id: "quest1",
           question: "In CSS a color can be specified by using a predefined color name:",
           answer1: "yes",
           answer2: "no",
           answer3: null,
           answer4: null,
           correctAnswer:1
        
       }; 

       let question3 = {
           id: "quest2",
           question: "To horizontally center a block element:",
           answer1: "width: auto",
           answer2: "border:auto",
           answer3: "padding:auto",
           answer4: "margin:auto",
           correctAnswer:4

        arrayOfQuestions.push(question1);
        arrayOfQuestions.push(question2);
        arrayOfQuestions.push(question3);

        console.log('SetupQuestions arrayOfQuestions:', arrayOfQuestions);

    }

        function nextQuestion() {
            for (let i = 0; i<arrayOfQuestions.length; i++) {

            }
        }
        function showQuestion(questionindex) {
            let questionSection = document.getElementById('question');
            let newQuestion= document.createElement('div');
            newQuestion.id = arrayOfQuestions[questionindex].id
            newQuestion.innerText = arrayOfQuestions[questionindex].question;
            questionSection.appendChild()
            questionSection.appened(newQuestion)
        }

  // if the question correct ;show points; next question
  //If question is incorrect time penalty; next question
  //once all questions have been answerd give option to save or exit
  //if save option is chosen player taken to scoreboard
  //If exit option is selected alert will open and read:'game over/ thanks for playing

  
  

    




(function() {
    var questions = [{
      question: "What is 2*5?",
      choices: [2, 5, 10, 15, 20],
      correctAnswer: 2
    }, {
      question: "What is 3*6?",
      choices: [3, 6, 9, 12, 18],
      correctAnswer: 4
    }, {
      question: "What is 8*9?",
      choices: [72, 99, 108, 134, 156],
      correctAnswer: 0
    }, {
      question: "What is 1*7?",
      choices: [4, 5, 6, 7, 8],
      correctAnswer: 3
    }, {
      question: "What is 8*8?",
      choices: [20, 30, 40, 50, 64],
      correctAnswer: 4
    }];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object


    function doGame() {
        setCountDownTimer();
    }*/
