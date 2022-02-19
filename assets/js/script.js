// Creating a question array with number, question, answers, and options

let questions = [
 {
  q: '"CSS" stands for:',
  options: [
   { text: "Capital Style Sheets", correct: false},
   { text: "Cascading Simple Styles", correct: false},
   { text: "Cascading Style Sheets", correct: true},
   { text: "Capital Simple Sheets", correct: false}
  ],
 },

 {
  q: "What does Javascript allow the user to do?",
  options: [
   {text: "Style the webpage.", correct: false},
   {text: "Write HTML for the webpage", correct: false},
   {text: "Interact with the webpage", correct: false},
   {text: "All of the above", correct: true},
  ],
 },

 {
  q: "What does 'HTML' stand for?",
  options: [
   {text: "High Text Making Language", correct: false},
   {text: "Hello Talk Mummy Love", correct: false},
   {text: "Hypertext Markup Language", correct: true},
   {text: "Hypertext Making Language", correct: false},
  ],
 },

 {
  q: "What are the most commonly used loops?",
  options: [
   {text: "For and While", correct: true},
   {text: "For and When", correct: false},
   {text: "Fake and While", correct: false},
   {text: "In and When", correct: false},
  ],
 }
]

// Get elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const startPage = document.getElementById('start-page');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons')
const resultEl = document.getElementById('result')
const timerEl = document.getElementById('timer')
var userScore = 0;

// Timer function
function countdown() {
 var timeLeft = 25;

var timeInterval = setInterval(function() {
 if (timeLeft >= 2) {
   timerEl.textContent = timeLeft + " seconds remaining";
   timeLeft--;
 }
 else if (timeLeft == 1) {
   timerEl.textContent = timeLeft + " second remaining";
   timeLeft--;
 }
 else {
   timerEl.textContent = " ";
   clearInterval(setInterval);
  
   
 }

}, 1000);
};

let shuffledQuestions, currentQuestionIndex

// Adding event listener to startButton
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
 currentQuestionIndex++
 setNextQuestion();
})

// startGame function
function startGame() {
 startButton.classList.add('hide');
 shuffledQuestions = questions.sort(() => Math.random() - .5);
 currentQuestionIndex = 0;
 startPage.classList.add('hide');
 questionContainerEl.classList.remove('hide');
 countdown();
 setNextQuestion();
}

// setNextQuestion function
function setNextQuestion() {
 //resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
 if (questions[questions.length - 1]) {
  //endGame()
 }
}

// Create showQuestion function
function showQuestion(questions) { 
 //const answerButtonEl = document.getElementById('answer-buttons')
 questionEl.innerText = questions.q
 answerButtonEl.remove()
 const answerButton = document.createElement('div')
 answerButton.setAttribute('id', 'answer-buttons')
 questionEl.append(answerButton)
 questions.options.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
   button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer);
  answerButton.appendChild(button)
 })
}




// Selectanswer function
function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonEl.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
 })

 if (correct) {
  userScore = userScore + 5;
}
 else {
  userScore = userScore - 4;
}
console.log(currentQuestionIndex)
}

function endGame() {

 var userName = window.prompt("Please enter your initials")
 var highscore = userScore
 if (highScore === null) {
  highScore = 0;
}

if (userScore > highscore) {
 localStorage.setItem("highscore", userScore)
 localStorage.setItem("initials", userName)
}
 startButton.classList.remove('hide')
 startButton.innerText = 'Restart'

}

function setStatusClass(element, correct) {
 clearStatusClass(element)
 
 if (correct) {
  //resultEl.classList.remove('hide')
  element.classList.add('correct')


  //resultEl.innerText = 'Correct!'
 } else {
  element.classList.add('wrong')
 }
}

function clearStatusClass(element) {
 element.classList.remove('correct')
 element.classList.remove('wrong')
}




