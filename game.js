const question = document.querySelector('#questions');
const choice1 = document.querySelector('.choice-text-1');
const choice2 = document.querySelector('.choice-text-2');
const choice3 = document.querySelector('.choice-text-3');
const choice4 = document.querySelector('.choice-text-4');
const scoreText = document.querySelector('#score');

let shuffledQuestions, currentQuestionIndex

let currentQuestion = {};
let acceptingAnswers = true;
let score = 60
let questionCounter = 0 
let availableQuestions = []

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

function displayQuestion() {
    var currentQuestion = questionsArray[0].question
    question.textContent = currentQuestion
    console.log(currentQuestion)

     // how do we change question? 
     function setNextQuestion() {

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
}

function checkAnswer(event) {
    console.log(event.target.innerText)

    // how to check answers 
}

function startTime() {
    var timeLeft = setInterval(() => {
        score--
        if (score <= 0) clearInterval(timeLeft)
        scoreText.textContent = "Time: " + score;
    }, 1000 );

    // how to deduct time if answer is wrong 
}

startTime();
displayQuestion();
displayAnswers();


