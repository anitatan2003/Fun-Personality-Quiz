var result = document.getElementById("result");
var earlyScore = 0; //Store early bird score
var nightScore = 0; //Store night owl score

var questionCount = 0; //Store number of answers clicked on

//Store HTML element using the DOM


var restartButton = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked
restartButton.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", eb);
q1a2.addEventListener("click", no);

q2a1.addEventListener("click", eb);
q2a2.addEventListener("click", no);

q3a1.addEventListener("click", eb);
q3a2.addEventListener("click", no);

//store early bird score
function eb() {
  earlyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " earlyScore = " + earlyScore);

// End the quiz after question 3
if (questionCount == 3){
  console.log("The quiz is done!");
  // Update the results
  updateResult();
  }
}

//store night owl score
function no() {
  nightScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " nightScore = " + nightScore);

// End the quiz after question 3
if (questionCount == 3){
  console.log("The quiz is done!");
  // Update the results
  updateResult();
  }
}
// Update quiz result
function updateResult() {
  if(earlyScore >= 2){
    result.innerHTML = "You are an early bird!";
    console.log("You are an early bird!");
  }  else if (nightScore >= 2) {
    result.innerHTML = "You are a night owl!";
    console.log("You are a night owl!");
  }
}

// Restarting the quiz
function restartQuiz() {
    result.innerHTML = "Your result is...";
    earlyScore = 0;
    nightScore = 0;
    questionCount = 0;
}

