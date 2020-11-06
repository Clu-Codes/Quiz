var questions = [
    {
        question: "First Question",
        answers: ['first answer', 'second answer', 'third answer', 'fourth answer'],
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
var mainDivEl = document.querySelector(".div-main");



// Eliminate Starting Content, Begin Quiz
var beginQuizHandler = function() {
    mainDivEl.remove();
    var questionHandler = function() {
        var questionDivEl = document.createElement("div")
            questionDivEl.className = "question-container";
            questionDivEl.innerHTML = "<h2 class='question-name'>" + question[i] + "</h3>";

        var answersEl = document.createElement("div");
            answersEl.innerHTML = "<button class='answer-button'>" + answers[j] + "<button>";

        questionDivEl.appendChild(answersEl);
    }
    return questionHandler;
};

// var beginQuizHandler = function(event) {
//     var gameBegin = () => {
//         mainEl.hide; 
//         for (let i = 0; i < question.length; i++) {
//             for (let j = 0; j < answers.length; j++) {
//                 if (answers === correct) {
//                      window.alert("Correct!")
//                  } else {
//                      window.alert("Wrong.")
//                          timer -= 1500        
//                    }
//             }
//         }
//     }
// };





// Event Listener to begin quiz when button is clicked
startButtonEl.addEventListener("click", beginQuizHandler);

