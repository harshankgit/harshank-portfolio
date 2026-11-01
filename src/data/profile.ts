/**
 * SINGLE SOURCE OF TRUTH for all portfolio content.
 *
 * Every fact here mirrors the resume deliverable
 * ("Harshank Kanungo - Full Stack Developer.pdf"). Nothing is invented:
 * no fabricated metrics, no unverified employers, no stack a project
 * does not actually use. Update this file and the whole site follows.
 */

export const profile = {
  name: "Harshank Kanungo",
  role: "Full Stack Developer",
  stackLine: "MERN Stack — MongoDB · Express.js · React.js · Node.js",
  location: "Gurugram, Haryana, India",
  email: "harshankkanungo259@gmail.com",
  phones: ["+91 8109774968", "+91 8965992035"],
  linkedin: "https://www.linkedin.com/in/harshank-kanungo-a4b178251/",
  linkedinLabel: "linkedin.com/in/harshank-kanungo-a4b178251",
  github: "https://github.com/harshankgit",
  githubLabel: "github.com/harshankgit",
  resumePath: "/Harshank-Kanungo-Full-Stack-Developer.pdf",
  /** Profile photo shown in the hero (set to null to show the "HK" monogram). */
  photo: "/harshank-kanungo.jpg" as string | null,
  initials: "HK",
  tagline:
    "I build scalable, responsive web applications across the MERN stack — from multi-vendor e-commerce and real-time bidding systems to project management tools.",
  summary: [
    "Full Stack Developer with 3+ years of experience building scalable, responsive, and high-performance web applications across the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Proficient in React.js, Next.js, TypeScript, JavaScript (ES6+), Redux, and REST API integration, with hands-on delivery of multi-vendor e-commerce platforms, real-time bidding systems, and project management tools.",
    "Skilled in reusable component architecture, secure authentication, role-based access control, and rendering performance optimization. Served as a Project Team Lead mentoring interns, and work productively with AI-assisted development tools including Claude, Cursor, and GitHub Copilot.",
  ],
} as const;

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Featured Projects" },
  { value: "8.76", label: "B.Tech CGPA / 10" },
] as const;

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "Component-Based Architecture",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design & Integration",
      "Authentication & Authorization",
      "Role-Based Access Control (RBAC)",
    ],
  },
  { group: "Databases", items: ["MongoDB", "Supabase"] },
  {
    group: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Antigravity", "npm"],
  },
  {
    group: "AI-Assisted Development",
    items: [
      "Claude",
      "ChatGPT",
      "GitHub Copilot",
      "Cursor",
      "Windsurf",
      "Augment",
      "Qwen",
    ],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Ethara AI",
    location: "Gurugram, Haryana (Onsite)",
    dates: "Jul 2026 — Present",
    current: true,
    bullets: [
      "Build and maintain Python-based evaluation tooling for AI coding-model benchmark workflows as a core contributor to the Anubis terminal benchmark project.",
      "Author terminal and command-line benchmark tasks delivered as complete packages of task instructions, grading rubrics, automated tests, and reference solutions.",
      "Develop automated verification tests in Python that validate model output against expected terminal behavior, including edge cases and failure paths.",
      "Evaluate responses from Claude and GPT-5.3 against authored benchmarks and run structured quality-check and peer-review passes to enforce clarity, determinism, and unambiguous grading criteria.",
    ],
  },
  {
    role: "Software Developer",
    company: "RainStreamWeb Technology",
    location: "Ahmedabad, Gujarat (Onsite)",
    dates: "Sep 2025 — Jul 2026",
    current: false,
    bullets: [
      "Built responsive, interactive web applications in React.js, delivering a chat platform frontend with a reusable component library and a clean, modular code structure.",
      "Integrated REST APIs to manage message delivery and user data, and implemented centralized state management with Redux for consistent, predictable data flow.",
      "Improved application performance and scalability through optimized rendering and component reusability, focusing on smooth user experience and maintainable frontend architecture.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "IndiaNic Infotech Limited",
    location: "Ahmedabad, Gujarat (Onsite)",
    dates: "Apr 2024 — Aug 2025",
    current: false,
    bullets: [
      "Developed dynamic and responsive web applications in React.js with a strong emphasis on performance, scalability, and maintainability.",
      "Built reusable, modular components that improved code maintainability and streamlined feature development across the team.",
      "Integrated REST APIs to extend product functionality and managed application state with Redux to ensure smooth data flow across components.",
      "Served as Project Team Lead (PTL), mentoring 2 interns, assigning tasks, providing technical support, and ensuring successful and timely delivery of project objectives.",
    ],
  },
  {
    role: "Frontend Development Trainee",
    company: "BasketHunt Pvt Ltd",
    location: "Jharkhand (Remote)",
    dates: "Sep 2023 — Mar 2024",
    current: false,
    bullets: [
      "Built responsive user interfaces using React.js, JavaScript, HTML5, and CSS3 as part of a structured frontend development training program.",
      "Gained practical experience in component-based architecture, REST API integration, and collaborative version control using Git and GitHub.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Dboroll",
    subtitle: "Multi-Vendor E-Commerce & Live Auction Platform",
    meta: "UK Client Project",
    featured: true,
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "JavaScript",
      "REST APIs",
    ],
    live: null,
    bullets: [
      "UK-based multi-vendor marketplace enabling multiple sellers and buyers to buy, sell, and auction products through a single unified platform.",
      "Product listing and catalog management, allowing sellers to create, edit, and maintain their own product inventory.",
      "Live auction bidding with highest-bid tracking and the full auction lifecycle: auction creation, bid placement, auction closing, and winner selection.",
      "Secure authentication, profile management, order management, and order tracking supporting the end-to-end purchasing workflow in a responsive, mobile-friendly interface.",
    ],
  },
  {
    name: "Auction Marketplace",
    subtitle: "Real-Time Bidding Platform",
    meta: "UK Client Project",
    featured: true,
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "REST APIs",
    ],
    live: null,
    bullets: [
      "Online auction marketplace where sellers list products for auction and buyers compete through live bidding.",
      "Live bid updates so participants can view the current highest bid and bid history without reloading the page.",
      "Auction lifecycle management covering listing creation, active bidding windows, auction closing, and automatic winner determination.",
      "Distinct seller and buyer functionality, with REST APIs and MongoDB for persistent storage of products, bid history, and final results.",
    ],
  },
  {
    name: "Ecosystem",
    subtitle: "Project & Employee Management System",
    meta: "IndiaNic Infotech — Company Product",
    featured: true,
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "REST APIs",
    ],
    live: null,
    bullets: [
      "Management system consolidating project tracking, employee records, and day-to-day delivery progress into a single application.",
      "Employee management with role-based access and task assignment, letting managers allocate work and maintain clear ownership across projects.",
      "Daily progress report module where employees log completed work and outstanding items for each working day.",
      "Project progress monitoring with completed and pending task tracking, giving stakeholders clear visibility into overall project status.",
    ],
  },
  {
    name: "Car Selling Showroom Management System",
    subtitle: "Role-Based Showroom & Vehicle Platform",
    meta: "Independent Project",
    featured: false,
    stack: ["Next.js", "React.js", "Node.js", "JavaScript", "CSS3", "Vercel"],
    live: "https://auto-dealer-beige.vercel.app",
    bullets: [
      "Role-based car selling platform with Buyer, Seller, and Super Admin modules for streamlined showroom and vehicle management.",
      "Buyer module: browse all showrooms and available cars, review vehicle details, and book cars directly through the platform.",
      "Seller module: full CRUD control over own showroom and car listings. Super Admin module: centralized administration across all users, showrooms, and cars.",
      "Role-based access control enforcing module-level permissions, deployed to Vercel for public access.",
    ],
  },
  {
    name: "Anubis",
    subtitle: "AI Task Generation & Terminal Benchmark Project",
    meta: "Ethara AI",
    featured: false,
    stack: ["Python", "Git", "Terminal / CLI", "Claude", "GPT-5.3"],
    live: null,
    bullets: [
      "Python-based task generation project producing terminal benchmark tasks used to evaluate and benchmark AI coding models.",
      "Each task delivered as a self-contained package: problem statement, grading rubric, automated test suite, and reference solution.",
      "Reusable Python test harnesses to assert expected terminal behavior and detect non-deterministic or ambiguous task definitions.",
      "Multi-stage quality checks on instruction clarity, rubric objectivity, and test coverage, then benchmarked Claude and GPT-5.3 against the authored suite. Scope covered benchmark task generation and model evaluation — not model training or fine-tuning.",
    ],
  },
] as const;

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Medicaps University, Indore, Madhya Pradesh",
    dates: "Aug 2020 — Jun 2024",
    detail: "CGPA: 8.76 / 10",
  },
  {
    degree: "Higher Secondary (Class XII)",
    school: "S.V.M Higher Secondary School, Khandwa",
    dates: "Apr 2019 — Mar 2020",
    detail: "Board of Intermediate Education, MP — 76.6%",
  },
  {
    degree: "Secondary (Class X)",
    school: "S.V.M Higher Secondary School, Khandwa",
    dates: "Apr 2017 — Mar 2018",
    detail: "Board of Secondary Education, MP — 81.40%",
  },
] as const;

export const certifications = [
  "Front-End Web Development using JavaScript and React.js — Bootcamp",
  "Instagram Clone using HTML & CSS — Bootcamp",
  "HTML/CSS Training — Open Weaver",
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
