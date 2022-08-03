// Setting up all required elements as constants
var startButton = document.querySelector('.btn-start') 
var questionEl = document.querySelector('#displayed-question');
var questionAnswers = document.querySelector('#game-btns');
var newQuestion 
var scoreText = document.querySelector('#timer');
var currentIndex = 0
var choiceA = document.getElementById('choice0');
var choiceB = document.getElementById('choice1');
var choiceC = document.getElementById('choice2');
var choiceD = document.getElementById('choice3');

// Question & Answer Set 
var questionsArr = [
    {
        title: 'Javascript is an --- language?',
        choices: ['object-oriented', 'object-based', 'professional', 'foreign'],
        answer: 'object-oriented'
    },
    {
        title: 'Which of the following keywords is used to define a variable in JavaScript?',
        choices: ['let', 'function', 'var', 'const'],
        answer: 'var',
    },
    {
        title: 'Which of the following methods is used to access HTML elements using JavaScript?',
        choices: ['getElementbyClassName()', 'getElementbyID()', 'document.querySelector()', 'A & B',],
        answer: 'A & B'
    },
    {
        title: 'What does the JavaScript debugger statement do?',
        choices: ['It will debug all the errors in the program.', 'It will debug error in the current statement', 
        'It acts a breakpoint in a program', 'All of the above'],
        answer: 'It acts a breakpoint in a program'
    },
    {
        title: 'How can a datatype be declared to be a constant type?',
        choices: ['var', 'const', 'constant', 'let'],
        answer: 'const',
    }
];

var currentQuestion = {};
var score = 60
// var questionCounter = 0 
var availableQuestions = []

// Setting up the functions 
function startQuiz() {
    console.log("game start")
    newQuestion = questionsArr[currentIndex]
    score = 60 
    startTime ()
    displayQuestion ()
    // getNewQuestion()
}

function startTime() {
    var timeLeft = setInterval(() => {
        score--
        if (score <= 0) clearInterval(timeLeft)
        scoreText.textContent = "Time: " + score;
    }, 1000)
}

function displayQuestion() {
    
    var currentQuestion = questionsArr[currentIndex].title
    questionEl.textContent = currentQuestion
    console.log(currentQuestion)   

    var currentAnswers = questionsArr[currentIndex].choices 
    choiceA.textContent = questionsArr[currentIndex].choices[0]
    choiceB.textContent = questionsArr[currentIndex].choices[1]
    choiceC.textContent = questionsArr[currentIndex].choices[2]
    choiceD.textContent = questionsArr[currentIndex].choices[3]
}

for (currentIndex = 0; currentIndex < questionsArr.length; currentIndex++) {
    console.log(questionsArr[currentIndex].title);
}

// function getNewQuestion () {
    
// }


// function getNewQuestion() {
//     for (var i=0); i < maxQuestions; i++ 
    
//     // check answers
//     if (response == questions[i].answer) {
//         alert("Correct!");
//         getNewQuestion(); 
//     }  else {
//         alert("Wrong!"); 
//         getNewQuestion();
//     }

//  function getNewQuestion() {
//     console.log(availableQuestions.length)
//     console.log(questionCounter)
//     console.log(maxQuestions)
//     // if there are no available questions, save score to local storage and go to end.html 
//     if(questionCounter > maxQuestions) {
//         console.log('game end')
//         // localStorage.setItem('mostRecentScore', score)
//         // return window.location.assign('end.html')
//     } else { // else go to next available question 
//     questionCounter++
//     // display new question 
//     currentQuestion = questionsArray[1].question
//     question.textContent = currentQuestion
//     // display new answers

//     console.log('getting new question')
//     console.log(questionCounter)
//     }
//     }

// function checkAnswer(event) {
//     var userAnswer =  event.target.innerText
//     var correctAnswer = questionsArray[0].answer
//     console.log(correctAnswer)
//     console.log(userAnswer)
//     // check answers 
//     // if correct answer, get next question 
//     if (userAnswer === correctAnswer) { 
//         //go next question
//         console.log('correct answer!')
//         getNewQuestion() 
//     } else { // if incorrect answer, get next question and subtract 10sec from score
//         // go next question
//         console.log('wrong answer!')
//         getNewQuestion() 
//         // subtract 10 from score 
//     }
// }

// startTime();
startQuiz();