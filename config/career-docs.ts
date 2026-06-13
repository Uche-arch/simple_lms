// // config/career-docs.ts

export interface CareerDoc {
  id: string;
  title: string;
  roadmapLink: string;
  // overview: string;
  overview: string[];
  coreSkills: string[];
  learningPath: {
    title: string;
    description: string[];
  }[];
}

export const careerDocsData: Record<string, CareerDoc> = {
  // frontend: {
  //   id: "frontend",
  //   title: "Frontend Development",
  //   roadmapLink: "/dashboard2/roadmap/html",

  //   overview: [
  //     "Frontend development is all about building the websites and apps people interact with every day.",
  //     "This roadmap currently focuses on HTML and CSS, helping you build a strong foundation before moving into JavaScript and modern frameworks.",
  //     "New learning paths, projects, and frontend technologies will be added as the platform continues to grow.",
  //   ],

  //   coreSkills: [
  //     "HTML5",
  //     "CSS3",
  //     "Responsive Design",
  //     "Flexbox",
  //     "CSS Grid",
  //     "Accessibility",
  //     "Frontend Project Building",
  //   ],

  //   learningPath: [
  //     {
  //       title: "HTML Fundamentals",
  //       description: [
  //         "Learn how websites are structured.",
  //         "Build pages using semantic HTML.",
  //         "Understand forms, links, images, and accessibility basics.",
  //       ],
  //     },

  //     {
  //       title: "CSS Fundamentals",
  //       description: [
  //         "Learn selectors, colors, spacing, and typography.",
  //         "Style websites using modern CSS techniques.",
  //         "Build confidence by recreating real interfaces.",
  //       ],
  //     },

  //     {
  //       title: "Modern Layouts",
  //       description: [
  //         "Master Flexbox and CSS Grid.",
  //         "Build responsive layouts for mobile and desktop.",
  //         "Understand how modern websites are structured.",
  //       ],
  //     },

  //     {
  //       title: "Project Practice",
  //       description: [
  //         "Apply your skills through guided challenges.",
  //         "Build projects from Frontend Mentor and design references.",
  //         "Strengthen problem-solving through real-world practice.",
  //       ],
  //     },

  //     {
  //       title: "Future Roadmap Updates",
  //       description: [
  //         "Upcoming tracks will include JavaScript, Git, React, Next.js, and advanced frontend development.",
  //         "New lessons and projects will continue to be added over time.",
  //       ],
  //     },
  //   ],
  // },

  // export const careerDocsData: Record<string, CareerDoc> = {
  frontend: {
    id: "frontend",
    title: "Frontend Development",
    roadmapLink: "/dashboard2/roadmap/html",

    overview: [
      "Frontend development is the process of building the parts of websites and applications that users see and interact with.",
      "Frontend developers turn designs into responsive, accessible, and interactive experiences using technologies like HTML, CSS, JavaScript, and modern frameworks.",
      "Whether you're building a personal portfolio, a startup product, or a large-scale web application, frontend development is one of the most in-demand skills in tech today.",
    ],

    coreSkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Git & GitHub",
      "React",
      "Next.js",
      "Accessibility",
      "API Integration",
      "Performance Optimization",
    ],

    learningPath: [
      {
        title: "HTML Foundations",
        description: [
          "Learn how websites are structured using semantic HTML.",
          "Work with forms, links, images, tables, and accessibility basics.",
          "Build a strong foundation for everything that follows.",
        ],
      },

      {
        title: "CSS & Responsive Design",
        description: [
          "Style websites with modern CSS.",
          "Master Flexbox, Grid, spacing, typography, and layouts.",
          "Create responsive experiences for mobile, tablet, and desktop devices.",
        ],
      },

      {
        title: "JavaScript Fundamentals",
        description: [
          "Learn variables, functions, arrays, objects, and DOM manipulation.",
          "Add interactivity and dynamic behavior to web pages.",
          "Understand how browsers execute JavaScript.",
        ],
      },

      {
        title: "Version Control",
        description: [
          "Learn Git and GitHub.",
          "Track project changes and collaborate with other developers.",
          "Build a professional portfolio of projects.",
        ],
      },

      {
        title: "React Development",
        description: [
          "Build reusable UI components.",
          "Manage application state and user interactions.",
          "Create modern single-page applications.",
        ],
      },

      {
        title: "Next.js & Modern Frontend",
        description: [
          "Learn routing, layouts, data fetching, and performance optimization.",
          "Build production-ready applications with Next.js.",
          "Understand industry-standard frontend workflows.",
        ],
      },

      {
        title: "Real-World Projects",
        description: [
          "Practice by building landing pages, dashboards, portfolios, and web applications.",
          "Work with design references from Figma and Frontend Mentor.",
          "Develop problem-solving skills through hands-on projects.",
        ],
      },

      {
        title: "Career Growth",
        description: [
          "Build a strong portfolio and showcase your best work.",
          "Prepare for internships, freelance opportunities, and frontend developer roles.",
          "Continue learning as frontend technologies evolve.",
        ],
      },
    ],
  },
};
