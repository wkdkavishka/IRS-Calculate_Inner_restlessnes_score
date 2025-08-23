// question interface
interface Question {
  question: string; // question text
  marking_polarity: boolean; // true for positive marking, false for negative marking
  marking_range: { min: number; max: number }; // marking range // usually within 1-7
}

// questions array
const questions: Question[] = [
  // Direct-scored items (higher = more restlessness)
  {
    question: "My thoughts race through my mind.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I find it hard to mentally relax.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "My mind feels constantly 'busy'.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I have difficulty stopping my thoughts when I want to sleep.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel an inner urge to keep myself occupied.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel restless even when sitting quietly.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "My attention easily drifts away during conversations.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I find it difficult to concentrate on what someone is saying.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I often lose track of my thoughts mid-task.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel mentally disorganized.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I jump quickly from one thought to another.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I struggle to keep my attention steady on one thing.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question:
      "I often think about unrelated things when I'm supposed to be focused.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I tend to act on ideas before fully thinking them through.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I get mentally impatient if things move too slowly.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel a strong need to be mentally stimulated all the time.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I notice my thoughts interfere with getting things done.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I have difficulty putting worries or ideas aside.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "My thoughts often make me feel unsettled.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel mentally impulsive.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "My mind feels 'scattered' or hard to organize.",
    marking_polarity: true,
    marking_range: { min: 1, max: 7 },
  },

  // Reverse-scored items (higher = less restlessness)
  {
    question: "I am organized.",
    marking_polarity: false,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I feel mentally calm.",
    marking_polarity: false,
    marking_range: { min: 1, max: 7 },
  },
  {
    question: "I can focus well on tasks.",
    marking_polarity: false,
    marking_range: { min: 1, max: 7 },
  },
];

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

// print guild lines function
function print_guild_lines() {
  console.log(
    `${colors.green}Please rate the following statements on a scale of 1 to 7 \n where 1 means 'not true for me' and 7 means 'very true for me'.${colors.reset}`
  );
  console.log(`${colors.red}Please enter a valid input.${colors.reset}`);
}

// calculate score function
function calculate_score(): number {
  let score: number = 0;
  questions.forEach((question) => {
    // prompt the question and get the user input
    const user_input = get_input(question);

    // calculate the score
    score += question.marking_polarity
      ? user_input
      : question.marking_range.max - user_input;
  });

  return score;
}

// get the input
function get_input(question: Question): number {
  while (true) {
    // Print question in green
    console.log(`${colors.green}${question.question}${colors.reset}`);
    const user_input = prompt("Your answer (1-7): ");

    if (user_input === null) {
      console.log(
        `${colors.red}Please enter a valid input between (1-7)${colors.reset}`
      );
      continue;
    }

    // check if the user input is valid
    const numInput = parseInt(user_input);
    if (
      !isNaN(numInput) &&
      numInput >= question.marking_range.min &&
      numInput <= question.marking_range.max
    ) {
      return numInput;
    }

    console.log(
      `${colors.red}Please enter a number between 1 and 7${colors.reset}`
    );
  }
}

// interpret score function
function interpretScore(score: number): string {
  if (score < 40) {
    return "Very low inner restlessness. This is unusually low and may indicate high levels of mental calmness.";
  } else if (score < 70) {
    return "Low to moderate inner restlessness. Typical for neurotypical adults.";
  } else if (score < 90) {
    return "Moderate inner restlessness. May indicate subclinical levels of restlessness or mild ADHD traits.";
  } else if (score < 110) {
    return "High inner restlessness. Typical for adults with ADHD.";
  } else {
    return "Very high inner restlessness. Commonly seen in individuals with significant ADHD symptoms.";
  }
}

function printAttribution() {
  console.log(`\n${colors.yellow}---`);
  console.log(
    "Internal Restlessness Scale (IRS) - Developed by Dr. Lisa Weyandt"
  );
  console.log(
    "Note: This implementation is for educational and research purposes only."
  );
  console.log(
    "For clinical use, please refer to the original research and consult with a qualified professional."
  );
  console.log(`---${colors.reset}\n`);
}

function main() {
  // Print attribution and disclaimer
  printAttribution();

  // Print guidelines
  print_guild_lines();

  // Calculate score
  const score = calculate_score();

  // Calculate percentage of maximum possible score (24-168 range)
  const percentage = Math.round(((score - 24) / (168 - 24)) * 100);

  // Print results
  console.log("\n--- Results ---");
  console.log(
    `Your IRS Score: ${score}/168 (${percentage}% of maximum possible score)`
  );
  console.log(interpretScore(score));

  // Print score interpretation
  console.log("\nScore Interpretation:");
  console.log("- 24-69: Typical range for neurotypical adults");
  console.log("- 70-89: Borderline range, may indicate subclinical symptoms");
  console.log("- 90-110: Typical range for adults with ADHD");
  console.log("- 110-168: High range, often seen in significant ADHD symptoms");
}

// Run the main function
main();
