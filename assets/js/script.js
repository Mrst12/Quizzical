//variables
const letsStart = document.getElementById('start-btn');
const questionCont = document.getElementById('questions-cont');
let shuffledQuestions, currentQuestionIndex;
const questionArea = document.getElementById('questions');
const answersArea = document.getElementById('answer-choice');

//event listeners
letsStart.addEventListener('click', runGame);

 function runGame() {
    letsStart.classList.add('hide');
    questionCont.classList.remove('hide');
    getNextQuestion();
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
}
function getNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function displayQuestion(question) {

}
 function checkAnswer() {

}
 function incrementScore() {

}
 function incrementWrongAnswer() {

}
function resetState() {

}
