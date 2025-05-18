import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "React.js",
    company_name: "E-legal-Gate",
    icon: starbucks,
    iconBg: "#383E56",
    date: "1.dec.2024 - jan.2025",
    points: [
      "Designing and developing the E-Legal Gate platform using React.js, Node.js, and other related technologies.",
      "Collaborating with team members including designers and backend developers to deliver a seamless user experience for legal professionals and clients.",
      "Implementing responsive and accessible UI components to ensure smooth functionality across various devices and browsers.",
      "Integrating RESTful APIs, managing user authentication, and maintaining secure data handling practices.",
      "Participating in code reviews and contributing ideas to enhance the overall performance and usability of the platform."
    ]
    ,
  },
  {
    title: "React.js",
    company_name: "3d portfolio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "april-2025",
    points: [
      "Developing an interactive 3D portfolio using React.js and Three.js to showcase my skills, projects, and experience.",
      "Leveraging Three.js to create smooth animations and visually engaging 3D elements for an immersive user experience.",
      "Implementing responsive design to ensure optimal viewing across devices, including desktops, tablets, and smartphones.",
      "Optimizing performance by managing asset loading, reducing render overhead, and ensuring smooth interactions.",
      "Continuously updating content and improving the design based on feedback and evolving personal brand goals."
    ]
    ,
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Github",
    description:
      "Welcome to my GitHub! 🚀 Here, you'll find my daily solutions to LeetCode problems and GeeksforGeeks Problem of the Day (POTD), showcasing my commitment to mastering Data Structures and Algorithms. I also regularly push my projects here — from web development using React, Node.js, and Three.js, to experiments and full-stack applications.",
    tags: [
      {
        name: "Leetcode-solution",
        color: "blue-text-gradient",
      },
      {
        name: "Project-code",
        color: "green-text-gradient",
      },
      {
        name: "Gfg-solution",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shrawanyadkr2",
  },
  {
    name: "Leetcode",
    description:
      "This is my LeetCode profile, where I consistently solve at least one problem every day to strengthen my grip on Data Structures and Algorithms. The daily green streak keeps me motivated and disciplined, pushing me to stay consistent and improve day by day. It's not just about maintaining the streak — it's about growing as a problem solver.",
    tags: [
      {
        name: "prob. of the day",
        color: "blue-text-gradient",
      },
      {
        name: "Code to build not to teach",
        color: "green-text-gradient",
      },
      {
        name: "A prob. in day, keep unemployment away",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://leetcode.com/u/shrawankumaryadv/",
  },
  {
    name: "Trip Guide",
    description:
      "This is my GeeksforGeeks account, where I solve the Problem of the Day (POTD) to stay consistent and continuously improve my problem-solving skills. One thing I really appreciate about GFG is its well-structured blog content, which helps me understand concepts more deeply and efficiently. It's a great platform for both learning and practice.",
    tags: [
      {
        name: "PODT",
        color: "blue-text-gradient",
      },
      {
        name: "It's blogs help us during our sem exam ",
        color: "green-text-gradient",
      },
      {
        name: "explaination is too good",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.geeksforgeeks.org/user/shrawan2akjk/",
  },
];

export { services, technologies, experiences, testimonials, projects };
