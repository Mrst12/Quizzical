//variables
const letsStart = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionCont = document.getElementById('questions-cont');
let shuffledQuestions, currentQuestionIndex;
const questionArea = document.getElementById('questions');
const answersArea = document.getElementById('answer-choice');

//event listeners
letsStart.addEventListener('click', runGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    getNextQuestion();
})

 function runGame() {
    letsStart.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionCont.classList.remove('hide');
    getNextQuestion();
}
function getNextQuestion() {
    defaultState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}
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
    })
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
        letsStart.innerText = 'Restart'
        letsStart.classList.remove('hide');
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

}
 function incrementWrongAnswer() {

}
function defaultState() {
    nextButton.classList.add('hide');
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }

}
