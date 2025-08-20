export const projects = [
  {
    title: "Oya Kitchens",
    image: "/images/oyakitchens.png",
    description:
      " A marketplace for commercial kitchen where host can list their kitchen space and vandor can rent it",
    link: "https://app.oyakitchens.com/",
    tags: ["Next-js", "SEO", "tailwind-css", "TDD"],
    responsibility: [
      "Migrated the code base from vite to next-js to achieve server side rendering and SEO",
      "Used dynamic loading and code splitting to improve the loading time of the app and improve the user experience",
      "Integrated analytical tools such as Google Tag Manager and Mixpanel for user behavior tracking and data-driven insights.",
      "Adopted (TDD) using Jest and MSW for unit and API testing, and Cypress for end-to-end testing to ensure application reliability and quality.",
    ],
  },
  {
    title: "Sphera",
    image: "/images/spheera.png",
    description:
      "Spheera aims to be a one-stop-shop for individuals and businesses looking to take advantage of virtual opportunities for brand and content placement. ",
    link: "https://spheera.ryff.com/",
    tags: ["React", "Elastic search", "Storybook"],
    responsibility: [
      "Created a component library in React.js, adhering to the BEM design pattern and Storybook for improved reusability across multiple projects.",
      "Implemented Redux for efficient state management within the component library",
      "Integrated Reactivesearch to build powerful filter components and enable seamless communication with Elasticsearch.",
      "Developed a flexible theming system that allows for easy customization and scalability.",
    ],
  },
  {
    title: "Skaro by Ryff",
    image: "/images/spheera.png",
    description:
      "Skaro is an admin dashboard and an internal tool for user management, content-management and analytics.",
    link: "https://ryff.com/",
    tags: ["React", "Redux-toolkit", "Elastic search"],
    responsibility: [
      "Designed and developed a feature-rich internal dashboard, enhancing operational efficiency and user experience.",
      "Implemented Redux Toolkit Query for efficient global state management and optimized server communication.",
      "Created protected routes with role-based access control, ensuring data security and user privacy.",
      "Developed custom Elasticsearch queries to retrieve precise results, improving data indexing and search performance.",
    ],
  },
  {
    title: "Helen Doron Connect",
    image: "/images/hdc.png",
    description:
      "Helen Doron Connect is a platform for Helen Doron teachers and students to access their learning materials and track their progress.",
    link: "https://helendoronconnect.com/",
    tags: ["React", "Cocos2d-js", "Socket.io"],
    responsibility: [
      "Developed an authoring tool from scratch using React.js, enabling users to dynamically create activities and lessons by parsing JSON data and generating a responsive user interface.",
      "Utilized Cocos2d.js to build interactive activity modules with smooth animations and high performance.",
      "Integrated Socket.IO for real-time communication, enabling seamless live updates and interactions.",
    ],
  },
];
