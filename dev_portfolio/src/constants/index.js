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
  monkeypreter,
  loxpiler,
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
  jira,
  trello,
  numpy,
  pandas,
  tensorflow,
  scikit,
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
    title: "AI Specialist",
    icon: ai,
  },
  {
    title: "Graphics Enthousiast",
    icon: graphics,
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
    name: "Big Data"
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
];

const degrees = [
  {
    name: "Graduate programming",
    minor: null,
    school: "AP Hogeschool",
    grade: "Summa cum laude",
    date: "June 2021",
    icon: ap,
  },
  {
    name: "Bachelor Applied Informatics",
    minor: "Artificial Intelligence",
    school: "AP Hogeschool",
    grade: "Magna cum laude",
    date: "June 2023",
    icon: ap,
  },
  {
    name: "Master Applied Informatics",
    minor: "Artificial Intelligence",
    school: "VUB",
    grade: "TBE",
    date: "Expected June 2026",
    icon: vub,
  },
];

const languages = [
  {
    name: "HTML 5",
    icon: html,
    skill: 95,
  },
  {
    name: "CSS 3",
    icon: css,
    skill: 75,
  },
  {
    name: "JavaScript",
    icon: javascript,    
    skill: 95,
  },
  {
    name: "C",
    icon: c,
    skill: 60,
  },
  {
    name: "C++",
    icon: cpp,
    skill: 85,
  },
  {
    name: "C#",
    icon: csharp,
    skill: 95,
  },
  {
    name: "Python",
    icon: python,
    skill: 90,
  },
  {
    name: "Java",
    icon: java,
    skill: 70,
  },
];

const frameworks = [
  {
    name: ".NET",
    icon: dotnet,
    skill: 90,
  },
  // {
  //   name: "Enity Framework",
  //   icon: EF,
  // },
  {
    name: "React JS",
    icon: reactjs,
    skill: 90,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    skill: 80,
  },
  {
    name: "Three JS",
    icon: threejs,
    skill: 50,
  },
  {
    name: "OpenGL",
    icon: opengl,
    skill: 50,
  },
  {
    name: "Glm",
    icon: glm,
    skill: 50,
  },
  {
    name: "Node JS",
    icon: nodejs,
    skill: 80,
  },

];

const ai_tools = [
  {
    name: "Nerfstudio",
    icon: nerfstudio,
    skill: 80,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
    skill: 60,
  },
  {
    name: "Numpy",
    icon: numpy,
    skill: 70,
  },
  {
    name: "Pandas",
    icon: pandas,
    skill: 80,
  },
  {
    name: "Scikit",
    icon: scikit,
    skill: 50,
  },
]
const databases = [
  {
    name: "MySQL",
    icon: mysql,
    skill: 80,
  },
  {
    name: "SQL",
    icon: sql,
    skill: 85,
  },
  {
    name: "Firebase",
    icon: firebase,
    skill: 75,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    skill: 60,
  },
];
const tools = [
  {
    name: "Git",
    icon: git,
    skill: 80,
  },
  {
    name: "Docker",
    icon: docker,
    skill: 75,
  },
  {
    name: "Unity",
    icon: unity,
    skill: 60,
  },
  {
    name: "AWS",
    icon: aws,
    skill: 50,
  },
];

const tracking_tools = [
  {
    name: "Jira",
    icon: jira,
    skill: 60,
  },
  {
    name: "Trello",
    icon: trello,
    skill: 60,
  },
  {
    name: "Github issues",
    icon: github,
    skill: 75,
  },
];
const design_tools = [
  {
    name: "Adobe XD",
    icon: adobe_xd,
    skill: 60,
  },
  {
    name: "Figma",
    icon: figma,
    skill: 55,
  },
];

const experiences = [
  {
    title: "AI-research intern",
    company_name: "AP Hogeschool - Immersive lab",
    icon: ap,
    iconBg: "#ffff",
    date: "Feb 2023 - May 2023",
    points: [
      "Research within the field of AI-driven Novel View Synthesis",
      "Capturing fotorealistic data to create realistic virtual nature scene experiences in a cost efficient way",
      "Researched & documented an optimal camera rig when using Neural Radiance Fields to capture data to create these virtual scenes",
      "Researched parameters included: baseline, lens type (perspective vs fisheye vs 360), NeRF implementation, static vs dynamic scenes and aligment / positioning of the camera's",
      "Neural Radiance Field development using Nerfstudio framework",
    ],
  },
  {
    title: "Generative AI & artistic style transfer for 360⁰ data",
    company_name: "AP Hogeschool",
    icon: ap,
    iconBg: "#ffff",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Research within the field of generative AI & artistic style transfer with a team of researchers",
      "Researched different ways to eliminate artefacts generated when using style transfer algorithms on 360⁰ videos/images",
      "Artefacts consists of: stitching lines & convergence at top/bottom. These artefacts produce discontinuities in the result images/videos",
      "Found new and multiple ways to improve results and generate lesser artefacts or bypass the problem entirely",
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
      "Intro into the marketing world",
    ],
  },
];

const projects = [
  {
    name: "Loxpiler",
    description:
      "C implementation of the Lox programming language (from \"Crafting Interpreters\" by Robert Nystrom) as a bytecode VM that comes with it's own mark & sweep garbage collector to take the trash out.",
    detailedDescription: [
      "This project is the result of going through the amazing book `Crafting Interpreters` by Robert Nystrom. Following the book I implemented the Lox programming language as a bytecode VM in C. The VM also comes with it's own mark & sweep garbage collector to take the trash out.",
      "This project put the focus on speed and performance, after writing a tree-walking interpreter it was time for someting faster and more up-to-date with the current implementations of programming languages.",
      "Features include: dynamic typing, automatic memory management, datatypes (booleans, numbers and strings), expressions (arithmetic, comparison and equality), variable binding, control flow (if, for and while), functions, closures, classes & inheritance"
 ],
    thingsLearned: [
      "Deeper understanding of programming languages as a whole",
      "How OOP languages are implemented",
      "Capabilities of programming languages",
      "Everything involved in the compiler process",
      "Lexical analysis",
      "Parsing and compiling source code into a bytecode representation",
      "Running the bytecode representation of the source code in a stack-based VM",
      "How to optimize performance",
    ],
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: loxpiler,
    source_code_link: "https://github.com/NickHellemans/loxpiler",
  },
  {
    name: "Monkeypreter",
    description:
      "C implementation of the Monkey programming language (from \"Writing An Interpreter In Go\" by Thorsten Ball) as a tree-walking interpreter that comes with it's own mark & sweep garbage collector to take the trash out.",
    detailedDescription: [
      "This project is the result of going through the amazing book `Writing An Interpreter In Go` by Thorsten Ball, but using a different implementation language to challenge myself to truely understand what's going on. Following the book I implemented the Monkey programming language as a tree-walking interpreter in C. The interpreter also comes with it's own mark & sweep garbage collector to take the trash out.",
      "The source code is also accompanied by an extensive test project using Google's test framework 'GoogleTest' to make sure every feature is properly implemented and works for every edge case.",
      "Features include: variable bindings, integers, booleans, arithmetic expressions, built-in functions (len, first, last, cdr, push & print), first-class and higher-order functions, closures, a string data structure & an array data structure."
 ],
    thingsLearned: [
      "Deeper understanding of programming languages as a whole",
      "Capabilities of programming languages",
      "Everything involved in the compiler process",
      "Lexical analysis",
      "Parsing source code into a Abstract Syntax Tree (AST)",
      "Evaluating a AST",
      "Writing useful tests"
    ],
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "GoogleTest",
        color: "pink-text-gradient",
      },
    ],
    image: monkeypreter,
    source_code_link: "https://github.com/NickHellemans/monkeypreter",
  },
  {
    name: "Development portfolio",
    description:
      "React web application to serve as a digital resume. Used as a showcase for all my skills and experiences. It is the web application u are currently browsing! Talk about inception eh?",
    detailedDescription: [
      "React web application to serve as a digital resume. This portfolio is a way for me to showcase who I am together with all the skills I've developed over the years and all of the experiences I've had, combined in one place.",
      "I have tried to combine my new found interest, computer graphics, into the project by adding interactive 3D scenes with the help of Three.js.",
      "Developing this project gave me the opportunity to decide every possible choice to make, from the stack used to every little detail of the design. It forced me to let my creativity out of the box to fully express myself as a developer and as a person.",
    ],
    thingsLearned: [
      "Creative thinking",
      "Decisiveness",
      "Personal taste & opinion",
    ],
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
    detailedDescription: [
      "Implemented a basic real-time ray tracer in C++ with the help of ImGui for the interface as an introduction to programming low level graphics and all the theory behind it. Currently it supports different materials, shadows, an interactive 3D camera to fly around in the scene, render multiple spheres, path tracing & multithreading to optimize performance.",
      "This project is ongoing and I am planning to further extend this ray tracer with more features, eventually I want to move this project entirely to the GPU with Vulkan.",
    ],
    thingsLearned: [
      "All the math behind raytracing spheres",
      "Basic lighting and shading",
      "Interactive 3D camera system",
      "Raytracing pipeline",
      "Physically based rendering",
      "Optimizing performance"
    ],
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
      'Implemented a small compiler in C++ for the language "Teeny Tiny" which is a dialect of BASIC that will compile to C. The language allows a variety of the basic operations that you\'d expect from a programming language.',
    detailedDescription:[
      "Implemented a small compiler in C++ for the language \"Teeny Tiny\" which is a dialect of BASIC that will compile to C.",
      "The language supports a variety of basic operations you'd expect from a programming language like: numerical variables, basic arithmetic, if statements, while loops, print text, numbers, input numbers, labels, goto and comments.",
      "This project was a gentle introduction into creating programming languages from scratch and what it takes to build a compiler in general.",
    ],
      thingsLearned: [
        "Deeper understanding of programming languages as a whole",
        "Capabilities of programming languages",
        "Everything involved in the compiler process",
        "Lexical analysis",
        "Parsing text",
        "Code generation",
      ],
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
      "A project build by myself and other team members as an assigment working agile. This project encompasses an easy to use task sheduler for a tree farm company and its employees. The project exists out of an angular frontend for the employees, a .NET admin panel and a .NET backend",
    detailedDescription: [
      "A project build by myself and other team members as an assigment working in agile through the scrum methodology. This project encompasses an easy to use task sheduler for a tree farm company and its employees.",
      "The project included an extensive functional analysis before starting the development where an entire ERD was mapped out alongside other UML-diagrams.",
      "The main technical requirements for this assignment were: use of clean code architecture, unit tests for every user story and authentication with the help of auth0.",
      "The project consists out of an angular frontend where the employees can check upon their required tasks for the day, a .NET admin panel to provide an intuitive interface to schedule tasks, and a .NET backend to handle all the data being passed between services.",
    ],
    thingsLearned: [
      "Practical agile & scrum experience",
      "Clean code architecture",
      "Planning project with Github Projects",
      "Async/await multithreading",
      "Functional analysis including UML-diagrams",
      "Extensive software testing",
      "Write comprehensive documentation"
    ],
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
        name: "SQL server",
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
  },
];

export {
  services,
  interests,
  degrees,
  experiences,
  projects,
  socials,
  resume,
  tools,
  tracking_tools,
  design_tools,
  databases,
  languages,
  ai_tools,
  frameworks,
  Github,
  Linkedin,
  Email,
};
