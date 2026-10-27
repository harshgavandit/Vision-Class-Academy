export const resultCategories = [
  "Class 10",
  "Class 12 Science",
  "JEE Main",
  "JEE Advanced",
  "NEET",
] as const;

export type ResultCategory = (typeof resultCategories)[number];

export type StudentResultPhoto = {
  /** Use a local image in public/images/results after obtaining publication consent. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type VerifiedStudentResult = {
  kind: "verified";
  id: string;
  studentName: string;
  category: ResultCategory;
  exam: string;
  academicYear: string;
  photo?: StudentResultPhoto;
  marks?: { scored: number; total: number };
  percentage?: number;
  percentile?: number;
  rank?: { value: number; scope: string };
  verification: {
    verified: true;
    publicationConsent: true;
    /** An internal reference to the checked result document; never rendered publicly. */
    source: string;
    verifiedOn: string;
  };
};

export type ResultTemplate = {
  kind: "template";
  id: string;
  studentName: "[Student name]";
  category: ResultCategory;
  exam: string;
  academicYear: "[Academic year]";
  primaryMetric: { label: string; value: string };
  secondaryMetric: { label: string; value: string };
};

/** Only this public projection may be passed into interactive client components. */
export type PublishedStudentResult = Omit<VerifiedStudentResult, "verification">;
export type StudentResult = PublishedStudentResult | ResultTemplate;

/**
 * Add only checked results with permission to publish the name, marks and photograph.
 * Keep this list empty until real records are supplied. Preview templates are separate.
 */
export const results: readonly VerifiedStudentResult[] = [];

export const resultTemplates: readonly ResultTemplate[] = [
  {
    kind: "template",
    id: "template-class-10",
    studentName: "[Student name]",
    category: "Class 10",
    exam: "Class 10 Board Examination",
    academicYear: "[Academic year]",
    primaryMetric: { label: "Percentage", value: "[Verified percentage]" },
    secondaryMetric: { label: "Marks", value: "[Verified marks]" },
  },
  {
    kind: "template",
    id: "template-jee-main",
    studentName: "[Student name]",
    category: "JEE Main",
    exam: "JEE Main",
    academicYear: "[Academic year]",
    primaryMetric: { label: "Percentile", value: "[Verified percentile]" },
    secondaryMetric: { label: "All India rank", value: "[Verified rank]" },
  },
  {
    kind: "template",
    id: "template-neet",
    studentName: "[Student name]",
    category: "NEET",
    exam: "NEET",
    academicYear: "[Academic year]",
    primaryMetric: { label: "Score", value: "[Verified marks]" },
    secondaryMetric: { label: "All India rank", value: "[Verified rank]" },
  },
  {
    kind: "template",
    id: "template-class-12",
    studentName: "[Student name]",
    category: "Class 12 Science",
    exam: "Class 12 Science Board Examination",
    academicYear: "[Academic year]",
    primaryMetric: { label: "Percentage", value: "[Verified percentage]" },
    secondaryMetric: { label: "Marks", value: "[Verified marks]" },
  },
  {
    kind: "template",
    id: "template-jee-advanced",
    studentName: "[Student name]",
    category: "JEE Advanced",
    exam: "JEE Advanced",
    academicYear: "[Academic year]",
    primaryMetric: { label: "All India rank", value: "[Verified rank]" },
    secondaryMetric: { label: "Score", value: "[Verified marks]" },
  },
];

/** A defensive publication gate in addition to the strongly typed content model. */
export function getPublishableResults(): PublishedStudentResult[] {
  return results.filter((result) => {
    const { marks, percentage, percentile, rank, verification } = result;
    const validMarks = marks === undefined || (
      Number.isFinite(marks.scored) && Number.isFinite(marks.total) &&
      marks.total > 0 && marks.scored >= 0 && marks.scored <= marks.total
    );
    const validPercentage = percentage === undefined || (
      Number.isFinite(percentage) && percentage >= 0 && percentage <= 100
    );
    const validPercentile = percentile === undefined || (
      Number.isFinite(percentile) && percentile >= 0 && percentile <= 100
    );
    const validRank = rank === undefined || (
      Number.isInteger(rank.value) && rank.value > 0 && rank.scope.trim().length > 0
    );
    const hasMetric = marks !== undefined || percentage !== undefined ||
      percentile !== undefined || rank !== undefined;
    const requiredText = [result.id, result.studentName, result.exam, result.academicYear];

    return verification.verified && verification.publicationConsent &&
      verification.source.trim().length > 0 &&
      !Number.isNaN(Date.parse(verification.verifiedOn)) &&
      requiredText.every((value) => value.trim().length > 0 && !/[\[\]]/.test(value)) &&
      hasMetric && validMarks && validPercentage && validPercentile && validRank;
  }).map((result) => {
    // Verification references are editorial data and must not reach page props or client bundles.
    const { verification, ...published } = result;
    void verification;
    const photo = published.photo;
    if (photo && (
      !photo.src.startsWith("/") || photo.src.startsWith("//") ||
      !photo.alt.trim() || !Number.isInteger(photo.width) || photo.width <= 0 ||
      !Number.isInteger(photo.height) || photo.height <= 0
    )) {
      return { ...published, photo: undefined };
    }
    return published;
  });
}
