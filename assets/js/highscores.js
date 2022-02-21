// Highscores Page JavaScript

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var highscoreList = document.getElementById('scores-list')
highscoreList.innerHTML = highScores
.map(score => {
 return `<li> ${score.name} - ${score.score}</li>`
});


//JSON.parse(localStorage.getItem("highScores")) || [];

//highScores.push(score)
//highScores.sort ((a, b) => b.score - a.score)
//highscoreList.textContent = localStorage.getItem('highscore')