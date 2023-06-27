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
  ap,
  bebold,
  c,
  cpp,
  csharp,
  dotnet,
  python,
  sql,
  firebase,
  opengl,
  glm,
  unity,
  java,
  aws,
  EF,
  nerfstudio,
  adobe_xd,
  dev_portfolio,
  raytracer,
  compiler,
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
    title: "Graphics Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Specialist",
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
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "SQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
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
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "OpenGL",
    icon: opengl,
  },
  {
    name: "glm",
    icon: glm,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Enity Framework",
    icon: EF,
  },
  {
    name: "Nerfstudio",
    icon: nerfstudio,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Adobe XD",
    icon: adobe_xd,
  },
];

const experiences = [
  {
    title: "Researcher intern",
    company_name: "AP Hogeschool - Immersive lab",
    icon: ap,
    iconBg: "#ffff",
    date: "Feb 2023 - May 2023",
    points: [
      "Research within the field of Novel View Synthesis",
      "Capturing fotorealistic data to create real life virtual nature scene experiences in a cost efficient way",
      "Researching an optimal camera rig when using Neural Radiance Fields to capture data to create these virtual scenes",
      "Neural Radiance Field development using Nerfstudio framework"
    ],
  },
  {
    title: "Software developer intern",
    company_name: "Be Bold",
    icon: bebold,
    iconBg: "#ffff",
    date: " Feb 2020 - May 2020",
    points: [
    "Developing a data model exporter web application from scratch with React, Node, Express & Firebase",
    "Individual project to provide an end-to-end solution",
    "Developing a dashboard to display important real-time data in the office with React"
    ],
  },
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
    name: "Development portfolio",
    description:
      "React web application to serve as a digital resume. Used as a showcase for all my skills and experiences. It is the web application u are currently browsing! Talk about inception eh?",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "treejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dev_portfolio,
    source_code_link: "https://github.com/NickHellemans/dev_portfolio",
  },
  {
    name: "C++ Raytracer",
    description:
      "Real-time ray tracer as an introduction to programming low level graphics and all the theory behind it. Currently it supports materials, shadows, interactive 3D camera, multiple objects, path tracing & multithreading.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Dear ImGui",
        color: "green-text-gradient",
      },
      {
        name: "glm",
        color: "pink-text-gradient",
      },
    ],
    image: raytracer,
    source_code_link: "https://github.com/NickHellemans/HelloRayTracing",
  },
  {
    name: "Teeny Tiny compiler",
    description:
      "Implemented a small compiler in C++ for the language \"Teeny Tiny\" which is a dialect of BASIC that will compile to C. The language allows a variety of the basic operations that you'd expect from a programming language.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: "https://github.com/NickHellemans/teenytinycompiler",
  },
];

export { services, technologies, experiences, testimonials, projects };

