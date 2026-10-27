export type GalleryCategory = "Classrooms" | "Study spaces" | "Facilities";

export type GalleryImage = {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Add only real academy photographs with permission from any identifiable people.
// Keep large originals outside the website; use appropriately sized web images here.
export const galleryImages: GalleryImage[] = [];

export type GalleryPreview = {
  id: string;
  title: string;
  category: GalleryCategory;
  scene: "classroom" | "books" | "facility";
};

// Illustrative layout previews. These do not depict or verify actual academy facilities.
export const galleryPreviews: GalleryPreview[] = [
  { id: "classroom-preview", title: "[Classroom photograph]", category: "Classrooms", scene: "classroom" },
  { id: "teaching-preview", title: "[Teaching space photograph]", category: "Classrooms", scene: "classroom" },
  { id: "study-preview", title: "[Study area photograph]", category: "Study spaces", scene: "books" },
  { id: "learning-preview", title: "[Learning space photograph]", category: "Study spaces", scene: "books" },
  { id: "facility-preview", title: "[Facility photograph]", category: "Facilities", scene: "facility" },
  { id: "reception-preview", title: "[Reception photograph]", category: "Facilities", scene: "facility" },
];
