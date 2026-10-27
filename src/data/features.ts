import type { IconName } from "@/components/icon";

export type AcademyFeature = {
  id: string;
  title: string;
  icon: IconName;
};

export const academyFeatures: AcademyFeature[] = [
  { id: "extra-study", title: "Extra Study", icon: "study-notes" },
  { id: "re-exam", title: "Re-Exam", icon: "repeat" },
  { id: "weekly-mcq", title: "MCQ Test Weekly", icon: "checklist" },
  { id: "weekly-assessments", title: "Weekly Assessments", icon: "chart" },
  { id: "individual-meeting", title: "One to One Meeting", icon: "meeting" },
  { id: "student-counselling", title: "Student Counselling", icon: "chat-heart" },
  { id: "digital-classroom", title: "Digital Classroom", icon: "laptop" },
  { id: "doubt-session", title: "Doubt Session", icon: "question" },
  { id: "absentee-follow-up", title: "Absentees Follow-up", icon: "phone-incoming" },
  { id: "study-material", title: "Study Material", icon: "book" },
];
