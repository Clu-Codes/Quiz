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

var nextQuestion = function() {

    var myQuestion = questions[counter].question;
    questionName.textContent = myQuestion;

    for (let i = 0; i < questions[counter].answers.length; i++) {
        console.log(counter);
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = questions[counter].answers[i];
        };
};

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

var endQuiz = function() { 
        clearInterval(timerStart);

        mainContainerEl.remove();
        quizOverDiv.style.display = "block";

        var finalScore = document.createElement("p")
        finalScore.className = "final-score";
        finalScore.textContent = "Your Final Score Is " + timeLeft + ".";
        quizOverHeaderEl.appendChild(finalScore);

}



// var storageScores = function() {
    
    
//     console.log(scoresArray);
// }

var storeObjects = function() {
    // event.preventDefault();
    var initials = document.getElementById("initials").value.trim();
    console.log({ initials });

    while (initials === "" || initials === null) {
            initials = window.prompt("Please enter your initials to log your score!")
        }
    var scoresObj = {
        name: initials,
        score: timeLeft,
    };
    scoresArray.push(scoresObj);
    
    // localStorage.setItem("highscores", JSON.stringify(scoresArray));
    localStorage.setItem(initials,JSON.stringify({initials, timeLeft}));
    console.log("array hjere",scoresArray);
}

// var printScores = function() {
//     // pull the items from storage - parse them back, iterate through each to pull all the scores - 
//     var savedScores = localStorage.getItem("highscores");
   
//         if (!savedScores) {
//             scoresArray = [];
//             return false;
//         }

//     savedScores = JSON.parse(savedScores);
//     console.log("Savced Scores",savedScores);
//     return savedScores;
// };

// const listScores = function(myObject) {
    
//     for (i = 0; i < myObject.length; i++) {
//         var addScore = document.createElement("tr");
//     addScore.className = "row-scores";
//     tableEl.appendChild(addScore);
//     }
    
// }
// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", startQuiz);
scoresButtonEl.addEventListener("click", function(){
    storeObjects();
    location.href= "highscores.html";
    // listScores(printScores);
});

// PseudoCode
// I need to create multiple functions to handle each of the things that I am wanting to accomplish. 
    // I will need one function to begin the quiz, eliminating all of the content prior
    // I will need another function that will iterate through the quiz questions using the counter for the questions.The questions and answers I can pull from my array using a for loop
    // I will need another function to end the quiz and tabulate the score. 
    // Lastly, I will need a function that will set everything to localStorage. 

    // var answerEl = document.querySelector(".answer-result"); <--- Doesn't seem to have any application. Delete after final checks.
    // var mainEl = document.querySelector("main"); <--- Doesn't seem to have any application. Delete after final checks. 