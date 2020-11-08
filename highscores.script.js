
var tableEl = document.querySelector("#row-scores");
var nameSection = document.querySelector("#nameTable");
var scoreSection = document.querySelector("#scoreTable");

function getLocalStorage() {
    var values = [],
    // var obj;
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( 
            {
              "name": JSON.parse(localStorage.getItem(keys[i])).initials,
              "score": JSON.parse(localStorage.getItem(keys[i])).timeLeft
            }
         );
    }
    return values;
}

// var printScores = function() {
//     savedScores = getLocalStorage();
//     return savedScores;
// };

const listScores = function(myObject) {
    // console.log("MyObjecTL:",myObject);
    // console.log("Object Length", myObject.length)
    for (i = 0; i < myObject.length; i++) {
        console.log(myObject[i])
        // console.log("Object Length", myObject.length)
        var addScore = document.createElement("tr");
    addScore.className = "row-scores";
    nameSection.innerHTML += `${myObject[i].name} <br>`;
    scoreSection.innerHTML += `${myObject[i].score} <br>`;
    // console.log(addScore);
    tableEl.appendChild(addScore);
    }
};

listScores(getLocalStorage());