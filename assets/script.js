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

// querySelector for Event Listener to begin quiz
var startButtonEl = document.querySelector("#begin-quiz");
var questionsContainer = document.querySelector(".questions-container");
var questionName = document.querySelector(".question-title");
var titleEl = document.querySelector(".title-div");
var rulesEl = document.querySelector(".rules-div");
var buttonEl = document.querySelector(".button-div");
var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector("main");
var mainContainerEl = document.querySelector(".container");
var answerEl = document.querySelector(".answer-result");
var quizOverDiv = document.querySelector(".quiz-over");
var quizOverHeaderEl = document.querySelector(".quiz-over-header");

var counter = 0;
var timeLeft = 75;

var startQuiz = function() {
    titleEl.remove();
    rulesEl.remove();
    buttonEl.remove();
    questionsContainer.style.display = "block";

    // if (timeLeft > 0 && counter < questions.length

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

// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", startQuiz);
// startButtonEl.addEventListener("click", );

// PseudoCode
// I need to create multiple functions to handle each of the things that I am wanting to accomplish. 
    // I will need one function to begin the quiz, eliminating all of the content prior
    // I will need another function that will iterate through the quiz questions using the counter for the questions.The questions and answers I can pull from my array using a for loop
    // I will need another function to end the quiz and tabulate the score. 
    // Lastly, I will need a function that will set everything to localStorage. 