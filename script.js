// DOM Elements
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const progressBar = document.querySelector("#progress-bar");
const progressText = document.getElementById("progress-text");
const slider = document.getElementById("response-slider");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score-text");
const scoreFill = document.getElementById("score-fill");
const interpretation = document.getElementById("interpretation");

// Questions data
const questions = [
  // Direct-scored items (higher = more restlessness)
  { question: "My thoughts race through my mind.", marking_polarity: true },
  { question: "I find it hard to mentally relax.", marking_polarity: true },
  { question: "My mind feels constantly 'busy'.", marking_polarity: true },
  {
    question: "I have difficulty stopping my thoughts when I want to sleep.",
    marking_polarity: true,
  },
  {
    question: "I feel an inner urge to keep myself occupied.",
    marking_polarity: true,
  },
  {
    question: "I feel restless even when sitting quietly.",
    marking_polarity: true,
  },
  {
    question: "My attention easily drifts away during conversations.",
    marking_polarity: true,
  },
  {
    question: "I find it difficult to concentrate on what someone is saying.",
    marking_polarity: true,
  },
  {
    question: "I often lose track of my thoughts mid-task.",
    marking_polarity: true,
  },
  { question: "I feel mentally disorganized.", marking_polarity: true },
  {
    question: "I jump quickly from one thought to another.",
    marking_polarity: true,
  },
  {
    question: "I struggle to keep my attention steady on one thing.",
    marking_polarity: true,
  },
  {
    question:
      "I often think about unrelated things when I'm supposed to be focused.",
    marking_polarity: true,
  },
  {
    question: "I tend to act on ideas before fully thinking them through.",
    marking_polarity: true,
  },
  {
    question: "I get mentally impatient if things move too slowly.",
    marking_polarity: true,
  },
  {
    question: "I feel a strong need to be mentally stimulated all the time.",
    marking_polarity: true,
  },
  {
    question: "I notice my thoughts interfere with getting things done.",
    marking_polarity: true,
  },
  {
    question: "I have difficulty putting worries or ideas aside.",
    marking_polarity: true,
  },
  {
    question: "My thoughts often make me feel unsettled.",
    marking_polarity: true,
  },
  { question: "I feel mentally impulsive.", marking_polarity: true },
  {
    question: "My mind feels 'scattered' or hard to organize.",
    marking_polarity: true,
  },
  // Reverse-scored items (higher = less restlessness)
  { question: "I am organized.", marking_polarity: false },
  { question: "I feel mentally calm.", marking_polarity: false },
  { question: "I can focus well on tasks.", marking_polarity: false },
];

// App state
let currentQuestion = 0;
const responses = new Array(questions.length).fill(null);

// Initialize the app
function init() {
  showQuestion();
  updateProgress();

  // Event listeners
  nextBtn.addEventListener("click", nextQuestion);
  prevBtn.addEventListener("click", prevQuestion);
  restartBtn.addEventListener("click", restartTest);
  slider.addEventListener("input", updateSliderValue);

  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !nextBtn.disabled) {
      nextQuestion();
    } else if (e.key === "ArrowLeft" && !prevBtn.disabled) {
      prevQuestion();
    } else if (e.key === "ArrowRight" && !nextBtn.disabled) {
      nextQuestion();
    }
  });
}

// Show current question
function showQuestion() {
  if (currentQuestion >= 0 && currentQuestion < questions.length) {
    questionText.textContent = questions[currentQuestion].question;
    slider.value = responses[currentQuestion] || 4; // Default to middle value
    updateSliderValue();
    updateNavigationButtons();
  }
}

// Update slider value display
function updateSliderValue() {
  const value = slider.value;
  const percentage = ((value - 1) / 6) * 100;
  slider.style.background = `linear-gradient(to right, #4a6fa5 0%, #4a6fa5 ${percentage}%, #e9ecef ${percentage}%, #e9ecef 100%)`;

  // Store the response
  responses[currentQuestion] = parseInt(value);
}

// Update progress bar and text
function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `Question ${currentQuestion + 1} of ${
    questions.length
  }`;
}

// Update navigation buttons state
function updateNavigationButtons() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent =
    currentQuestion === questions.length - 1 ? "Finish" : "Next";

  // Disable next button if no response for current question
  if (currentQuestion < questions.length) {
    nextBtn.disabled = responses[currentQuestion] === null;
  }
}

// Go to next question
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    updateProgress();
  } else {
    showResults();
  }
}

// Go to previous question
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    updateProgress();
  }
}

// Calculate total score
function calculateScore() {
  let score = 0;

  questions.forEach((question, index) => {
    const response = responses[index];
    if (response !== null) {
      score += question.marking_polarity ? response : 8 - response; // Reverse score for certain questions
    }
  });

  return score;
}

// Show results
function showResults() {
  const score = calculateScore();
  const percentage = Math.round(((score - 24) / (168 - 24)) * 100);

  // Update UI
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  // Animate score bar
  setTimeout(() => {
    scoreFill.style.width = `${percentage}%`;

    // Animate score text
    let currentScore = 0;
    const duration = 2000; // 2 seconds
    const step = score / (duration / 16); // 60fps

    const timer = setInterval(() => {
      currentScore = Math.min(Math.ceil(currentScore + step), score);
      scoreText.textContent = `${currentScore}/168`;

      if (currentScore >= score) {
        clearInterval(timer);
        scoreText.textContent = `${score}/168 (${percentage}%)`;
        showInterpretation(score);
      }
    }, 16);
  }, 100);
}

// Show interpretation based on score
function showInterpretation(score) {
  let interpretationText = "";

  if (score < 40) {
    interpretationText =
      "Very low inner restlessness. This is unusually low and may indicate high levels of mental calmness.";
  } else if (score < 70) {
    interpretationText =
      "Low to moderate inner restlessness. Typical for neurotypical adults.";
  } else if (score < 90) {
    interpretationText =
      "Moderate inner restlessness. May indicate subclinical levels of restlessness or mild ADHD traits.";
  } else if (score < 110) {
    interpretationText =
      "High inner restlessness. Typical for adults with ADHD.";
  } else {
    interpretationText =
      "Very high inner restlessness. Commonly seen in individuals with significant ADHD symptoms.";
  }

  interpretation.textContent = interpretationText;

  // Scroll to results
  resultContainer.scrollIntoView({ behavior: "smooth" });
}

// Restart the test
function restartTest() {
  // Reset state
  currentQuestion = 0;
  responses.fill(null);

  // Reset UI
  questionContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  scoreFill.style.width = "0%";
  scoreText.textContent = "";

  // Show first question
  showQuestion();
  updateProgress();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
