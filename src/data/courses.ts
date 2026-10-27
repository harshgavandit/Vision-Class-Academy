export type CourseCategory =
  "School & boards" | "Engineering" | "Medical" | "Foundation & revision";

export type CourseExplanation = {
  overview: string[];
  whoShouldEnrol: string[];
  learningOutcomes: string[];
};

export const courseAdmissionPlaceholders = {
  duration: "[Course duration to be confirmed]",
  fees: "[Fees to be confirmed]",
  batchSize: "[Batch size to be confirmed]",
};

export type Course = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  highlights: string[];
  format: string;
  category: CourseCategory;
  eyebrow: string;
  image: string;
  imageAlt: string;
  accent: "blue" | "gold" | "teal";
  explanation: CourseExplanation;
  admission?: Partial<typeof courseAdmissionPlaceholders>;
};

export const courses: Course[] = [
  {
    slug: "class-10",
    explanation: {
      overview: [
        "Class 10 is an important stage for building subject knowledge and preparing for school and board examinations. This course focuses on understanding core topics, practising questions and organising revision in a manageable way.",
        "It is a useful starting point if you want help with difficult chapters or a clearer study routine. Before joining, discuss your school board, the subjects you need and the support available in the current batch.",
      ],
      whoShouldEnrol: [
        "Students studying in Class 10 and preparing for school or board examinations.",
        "Learners who want to revisit difficult concepts and practise questions.",
        "Students looking for a more organised revision routine.",
      ],
      learningOutcomes: [
        "Explain important concepts in your own words.",
        "Work through school and board-style questions step by step.",
        "Recognise the topics that need more practice.",
        "Build a practical revision plan around your school examinations.",
      ],
    },
    title: "Class 10",
    audience: "Students preparing for board examinations",
    summary:
      "Build clarity in core concepts and a steady, exam-ready study routine.",
    highlights: [
      "Subject-wise concept support",
      "Practice and revision plans",
      "Doubt-solving guidance",
    ],
    format: "[Batch schedule required]",
    category: "School & boards",
    eyebrow: "A confident start",
    image: "/images/courses/boards.svg",
    imageAlt:
      "Original illustration of books and a board examination study plan",
    accent: "blue",
  },
  {
    slug: "class-11-science",
    explanation: {
      overview: [
        "Class 11 introduces a deeper level of science after Class 10. This course is about understanding the new concepts in Physics, Chemistry and Mathematics or Biology, rather than trying to memorise everything at once.",
        "A clear foundation can make later topics easier to approach. Discuss your subject combination and whether your main goal is school preparation, a future entrance examination or both, so the academy can explain the appropriate course options.",
      ],
      whoShouldEnrol: [
        "Students entering or studying in Class 11 Science.",
        "Learners adjusting to the step up from Class 10 science.",
        "Students who want to strengthen the basics before Class 12 or entrance preparation.",
      ],
      learningOutcomes: [
        "Understand the ideas behind important Class 11 topics.",
        "Connect new concepts with what you have already studied.",
        "Approach subject questions with a clear sequence of steps.",
        "Develop study and practice habits for the science stream.",
      ],
    },
    title: "Class 11 Science",
    audience: "Students beginning the science stream",
    summary:
      "Establish strong fundamentals for school and future entrance preparation.",
    highlights: [
      "Physics, Chemistry and Mathematics/Biology",
      "Structured assignments",
      "Regular academic guidance",
    ],
    format: "[Batch schedule required]",
    category: "School & boards",
    eyebrow: "Explore the science stream",
    image: "/images/courses/physics.svg",
    imageAlt:
      "Original science illustration with an atom and a laboratory flask",
    accent: "teal",
  },
  {
    slug: "class-12-science",
    explanation: {
      overview: [
        "Class 12 Science brings together new topics, revision and preparation for board examinations. This course focuses on understanding the syllabus, applying concepts in questions and bringing your preparation into a clear study plan.",
        "Students may also be considering engineering or medical entrance examinations. Discuss those goals separately during counselling so you understand which preparation belongs to the board course and which may require a dedicated entrance programme.",
      ],
      whoShouldEnrol: [
        "Students studying in Class 12 Science.",
        "Learners who need structured revision for their board subjects.",
        "Students deciding how to balance school work and entrance preparation.",
      ],
      learningOutcomes: [
        "Explain and apply the main concepts in your chosen subjects.",
        "Identify gaps to revisit before examinations.",
        "Practise organising answers and problem-solving steps clearly.",
        "Plan revision around both new and previously studied topics.",
      ],
    },
    title: "Class 12 Science",
    audience: "Students balancing boards and entrances",
    summary:
      "Focused preparation for Class 12 concepts, boards and entrance readiness.",
    highlights: [
      "Board-aligned revision",
      "Problem-solving practice",
      "Doubt support",
    ],
    format: "[Batch schedule required]",
    category: "School & boards",
    eyebrow: "Build on your fundamentals",
    image: "/images/courses/physics.svg",
    imageAlt:
      "Original illustration representing science concepts and problem solving",
    accent: "blue",
  },
  {
    slug: "jee-main",
    explanation: {
      overview: [
        "JEE Main preparation is for students interested in an engineering pathway. It centres on Physics, Chemistry and Mathematics, with an emphasis on understanding concepts and using them to solve problems.",
        "This course offers a way to focus your practice, review mistakes and work on accuracy and time management. Discuss your current class, preparation level and exam plans with the academy to understand the available batch and subject coverage.",
      ],
      whoShouldEnrol: [
        "Students considering engineering entrance preparation.",
        "Learners who want more practice applying Physics, Chemistry and Mathematics concepts.",
        "Students looking to identify and improve weaker areas in their preparation.",
      ],
      learningOutcomes: [
        "Choose an appropriate method for a given problem.",
        "Apply concepts across Physics, Chemistry and Mathematics questions.",
        "Review incorrect answers and understand the reason for mistakes.",
        "Work towards a more accurate and organised approach to timed practice.",
      ],
    },
    title: "JEE Main",
    audience: "Engineering entrance aspirants",
    summary: "Develop accuracy, speed and problem-solving habits for JEE Main.",
    highlights: [
      "Topic-wise practice",
      "Mock-test strategy",
      "Performance review",
    ],
    format: "[Batch schedule required]",
    category: "Engineering",
    eyebrow: "Think. Practise. Progress.",
    image: "/images/courses/engineering.svg",
    imageAlt:
      "Original engineering illustration with mathematical shapes and a compass",
    accent: "blue",
  },
  {
    slug: "jee-advanced",
    explanation: {
      overview: [
        "JEE Advanced preparation involves going deeper into Physics, Chemistry and Mathematics. The focus is on reasoning through unfamiliar problems, connecting ideas and working through questions that may need several steps.",
        "This course is suited to a conversation about your existing foundations and readiness for more demanding practice. Confirm the academy’s entry requirements, current batch and coverage before enrolling; examination eligibility should be checked separately with the official exam authority.",
      ],
      whoShouldEnrol: [
        "Engineering aspirants considering advanced-level entrance preparation.",
        "Students with a foundation in Physics, Chemistry and Mathematics who want deeper practice.",
        "Learners who want to improve their reasoning on multi-step problems.",
      ],
      learningOutcomes: [
        "Break a complex question into smaller, manageable steps.",
        "Connect more than one concept when solving a problem.",
        "Compare different approaches and explain your reasoning.",
        "Use question review to identify conceptual gaps and refine your approach.",
      ],
    },
    title: "JEE Advanced",
    audience: "Advanced engineering aspirants",
    summary:
      "Deep conceptual and multi-step problem practice for JEE Advanced preparation.",
    highlights: [
      "Advanced problem sets",
      "Conceptual discussions",
      "Guided test analysis",
    ],
    format: "[Batch schedule required]",
    category: "Engineering",
    eyebrow: "Go deeper into the concepts",
    image: "/images/courses/engineering.svg",
    imageAlt:
      "Original engineering illustration representing advanced mathematical reasoning",
    accent: "gold",
  },
  {
    slug: "neet",
    explanation: {
      overview: [
        "NEET preparation is for students interested in a medical pathway. It brings Biology, Physics and Chemistry together, with attention to understanding important concepts, studying the relevant material and practising questions.",
        "This course focuses on a steady approach to learning and revision. Discuss your current class, subject strengths and areas of difficulty with the academy, and confirm the syllabus coverage and available batch before choosing the programme.",
      ],
      whoShouldEnrol: [
        "Students considering medical entrance preparation.",
        "Learners who want to strengthen Biology, Physics and Chemistry concepts.",
        "Students who need a clearer approach to question practice and revision.",
      ],
      learningOutcomes: [
        "Explain important ideas in Biology, Physics and Chemistry.",
        "Read questions carefully and apply the relevant concepts.",
        "Use practice mistakes to identify topics that need revision.",
        "Build a more consistent subject-wise study routine.",
      ],
    },
    title: "NEET",
    audience: "Medical entrance aspirants",
    summary:
      "Systematic Biology, Physics and Chemistry preparation for NEET aspirants.",
    highlights: [
      "NCERT-focused learning",
      "Question practice",
      "Revision support",
    ],
    format: "[Batch schedule required]",
    category: "Medical",
    eyebrow: "Turn curiosity into understanding",
    image: "/images/courses/medicine.svg",
    imageAlt:
      "Original medical science illustration with a DNA strand and laboratory elements",
    accent: "teal",
  },
  {
    slug: "foundation-course",
    explanation: {
      overview: [
        "A foundation course helps students strengthen the basics before moving into more demanding science or entrance preparation. The aim is to make concepts easier to understand and develop curiosity, reasoning and problem-solving habits at an appropriate level.",
        "It can help you explore your interests before deciding on a future academic pathway. Ask the academy which classes are eligible, which subjects are included and whether the available foundation batch supports your school stage and longer-term goals.",
      ],
      whoShouldEnrol: [
        "Students at an earlier stage of planning their academic or entrance pathway.",
        "Learners who want to strengthen core concepts and study habits.",
        "Students exploring an interest in science and problem solving.",
      ],
      learningOutcomes: [
        "Explain basic ideas clearly before moving to harder questions.",
        "Use reasoning to work through age-appropriate problems.",
        "Develop habits for regular study, practice and asking questions.",
        "Understand which subjects and future pathways interest you.",
      ],
    },
    title: "Foundation Course",
    audience: "Early-stage competitive exam aspirants",
    summary:
      "Nurture curiosity and strong academic basics ahead of competitive preparation.",
    highlights: [
      "Concept building",
      "Study habits",
      "Age-appropriate challenges",
    ],
    format: "[Batch schedule required]",
    category: "Foundation & revision",
    eyebrow: "Small steps. Strong foundations.",
    image: "/images/courses/foundation.svg",
    imageAlt:
      "Original illustration of building blocks and a light bulb representing foundational learning",
    accent: "gold",
  },
  {
    slug: "crash-course",
    explanation: {
      overview: [
        "A crash course is a focused revision option for a specific academic goal. It is generally most useful when you have already studied the main topics and want to revisit important ideas, practise questions and organise the remaining preparation time.",
        "The exact exam, syllabus, duration and start date depend on the batch being offered. Share your current preparation level with the academy and confirm those details so you can decide whether the available course meets your revision needs.",
      ],
      whoShouldEnrol: [
        "Students looking for focused revision after studying the main topics.",
        "Learners who want to revisit selected weak areas before an examination.",
        "Students who need to organise a shorter period of remaining preparation.",
      ],
      learningOutcomes: [
        "Identify the topics that need the most attention.",
        "Revisit important concepts and commonly missed steps.",
        "Use practice questions to check your understanding.",
        "Build a realistic revision plan for the time available.",
      ],
    },
    title: "Crash Course",
    audience: "Students needing focused revision",
    summary:
      "A concise, structured revision option for selected academic goals.",
    highlights: [
      "Priority topic revision",
      "Practice sessions",
      "Exam approach guidance",
    ],
    format: "[Schedule and eligibility required]",
    category: "Foundation & revision",
    eyebrow: "Bring your preparation together",
    image: "/images/courses/revision.svg",
    imageAlt: "Original illustration of a revision checklist and a study clock",
    accent: "blue",
  },
];
