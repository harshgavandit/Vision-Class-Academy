import type { IconName } from "@/components/icon";
export type HeroSlide = {
  id: string;
  tag: string;
  title: string;
  accent: string;
  description: string;
  label: string;
  href: string;
  subject: string;
  image: string;
};
export const heroSlides: HeroSlide[] = [
  {
    id: "your-future",
    tag: "A clearer direction. A confident next step.",
    title: "Big ambitions.",
    accent: "A clear vision.",
    description:
      "Explore science, board and entrance preparation with a learning path that starts with you.",
    label: "Explore our courses",
    href: "/courses",
    subject: "Your next chapter starts here",
    image: "/images/learning-lab.svg",
  },
  {
    id: "science",
    tag: "Class 10 • Class 11 & 12 Science",
    title: "Understand today.",
    accent: "Build tomorrow.",
    description:
      "Find the right support for school concepts, focused practice and the move into the science stream.",
    label: "Find your programme",
    href: "/courses",
    subject: "Strong foundations. Fresh possibilities.",
    image: "/images/learning-lab.svg",
  },
  {
    id: "counselling",
    tag: "For students and parents",
    title: "Your questions.",
    accent: "Our starting point.",
    description:
      "Talk through course choices, study goals and the next step in a face-to-face, phone or online counselling meeting.",
    label: "Book counselling",
    href: "/book-counselling",
    subject: "Make the next step an informed one",
    image: "/images/learning-lab.svg",
  },
];
export const learningApproach: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "book",
    title: "Start with understanding",
    description:
      "Explore the concepts and subjects that form the foundation of your chosen course.",
  },
  {
    icon: "target",
    title: "Give practice a purpose",
    description:
      "Discuss how question practice, revision and doubt support fit your academic goals.",
  },
  {
    icon: "people",
    title: "Keep the conversation open",
    description:
      "Bring student and parent questions into the counselling conversation.",
  },
  {
    icon: "cap",
    title: "Plan the next step",
    description:
      "Understand course fit, current batches and admission details before you decide.",
  },
];
export const admissionSteps = [
  {
    number: "01",
    title: "Explore your options",
    description: "Start with your class, subjects and academic goals.",
  },
  {
    number: "02",
    title: "Meet for counselling",
    description: "Ask about course fit, teaching and current availability.",
  },
  {
    number: "03",
    title: "Make an informed choice",
    description:
      "Confirm timings, fees and admission details with the academy.",
  },
];
