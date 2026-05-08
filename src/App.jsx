import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profile = {
  name: "Josamine Parungao",
  tagline:
    "Crafting websites, analyzing data, and providing tech solutions with attention to detail and creativity.",
  location: "Philippines",
  email: "parungao.josamine@gmail.com",
};

const stats = [
  { label: "Projects", value: 8, icon: "🏰" },
  { label: "Experience", value: "1 year+", icon: "🛡️" },
  { label: "Available", value: "Open", icon: "⭐" },
];

const skills = [
  { name: "HTML/CSS", level: 85 },
  { name: "PHP", level: 85 },
  { name: "MySQL", level: 75 },
  { name: "Node.js", level: 60 },
  { name: "C++", level: 75 },
  { name: "React", level: 70 },
  { name: "Java", level: 70 },
  { name: "Laravel", level: 60 },
  { name: "JavaScript", level: 60 },
];

const toolGroups = [
  {
    title: "Development Tools",
    items: [
      { name: "VS Code", short: "VS", color: "bg-[#007ACC]", text: "text-white" },
      { name: "XAMPP", short: "XA", color: "bg-[#FB7A24]", text: "text-white" },
      { name: "Android Studio", short: "AS", color: "bg-[#3DDC84]", text: "text-[#173b24]" },
      { name: "Wix", short: "WX", color: "bg-[#111827]", text: "text-white" },
      { name: "Shopify", short: "SP", color: "bg-[#95BF47]", text: "text-[#263d13]" },
      { name: "GoDaddy", short: "GD", color: "bg-[#00A4A6]", text: "text-white" },    ],
  },
  {
    title: "Database Tools",
    items: [
      { name: "MySQL Workbench", short: "MY", color: "bg-[#00618A]", text: "text-white" },
      { name: "MS SQL", short: "SQL", color: "bg-[#CC2927]", text: "text-white" },
      { name: "HeidiSQL", short: "HD", color: "bg-[#7b4f2d]", text: "text-white" },
    ],
  },
  {
    title: "Data & Reporting",
    items: [
      { name: "Tableau", short: "TB", color: "bg-[#E97627]", text: "text-white" },
      { name: "Power BI", short: "BI", color: "bg-[#F2C811]", text: "text-[#3f2f1d]" },
      { name: "MS Office", short: "MS", color: "bg-[#D83B01]", text: "text-white" },
    ],
  },
  {
    title: "Remote Support",
    items: [
      { name: "AnyDesk", short: "AD", color: "bg-[#EF443B]", text: "text-white" },
      { name: "TeamViewer", short: "TV", color: "bg-[#0E8EE9]", text: "text-white" },
    ],
  },
{
  title: "AI Tools",
  items: [
    { name: "ChatGPT", short: "AI", color: "bg-[#10A37F]", text: "text-white" },
    { name: "GitHub Copilot", short: "CP", color: "bg-[#24292F]", text: "text-white" },
  ],
}
];

const projects = [
  {
    title: "BIMS System",
    category: "Capstone Project",
    description:
      "Barangay Information and Management System for online document requests, pickup scheduling, admin reports, and census data management.",
    tech: ["PHP", "MySQL", "Reports"],
  },
  {
    title: "POS & Inventory Management System",
    category: "Business System",
    description:
      "A system designed to simplify sales management and inventory tracking for businesses.",
    tech: ["HTML/CSS", "PHP", "Javascript", "MySQL"],
  },
  {
    title: "Restaurant Mobile Application",
    category: "Mobile App",
    description: "A mobile app for food ordering and catering reservations.",
    tech: ["Android Studio", "Java", "SQLite", "UI/UX"],
  },
  {
    title: "Voter's Registration System",
    category: "Information System",
    description: "A platform to manage and track voter information.",
    tech: ["Java", "MySQL"],
  },
  {
    title: "Online Gate Vehicle System",
    category: "Management System",
    description:
      "A web based system for vehicle gate access, registration, tracking, and reporting.",
    tech: ["HTML/CSS", "PHP", "JavaScript", "MySQL"],
  },
  {
    title: "Payroll Management System",
    category: "Management System",
    description:
      "A system to manage employee payroll, track salaries, and generate reports efficiently.",
    tech: ["HTML/CSS", "PHP", "JavaScript", "MySQL"],
  },
  {
    title: "Gabaldon Tourism Website",
    category: "Website Project",
    live: "https://gabaldonturismo.wixsite.com/gabaldon-tourism",
    description:
      "A tourism website showcasing local attractions, resorts, and tourism services.",
    tech: ["Wix", "WixCMS"],
  },
  {
    title: "WorkPulse",
    category: "Monitoring and Productivity System",
    description:
      "WorkPulse is a web-based attendance and productivity tool that helps monitor remote employee activity and track work sessions in real time.",
    tech: ["HTML/CSS", "PHP", "JavaScript", "MySQL"],
  },
];

const aboutItems = [
  "Hello — I'm Josamine Parungao, a BS in Information Technology graduate majoring in Web Systems Technology. I focus on web development, data analysis, remote support, and building practical tech solutions.",
  "I have experience developing systems for real-world use, including web-based platforms for information management, business operations, and reporting.",
  "I started freelancing in May 2024, initially working with student clients and helping them develop functional, user-friendly systems for their academic projects.",
  "During my 4-month internship, I contributed to deploying an LGU tourism website and assisted in developing a payroll management system.",
  "Currently, I work as a Junior IT Developer in a logistics company, where I support system operations, perform testing and improvements, and provide technical assistance to users.",
  "I enjoy creating systems that solve real problems and improve efficiency for both users and organizations.",
];

const socialLinks = [
  {
    name: "Viber",
    href: "viber://chat?number=%2B639815382299",
    icon: "fab fa-viber",
    color: "bg-[#7360F2]",
  },
  {
    name: "Telegram",
    href: "https://t.me/yourusername",
    icon: "fab fa-telegram-plane",
    color: "bg-[#229ED9]",
  },
  {
    name: "GitHub",
    href: "https://github.com/josaminep",
    icon: "fab fa-github",
    color: "bg-[#181717]",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/1025422306094366774",
    icon: "fab fa-discord",
    color: "bg-[#5865F2]",
  },
  {
    name: "Messenger",
    href: "https://m.me/josaminep",
    icon: "fab fa-facebook-messenger",
    color: "bg-[#0084FF]",
  },
];

const pages = [
  { id: "home", label: "Home", icon: "🏡" },
  { id: "about", label: "About", icon: "📜" },
  { id: "skills", label: "Skills", icon: "⚒️" },
  { id: "projects", label: "Projects", icon: "🏰" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

function VillageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#f4dfb4]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(132,204,22,0.28),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.26),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.22),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#86a85c] to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#7c5c38_1px,transparent_1px),linear-gradient(#7c5c38_1px,transparent_1px)] bg-[size:48px_48px]" />
      <motion.div
        className="absolute left-[-20%] top-[18%] h-20 w-[140%] rounded-full bg-white/25 blur-3xl"
        animate={{ x: [0, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingLeaves() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.span
          key={leaf.id}
          className="absolute text-base opacity-30 sm:text-lg sm:opacity-40"
          style={{ left: leaf.left, top: leaf.top }}
          animate={{ y: [0, 28, 0], x: [0, 16, 0], rotate: [0, 16, -8, 0] }}
          transition={{ repeat: Infinity, duration: leaf.duration, delay: leaf.delay }}
        >
          🍃
        </motion.span>
      ))}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border-[3px] border-[#7b4f2d] bg-[#fff8df] text-[#3f2f1d] shadow-[0_7px_0_#7b4f2d,0_16px_34px_rgba(68,43,20,0.2)] sm:rounded-[28px] sm:border-4 sm:shadow-[0_10px_0_#7b4f2d,0_22px_45px_rgba(68,43,20,0.25)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#d99b45] via-[#f8d56b] to-[#d99b45]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function PageTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-5 text-center sm:mb-6 md:text-left">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7b4f2d] sm:text-sm sm:tracking-[0.22em]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-[#3f2f1d] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#6f5738] sm:text-base md:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SkillBar({ skill }) {
  return (
    <div className="rounded-2xl border-2 border-[#7b4f2d] bg-[#fff8df] p-3 shadow-[0_3px_0_#7b4f2d]">
      <div className="mb-2 flex justify-between gap-3 text-xs font-black sm:text-sm">
        <span>{skill.name}</span>
        <span className="text-[#b86b17]">{skill.level}%</span>
      </div>
      <div className="h-4 overflow-hidden rounded-full border-2 border-[#7b4f2d] bg-[#d8bd83]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#5fa647] via-[#92c94f] to-[#f7c948]"
        />
      </div>
    </div>
  );
}

function HomePage({ setActivePage }) {
  return (
    <div className="grid min-h-[60vh] items-center gap-7 lg:min-h-[66vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-[#7b4f2d] bg-[#ffe08a] px-4 py-2 text-xs font-black text-[#5b3518] shadow-[0_5px_0_#7b4f2d] sm:border-4 sm:px-5 sm:text-sm">
          ⭐ Available for collaboration, part-time, and full-time roles.
        </div>

        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#3f2f1d] sm:text-6xl lg:text-7xl">
          Josamine <span className="text-[#b86b17]">Parungao</span>
        </h1>

        <p className="mt-5 text-base font-black uppercase tracking-widest text-[#5c7f2b] sm:text-xl">
          Junior IT Developer
        </p>
        <p className="mt-6 max-w-2xl rounded-3xl border-[3px] border-[#7b4f2d] bg-[#fff8df]/90 p-4 text-base font-semibold leading-8 text-[#5f4a30] shadow-[0_6px_0_#7b4f2d] sm:border-4 sm:p-5 sm:text-lg sm:shadow-[0_8px_0_#7b4f2d]">
          “{profile.tagline}”
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={() => setActivePage("projects")}
            className="rounded-2xl border-4 border-[#7b4f2d] bg-[#f7c948] px-6 py-3 text-sm font-black uppercase tracking-widest text-[#3f2f1d] shadow-[0_7px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none sm:w-auto"
          >
            View Projects
          </button>
          <button
            onClick={() => setActivePage("contact")}
            className="rounded-2xl border-4 border-[#7b4f2d] bg-[#8cc152] px-6 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[0_7px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-4 sm:p-6">
          <div className="rounded-[22px] border-[3px] border-[#7b4f2d] bg-[#f6d58b] p-4 sm:border-4 sm:p-5">
            <div className="mb-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:flex-col lg:text-center xl:flex-row xl:text-left">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border-4 border-[#7b4f2d] bg-[#8cc152] text-4xl shadow-[0_6px_0_#7b4f2d]">
                👩‍💻
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#7b4f2d] sm:text-sm">
                  Profile Card
                </p>
                <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                  Web System Developer
                </h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border-[3px] border-[#7b4f2d] bg-[#fff8df] p-4 text-center shadow-[0_5px_0_#7b4f2d] transition hover:-translate-y-1 sm:border-4"
                >
                  <div className="text-3xl">{stat.icon}</div>
                  <p className="mt-2 text-xl font-black sm:text-2xl">{stat.value}</p>
                  <p className="text-xs font-bold text-[#6f5738] sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <PageTitle eyebrow="About Me" title="My Story" subtitle="A simple overview of my education and experience." />
      <Card className="p-5 sm:p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center lg:sticky lg:top-8 lg:justify-start"
          >
            <img
              src="/profile.jpg"
              alt="Josamine"
              className="h-44 w-44 rounded-[28px] border-4 border-[#7b4f2d] object-cover shadow-[0_6px_0_#7b4f2d] transition hover:-translate-y-1 hover:scale-105 sm:h-52 sm:w-52"
            />
          </motion.div>

          <div className="grid gap-4 text-sm font-semibold leading-7 text-[#5f4a30] sm:text-base sm:leading-8 lg:grid-cols-2">
            {aboutItems.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-4 rounded-2xl border-[3px] border-[#7b4f2d] bg-[#fff8df] p-4 shadow-[0_4px_0_#7b4f2d] transition hover:-translate-y-1 hover:bg-[#ffe08a] sm:border-4 sm:shadow-[0_5px_0_#7b4f2d]"
              >
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-[#7b4f2d] bg-[#f6d58b] text-xs font-black text-[#3f2f1d] shadow-[0_3px_0_#7b4f2d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SkillsPage() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <PageTitle eyebrow="Skills & Tools" title="Builder Skills" subtitle="A clean skill overview inspired by upgrade bars and village tools." />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5 sm:p-6">
          <h3 className="text-xl font-black uppercase sm:text-2xl">Technical Skills</h3>
          <p className="mt-2 text-sm font-semibold leading-7 text-[#6f5738] sm:text-base">
            Programming languages, frameworks, and database skills.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <h3 className="text-xl font-black uppercase sm:text-2xl">Tools Inventory</h3>
          <p className="mt-2 text-sm font-semibold leading-7 text-[#6f5738] sm:text-base">
            Software and platforms I use for development, databases, reports, and remote support.
          </p>

          <div className="mt-6 space-y-6">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full border-2 border-[#7b4f2d] bg-[#8cc152]" />
                  <p className="text-xs font-black uppercase tracking-widest text-[#7b4f2d] sm:text-sm">
                    {group.title}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((tool) => (
                    <div
                      key={tool.name}
                      className="group flex items-center gap-3 rounded-2xl border-[3px] border-[#7b4f2d] bg-[#fff8df] p-3 shadow-[0_4px_0_#7b4f2d] transition hover:-translate-y-1 hover:bg-[#ffe08a] active:translate-y-1 active:shadow-none sm:border-4 sm:shadow-[0_5px_0_#7b4f2d]"
                    >
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border-[3px] border-[#7b4f2d] ${tool.color} ${tool.text} text-xs font-black shadow-[0_3px_0_#7b4f2d] sm:h-12 sm:w-12 sm:border-4 sm:text-sm`}
                      >
                        {tool.short}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-[#3f2f1d]">{tool.name}</p>
                        <p className="text-xs font-bold text-[#6f5738]">Tool / Platform</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <PageTitle eyebrow="Projects" title="Project Village" subtitle="Click a building to view the project details." />
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setActiveProject(project)}
              className={`rounded-[22px] border-[3px] p-4 text-left shadow-[0_5px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none sm:rounded-[24px] sm:border-4 sm:p-5 sm:shadow-[0_7px_0_#7b4f2d] ${
                activeProject.title === project.title
                  ? "border-[#7b4f2d] bg-[#f7c948]"
                  : "border-[#7b4f2d] bg-[#fff8df] hover:bg-[#f6d58b]"
              }`}
            >
              <h3 className="text-base font-black uppercase leading-tight text-[#3f2f1d] sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 text-xs font-bold text-[#6f5738] sm:text-sm">{project.category}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeProject.title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-5 sm:p-6 md:p-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7b4f2d] sm:text-sm">
                  Project Details
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-4xl">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-sm font-black text-[#5c7f2b] sm:text-base">
                  {activeProject.category}
                </p>
              </div>

              <p className="mt-7 rounded-2xl border-[3px] border-[#7b4f2d] bg-[#fff8df] p-4 text-sm font-semibold leading-7 text-[#5f4a30] shadow-[0_4px_0_#7b4f2d] sm:border-4 sm:text-lg sm:leading-8 sm:shadow-[0_5px_0_#7b4f2d]">
                {activeProject.description}
              </p>

              <div className="mt-7">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#7b4f2d] sm:text-sm">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-[#7b4f2d] bg-[#f6d58b] px-3 py-1 text-xs font-black text-[#3f2f1d] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border-[3px] border-[#7b4f2d] bg-[#8cc152] px-5 py-3 text-center text-xs font-black uppercase tracking-widest text-white shadow-[0_4px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none sm:border-4 sm:px-6 sm:text-sm sm:shadow-[0_7px_0_#7b4f2d]"
                  >
                    Live View
                  </a>
                )}

                {activeProject.source && (
                  <a
                    href={activeProject.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border-[3px] border-[#7b4f2d] bg-[#f7c948] px-5 py-3 text-center text-xs font-black uppercase tracking-widest text-[#3f2f1d] shadow-[0_4px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none sm:border-4 sm:px-6 sm:text-sm sm:shadow-[0_7px_0_#7b4f2d]"
                  >
                    Source Code
                  </a>
                )}

                {!activeProject.live && !activeProject.source && (
                  <p className="w-full rounded-2xl border-[3px] border-[#7b4f2d] bg-[#fff8df] px-4 py-4 text-center text-xs font-black uppercase tracking-widest text-[#7b4f2d] shadow-[0_4px_0_#7b4f2d] sm:border-4 sm:px-5 sm:text-sm sm:shadow-[0_5px_0_#7b4f2d]">
                    Live demo or source code is currently unavailable
                  </p>
                )}
              </div>
            </Card>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <PageTitle eyebrow="Contact" title="Let’s Build Together" subtitle="Send a message for collaboration, part-time, or full-time opportunities." />
      <Card className="p-5 text-center sm:p-8">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-[24px] border-4 border-[#7b4f2d] bg-[#8cc152] text-4xl shadow-[0_7px_0_#7b4f2d] sm:h-24 sm:w-24 sm:rounded-[28px] sm:text-5xl">
          ✉️
        </div>
        <h3 className="mt-7 text-2xl font-black uppercase leading-tight sm:text-3xl">
          Available for Opportunities
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#5f4a30] sm:text-lg">
          I am available for collaboration, part-time, and full-time role.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-2xl border-4 border-[#7b4f2d] bg-[#f7c948] px-7 py-3 text-sm font-black uppercase tracking-widest text-[#3f2f1d] shadow-[0_7px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none"
          >
            Send Email
          </a>
          <a
            href="/parungao_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-4 border-[#7b4f2d] bg-[#8cc152] px-7 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[0_7px_0_#7b4f2d] transition hover:-translate-y-1 active:translate-y-1 active:shadow-none"
          >
            Preview Resume
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#7b4f2d] ${social.color} text-lg text-white shadow-[0_4px_0_#7b4f2d] transition hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:shadow-none sm:h-12 sm:w-12 sm:border-4 sm:text-xl`}
              title={social.name}
              aria-label={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    if (activePage === "home") return <HomePage setActivePage={setActivePage} />;
    if (activePage === "about") return <AboutPage />;
    if (activePage === "skills") return <SkillsPage />;
    if (activePage === "projects") return <ProjectsPage />;
    return <ContactPage />;
  };

  return (
    <main className="min-h-screen overflow-hidden text-[#3f2f1d]">
      <VillageBackground />
      <FloatingLeaves />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-3 py-4 sm:px-5 sm:py-5 md:px-8">
        <nav className="z-30 mb-5 flex flex-col gap-4 rounded-[24px] border-[3px] border-[#7b4f2d] bg-[#fff8df]/95 px-4 py-4 shadow-[0_6px_0_#7b4f2d,0_16px_28px_rgba(68,43,20,0.18)] backdrop-blur sm:rounded-[28px] sm:border-4 sm:px-5 sm:shadow-[0_8px_0_#7b4f2d,0_18px_35px_rgba(68,43,20,0.2)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border-[3px] border-[#7b4f2d] bg-[#8cc152] text-xl font-black text-white shadow-[0_4px_0_#7b4f2d] sm:h-12 sm:w-12 sm:border-4 sm:text-2xl">
              J
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-black tracking-[0.16em] text-[#3f2f1d] sm:text-sm sm:tracking-[0.18em]">
                JOSAMINE VILLAGE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:justify-end">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={`rounded-2xl border-[3px] border-[#7b4f2d] px-3 py-2 text-xs font-black transition active:translate-y-1 active:shadow-none sm:border-4 sm:px-4 sm:text-sm ${
                  activePage === page.id
                    ? "bg-[#f7c948] text-[#3f2f1d] shadow-[0_4px_0_#7b4f2d] sm:shadow-[0_5px_0_#7b4f2d]"
                    : "bg-[#f6d58b] text-[#3f2f1d] shadow-[0_3px_0_#7b4f2d] hover:-translate-y-1 hover:bg-[#ffe08a] sm:shadow-[0_4px_0_#7b4f2d]"
                }`}
              >
                <span className="mr-1 sm:mr-2">{page.icon}</span>
                {page.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="flex-1 rounded-[26px] border-[3px] border-[#7b4f2d] bg-[#e8c987]/75 p-3 shadow-[0_7px_0_#7b4f2d,0_18px_40px_rgba(68,43,20,0.18)] backdrop-blur-sm sm:rounded-[32px] sm:border-4 sm:p-5 sm:shadow-[0_10px_0_#7b4f2d,0_24px_55px_rgba(68,43,20,0.2)] md:p-8">
          <AnimatePresence mode="wait">
            <div key={activePage}>{renderPage()}</div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
