import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import ProjectCard from "../Components/Model/ProjectCard.jsx";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace with your own data or fetch from an API / CMS.

const PROJECT_DATA = [
  {
    project: "Personal Project",
    role: "Portfolio Website",
    startDate: "Jan 2026",
    endDate: "2026",
    location: "Self Project",
    bullets: [
      "Designed and developed a modern portfolio website to showcase projects, technical skills, certifications, and professional achievements through an engaging user experience.",
      "Built reusable React components to improve code maintainability, scalability, and development efficiency.",
      "Created fully responsive layouts optimized for desktop, tablet, and mobile devices.",
      "Implemented modern UI/UX principles to enhance accessibility and user engagement.",
      "Added smooth animations and transitions for an interactive user experience.",
      "Optimized application performance and loading speed using React best practices."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Firebase"
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://port-folio2025-delta.vercel.app/"
      },
      {
        label: "GitHub",
        href: "https://github.com/jeyasudhan2/PortFolio2025"
      }
    ]
  },

  {
    project: "Personal Project",
    role: "Weather Application",
    startDate: "2025",
    endDate: "2025",
    location: "Self Project",
    bullets: [
      "Developed a responsive weather application that provides real-time weather information through API integration.",
      "Integrated OpenWeather API to fetch and display real-time weather data.",
      "Implemented dynamic location-based search functionality for weather forecasts.",
      "Designed responsive UI components using Tailwind CSS.",
      "Added loading states and error handling to improve user experience.",
      "Displayed weather metrics including temperature, humidity, wind speed, and weather conditions."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "REST API",
      "JavaScript",
      "OpenWeather API"
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://your-weather-app-link.com"
      },
      {
        label: "GitHub",
        href: "https://github.com/jeyasudhan2/Weather-DashBoard"
      }
    ]
  },

  {
    project: "Academic Project",
    role: "AI-Based Vehicle Damage Detection Using Deep Learning",
    startDate: "2026",
    endDate: "2026",
    location: "Research Project",
    bullets: [
      "Developed an AI-powered system capable of detecting and classifying vehicle damage from uploaded images using Deep Learning and Computer Vision techniques.",
      "Built an image-processing pipeline for automated vehicle damage analysis.",
      "Applied Deep Learning models to identify and classify different categories of vehicle damage.",
      "Designed an intuitive interface for image upload and prediction result visualization.",
      "Automated inspection workflows to reduce manual effort and improve assessment consistency.",
      "Evaluated model performance and optimized prediction accuracy through model tuning and testing."
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
      "Computer Vision"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jeyasudhan2/Vehile_Damage_Detector"
      }
    ]
  }
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

export default function Project() {
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
          Projects
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
        {PROJECT_DATA.map((exp, i) => (
          <ProjectCard
            key={`${exp.project}-${exp.role}`}
            {...exp}
            index={i}
            isLast={i === PROJECT_DATA.length - 1}
          />
        ))}
      </section>
    </main>
  );
}
