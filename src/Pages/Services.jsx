import { useState, useEffect, useRef } from "react";
import Timepicker from "../Components/Model/Timepicker";
import Gradient from "../Components/Gradient";

function SkillBar({ label, pct }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setWidth(pct);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div ref={ref} className="flex items-center gap-2">
      <span className="text-[11px] text-neutral-500 w-[72px] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-[3px] bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-[11px] text-neutral-600 w-7 text-right">
        {pct}%
      </span>
    </div>
  );
}

const avatars = [
  { initials: "AK", bg: "bg-indigo-950", text: "text-indigo-400" },
  { initials: "SR", bg: "bg-green-950", text: "text-green-400" },
  { initials: "MJ", bg: "bg-red-950", text: "text-red-400" },
  { initials: "LP", bg: "bg-purple-550", text: "text-purple-500" },
  { initials: "+9", bg: "bg-yellow-950", text: "text-yellow-400" },
];

function Tag({ label }) {
  return (
    <span className="text-[10px] plus-jakarta tracking-wider bg-[#27152b] border border-[#6a5f6c]  text-neutral-400 rounded-full px-2.5 py-1">
      # {label}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Services() {
  const isAavilabe = false;
  return (
    <div className="min-h-screen plus-jakarta  text-white font-body px-2 py-10">
      <div className="max-w-3xl mx-30">
        {/* ── Header ── */}
        <div className="flex justify-between items-end mb-10 gap-4">
          <div>
            <p className="text-[17px] font-bold  uppercase  text-purple-500 plus-jakarta mb-2">
              Portfolio — Services
            </p>
            <h1 className="font-display text-4xl plus-jakarta font-bold leading-tight">
              What I <em className="italic text-purple-500 ">build</em>
              <br />
              for you
            </h1>
          </div>
          <div className="flex items-center gap-2 border border-neutral-800 rounded-full px-3 py-1 shrink-0">
            <span
              className={`w-2 h-2  rounded-full  ${isAavilabe ? "bg-green-400" : "bg-amber-300"} animate-pulse`}
            />
            <span className="text-[12px] text-neutral-300 whitespace-nowrap">
              {isAavilabe ? "Active" : "Closed"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-6 auto-rows-[90px] gap-2.5">
          <div className="col-span-6 row-span-2 rounded-2xl p-5 border border-neutral-600 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[11px] text-neutral-600  tracking-wider font-display font-bold">
                  01
                </span>
                <i className="ti ti-code text-purple-500 text-[22px]" />
              </div>
              <h2 className="font-display font-bold text-[18px] mt-3 leading-tight">
                Web Development
              </h2>
              <p className="text-[12px] text-neutral-500 mt-1.5 leading-relaxed">
                Pixel-perfect, responsive sites built with React, Next.js &
                Tailwind. From landing pages to full-stack apps.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "TypeScript",
                  "Zustand",
                  "Redux",
                ].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-purple-500 font-medium flex items-center gap-1 mt-2">
              #View projects <i className="ti ti-arrow-right text-[13px]" />
            </p>
          </div>

          <div className="col-span-3 row-span-2 rounded-2xl p-5 flex flex-col border-neutral-600 border justify-between hover:-translate-y-0.5 transition-transform">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[11px] text-neutral-600 tracking-wider font-display font-bold">
                  02
                </span>
                <i className="ti ti-layout text-purple-500 text-[22px]" />
              </div>
              <h2 className="font-display font-bold text-[16px] mt-2 leading-tight">
                UI / UX Design
              </h2>
              <p className="text-[12px] text-neutral-500 mt-1.5 leading-relaxed">
                Clean interfaces grounded in user psychology. Figma wireframes
                to polished design systems.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Figma", "Design systems"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-purple-500 font-medium flex items-center gap-1 mt-2">
              #See work <i className="ti ti-arrow-right text-[13px]" />
            </p>
          </div>

          <div className="col-span-3 row-span-2 border-neutral-600 border  rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className="text-[11px] text-neutral-400 tracking-wider bg-[#2a142f] px-3 py-[1.5px] rounded-xl border border-[#575159] font-display font-bold">
                # Skills
              </span>
              <i className="ti ti-chart-bar text-purple-500 text-[16px]" />
            </div>
            <div className="flex flex-col gap-[3.5px] mt-1">
              {[
                { label: "React/Next", pct: 94 },
                { label: "UI Design", pct: 90 },
                { label: "Secure/Privacy ", pct: 82 },
                { label: "Motion", pct: 75 },
                { label: "Node/APIs", pct: 80 },
              ].map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="col-span-3 row-span-2 border-neutral-600 border rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[11px] text-neutral-600 tracking-wider font-display font-bold">
                  04
                </span>
                <i className="ti ti-player-play text-purple-500 text-[22px]" />
              </div>
              <h2 className="font-display font-bold text-[16px] mt-2 leading-tight">
                Motion & Animation
              </h2>
              <p className="text-[12px] text-neutral-500 mt-1.5 leading-relaxed">
                Scroll-triggered animations, Lottie, GSAP & Framer Motion for
                sites that feel alive.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["GSAP", "Framer", "Lottie"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-purple-500 font-medium flex items-center gap-1 mt-2">
              #Demo <i className="ti ti-arrow-right text-[13px]" />
            </p>
          </div>

          <div className="col-span-3 row-span-1  border border-neutral-600 rounded-2xl px-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-neutral-600 tracking-wider font-display font-bold">
                Clients
              </p>
              <p className="text-[12px] text-neutral-300 font-medium mt-0.5">
                Simple Step to reaching Client· Freelancing ·
              </p>
            </div>
            <div className="flex">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${a.bg} ${a.text} border-[1.5px]  flex items-center justify-center text-[10px] font-semibold ${i !== 0 ? "-ml-1.5" : ""}`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3 row-span-1 border-neutral-600 border rounded-2xl px-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-neutral-600 tracking-wider font-display font-bold">
                Turnaround
              </p>
              <p className="text-[12px] text-neutral-300 font-medium mt-0.5">
                18–30 days for most projects ,That Project - Secure & more
                Reliable , Efficiency
              </p>
            </div>
            <div className="flex items-center gap-2">
              <i className="ti ti-clock text-neutral-600 text-[18px]" />
              <span className="font-display  text-[12px] text-purple-500">
                Moderate
              </span>
            </div>
          </div>
          <div className="col-span-2 row-span-4 rounded-2xl border border-white/40 ">
            <span className=" text-xs text-white/40 px-4 ">05</span>
            <div>
              <Timepicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
