// config/roadmaps.ts
import { LessonNode } from "@/types/roadmap";

export interface RoadmapTrack {
  id: string;
  title: string;
  description: string;
  nodes: LessonNode[];
}

export const roadmapsData: Record<string, RoadmapTrack> = {
  html: {
    id: "html",
    title: "HTML Fundamentals",
    description: "The starting point for every website. Learn structure, semantics, and best practices.",
    nodes: [
      {
        id: "html-intro",

        title: "HTML Fundamentals",

        duration: "2 hrs",

        summary:
          "Learn the structure of a webpage, how HTML elements work together, and how browsers interpret markup.",

        videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",

        articleUrl:
          "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",

        project: {
          title: "Follow Along Project",

          description:
            "Watch the Traversy Media tutorial from start to finish and build exactly what is built in the video. Do not skip ahead. The goal of this lesson is to become comfortable creating HTML documents, working with elements, attributes, headings, lists, links, images, tables, and basic page structure.",

          referenceUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",

          referenceLabel: "Practice With The Tutorial",
        },
      },
      {
        id: "html-semantic",

        title: "Semantic HTML & Accessibility",

        duration: "45 mins",

        summary:
          "Learn how semantic elements improve accessibility, SEO, code organization, and overall website structure.",

        videoUrl: "https://www.youtube.com/watch?v=qSNUi7pRmWg",

        articleUrl:
          "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html",

        project: {
          title: "HTML Practice Exercises",

          description:
            "Complete the HTML exercises on W3Schools. Focus on semantic elements, page structure, links, images, tables, and forms. The goal is to reinforce HTML fundamentals before moving into CSS.",

          referenceUrl: "https://www.w3schools.com/html/html_exercises.asp",

          referenceLabel: "W3Schools HTML Exercises",
        },
      },

      //       {
      //         id: "html-intro",
      //         title: "Introduction to HTML",
      //         duration: "25 mins",
      //         summary: "Understand how the browser interprets markup and why treating web structures like a tree changes the way you view raw layouts.",
      //         videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",
      //         articleUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
      //         resourcePack: {
      //           projectBrief: "Build your very first blank skeleton HTML layout using semantic root tags entirely from scratch.",
      //           starterFilesUrl: "https://github.com/your-repo/html-skeletons"
      //         }
      //       },
      //       {
      //         id: "html-semantic",
      //         title: "Semantic HTML Mastery",
      //         duration: "45 mins",
      //         summary: "Stop throwing divs everywhere. Master header, main, section, aside, and footer elements to scale accessibility rankings natively.",
      //         videoUrl: "https://www.youtube.com/watch?v=k_twmAs_fO8",
      //         articleUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html",
      //         resourcePack: {
      //           projectBrief: "Refactor a messy 'div-soup' layout code challenge into production-grade compliant semantic web structures.",
      //         }
      //       },
      //       {
      //   id: "html-semantic",

      //   title: "Semantic HTML Mastery",

      //   duration: "45 mins",

      //   summary:
      //     "Learn how semantic elements improve accessibility, SEO, and code maintainability.",

      //   videoUrl:
      //     "https://www.youtube.com/watch?v=k_twmAs_fO8",

      //   articleUrl:
      //     "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html",

      //   project: {
      //     title: "Blog Landing Page",

      //     description:
      //       "Build a fully semantic blog landing page using header, nav, main, section, article, aside, and footer elements.",

      //     referenceUrl:
      //       "https://www.frontendmentor.io/challenges/blog-preview-card",

      //     referenceLabel:
      //       "Frontend Mentor Challenge"
      //   }
      // }
      //       {
      //         id: "html-form",
      //         title: "Form HTML Mastery",
      //         duration: "45 mins",
      //         summary: "Stop throwing divs everywhere. Master header, main, section, aside, and footer elements to scale accessibility rankings natively.",
      //         videoUrl: "https://www.youtube.com/watch?v=k_twmAs_fO8",
      //         articleUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html",
      //         resourcePack: {
      //           projectBrief: "Refactor a messy 'div-soup' layout code challenge into production-grade compliant semantic web structures.",
      //         }
      //       }
    ],
  },
  css: {
    id: "css",
    title: "CSS Layouts & Styling",
    description:
      "Flexbox, grid, positioning - learn how to build layouts that actually work.",
    nodes: [
      // {
      //   id: "css-selectors",
      //   title: "Advanced Selectors & Cascading",
      //   duration: "35 mins",
      //   summary: "Deep dive into specificity wars, inheritance mechanics, and combinations that structure clean, reusable style rules.",
      //   videoUrl: "https://www.youtube.com/watch?v=1PnVor36_40",
      //   articleUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
      //   resourcePack: {
      //     projectBrief: "Debug and restructure a broken style guide with complex nested structural selector paths."
      //   }
      // }
      {
        id: "css-intro",

        title: "Introduction to CSS",

        duration: "2 hrs",

        summary:
          "Learn how CSS styles HTML, understand selectors, colors, typography, spacing, and basic layouts.",

        videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI&t=4395s",

        articleUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",

        project: {
          title: "Follow Along Project",

          description:
            "Follow the Traversy Media tutorial from start to finish and build everything alongside the instructor. Focus on selectors, colors, spacing, typography, and basic layouts.",

          referenceUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI&t=4395s",

          referenceLabel: "Practice With The Tutorial",
        },
      },
      {
        id: "css-flexbox",

        title: "Flexbox Layouts",

        duration: "45 mins",

        summary:
          "Master one-dimensional layouts and learn how modern websites align and distribute content.",

        videoUrl: "https://www.youtube.com/watch?v=JJSoEo8JSnc",

        articleUrl: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",

        project: {
          title: "Results Summary Component",

          description:
            "Build a responsive component using Flexbox. Focus on alignment, spacing, centering, and responsive layouts.",

          referenceUrl:
            "https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV",

          referenceLabel: "Frontend Mentor Challenge",
        },
      },
      {
        id: "css-grid",

        title: "CSS Grid",

        duration: "45 mins",

        summary:
          "Learn two-dimensional layouts and build modern page structures using CSS Grid.",

        videoUrl: "https://www.youtube.com/watch?v=0xMQfnTU6oo",

        articleUrl: "https://css-tricks.com/snippets/css/complete-guide-grid/",

        project: {
          title: "Testimonials Grid",

          description:
            "Build a responsive testimonials section using CSS Grid and practice controlling rows, columns, and layout placement.",

          referenceUrl:
            "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",

          referenceLabel: "Frontend Mentor Challenge",
        },
      },
      {
        id: "css-responsive",

        title: "Responsive Design",

        duration: "45 mins",

        summary:
          "Learn media queries, mobile-first development, and responsive design principles.",

        videoUrl: "https://www.youtube.com/watch?v=x4u1yp3Msao",

        articleUrl:
          "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",

        project: {
          title: "Responsive Landing Page",

          description:
            "Convert a desktop design into a fully responsive experience that works across mobile, tablet, and desktop devices.",

          referenceUrl: "https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9",

          referenceLabel: "Frontend Mentor Challenges",
        },
      },
      {
        id: "css-animations",

        title: "CSS Animations",

        duration: "35 mins",

        summary:
          "Learn transitions, transforms, hover effects, and keyframe animations used in modern user interfaces.",

        videoUrl: "https://www.youtube.com/watch?v=YszONjKpgg4",

        articleUrl:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",

        project: {
          title: "Interactive Product Card",

          description:
            "Build an interactive UI card with hover effects, transitions, transforms, and subtle animations.",

          referenceUrl: "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",

          referenceLabel: "Frontend Mentor Challenges",
        },
      },
      {
        id: "css-final-project",

        title: "CSS Portfolio Challenge",

        duration: "3 hrs",

        summary:
          "Combine everything learned to build a complete responsive landing page using modern CSS techniques.",

        videoUrl: "https://youtu.be/oYRda7UtuhA?si=vJhjGLHXbwktuMOA",

        articleUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS",

        project: {
          title: "Professional Landing Page",

          description:
            "Build a complete responsive landing page using Flexbox, Grid, responsive design techniques, and animations. This project should be portfolio-ready.",

          referenceUrl: "https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9",

          referenceLabel: "Frontend Mentor Landing Page Challenge",
        },
      },
        // {
        //   id: "css-portfolio-project",

        //   title: "Build Your Portfolio Website",

        //   duration: "3 - 5 hrs",

        //   summary:
        //     "Apply everything you've learned in HTML and CSS by building a personal portfolio website. Showcase your projects, skills, and learning journey in a real-world project you can continue improving over time.",

        //   videoUrl: "https://www.youtube.com/watch?v=ldwlOzRvYOU",

        //   articleUrl: "https://developer.mozilla.org/en-US/docs/Learn",

        //   project: {
        //     title: "Personal Portfolio Website",

        //     description:
        //       "Build your own developer portfolio. Include a hero section, about section, skills, projects, contact section, and responsive navigation. Add every project you've completed throughout this roadmap and make the site fully responsive.",

        //     referenceUrl: "https://www.youtube.com/watch?v=ldwlOzRvYOU",

        //     referenceLabel: "Portfolio Project Walkthrough",
        //   },
        // },
        {
  "id": "css-portfolio-project",
  "title": "Build Your Portfolio Website",
  "duration": "3 - 5 hrs",
  "summary": "Time to step away from code-alongs! Apply everything you've learned about layout, responsiveness, and animations to design and build your own custom personal portfolio website completely from scratch.",
  "videoUrl": "#",
  "articleUrl": "https://developer.mozilla.org/en-US/docs/Learn",
  "project": {
    "title": "Personal Portfolio Website",
    "description": "Design and build your own custom developer portfolio from scratch using only HTML and CSS. You must independently engineer a responsive navbar, a hero section, an about/skills block, a CSS Grid projects grid - linking all your previous work, and a contact section.",
    "referenceUrl": "#",
    "referenceLabel": "Independent Capstone Project"
  }
}
    ],
  },
};
