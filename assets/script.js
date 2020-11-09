var questions = [
    {
        question: "What is my dog's name?",
        answers: ['Bristol', 'London', 'Adelaide', 'Sydney'],
        correct: 4
    },
    {
        question: "How old is my Dog?",
        answers: ['One', 'Two', 'Four', 'Seven'],
        correct: 2
    },
    {
        question: "What's my Dog's favorite pastime?",
        answers: ['Golf', 'Soccer', 'The Pets', 'Jeep Rides'],
        correct: 1
    },
    {
        question: "What Breed is my Dog?",
        answers: ['Mutt', 'German Shepherd', 'Australian Shepherd', 'Lab Mix'],
        correct: 4
    },
    {
        question: "How old was my Dog when I adopted her?",
        answers: ['One Year', 'Two Years', 'Nine Months', 'Three Months'],
        correct: 4
    }
];
var scoresArray = [];

// querySelector for Event Listener to begin quiz
var startButtonEl = document.querySelector("#begin-quiz");
var questionsContainer = document.querySelector(".questions-container");
var questionName = document.querySelector(".question-title");

// querySelector for removale of landing page elements
var titleEl = document.querySelector(".title-div");
var rulesEl = document.querySelector(".rules-div");
var buttonEl = document.querySelector(".button-div");
var initialsInput = document.querySelector("#initials")

// querySelector for coutdown timer
var timerEl = document.querySelector(".timer");

// querySelector for right-wrong color flash 
var mainContainerEl = document.querySelector(".container");

// querySelector for endQuiz page 
var quizOverDiv = document.querySelector(".quiz-over");
var quizOverHeaderEl = document.querySelector(".quiz-over-header");

// querySelector for HighScores landing page
var HighScoresDivEl = document.querySelector(".highscores-div");

// querySelector to log scores to LocalStorage
var scoresButtonEl = document.querySelector("#storage-submit");

// querySelector to append a new table row when score is pulled
var tableEl = document.querySelector("#row-scores");

var counter = 0;
var timeLeft = 75;

// Begins the quiz on the eventListener and starts the clock's countdown
var startQuiz = function() {
    titleEl.remove();
    rulesEl.remove();
    buttonEl.remove();
    questionsContainer.style.display = "block";

    timerStart = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);


    for (let j = 0; j < questions[counter].answers.length; j++) {
        var currentAnswer = document.getElementById(j + 1);
        currentAnswer.textContent = questions[counter].answers[j];
        var buttonIndex = j + 1;
        currentAnswer.addEventListener("click", () => {
            checkAnswer(j + 1);
        });
    }
    nextQuestion();
};

// Iterates through the quiz questions, counter increases by one if in checkAnswer()
var nextQuestion = function() {

    var myQuestion = questions[counter].question;
    questionName.textContent = myQuestion;

    for (let i = 0; i < questions[counter].answers.length; i++) {
        // console.log(counter);
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = questions[counter].answers[i];
        };
};

// Verifies answer correctness, penalizes if wrong. Color flash for right & wrong - green = correct, red = wrong
var checkAnswer = function(buttonIndex) {
    var correctAnswer = questions[counter].correct;
    if (correctAnswer === buttonIndex) {
        mainContainerEl.style.backgroundColor = "lightgreen"
        setTimeout(function() {
            mainContainerEl.style.backgroundColor = "white";
        }, 250);    
    }
    else {
        mainContainerEl.style.backgroundColor = "#ff6961"
        setTimeout(function() {
            mainContainerEl.style.backgroundColor = "white";
        }, 250);
        timeLeft -= 15;
        timerEl.textContent = "Time: " + timeLeft;
    }
    if (counter >= 4) {
        endQuiz();
    }
    else {
        counter++;
        nextQuestion();
    }
};

var timerStart;
// Ends Quiz, shows the results page. 
var endQuiz = function() { 
        clearInterval(timerStart);

        mainContainerEl.remove();
        quizOverDiv.style.display = "block";

        var finalScore = document.createElement("p")
        finalScore.className = "final-score";
        finalScore.textContent = "Your Final Score Is " + timeLeft + ".";
        quizOverHeaderEl.appendChild(finalScore);

}
// Stores quiz data to local storage
var storeObjects = function() {
    var initials = document.getElementById("initials").value.trim();
    // console.log({ initials });

    while (initials === "" || initials === null) {
            initials = window.prompt("Please enter your initials to log your score!")
        }
    var scoresObj = {
        name: initials,
        score: timeLeft,
    };
    scoresArray.push(scoresObj);
    
    localStorage.setItem(initials,JSON.stringify({initials, timeLeft}));
    console.log("array hjere",scoresArray);
}

// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", startQuiz);
scoresButtonEl.addEventListener("click", function(){
    storeObjects();
    location.href= "highscores.html";
});