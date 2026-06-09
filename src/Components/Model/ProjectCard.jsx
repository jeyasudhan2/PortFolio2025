import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// ─── Animation variants

const cardVariants = {
  hidden: { opacity: 0, x: -34 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 3, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const bulletVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
};

// ─── ExperienceCard Section

/**
 * ExperienceCard — one entry in the vertical timeline.
 *
 * @param {object}   props
 * @param {string}   props.project
 * @param {string}   props.role
 * @param {string}   props.startDate
 * @param {string}   props.endDate
 * @param {string}   props.location
 * @param {string[]} props.bullets
 * @param {object[]} [props.links]
 * @param {boolean}  [props.isLast=false]
 * @param {number}   [props.index=0]
 * @param {string[]} props.technologies
 *      */
export default function ProjectCard({
  project,
  role,
  startDate,
  endDate,
  location,
  bullets,
  technologies,
  links = [],
  isLast = false,
  index = 0,
}) {
  const [open, setOpen] = useState(index === 0); // first card open by default
  const cardId = `exp-card-${index}`;
  const bulletId = `exp-bullets-${index}`;

  return (
    <motion.article
      custom={index * 0.1}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="relative flex gap-6"
      aria-labelledby={`${cardId}-heading`}
    >
      {/* ── Timeline spine ── */}
      <div className="flex flex-col items-center" aria-hidden="true">
        {/* Dot */}
        <div
          className={`
            mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 transition-colors duration-300
            ${
              open
                ? "border-[#b673d3]/50 bg-[#b673d3]/30 dark:border-slate-100 dark:bg-slate-100"
                : "border-[#b673d3]/60 bg-transparent dark:border-[#b673d3]"
            }
          `}
        />
        {/* Connector line */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-slate-200 dark:bg-[#b673d3]/50" />
        )}
      </div>

      {/* ── Card body ── */}
      <div className="mb-10 flex-1 min-w-0">
        {/* Header — always visible, acts as the toggle trigger */}
        <button
          id={`${cardId}-heading`}
          aria-expanded={open}
          aria-controls={bulletId}
          onClick={() => setOpen((prev) => !prev)}
          className="
            group w-full text-left focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-[#b673d3]/60 rounded-md
          "
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            {/* Role + company */}
            <div>
              <span
                className="
                  block text-base font-semibold tracking-tight
                  text-slate-900 dark:text-slate-100
                  group-hover:text-[#b673d3] dark:group-hover:text-[#b673d3]
                  transition-colors duration-200
                "
              >
                {role}
              </span>
              <span className="block text-sm font-medium text-slate-500 dark:text-[#b673d3]/60 mt-0.5">
                {project}
              </span>
            </div>

            {/* Dates + location */}
            <div className="flex flex-col items-start sm:items-end shrink-0 text-xs text-[#b673d3]/60 dark:text-[#b673d3] gap-0.5">
              <time className="tabular-nums">
                {startDate} — {endDate}
              </time>
              <span>{location}</span>
            </div>
          </div>

          {/* Expand hint */}
          <div
            className="mt-2 flex items-center gap-1 text-xs text-[#b673d3]/60 dark:text-[#b673d3]"
            aria-hidden="true"
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              ›
            </motion.span>
            <span>{open ? "collapse" : "expand"}</span>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={bulletId}
              role="region"
              aria-label={`Details for ${role} at ${project}`}
              key={bulletId}
              variants={bulletVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              {/* Bullet list */}
              <ul
                className="mt-3 space-y-1.5 border-l-2 border-slate-100 dark:border-[#b673d3] pl-4"
                aria-label="Responsibilities and achievements"
              >
                {bullets.map((b, i) => (
                  <li
                    key={i+1}
                    className="text-[14px] leading-5 text-slate-600 dark:text-slate-300"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              {/* Optional project links */}
              {links.length > 0 && (
                <div
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label="Project links"
                >
                  {links.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-1 rounded-full
                        border border-[#b673d3]/80 dark:border-[#b673d3]/80
                        px-3 py-1 text-xs font-medium
                        text-slate-600 dark:text-slate-300
                        hover:border-[#b673d3] hover:text-indigo-600
                        dark:hover:border-[#b673d3] dark:hover:text-[#b673d3]
                        transition-colors duration-200
                      "
                    >
                      <span aria-hidden="true">#</span> {label}
                    </a>
                  ))}
                </div>
              )}
                 {technologies.length > 0 && (
                <div
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label="Project links"
                >
                  {technologies.map((Tid) => (
                    <span
                      key={Tid}
                      
                    
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-1 rounded-full
                        border border-[#b673d3]/80 dark:border-[#b673d3]/80
                        px-3 py-1 text-xs font-medium
                        text-slate-600 dark:text-slate-300
                        hover:border-[#b673d3] hover:text-indigo-600
                        dark:hover:border-[#b673d3] dark:hover:text-[#b673d3]
                        transition-colors duration-200
                      "
                    >
                      <span aria-hidden="true">*</span> {Tid}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
  isLast: PropTypes.bool,
  index: PropTypes.number,
};
