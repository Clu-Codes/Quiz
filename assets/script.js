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

    
   
   
   
   
   
   
   
   
    // var answerButtons = document.getElementByClassName("button-div").innerHTML += "<button class='begin-quiz'>" + questions[0].answers[i] + "</button>";
    
 
    
    
   
    // for (let i = 0; i < questions.length; i++) {
    //     var questionDivEl = document.createElement("div")
    //     questionDivEl.className = "question-container";
    //     questionDivEl.innerHTML = "<h2 class='question-name'>" + questions[i].question + "</h2>";
    //     mainEl.appendChild(questionDivEl);


        
        // for (let j = 0; j < answers.length; j++) {
        //     var answersEl = document.createElement("div");
        //     answersEl.innerHTML = "<button class='answer-button'>" + questions[j].answers + "<button>";

        // questionDivEl.appendChild(answersEl);
        //     if (answers === correct) {
        //         window.alert("Correct!")
        //     } else {
        //         window.alert("Wrong.")
        //             // timer -= 1500        
        //     }
        // }
        
        
    // }
};


// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", beginQuizHandler);

