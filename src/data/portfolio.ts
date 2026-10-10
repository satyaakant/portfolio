/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — the only file you need to edit.
 * ─────────────────────────────────────────────────────────────
 *
 *  • New project      → add an object to the TOP of `projects`.
 *  • New exploration  → add an object to the TOP of `exploring`.
 *  • New genre        → just type a new `genre` string on a project or
 *                       exploration. Filter chips, the lock‑screen
 *                       notifications and the stats update automatically.
 *
 *  Images live in /public — reference them as "/assets/images/xyz.jpg".
 *  `color` is the panel colour; set `ink: "dark"` when that colour is
 *  light (yellow, pink…) so the text on it stays readable.
 *  No public link yet? Leave `link` out — the card says "Private build"
 *  and `highlights` explain what it does.
 */

export type Ink = "light" | "dark";

export type Project = {
    title: string;
    genre: string;
    summary: string;
    image: string;
    link?: string;
    /** Short bullet points — shown on the card, great when there's no live link. */
    highlights?: string[];
    color: string;
    ink?: Ink;
    year?: string;
    role?: string;
    tech?: string[];
};

export type ExploreStatus = "Researching" | "Learning" | "Building" | "Shipped";

export type Exploration = {
    title: string;
    genre: string;
    note: string;
    status: ExploreStatus;
    since: string;
    color: string;
    ink?: Ink;
    link?: string;
};

export const profile = {
    firstName: "Satya",
    lastName: "Mishra",
    fullName: "Satya Kant Mishra",
    role: "Full-stack developer",
    location: "New Delhi",
    tagline: "I build software end to end — web platforms, AI systems, APIs and the cloud they run on.",
    intro: [
        "I'm a co-founder and full-stack developer who lives for the code. I don't just build websites — I build software: web platforms, AI and RAG systems, backends, data pipelines and the cloud underneath.",
        "From rapid prototypes to scalable architecture, I bridge the gap between a cool idea and a shipped product.",
    ],
    /**
     * Portraits: `morning` shows before 12 noon (visitor's local time), `later` the rest of the day.
     * `focus` is the CSS object-position that keeps your face in frame when cropped.
     */
    photos: {
        morning: { src: "/assets/images/satya-mountains.jpg", focus: "30% 58%" },
        later: { src: "/assets/images/satya.jpg", focus: "50% 40%" },
    },
    email: "satyakantmishra50@gmail.com",
    /** Year you started building professionally — drives the "years" stat. */
    startedIn: 2023,
    /** Total projects shipped, including confidential ones not listed below. */
    projectsShipped: 10,
    socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/satyakant-mishra-958847203/" },
    ],
};

// Newest first — the first entry also shows up as a lock‑screen notification.
export const projects: Project[] = [
    {
        title: "Kaamlee",
        genre: "HR tech",
        summary: "A universal job portal — one place for every job, scored against your resume.",
        image: "/assets/images/project-kaamlee.jpg",
        link: "https://kaamlee.in/",
        color: "#1F7A4D",
        highlights: [
            "Roles pulled from ATS platforms & B2B partners onto one live map",
            "Every job scored against the candidate's resume",
            "Application tracker, tailored CVs and a shareable portfolio",
        ],
    },
    {
        title: "MrFly B2B",
        genre: "Travel",
        summary: "A flight booking CRM built for travel agencies, with separate admin and user panels.",
        image: "/assets/images/project-mrfly.jpg",
        link: "https://mrflyb2b.com/",
        color: "#2F5BD8",
        highlights: [
            "Flight search & booking for agency users",
            "Admin panel to manage agencies, bookings and payments",
            "User panel for agents to book, track and manage trips",
        ],
    },
    {
        title: "RAG Chatbots",
        genre: "AI",
        summary: "Chatbots that answer from a company's own documents — and show where each answer came from.",
        image: "/assets/images/project-rag-chatbot.svg",
        color: "#1A0F2E",
        highlights: [
            "PDFs, FAQs and web pages chunked, embedded and stored in a vector DB",
            "Answers grounded in retrieved context, with source citations",
            "Embeddable on websites and support desks",
        ],
    },
    {
        title: "RAG Lead CRM",
        genre: "AI",
        summary: "A lead management CRM with an AI layer that reads your notes and emails to score leads and suggest next steps.",
        image: "/assets/images/project-rag-crm.svg",
        color: "#E9B6A6",
        ink: "dark",
        highlights: [
            "Pipeline, lead and follow-up management",
            "Ask questions about your leads in plain language",
            "AI lead scoring and next-step suggestions grounded in history",
        ],
    },
    {
        title: "CommHawk",
        genre: "Tech studio",
        summary: "CommHawk Technologies — the company I co-founded, building high-performance digital products and AI solutions.",
        image: "/assets/images/project-commhawk.jpg",
        link: "https://commhawk.in/",
        color: "#1E3A5F",
        role: "Co-founder · Full stack",
        highlights: [
            "Design, web and mobile app development",
            "AI & machine learning, data, cloud and DevOps",
            "Built on Next.js, Django, PostgreSQL, Docker and AWS",
        ],
    },
    {
        title: "Befin",
        genre: "Fintech",
        summary: "A finance web app with dashboards for tracking money in and out.",
        image: "/assets/images/project-1.jpg",
        link: "https://app.thebefin.com/",
        color: "#E7A33A",
        ink: "dark",
    },
    {
        title: "ERP System",
        genre: "Enterprise",
        summary: "A college ERP with a teacher portal for classes, attendance, grading and timetables.",
        image: "/assets/images/project-erp.jpg",
        link: "https://maytri.netlify.app/",
        color: "#A9B7A0",
        ink: "dark",
    },
];

// What you're currently poking at. Newest first.
export const exploring: Exploration[] = [
    {
        title: "AI agents & LLM tooling",
        genre: "AI",
        note: "Wiring language models into real product flows, not just chat boxes.",
        status: "Building",
        since: "2026",
        color: "#B3170F",
    },
    {
        title: "3D on the web",
        genre: "Creative dev",
        note: "Three.js and React Three Fiber for interfaces with depth.",
        status: "Learning",
        since: "2026",
        color: "#F2C230",
        ink: "dark",
    },
    {
        title: "Real-time systems",
        genre: "Realtime",
        note: "WebSockets and live maps — taking vehicle tracking further.",
        status: "Researching",
        since: "2025",
        color: "#2F5BD8",
    },
];

export const services = [
    { title: "Frontend engineering", body: "Next.js, React and SSR — interfaces that load fast and feel crafted." },
    { title: "Full-stack builds", body: "Node, Django and REST APIs, from the database to the deploy." },
    { title: "AI & RAG systems", body: "Chatbots and CRMs that answer from your own data, with sources." },
    { title: "Real-time & maps", body: "Live vehicle tracking and location features on Google Maps." },
    { title: "Cloud & shipping", body: "AWS EC2 deployments and the plumbing that keeps products online." },
];

export const experience = [
    {
        role: "Full Stack Developer",
        company: "Navi Telematics Private Limited",
        year: "Feb 2025 — Present",
        description: "Built responsive web apps with Next.js/SSR. Implemented real-time Google Maps vehicle tracking. Deployed on AWS.",
        tech: ["Next.js", "SSR", "Google Maps", "AWS"],
    },
    {
        role: "Full Stack Developer",
        company: "Value on Shore",
        year: "Sep 2024 — Feb 2025",
        description: "Worked on on-shore client projects delivering high-quality web solutions.",
        tech: ["React", "Node.js", "Tailwind"],
    },
    {
        role: "Full Stack Developer",
        company: "Av Tech and Services (IT)",
        year: "May 2024 — Present",
        description: "Developed optimized websites using React & Django. Collaborated with design teams to translate mockups into interactive user interfaces.",
        tech: ["React", "Django", "REST APIs", "Figma"],
    },
    {
        role: "Full Stack Developer",
        company: "Sustain Mall",
        year: "Aug 2023 — Nov 2023",
        description: "Responsive website development using React and Bootstrap. Worked on REST API integration.",
        tech: ["React", "Bootstrap", "Git", "Figma"],
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        year: "2023 — Present",
        description: "Delivering responsive websites for various clients using modern web technologies.",
        tech: ["HTML/CSS", "React", "JavaScript"],
    },
];

export const education = [
    { institution: "JIMS Engineering Management Technical Campus", year: "2021 — 2025", degree: "B.Tech in Computer Science & Engineering" },
    { institution: "Shiksha Bharti Public School, Dwarka", year: "2021", degree: "12th Standard (CBSE)" },
    { institution: "Shiksha Bharti Public School, Dwarka", year: "2019", degree: "10th Standard (CBSE)" },
];

export const skills = [
    "Next.js", "React", "TypeScript", "Node.js", "HTML5", "CSS3", "Tailwind",
    "Git", "REST APIs", "Django", "C++", "AWS EC2",
];

export const workedWith = [
    "Navi Telematics", "Value on Shore", "Av Tech and Services", "Sustain Mall",
    "Kaamlee", "MrFly B2B", "Befin", "CommHawk",
];

/* ── Derived — no need to edit below ─────────────────────────── */

export const genres = Array.from(new Set([...projects, ...exploring].map((i) => i.genre)));

export const stats = [
    { value: `${Math.max(1, new Date().getFullYear() - profile.startedIn)}+`, label: "Years building" },
    { value: `${profile.projectsShipped}+`, label: "Projects shipped" },
    { value: String(experience.length), label: "Teams & roles" },
    { value: String(exploring.length), label: "Genres exploring" },
];

/** Shipped but can't be shown — powers the NDA chat joke. */
export const confidentialCount = Math.max(0, profile.projectsShipped - projects.length);

export const updates = [
    projects[0] && {
        title: `${projects[0].title} is live`,
        meta: `${projects[0].genre} · Latest project`,
        time: "now",
        color: projects[0].color,
        image: projects[0].image,
    },
    exploring[0] && {
        title: `Exploring ${exploring[0].title}`,
        meta: `${exploring[0].genre} · ${exploring[0].status}`,
        time: exploring[0].since,
        color: exploring[0].color,
        image: undefined,
    },
].filter(Boolean) as { title: string; meta: string; time: string; color: string; image?: string }[];
