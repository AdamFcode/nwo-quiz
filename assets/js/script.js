//*Added to clear warnings in JSHint as learned through stackoverflow
/*jshint esversion: 6 */

//*Declared variables for Dom Elements
const qContainer = document.getElementById('container');
const wrestlerImage = document.getElementById('headshot');
const wrestlerName = document.getElementById('wrestler-name')
const currentQuestion = document.getElementById('question-display');
const answerButtons = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const quizApp = document.getElementById('quiz-app');
const scoreTally = document.createElement('div');
const nameInput = document.createElement('div');

scoreTally.setAttribute('id', 'score');
scoreTally.classList.add('score', 'hide');
qContainer.appendChild(scoreTally);
nameInput.setAttribute('id', 'username');
nameInput.classList.add('username', 'hide');
qContainer.appendChild(nameInput);

let shuffledQuestions, currentQuestionIndex;
let score = 0;

//*Function to hide next button when not needed
document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add("hide"); // Initially hide the 'Next' button
});

//* Questions Array
//*Wrestler is the name of the current performer in question
//*Img is the headhsot fot current performer
//*Question is the short bio of the performer
//*Answer is the text content of the answer buttons

let questions = [
  {
    wrestler: "Buff Bagwell", 
    img: "assets/images/buff-bagwell.webp",
    question: "Buff Bagwell is a former five-time WCW Champion who served ten years with World Championship Wrestling. His promising career may have been hamstringed by a contentious debut in WWE, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Chris Jericho",
    img: "assets/images/chris-jericho.webp",
    question: "Lionheart, Y2J, Le Champion, The Ocho. Multiple titles, multiple reigns; Last ever WCW Champion; First ever Undisputed WWF Champion- First ever AEW Champion. Chris Jericho has done it all. But was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Chyna",
    img: "assets/images/chyna.webp",
    question: "The Ninth Wonder of the World may be a founding member of DX and the only woman to ever hold the Intercontinental Championship, but was she a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "David Arquette",
    img: "assets/images/david-arquette.webp",
    question: "A member of the famous Arquette family and an accomplished Hollywood star, it was only natural that David would become… WCW Champion? He may be one of the most controversial champions of all time, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Disco Inferno",
    img: "assets/images/disco-inferno.webp",
    question: "Two-time WCW Television Champion. Cruiserweight Champion. WCW Tag Team Champion. Disco Inferno proved himself both in-ring and backstage, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Eddie Guerrero",
    img: "assets/images/eddie-guerrero.webp",
    question: "Eddie Guerrero is undoubtedly one of the most beloved wrestlers of all time. Boasting numerous championships and supporters across his tragically short career, his in-ring style echoes throughout modern wrestling. But was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Eric Bischoff",
    img: "assets/images/eric-bischoff.webp",
    question: "Famed for being the only man to challenge Vince McMahon in the ratings and win (for 83 weeks!), Eric Bischoff is one of the most successful bookers in the history of the business. He was the executive producer of WCW throughout the 90’s, but was he also a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Hiroyoshi Tenzan",
    img: "assets/images/hiroyoshi-tenzan.webp",
    question: "With a title history that boasts multiple IWGP and G1 wins in New Japan Wrestling, both as a single and as part of a tag, Hiroyoshi Tenzan is one of the most striking brawlers to ever emerge from Japan. But was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Jushin Thunder Liger",
    img: "assets/images/jushin-liger.webp",
    question: "Debuting in 1984 and retiring in 2020 with over 4,000 matches under his belt, Jushin Thunder Liger’s name is synonymous not only with New Japan, but with high-octane wrestling. He may have spent nearly four decades between the ropes, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Konnan",
    img: "assets/images/konnan.webp",
    question: "Often referred to as Mexico’s Hulk Hogan, Konnan had a title-studded career in many rings across the world, as well as enjoying success in several roles behind the scenes of big promotions. But was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Luna Vachon",
    img: "assets/images/luna-vachon.webp",
    question: "WWE hall of famer and noted member of The Human Oddities, Luna Vachon was a trailblazer in women’s wrestling and both an inspiration and a trainer for several women in the modern era. But was she a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Masahiro Chono",
    img: "assets/images/masahiro-chono.webp",
    question: "Boasting the spot of NJPW’s top heel for most of his career, Masahiro Chono is also the wrestler with the most G1 Climax wins at 5. He is undoubtedly one of the greatest Japanese wrestlers of all time, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Rowdy Roddy Piper",
    img: "assets/images/roddy-piper.webp",
    question: "One of the most recognisable wrestlers of all time, Roddy Piper enjoyed success across multiple promotions in his career along with cult status as an actor. He may have cast the mould for what a wrestling heel should be, but was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: false },
      { text: 'Jabroni!', correct: true }
    ]
  },
  {
    wrestler: "Sting",
    img: "assets/images/sting.webp",
    question: "It’s Sting! Aptly named The Icon, Sting’s career spanned several decades, iterations and accomplishments. No matter what version of Sting the fans got, they showed tremendous love and respect for one of the greatest ever. But was he a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },
  {
    wrestler: "Torrie Wilson",
    img: "assets/images/torrie-wilson.webp",
    question: "The women’s title may have alluded her throughout her run, but Torrie Wilson is one of the most recognisable wrestlers of her era and was inducted into the WWE Hall of Fame in 2019. But was she a member of the nWo?",
    answer: [
      { text: 'nWo For Life!', correct: true },
      { text: 'Jabroni!', correct: false }
    ]
  },];

//* Event Listener to start Game on click
startButton.addEventListener('click', startGame);

//*Function that starts the game
function startGame() {
  startButton.classList.add('hide'); //* Hide the start button
  shuffledQuestions = questions.sort(() => Math.random() - .5); //*Shuffle the questions array
  currentQuestionIndex = 0; //*reset question index
  qContainer.classList.remove('hide'); //*Display the quiz container
  quizApp.classList.remove("hide"); //* Display the quiz app
  showQuestion();
}

//*Function to populate current question
function showQuestion(question) { //*Access questions array and populate the Question
  let q = questions[currentQuestionIndex]
  currentQuestion.textContent = q.question;
  wrestlerName.textContent = q.wrestler;
  wrestlerImage.querySelector("img").src = q.img; 
  q.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', () => selectAnswer(button));
    answerButtons.appendChild(button);
});
}

//*Function for selecting answer and displaying the next button
function selectAnswer(selectedButton) {
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;});
  
    const correct = selectedButton.dataset.correct;
    if (correct)  {
      score++;
    }
  
    if (questions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      endQuiz();
    }}

    //* Function to detect next button click and progress Quiz
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      nextQuestion();
    }
  )

  //*Function to set the next question
  function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  //*Function to reset current Question
  function resetState() {
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }


//*Function to request username
function endQuiz() {
   quizApp.classList.add("hide");
  nextButton.classList.add("hide");
  nameInput.classList.remove("hide");

  nameInput.innerHTML = `
  <br>
  <p>Congratulations Brother! Submit your name to the nWo!:</P>
  <br>
<form id="form-submit">
  <label for="form-submit">Username</label>
  <input type="text" id="name" required></input> 
  <button type="submit" class="submit-btn" false>Submit</button>
</form>
  `;

  const formSubmit = document.getElementById("form-submit");

  formSubmit.addEventListener("submit", event => {
    event.preventDefault() //*Prevent page from auto resetting on form submission
    showScore();
  })
}

//*Function to display user Score
function showScore() { //*Hide unnecesary elements and target user with their score
  nameInput.classList.add("hide");
  scoreTally.classList.remove("hide");
  const formName = document.getElementById('name');
  let username = formName.value;
  scoreTally.innerHTML = `
  <h2>Quiz Completed!!!</h2>
  <br>
  <p> Game over, ${username}! You scored ${score} out of ${questions.length}</p>
  <br>
  <p>Click below to try again, brother!</p>
  <button onclick="restartQuiz(event)" class="rstrt-btn" required>Back to the nWo!</button>
  `;
  qContainer.appendChild(scoreTally);
  
} 

//*Function to restart the Quiz
function restartQuiz() {
  answerButtons.innerHTML = ""; //* Code to clear button content
  scoreTally.classList.add("hide");
  score= 0;
  currentQuestionIndex = 0;
  startGame();
}
