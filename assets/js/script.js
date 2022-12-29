// Elements
var startButton = document.getElementById("start-button");
var scoresButton = document.getElementById("scores-button");
var introEl = document.getElementById("intro-content");
var questionEl = document.getElementById("question-content");
var question = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var nextButton = document.getElementById("next-button");
var scoresEl = document.getElementById("scores-content");

// Variables
var index = 0;

// Event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
scoresButton.addEventListener("click", showScores);

// startQuiz function to begin quiz
function startQuiz() {
    displayQuestion();
    choicesEl.addEventListener("click", checkAnswer);
}

// displayQuestion function to display question
function displayQuestion() {
    introEl.className = "hidden";
    questionEl.removeAttribute("class");
    question.textContent = quizQuestions[index].question;
    choiceA.textContent = quizQuestions[index].choices[0];
    choiceB.textContent = quizQuestions[index].choices[1];
    choiceC.textContent = quizQuestions[index].choices[2];
    choiceD.textContent = quizQuestions[index].choices[3];
}

// checkAnswer function to check user's choice
function checkAnswer(event) {
    // Display "Correct"/"Incorrect" based on user choice
    var userChoice = event.target;
    if (userChoice.textContent === quizQuestions[index].answer) {
        correct.removeAttribute("class");
    } else {
        incorrect.removeAttribute("class");
    }

    // Display "Next Question" button
    nextButton.removeAttribute("class");

    // Prevent user from clicking choices multiple times
    choicesEl.removeEventListener("click", checkAnswer);
}

// nextQuestion function to display next question
function nextQuestion() {
    index++;
    nextButton.className = "hidden";
    correct.className = "hidden";
    incorrect.className = "hidden";
    displayQuestion();
    choicesEl.addEventListener("click", checkAnswer);
}

// showScores function to display scores
function showScores() {

}

// Question bank
var quizQuestions = [
    {
        question: "Question 1",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice A"
    }, 
    {
        question: "Question 2",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice B"
    },
    {
        question: "Question 3",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice C"
    }
]