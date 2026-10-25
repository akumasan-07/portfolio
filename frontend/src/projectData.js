import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";
import project3 from "../src/assets/project3.png";

export const projectData = [
  {
    id: 1,
    image: project3,
    title: "StoriList",
    description:
      "A media tracking platform that unifies 5 media categories( anime, comics, movies, series, novels) into a single personal library with status, progress, ratings, and notes",
    link: "https://storilist.vercel.app/",
    technologies: ["React", "Next", "TypeScript", "Supabase", "PostgreSQL", "Zod"],
  },
  {
    id: 2,
    image: project1,
    title: "HabitQuest",
    description:
      "A Habit Tracking application that helps users build consistency through daily task management, streak tracking, performance analytics, and long-term progress visualization.",
    link: "https://habitquest-jet.vercel.app/",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
  },
  {
    id: 3,
    image: project2,
    title: "FreshFinds",
    description:
      "A community-driven web platform that connects local shops with customers allowing reselling unsold food at affordable price.",
    link: "https://fresh-finds-beige.vercel.app/",
    technologies: ["React", "Express", "MongoDB", "Node.js", "TailwindCSS"],
  },
];
