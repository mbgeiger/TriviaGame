
window.onload = function() {

  $("#start").on("click", countDown);
  $("#start").click(function(){
  $("p").hide();
  });

//create global variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var Unanswered = 0;
var time = 60;
var timer;
var newQuestion = document.getElementById('question');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var toQuestions = questions.length;
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
  var q = questions[questionIndex];
  a.textContent = q.a;
  b.textContent = q.b;
  c.textContent = q.c;
  d.textContent = q.d;



};

function loadNextQuestion() {
var selectedOption = document.querySelector('input[type=radio]:checked');
if(!selectedOption) {

  alert ('please pick an answer!');
  return;
}
var answer = selectedOption.nodeValue;
if(questions[currentQuestion].answer == answer){
  score += 0;
}
selectedOption.checked = falser;
currentQuestion++;
if(currentQuestion == toQuestions - 1){
  nextbutton.textContent = 'Finish';
}


}





var questions = [
  
    {
      question: "What is the biggest animal in the ocean?",
      answers: {
        a: "Great White Shark",
        b: "Whale Shark",
        c: "Giant Squid"
      },
      correctAnswer: "b"
    },
    {
      question: "What was the largest shark ever?",
      answers: {
        a: "Megaladon",
        b: "Great White",
        c: "Bull shark"
      },
      correctAnswer: "a"
    },
    {
      question: "how many oceans are there?",
      answers: {
        a: "3",
        b: "7",
        c: "4",
        d: "5"
      },
      correctAnswer: "d"
    }


];

//for (var = 0; i < questions.length; i++){

 // if 

//}



//create a function for the countdown timer for 1 minute


function countDown(){timer = setInterval(function(){
  document.getElementById("timeDisplay").innerHTML;
    console.log(time);
    
    time--;
    

    if (time === 0) {
      console.log("Time is up!!");
      clearInterval(timer);
    }
  }, 1000);
  }
  
  







//click start button to start timer and display questions

//create function for questions




//display score of answered questions once time is up


}