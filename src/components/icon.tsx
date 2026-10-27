import type { SVGProps } from "react";

const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  chevron: "m9 5 7 7-7 7",
  check: "m5 12 4 4L19 6",
  book: "M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2Z",
  cap: "m2 9 10-5 10 5-10 5Zm4 3v6c4 3 8 3 12 0v-6m4-3v7",
  atom: "M12 10v4m-2-2h4M3 7c2-4 20 5 18 10S1 11 3 7Zm0 10C1 13 19 3 21 7S5 21 3 17ZM12 2c-5 0-5 20 0 20s5-20 0-20Z",
  phone:
    "m7 3 3 5-3 2c2 4 3 5 7 7l2-3 5 3c0 3-2 5-5 4C9 19 5 15 3 8 2 5 4 3 7 3Z",
  mail: "M3 5h18v14H3Zm0 1 9 7 9-7",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
  calendar: "M5 5h14v16H5ZM8 2v6m8-6v6M5 10h14m-10 4h2m3 0h2m-7 3h2",
  chat: "M21 11a9 9 0 0 1-13 8l-6 2 2-6A9 9 0 1 1 21 11ZM8 10h8m-8 4h5",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  spark: "m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z",
  target: "M12 8a4 4 0 1 0 4 4M12 3a9 9 0 1 0 9 9M12 12l9-9m-5 0h5v5",
  people:
    "M16 21v-3a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v3m15-7a4 4 0 0 1 3 4v3M14 3a4 4 0 0 1 0 8M6 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Zm-4 9 3 3 5-6",
  trophy:
    "M8 3h8v6a4 4 0 0 1-8 0Zm0 2H3v3a4 4 0 0 0 5 4m8-7h5v3a4 4 0 0 1-5 4m-4 1v7m-5 1h10",
} as const;
export type IconName = keyof typeof paths;
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
