const quizData = [
  {
    question: "What's the difference between a credit card and a debit card?",
    options: [
      "Credit cards access money directly from your bank account.",
      "Credit cards let you borrow from a bank or financial institution."
    ],
    answer: "Credit cards let you borrow from a bank or financial institution."
  },
  {
    question: "Why is it important to budget?",
    options: ["To save money", "To track spending", "To avoid debt", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What's an example of a short-term goal?",
    options: ["Saving for a car", "Saving for a house", "Saving for college", "Saving for an upcoming concert"],
    answer: "Saving for an upcoming concert"
  },
  {
    question: "How do you build a good credit history?",
    options: ["Pay bills on time", "Keep credit card balances low", "Limit new credit applications", "All of the above"],
    answer: "All of the above"
  }
];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
// We'll reuse the same two nodes above; no need to query a container

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const { question, options } = quizData[currentQuestion];
  questionEl.textContent = question;

  optionsEl.innerHTML = "";
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(option));
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.innerHTML = `<h2>Quiz Completed</h2><p>Your Score: ${score}/${quizData.length}</p>`;
  optionsEl.innerHTML = "";
  optionsEl.classList.add("center-result");

  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "option";
  retry.textContent = "Try Again";
  retry.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    optionsEl.classList.remove("center-result");
    showQuestion();
  });
  optionsEl.appendChild(retry);
}

showQuestion();
