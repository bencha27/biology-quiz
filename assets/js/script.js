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
var timeDisplay = document.getElementById("timer");
var endButton = document.getElementById("end-button");
var endEl = document.getElementById("end-content");
var scoreDisplay = document.getElementById("score");
var nameInput = document.getElementById("name-input")
var submitButton = document.getElementById("submit-button")
var homeButton = document.getElementById("home-button");
var scoresEl = document.getElementById("scores-content");
var scoresList = document.getElementById("scores-list");
var clearButton = document.getElementById("clear-button");

// Variables
var number = 1;
var questionIndexArray = [];
var choiceIndexArray = [];
var timeLeft = 60;
var score = 0;
var savedScores = [];

// startQuiz function to begin quiz
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    number = 1;
    timeLeft = 60;
    score = 0;
    questionIndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    displayQuestion();
}

// displayQuestion function to display question
function displayQuestion() {
    // Hide intro content
    homeButton.className = "hidden";
    introEl.className = "hidden";

    // Start quiz timer
    timeDisplay.textContent = timeLeft;
    var timer = setInterval(displayTime, 1000);
    function displayTime() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            endQuiz();
        }
    }

    // Show question content
    questionEl.removeAttribute("class");
    questionNum.textContent = "Question " + number;

    // Choose and show question at random
    var randomIndex = Math.floor(Math.random() * questionIndexArray.length);
    var currentQuestionNum = questionIndexArray[randomIndex];
    var currentQuestion = quizQuestions[currentQuestionNum];
    question.textContent = currentQuestion.question;
    questionIndexArray.splice(randomIndex, 1);

    // Choose and show choices at random
    choiceIndexArray = [0, 1, 2, 3];
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

    // Event listener for choices
    choicesEl.addEventListener("click", checkAnswer);

    // checkAnswer function to check user's choice
    function checkAnswer(event) {
        // Pause timer
        clearInterval(timer);

        // Validate user choice
        var userChoice = event.target;
        if (userChoice.textContent === currentQuestion.answer) {
            correct.removeAttribute("class");
            score++;
        } else {
            incorrect.removeAttribute("class");
            if (timeLeft > 10) {
                timeLeft -= 10;
            } else {
                timeLeft = 0;
            }
        }
    
        // Display "Next Question"/"End Quiz" button
        if (number === 10) {
            nextButton.className = "hidden";
        } else {
            nextButton.removeAttribute("class");
        }
    
        // Prevent user from clicking choices multiple times
        choicesEl.removeEventListener("click", checkAnswer);
    }

    // endQuiz function to display end content
    endButton.addEventListener("click", endQuiz);
    function endQuiz() {
        clearInterval(timer);
        currentQuestion = "";
        questionEl.className = "hidden";
        correct.className = "hidden";
        incorrect.className = "hidden";
        endEl.removeAttribute("class");
        if (timeLeft = 0) {
            endEl.firstElementChild.textContent = "Time's up!";
        } else {
            endEl.firstElementChild.textContent = "Finished!";
        }
        scoreDisplay.textContent = score;
        homeButton.removeAttribute("class");
        choicesEl.removeEventListener("click", checkAnswer);
    }
}

// nextQuestion function to display next question
nextButton.addEventListener("click", nextQuestion);
function nextQuestion() {
    number++;
    nextButton.className = "hidden";
    correct.className = "hidden";
    incorrect.className = "hidden";
    displayQuestion();
}

// logScore function to save score
submitButton.addEventListener("click", logScore);
function logScore() {
    var playerResult = {
        "name": nameInput.value,
        "score": score
    }
    storedScores = JSON.parse(localStorage.getItem("bioQuizScores"));
    if (storedScores !== null) {
        savedScores = storedScores;
    }
    savedScores.push(playerResult);
    localStorage.setItem("bioQuizScores", JSON.stringify(savedScores));
    nameInput.value = "";
    showScores();
}

// showScores function to display saved scores
scoresButton.addEventListener("click", showScores);
function showScores() {
    introEl.className = "hidden";
    endEl.className = "hidden";
    scoresEl.removeAttribute("class");
    homeButton.removeAttribute("class");
    scoresList.textContent = "";

    var savedResults = JSON.parse(localStorage.getItem("bioQuizScores"));
    if (savedResults !== null) {
        for (i = 0; i < savedResults.length; i++) {
            var resultLi = document.createElement("li");
            var result = savedResults[i];
            resultLi.textContent = result.name + ": " + result.score + "/10";
            scoresList.appendChild(resultLi);
        }
    }
}

// clearScores function to clear saved scores
clearButton.addEventListener("click", clearScores);
function clearScores() {
    localStorage.removeItem("bioQuizScores");
    showScores();
}

// home function to return to home display
homeButton.addEventListener("click", home);
function home() {
    introEl.removeAttribute("class");
    homeButton.className = "hidden";
    questionEl.className = "hidden";
    endEl.className = "hidden";
    scoresEl.className = "hidden";
}

// Question bank
var quizQuestions = [
    {
        question: "What supports the structure and organization of the cell?",
        choices: ["Cytoskeleton", "Cell membrane", "Cytoplasm", "DNA"],
        answer: "Cytoskeleton"
    }, 
    {
        question: "What makes proteins for the cell?",
        choices: ["Ribosome", "DNA", "Cytoskeleton", "Nucleus"],
        answer: "Ribosome"
    },
    {
        question: "The internal parts of the cell are embedded in the",
        choices: ["cytoplasm", "cell membrane", "cytoskeleton", "nucleus"],
        answer: "cytoplasm"
    },
    {
        question: "What controls things going in and out of the cell?",
        choices: ["Cell membrane", "Cytoplasm", "Ribosome", "Nucleus"],
        answer: "Cell membrane"
    },
    {
        question: "What organelle uses enzymes to break down large substances?",
        choices: ["Lysosome", "Mitochondrion", "Chloroplast", "Endoplasmic reticulum"],
        answer: "Lysosome"
    },
    {
        question: "What organelle transports materials within the cell?",
        choices: ["Vesicle", "Golgi apparatus", "Vacuole", "Mitochondrion"],
        answer: "Vesicle"
    },
    {
        question: "What organelle is involved in cell division?",
        choices: ["Centrosome", "Chloroplast", "Lysosome", "Vacuole"],
        answer: "Centrosome"
    },
    {
        question: "What organelle processes and packages proteins?",
        choices: ["Golgi apparatus", "Endoplasmic reticulum", "Vesicle", "Lysosome"],
        answer: "Golgi apparatus"
    },
    {
        question: "What organelle forms a rigid outer layer in plant cells?",
        choices: ["Cell wall", "Cell membrane", "Chloroplast", "Cytoskeleton"],
        answer: "Cell wall"
    },
    {
        question: "What organelle stores materials for the cell?",
        choices: ["Vacuole", "Golgi apparatus", "Centrosome", "Ribosome"],
        answer: "Vacuole"
    },
]