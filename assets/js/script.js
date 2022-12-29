// Elements
var startButton = document.getElementById("start-button");
var scoresButton = document.getElementById("scores-button");
var introEl = document.getElementById("intro-content");
var questionEl = document.getElementById("question-content");
var question = document.getElementById("question");
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var scoresEl = document.getElementById("scores-content");

// Event listeners
startButton.addEventListener("click", startQuiz);
scoresButton.addEventListener("click", showScores);

// startQuiz function to begin quiz
function startQuiz() {
    displayQuestion();
}

// displayQuestion function to display question
function displayQuestion() {
    introEl.className = "hidden";
    questionEl.removeAttribute("class");
    question.textContent = quizQuestions[0].question;
    choiceA.textContent = quizQuestions[0].choices[0];
    choiceB.textContent = quizQuestions[0].choices[1];
    choiceC.textContent = quizQuestions[0].choices[2];
    choiceD.textContent = quizQuestions[0].choices[3];
}

// showScores function to display scores
function showScores() {

}

// Question bank
var quizQuestions = [
    {
        question: "Question 1",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"]
    }
]