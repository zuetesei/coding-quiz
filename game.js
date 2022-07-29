// Setting up all required elements as constants 
var question = document.querySelector('#questions');
var choices = document.querySelector('.choice-text');
var scoreText = document.querySelector('#score');
var maxQuestions = 5
var choice1 = document.querySelector('#choice-option-1');
var choice2 = document.querySelector('#choice-option-2');
var choice3 = document.querySelector('#choice-option-3');
var choice4 = document.querySelector('#choice-option-4');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 60
var questionCounter = 0 
var availableQuestions = []

// Setting up the functions 
function startGame() {
    questionCounter = 0
    score = 60 
    getNewQuestion()
}

function displayQuestion() {
    var currentQuestion = questionsArray[0].question
    question.textContent = currentQuestion
    console.log(currentQuestion)   
}

 function getNewQuestion() {
    console.log(availableQuestions.length)
    console.log(questionCounter)
    console.log(maxQuestions)
    // if there are no available questions, save score to local storage and go to end.html 
    if(questionCounter > maxQuestions) {
        console.log('game end')
        // localStorage.setItem('mostRecentScore', score)
        // return window.location.assign('end.html')
    } else { // else go to next available question 
    questionCounter++
    // display new question 
    currentQuestion = questionsArray[1].question
    question.textContent = currentQuestion
    // display new answers

    console.log('getting new question')
    console.log(questionCounter)
    }
    }

function displayAnswers() {
    var answer1 = questionsArray[0].choice1;
    var answer2 = questionsArray[0].choice2;
    var answer3 = questionsArray[0].choice3;
    var answer4 = questionsArray[0].choice4;
    choice1.textContent = answer1;
    choice2.textContent = answer2;
    choice3.textContent = answer3;
    choice4.textContent = answer4;

    // how do we change answers? 
    // we need to turn into buttons, add click events, and then check if they're correct
}

function checkAnswer(event) {
    var userAnswer =  event.target.innerText
    var correctAnswer = questionsArray[0].answer
    console.log(correctAnswer)
    console.log(userAnswer)
    // check answers 
    // if correct answer, get next question 
    if (userAnswer === correctAnswer) { 
        //go next question
        console.log('correct answer!')
        getNewQuestion() 
    } else { // if incorrect answer, get next question and subtract 10sec from score
        // go next question
        console.log('wrong answer!')
        getNewQuestion() 
        // subtract 10 from score 
    }
}

function startTime() {
    var timeLeft = setInterval(() => {
        score--
        if (score <= 0) clearInterval(timeLeft)
        scoreText.textContent = "Time: " + score;
    }, 1000 );
}

// Question & Answer Set 
let questionsArray = [
    {
        question: 'Javascript is an _____ language?',
        choice1: 'object-oriented',
        choice2: 'object-based',
        choice3: 'professional',
        choice4: 'foreign',
        answer: 'object-oriented',
    },
    {
        question: 'Which of the following keywords is used to define a variable in JavaScript?',
        choice1: 'let',
        choice2: 'function',
        choice3: 'var',
        choice4: 'const',
        answer: 'var',
    },
    {
        question: 'Which of the following methods is used to access HTML elements using JavaScript?',
        choice1: 'getElementbyClassName()',
        choice2: 'getElementbyID()',
        choice3: 'document.querySelector()',
        choice4: 'A & B',
        answer: 'A & B',
    },
    {
        question: 'What does the JavaScript debugger statement do?',
        choice1: 'It will debug all the errors in the program.',
        choice2: 'It will debug error in the current statement',
        choice3: 'It acts a breakpoint in a program',
        choice4: 'All of the above',
        answer: 'It acts a breakpoint in a program',
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        choice1: 'var',
        choice2: 'const',
        choice3: 'constant',
        choice4: 'let',
        answer: 'const',
    }
];

// Function Calls 
displayQuestion();
displayAnswers();
startGame();
startTime();