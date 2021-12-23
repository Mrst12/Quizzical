//variables
const letsStart = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions');
const answersArea = document.getElementById('answer-choice');
const resultsButton = document.getElementById('results-btn');
const restartButton = document.getElementById('restart-btn');
const resultCont = document.getElementById('results-cont');

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

resultsButton.onclick = function() {
    resultCont.style.display = "block";
};

restartButton.onclick = function() {
    resultCont.style.display = 'none';
    questionCont.classList.add('hide');
    resultsButton.classList.add('hide');
    letsStart.classList.remove('hide');
    currentScore = 0;
    currentIncorrectScore = 0;
    document.getElementById('score').innerText = currentScore;
    document.getElementById('incorrect').innerText = currentIncorrectScore;

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
        questionArea.innerHTML = "congratulations on completing the quiz!";
        letsStart.innerText = "Restart";
        letsStart.classList.remove('hide');
        restart();
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

function restart() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = 0;
    

}
