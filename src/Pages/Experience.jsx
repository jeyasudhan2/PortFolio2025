import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import ExperienceCard from "./../Components/Model/ExperienceCard.jsx";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace with your own data or fetch from an API / CMS.

const EXPERIENCE_DATA = [
  {
    company: "Digitally AI Tech Solutions",
    role: " Frontend Engineer",
    startDate: "June 2025",
    endDate: "August 2025",
    location: "On-site · Karaikudi ,TamilNadu",
    bullets: [
      "Developed full-stack e-commerce platform featuring comprehensive product cart, user authentication system, dynamic shopping cart, and secure payment integration using the MERN stack (MongoDB, Express.js, React, Node.js) utilizing React components, hooks, and state management to deliver seamless user experience across desktop and mobile devices with Node.js and Express.js to handle product CRUD operations, order processing workflows, and user account management with proper authentication and authorization    ",
      "Integrated secure checkout functionality with payment gateway APIs, ensuring PCI compliance and implementing proper error handling and transaction ",
      "Architected MongoDB database schema for optimized data storage and retrieval, implementing efficient indexing strategies and real-time data synchronization for inventory and order updates with payment gateway APIs, ensuring PCI compliance and implementing proper error handling and transaction validation  ",
    ],
    links: [
      { label: "Design System", href: "https://github.com/acme/design-system" },
      { label: "Case Study", href: "https://acme.com/blog/case-study" },
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Web Developer",
    startDate: "Jan 2018",
    endDate: "Jul 2019",
    location: "Remote",
    bullets: [
      "Designed and developed 8 client websites using React, Gatsby, and WordPress.",
      "Set up CI/CD pipelines on GitHub Actions for automated deployments to Netlify and Vercel.",
    ],
    links: [],
  },
];

// ─── Section heading animation ────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: -26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── ExperiencePage ───────────────────────────────────────────────────────────

export default function Experience() {
  // Smooth-scroll to this section if linked from a nav anchor (#experience)
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#experience" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <main
      id="experience"
      ref={sectionRef}
      className="
        min-h-screen  bg-transparent
        px-6 py-20 sm:px-10 md:px-20 lg:px-32
        scroll-mt-20 plus-jakarta 
      "
      aria-label="Experience"
    >
      {/* ── Page heading ── */}
      <motion.header
        className="mb-14"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <p
          className="mb-2 text-md  font-semibold uppercase tracking-widest text-[#b673d3] dark:text-[#b673d3]"
          aria-hidden="true"
        >
          Career
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          Experience
        </h1>
        <p className="mt-3 max-w-xl text-base text-[14px] leading-relaxed text-[#b673d3] dark:text-[#b673d3]/80">
          A timeline of roles, projects, and the impact I&apos;ve shipped. Click
          any entry to expand details.
        </p>
        {/* Decorative rule */}
        <div
          className="mt-8 h-px w-16 bg-purple-200 dark:bg-[#b673d3]/40"
          aria-hidden="true"
        />
      </motion.header>

      {/* ── Timeline ── */}
      <section aria-label="Work history timeline" className="max-w-2xl">
        {EXPERIENCE_DATA.map((exp, i) => (
          <ExperienceCard
            key={`${exp.company}-${exp.role}`}
            {...exp}
            index={i}
            isLast={i === EXPERIENCE_DATA.length - 1}
          />
        ))}
      </section>
    </main>
  );
}
