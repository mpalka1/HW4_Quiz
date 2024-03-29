/* global variables */
var questionDiv = document.getElementById('question');
var strtBtn = document.getElementById('strtBtn');
var choicesDiv = document.getElementById('choices');
var questionBtn = document.getElementById('questionBtn');
var startQuestion = 0;
var crtQtn = 1;
var score = 0;
var userGuess = "alerts";
/* helpers */
/* takes in index, uses that index to find question in db to return the title */
function init() {
  // hide start button
  start.style.display = "none";
}
// Check Answers
function checkAnswer() {
  if (userGuess === questions[crtQtn].answers) {
    score++;
    console.log(score);
    console.log(questions[crtQtn].answers);
  // } else if (userGuess !== questions[crtQtn].answers) {
    // decrease 10 seconds of time
    // secondsLeft -= 10;
  };
};
// Timer
function countdown(minutes) {
  var seconds = 60;
  var mins = minutes
  function tick() {
      var counter = document.getElementById("timer");
      var current_minutes = mins-1
      seconds--;
      counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          timeoutHandle=setTimeout(tick, 1000);
      } else {

          if(mins > 1){

             // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
             setTimeout(function () { countdown(mins - 1); }, 1000);

          }
      }
  }
  tick();
}
/* takes in index, uses this index to return the questions from the db */
function renderQuestion(index) {
  //show question
  return questions[index].title;
};
/* takes in index, uses this index to return the choices from the db */
function renderChoices(index) {
    choicesDiv.innerHTML = '';
    for(i = 0; i < questions[index].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[index].choices[i];
        choicesDiv.appendChild(choiceBtn);
    };
}
// begins quiz and hides initial screen


/* events */
// Start Button Action
strtBtn.addEventListener('click', function(){
  init();
  countdown(1); 
  quiz.style.display = "block"; 
    /* call redner question */
    questionDiv.innerHTML = renderQuestion(startQuestion);
    renderChoices(startQuestion);
});
// Next Button Action
choicesDiv.addEventListener('click', function() {
  // if()
  checkAnswer();
  if(crtQtn<questions.length){
    questionDiv.innerHTML = renderQuestion(crtQtn);
    renderChoices(crtQtn);
    crtQtn+=1;
  }else if(crtQtn===questions.length){
    questionDiv.innerHTML = "The Quiz is Over";
  }
});
// Answer Button Check
questionBtn.addEventListener('click', function() {
  if(crtQtn<questions.length){
    questionDiv.innerHTML = renderQuestion(crtQtn);
    renderChoices(crtQtn);
  }
});
