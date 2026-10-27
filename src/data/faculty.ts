export type Faculty = {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subjects: string[];
  verified: boolean;
  photo?: { src: string; alt: string };
  introduction?: string;
};

// Replace a preview only after the academy verifies the credentials and clears the photograph.
export const faculty: Faculty[] = [
  {
    id: "faculty-preview-1",
    name: "[Faculty Name]",
    qualification: "[Qualification]",
    experience: "[Teaching experience]",
    subjects: ["[Subject]"],
    verified: false,
  },
  {
    id: "faculty-preview-2",
    name: "[Faculty Name]",
    qualification: "[Qualification]",
    experience: "[Teaching experience]",
    subjects: ["[Subject]"],
    verified: false,
  },
  {
    id: "faculty-preview-3",
    name: "[Faculty Name]",
    qualification: "[Qualification]",
    experience: "[Teaching experience]",
    subjects: ["[Subject]"],
    verified: false,
  },
];
