// Highscores Page JavaScript

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var highscoreList = document.getElementById('scores-list')
highscoreList.innerHTML = highScores
.map(score => {
 return `<li> ${score.name} - ${score.score}</li>`
});
 highscoreList.textContent = 

//JSON.parse(localStorage.getItem("highScores")) || [];
console.log(score)
//highscoreList.textContent = localStorage.getItem('highscore')