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
