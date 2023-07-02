import {
  graphics,
  backend,
  ai,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
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
  treefarm,
  Linkedin,
  Github,
  Email,
  vub,
  resume,
  mysql,
  github,
  email, 
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Enthousiast",
    icon: graphics,
  },
  {
    title: "AI Specialist",
    icon: ai,
  },
];

const interests = [
  {
    name: "Computer Graphics",
  },
  {
    name: "Raytracing",
  },
  {
    name: "Game Dev",
  },
  {
    name: "Machine learning",
  },
  {
    name: "AI",
  },
  {
    name: "Computer Vision",
  },
  {
    name: "Martial arts",
  },
  {
    name: "Fitness",
  },
]
const degrees = [
  {
    name: "Graduate programming",
    minor: null,
    school: "AP Hogeschool",
    grade: "Summa cum laude",
    date: "June 2021",
    icon:ap,
  },
  {
    name: "Bachelor Applied Informatics",
    minor: "Artificial Intelligence",
    school: "AP Hogeschool",
    grade: "Magna cum laude",
    date: "June 2023",
    icon:ap,
  },
  {
    name: "Master Applied Informatics",
    minor: "Artificial Intelligence",
    school: "VUB",
    grade: "TBE",
    date: "Expected June 2026",
    icon:vub,
  },
];

const languages = [
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
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const frameworks = [
  {
    name: ".NET",
    icon: dotnet,
  },
  // {
  //   name: "Enity Framework",
  //   icon: EF,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nerfstudio",
    icon: nerfstudio,
  },
  
];

const databases = [
  {
    name: "MySQL",
    icon: mysql,
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
];
const tools = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "AWS",
    icon: aws,
  },
];
const design_tools = [
  {
    name: "Adobe XD",
    icon: adobe_xd,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Research intern",
    company_name: "AP Hogeschool - Immersive lab",
    icon: ap,
    iconBg: "#ffff",
    date: "Feb 2023 - May 2023",
    points: [
      "Research within the field of Novel View Synthesis",
      "Capturing fotorealistic data to create realistic virtual nature scene experiences in a cost efficient way",
      "Researched & documented an optimal camera rig when using Neural Radiance Fields to capture data to create these virtual scenes",
      "Researched parameters included: baseline, lens type (perspective vs fisheye vs 360), NeRF implementation, static vs dynamic scenes and aligment / positioning of the camera's",
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
    "Developing a dashboard to display important real-time data in the office with React",
    "Intro into the marketing world"
    ],
  },
];

const projects = [
  {
    name: "Development portfolio",
    description:
      "React web application to serve as a digital resume. Used as a showcase for all my skills and experiences. It is the web application u are currently browsing! Talk about inception eh?",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Treejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dev_portfolio,
    source_code_link: "https://github.com/NickHellemans/dev_portfolio",
  },
  {
    name: "Realtime Raytracer",
    description:
      "Real-time ray tracer as an introduction to programming low level graphics and all the theory behind it. Currently it supports materials, shadows, interactive 3D camera, multiple objects, path tracing & multithreading.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "ImGui",
        color: "green-text-gradient",
      },
      {
        name: "Glm",
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
  {
    name: "MyTreefarm",
    description:
      "A project build by myself and other team members as an assigment working agile. This project encompasses an easy to use task sheduler for a tree farm company and it's employees. The project exists out of an angular frontend for the employees, a .NET admin panel and a .NET backend",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "auth0",
        color: "green-text-gradient",
      },
    ],
    image: treefarm,
    source_code_link: "https://github.com/NickHellemans/Treefarm.git",
  },
];

const socials = [
  {
    name: "LinkedIn",
    image: linkedin,
    url: "https://www.linkedin.com/in/nickhell/",
  },  
  {
    name: "Github",
    image: github,
    url: "https://github.com/NickHellemans",
  },
  {
    name: "Email",
    image: email,
    url: "nick-hellemans@hotmail.com",
  }
];


export { services, interests, degrees, experiences, projects, socials, resume, tools, design_tools, databases, languages, frameworks, Github, Linkedin, Email};

