var questions = [
    {
        question: "What is my dog's name?",
        answers: ['Bristol', 'London', 'Adelaide', 'Sydney'],
        correct: 'first answer'
    },
    {
        question: "Second Question",
        answers: ['first answer', 'second answer', 'third answer', 'fourth answer'],
        correct: 'third answer'
    },
    {
        question: "Third Question",
        answers: ['first answer', 'second answer', 'third answer', 'fourth answer'],
        correct: 'second answer'
    },
    {
        question: "Fourth Question",
        answers: ['first answer', 'second answer', 'third answer', 'fourth answer'],
        correct: 'first answer'
    },
    {
        question: "Fifth Question",
        answers: ['first answer', 'second answer', 'third answer', 'fourth answer'],
        correct: 'fourth answer'
    }
];

// querySelector for Event Listener to begin quiz
var startButtonEl = document.querySelector("#begin-quiz");
var containerEl = document.querySelector(".container");
var titleEl = document.querySelector(".title-div");
var rulesEl = document.querySelector(".rules-div");
var buttonEl = document.querySelector(".button-div");



// Eliminate Starting Content, Begin Quiz
var beginQuizHandler = function() {
    titleEl.remove();
    rulesEl.remove();
    buttonEl.remove();

    var questionTitle = document.createElement("div");
    questionTitle.innerHTML = "<h2 class='question-name'>" + questions[0].question + "</h3>";
    containerEl.appendChild(questionTitle);

    for (let i = 0; i < questions[0].answers.length; i++) {
        var answerButtons = document.createElement("div");
    answerButtons.className = "buttons";
    answerButtons.innerHTML += "<button class='quiz-button'>" + questions[0].answers[i] + "</button>";
    questionTitle.append(answerButtons);
    }

    // var beginQuizHandler = function() {
    //     titleEl.remove();
    //     rulesEl.remove();
    //     buttonEl.remove();
    
    //     for (let i = 0; i < questions[i].question; i++) {
    //         var questionTitle = document.createElement("div");
    //     questionTitle.innerHTML = "<h2 class='question-name'>" + questions[0].question + "</h3>";
    //     containerEl.appendChild(questionTitle);
    //         for (let j = 0; j < questions[0].answers.length; j++) {
    //             var answerButtons = document.createElement("div");
    //                 answerButtons.className = "buttons";
    //                 answerButtons.innerHTML += "<button class='quiz-button'>" + questions[0].answers[j] + "</button>";
    //                 questionTitle.append(answerButtons);
    //         } 
    //     }

};


// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", beginQuizHandler);

