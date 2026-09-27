// All portfolio content is kept locally so the site can run without a backend or database.

export const profile = {
  name: 'Harikrishnan Aji',
  title: 'Full Stack Developer',
  tagline: '.NET Core · Angular · React · Azure · Microservices',
  summary:
    'Full Stack Developer with 4 years of experience building enterprise-grade web applications using .NET Core, Angular, and Azure. Experienced in developing RESTful APIs, implementing microservices, and modernizing legacy applications. Skilled in React, SQL Server, Azure DevOps, and CI/CD automation, with a strong grounding in SOLID principles, Clean Architecture, and Agile methodologies.',
  email: 'harikrishnanaji10@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harikrishnan-aji/',
  github: 'https://github.com/HarikrishnanAji',
  resumeUrl: '/Harikrishnan_Aji_SDE_Resume.pdf',
}

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'bi-braces',
    skills: [
      { name: 'C#' },
      { name: 'TypeScript / JavaScript' },
      { name: 'SQL' },
      { name: 'Python' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'bi-window-stack',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Blazor' },
      { name: 'Bootstrap / Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: 'bi-hdd-network',
    skills: [
      { name: '.NET Core / ASP.NET MVC / Web Forms' },
      { name: 'Entity Framework Core / LINQ' },
      { name: 'Clean Architecture & SOLID' },
      { name: 'Repository Pattern & Microservices' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: 'bi-cloud-arrow-up',
    skills: [
      { name: 'Microsoft Azure / Azure SQL Database' },
      { name: 'Azure Functions / Service Bus / ADF' },
      { name: 'Azure DevOps CI/CD Pipelines' },
      { name: 'Git / GitHub / GitHub Actions' },
    ],
  },
]

export const features = [
  {
    icon: 'bi-diagram-3',
    title: 'Clean Architecture',
    description:
      'Layered solutions built on the Repository Pattern with clear separation of concerns, following SOLID principles for maintainable, testable code.',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Legacy Modernization',
    description:
      'Migrating legacy ASP.NET Web Forms and stored-procedure-heavy systems to .NET Core, Angular, and LINQ with measurable performance gains.',
  },
  {
    icon: 'bi-cloud-check',
    title: 'Azure & CI/CD Automation',
    description:
      'Azure Functions, Service Bus, and Azure Data Factory pipelines backed by Azure DevOps CI/CD for automated, reliable deployments.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'SongBird – Lyric Video Creator',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    description:
      'Full-stack app built with ASP.NET Core Web API, React, and SQL Server to create synchronized lyric videos. Integrated FFmpeg to render videos from audio, background images, and timestamped LRC/SRT lyrics, with a built-in SRT subtitle editor and configurable fonts and visual effects.',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'FFmpeg', 'EF Core'],
    links: { demo: '#', repo: '#' },
  },
  {
    id: 2,
    title: 'Legacy Application Modernization & Cloud Integration',
    category: 'dotnet',
    categoryLabel: '.NET & Azure',
    description:
      'Modernized a legacy revenue management application built with ASP.NET Web Forms and MVC, enhancing existing modules using modern .NET technologies. Migrated 20+ SQL stored procedures to LINQ, achieving a 15% performance improvement. Developed Azure Functions and Service Bus-based integrations, exposing secure RESTful APIs using ASP.NET Core, SOLID principles, Clean Architecture, and JWT authentication.',
    tech: [
      '.NET Core',
      'ASP.NET Core',
      'ASP.NET Web Forms',
      'ASP.NET MVC',
      'Angular',
      'SQL Server',
      'LINQ',
      'Azure Functions',
      'Azure Service Bus',
      'JWT'
    ],
    links: { demo: '#', repo: '#' },
  },
  {
    id: 3,
    title: 'Employee Transportation Management App',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    description:
      'Web application (Guidehouse internal project) to manage employee transport schedules, improving booking efficiency and allocation visibility. Built with .NET Core, Angular, and SQL Server.',
    tech: ['.NET Core', 'Angular', 'SQL Server'],
    links: { demo: '#', repo: '#' },
  },
  {
    id: 4,
    title: 'Landslide Detection System',
    category: 'research',
    categoryLabel: 'Research',
    description:
      'Academic research system detecting potential landslides using sensor data and early warning models. Findings published in IJRASET and JETIR journals.',
    tech: ['Python', 'Sensor Data', 'ML'],
    links: { demo: '#', repo: '#' },
  },
]

export const experience = [
  {
    id: 1,
    role: 'Application Developer (Full Stack .NET Developer)',
    company: 'IBM',
    period: 'Sept 2025 — Present',
    location: 'Infopark, Kochi',
    points: [
      'Worked across multiple enterprise .NET applications built on a Repository Pattern-based architecture, with React for the frontend.',
      'Contributed to bug fixing, debugging, and application enhancements to improve functionality, stability, and maintainability.',
      'Worked with Microsoft SQL Server and Azure SQL Database for database development, query analysis, and troubleshooting.',
      'Monitored Azure Data Factory (ADF) pipelines and supported issue investigation and resolution.',
      'Used Azure DevOps CI/CD pipelines to automate deployments and streamline release workflows.',
      'Used ServiceNow, Azure DevOps, and Jira for ticket and work item tracking in an Agile environment.',
      'Performed REST API testing and validation using Insomnia to support debugging and issue resolution.',
      'Participated in client interactions to clarify requirements and support project delivery, and obtained Olympe certification for project activities.',
      'Leveraged Claude as an AI-assisted development tool to support development and problem-solving.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer (Full Stack .NET Developer)',
    company: 'Guidehouse India Private Limited',
    period: 'Aug 2022 — Sept 2025',
    location: 'Technopark, Thiruvananthapuram',
    points: [
      'Modernized application modules using .NET Core, Angular, and Blazor, improving performance and user experience.',
      'Migrated 20+ stored procedures to LINQ-based queries, achieving a 15% performance gain.',
      'Worked extensively on a legacy revenue management system using ASP.NET Web Forms, ASP.NET MVC, and complex SQL stored procedures.',
      'Built scalable microservices with Azure Functions and Service Bus; developed secure REST APIs using SOLID principles and Clean Architecture.',
      'Implemented JWT-based authentication enforcing secure, role-based access across distributed systems.',
      'Resolved high-priority production issues across legacy and modern stacks through debugging and root cause analysis.',
      'Authored technical documentation, delivered KT sessions, and mentored junior developers.',
      'Received the Best Performer (GEM) Award (Mar 2024) and was a finalist in the Guidehouse Hackathon 2023.',
    ],
  },
]

export const education = [
  {
    id: 1,
    degree: 'B.Tech, Computer Science & Engineering',
    institute: 'APJ Abdul Kalam Technological University',
    period: 'Aug 2018 — Jul 2022',
    detail: 'CGPA: 7.1 (71%)',
  },
  {
    id: 2,
    degree: 'Higher Secondary (Biology–Mathematics)',
    institute: 'Kerala Board of Higher Secondary Education',
    period: 'Jun 2016 — May 2018',
    detail: '',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '',
  },
  {
    id: 2,
    title: 'GitHub Copilot Certification (GH-300)',
    issuer: 'GitHub',
    date: '',
  },
  {
    id: 3,
    title: 'Olympe Certification',
    issuer: 'IBM',
    date: '',
  },
  {
    id: 4,
    title: 'Best Performer (GEM) Award',
    issuer: 'Guidehouse',
    date: 'Mar 2024',
  },
  {
    id: 5,
    title: 'Finalist — Guidehouse Hackathon',
    issuer: 'Guidehouse',
    date: '2023',
  },
]

export const facts = [
  { icon: 'bi-briefcase', value: 4, suffix: '+', label: 'Years of Experience' },
  { icon: 'bi-kanban', value: 20, suffix: '+', label: 'Stored Procedures Modernized' },
  { icon: 'bi-diagram-3', value: 5, suffix: '+', label: 'Projects Delivered' },
  { icon: 'bi-award', value: 3, suffix: '', label: 'Certifications Earned' },
]
