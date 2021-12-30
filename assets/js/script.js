document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('questions').innerText = 'Welcome to Quizzical, please click start to continue'
})

//variables
const letsStart = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions');
const answersArea = document.getElementById('answer-choice');
const restartButton = document.getElementById('restart-btn');
const resultCont = document.getElementById('results-cont');
const gameArea = document.getElementsByClassName('game-area');
let shuffledQuestions; //hold the questions that are random
let currentQuestionIndex; //index for the current question
let currentScore = 0;
let currentIncorrectScore = 0;

//event listeners
letsStart.addEventListener('click', runGame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    getNextQuestion();
})

restartButton.onclick = function() {
    restartButton.classList.add('hide');
    questionCont.classList.add('hide');
    letsStart.classList.remove('hide');
    currentScore = 0;
    currentIncorrectScore = 0;
    document.getElementById('score').innerText = currentScore;
    document.getElementById('incorrect').innerText = currentIncorrectScore;
    runGame();
};

//Quiz game

/**
 * hides the start button, shuffles the questions amd adds 10
 * moves onto the first question
 */
 function runGame() {
    letsStart.classList.add('hide');
    shuffledQuestions = questions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    questionCont.classList.remove('hide');
    getNextQuestion();
    
}

/**
 * resets and shuffles questions
 */
function getNextQuestion() {
    defaultState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
    

}

/**
 * Gets the questions and answers from the array
 * and displays them
 */
function displayQuestion(question) {
    questionArea.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer);
        answersArea.appendChild(button);
    });
}

/**
 * takes out the old answers so new ones can go in
 */
function defaultState() {
    nextButton.classList.add('hide');
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }
}

/**checks user answer and increments score if correct
 * increments incorrect score if wrong
 * highlights colours for right and wrong buttons
 */
 function checkAnswer(event) {
    const clickedButton = event.target;
    const correct = clickedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answersArea.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        endGame();
    }
    if (correct) {
        incrementScore();
    } else {
        incrementWrongAnswer();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

 function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
 function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function endGame() {
    document.getElementById('questions').innerHTML = `
        <strong><em>Quizzical!</em></strong>
        <br>
        Click restart to retry
        `
        restartButton.classList.remove('hide');
}