// Elements
var startButton = document.getElementById("start-button");
var scoresButton = document.getElementById("scores-button");
var introEl = document.getElementById("intro-content");
var questionEl = document.getElementById("question-content");
var questionNum = document.getElementById("question-number");
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
var number = 1;
var questionIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var choiceIndexArray = [];

// Event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
scoresButton.addEventListener("click", showScores);

// startQuiz function to begin quiz
function startQuiz() {
    displayQuestion();
}

// displayQuestion function to display question
function displayQuestion() {
    // Hide intro content
    introEl.className = "hidden";

    // Show question content
    questionEl.removeAttribute("class");
    questionNum.textContent = "Question " + number;

    // Choose and show question at random
    choiceIndexArray = [0, 1, 2, 3];
    var randomQuestion = Math.floor(Math.random() * questionIndexArray.length);
    var currentQuestion = quizQuestions[randomQuestion];
    question.textContent = currentQuestion.question;

    // Choose and show choices at random
    var currentChoices = currentQuestion.choices;
    var randomChoice = Math.floor(Math.random() * choiceIndexArray.length);
    var choiceNum = choiceIndexArray[randomChoice];
    choiceA.textContent = currentChoices[choiceNum];
    choiceIndexArray.splice(randomChoice, 1);

    randomChoice = Math.floor(Math.random() * choiceIndexArray.length);
    choiceNum = choiceIndexArray[randomChoice];
    choiceB.textContent = currentChoices[choiceNum];
    choiceIndexArray.splice(randomChoice, 1);

    randomChoice = Math.floor(Math.random() * choiceIndexArray.length);
    choiceNum = choiceIndexArray[randomChoice];
    choiceC.textContent = currentChoices[choiceNum];
    choiceIndexArray.splice(randomChoice, 1);

    randomChoice = Math.floor(Math.random() * choiceIndexArray.length);
    choiceNum = choiceIndexArray[randomChoice];
    choiceD.textContent = currentChoices[choiceNum];
    choiceIndexArray.splice(randomChoice, 1);

    questionIndexArray.splice(randomQuestion, 1);

    console.log(currentQuestion.question);
    console.log(questionIndexArray);

    // Event listener for choices
    choicesEl.addEventListener("click", checkAnswer);

    // checkAnswer function to check user's choice
    function checkAnswer(event) {
        // Display "Correct"/"Incorrect" based on user choice
        var userChoice = event.target;
        if (userChoice.textContent === currentQuestion.answer) {
            correct.removeAttribute("class");
        } else {
            incorrect.removeAttribute("class");
        }
    
        // Display "Next Question" button
        nextButton.removeAttribute("class");
    
        // Prevent user from clicking choices multiple times
        choicesEl.removeEventListener("click", checkAnswer);
    }
}


// nextQuestion function to display next question
function nextQuestion() {
    number++;
    nextButton.className = "hidden";
    correct.className = "hidden";
    incorrect.className = "hidden";
    // choiceIndex = [0, 1, 2, 3];
    displayQuestion();
    // choicesEl.addEventListener("click", checkAnswer);
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
    },
    {
        question: "Question 4",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice D"
    },
    {
        question: "Question 5",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice A"
    },
    {
        question: "Question 6",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice B"
    },
    {
        question: "Question 7",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice C"
    },
    {
        question: "Question 8",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice D"
    },
    {
        question: "Question 9",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice A"
    },
    {
        question: "Question 10",
        choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
        answer: "Choice B"
    },
]