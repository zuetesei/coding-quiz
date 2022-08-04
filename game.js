// Setting up all required elements as constants
var startButton = document.getElementById('start-btn') 
var questionEl = document.querySelector('#displayed-question');
var questionAnswers = document.querySelector('#game-btns');
var scoreText = document.querySelector('#timer');
var currentIndex = 0
var answerEl = document.getElementById('game-btns');

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
        answer: 'It acts a breakpoint in a program',
    },
    {
        title: 'How can a datatype be declared to be a constant type?',
        choices: ['var', 'const', 'constant', 'let'],
        answer: 'const',
    },
    {
        title: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<javascript>', '<main>', '<script>', '<img>'],
        answer: 'script'
    }
];

// Setting up the functions 
function startQuiz() {
    // confirm game start
    console.log("game start")
    // hide start screen 
    var startScreen = document.querySelector('.start-screen')
    startScreen.setAttribute('class', 'hide')
    // display quiz screen
    var quizScreen = document.querySelector('#quiz-screen')
    quizScreen.classList.remove('hide')
    // time starts at 60 seconds 
    score = 60 
    startTime()
    // display question and answers
    displayQuestion()
}

startButton.onclick = startQuiz

function startTime() {
    var timeLeft = setInterval(() => {
        score--
        if (score <= 0) clearInterval(timeLeft)
        scoreText.textContent = "Time: " + score;
    }, 1000)
}

function displayQuestion() {
    // clear out answers 
    answerEl.innerHTML=""

    var currentQuestionObj = questionsArr[currentIndex]
    console.log(currentQuestionObj)

    var currentQuestion = questionsArr[currentIndex].title
    questionEl.textContent = currentQuestion
    console.log(currentQuestion)   

    for (var i=0; i < currentQuestionObj.choices.length; i++) {
        var choice = currentQuestionObj.choices[i]
        var choiceButton = document.createElement("button") 
        choiceButton.setAttribute("value", choice)
        choiceButton.setAttribute("class", "btn")
        choiceButton.textContent = choice
        // choiceButton.textContent = `${i+1}. ${choice}` 
        answerEl.appendChild(choiceButton)
    }
}

answerEl.onclick = checkAnswer

function checkAnswer (event) {
    var userAnswer = event.target.textContent
    console.log(userAnswer)

    var correctAnswer = questionsArr[currentIndex].answer
    console.log(correctAnswer)

    // if userAnswer equals correctAnswer
    if (userAnswer === correctAnswer) {
        console.log("Good, that's correct!")
        currentIndex++
        displayQuestion()
    } else {
        // subtract 10 from score
        score = score - 10 
        console.log("WRONG ANSWER! -10 points")
        // next question 
        currentIndex++
        displayQuestion()
    }
}

// startTime();

// startQuiz();