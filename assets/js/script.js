 //*Declared variables for Dom Elements
 const qContainer = document.getElementById('container');
 const wrestlerImage = document.getElementById('headshot');
 const wrestlerName = document.getElementById('wrestler-name')
 const currentQuestion = document.getElementById('question-display');
 const answerButtons = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex;

 //*Function to hide next button when not needed
  document.addEventListener('DOMContentLoaded', () => {
    nextButton.classList.add("hide"); // Initially hide the 'Next' button
  });

 
