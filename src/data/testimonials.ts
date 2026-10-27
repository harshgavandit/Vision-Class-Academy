export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: "Student" | "Parent";
  verified: boolean;
  course?: string;
  academicYear?: string;
};

// Publish a testimonial only with verification and the contributor's permission.
export const testimonials: Testimonial[] = [
  {
    id: "student-testimonial-preview",
    quote: "[Verified student testimonial required]",
    author: "[Student name]",
    role: "Student",
    verified: false,
  },
  {
    id: "parent-testimonial-preview",
    quote: "[Verified parent testimonial required]",
    author: "[Parent name]",
    role: "Parent",
    verified: false,
  },
];
