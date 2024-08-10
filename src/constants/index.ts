import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,

  html,
  css,

 
  git,
  figma,
  php,
  laravel,
  flutter,

  fresh,
  xd,

  
  
 
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
 
  {
    name: "php",
    icon: php,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Laravel",
    icon: laravel,
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

const experiences: TExperience[] = [


  {
    "title": "Flutter App Developer",
    "companyName": "XDezo",
    "icon": "xdezo.png",
    "iconBg": "#E6DEDD",
    "date": "june 2022 - sep 2022",
    "points": [
      "Developing and maintaining eLearning mobile applications using Flutter.",
      "Integrating third-party APIs and services to enhance app functionality and performance.",
      "Ensuring smooth and responsive UI/UX design for a seamless user experience.",
      "Collaborating with designers and product managers to implement interactive and engaging learning features.",
      "Testing and debugging the app across various devices to ensure reliability and performance."
    ]
  }


];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prajal JK proved me wrong.",
    name: "Samvap Paudel",
    designation: "MD",
    company: "Mudus Cafe",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met app developer who truly cares about their clients' success like Prajal JK does.",
    name: "Mahesh Bhandari",
    designation: "CFO",
    company: "Mahesh Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Subigya Gurung",
    designation: "CEO",
    company: "Subi Sip Cafe",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Fresh Picks",
    description:
      "A mobile app platform that seamlessly connects users with a variety of grocery providers, offering an effortless and efficient solution for searching, ordering, and delivering daily essentials..",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "php,laravel",
        color: "pink-text-gradient",
      },
    ],
    image: fresh,
    sourceCodeLink: "https://github.com/JungPrajal/FreshPicks",
  },
  {
    name: "XD Learning",
    description:
      "An innovative e-learning mobile app designed to empower learners with a personalized and interactive educational experience. This app provides access to a wide range of courses, from academic subjects to professional skills, all at your fingertips.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "node.js",  
        color: "pink-text-gradient",
      },
    ],
    image: xd,
    sourceCodeLink: "https://github.com",
  },
  
 

];

export { services, technologies, experiences, testimonials, projects };
