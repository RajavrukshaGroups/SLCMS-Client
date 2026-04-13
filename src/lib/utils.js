import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toppersData = [
  {
    course: "BBA",
    department: "DEPARTMENT OF COMMERCE & MANAGEMENT",
    academicYear: "2024-25",
    toppers: [
      { name: "RESHAM M", cgpa: 9.17, rank: 1 },
      { name: "NAYANA YADAV CH", cgpa: 8.75, rank: 2 },
      { name: "SIMRAN", cgpa: 8.67, rank: 3 },
      { name: "NITHYALAKSHMI H.K.", cgpa: 8.62, rank: 4 },
      { name: "ROOPA SHREE", cgpa: 8.15, rank: 5 },
      { name: "ARBINTAJ", cgpa: 8.13, rank: 6 },
    ],
  },
  {
    course: "B.COM",
    department: "DEPARTMENT OF COMMERCE & MANAGEMENT",
    academicYear: "2024-25",
    toppers: [
      { name: "TEJASWINI T N", cgpa: 8.27, rank: 1 },
      { name: "SANGEETHA D", cgpa: 8.13, rank: 2 },
      { name: "JOYCEPETER", cgpa: 8.01, rank: 3 },
    ],
  },
];
