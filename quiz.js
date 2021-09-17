const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswers = ["180","55"];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
      index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  
  output.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);