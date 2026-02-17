"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const buzzwords = [
  "PromptOps",
  "Vibe Coding",
  "Autonomous Standups",
  "Agent Mesh",
  "Hallucination-Driven Dev",
  "Spec-to-Ship",
  "Context Window++",
  "Copilot of Copilots",
];

const badges = [
  "Dial-Up Ready",
  "Sticker-Backed",
  "Auto-Save-ish",
  "Winamp Compatible",
  "Clipart Certified",
];

export function OverviewSection() {
  const [trialMessage, setTrialMessage] = useState("");

  const handleTrialClick = () => {
    setTrialMessage("Trial started. Terms auto-accepted by your aura.");
  };

  return (
    <section id="overview" className="section-block section-a py-6 sm:py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-3 w-full">
          <div className="section-card md:col-span-2 border-[3px] sm:border-4 md:border-6 lg:border-8 border-[#ff0000] bg-[#00ffff] p-3 sm:p-4 md:p-6 text-black shadow-[3px_3px_0_#ff00ff] sm:shadow-[4px_4px_0_#ff00ff] md:shadow-[6px_6px_0_#ff00ff] lg:shadow-[8px_8px_0_#ff00ff] max-w-full">
            <p className="text-[14px] uppercase tracking-[2px] sm:text-[16px] sm:tracking-[3px] md:text-[18px] md:tracking-[4px]">
              NEW IDE Drop (2026) — Loud, Proud, and Over-Animated
            </p>
            <h2 className="mt-4 text-[28px] font-extrabold text-[#ff00ff] shadow-loud sm:text-[36px] md:text-[48px] lg:text-[64px] break-words">
              {SITE_CONFIG.name}
            </h2>
            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px]">
              The new IDE that writes code, rewrites your roadmap, and reboots
              your feelings. Plug in. Panic faster.
            </p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3 text-[12px] sm:text-[14px] md:text-[16px]">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="border-2 sm:border-3 md:border-4 border-[#ff0000] bg-[#ffff00] px-2 sm:px-3 py-1 font-bold whitespace-nowrap"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="ticker mt-3 sm:mt-4 border-2 sm:border-3 md:border-4 border-[#ff0000] bg-[#ffff00] px-2 sm:px-3 py-2 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] overflow-hidden w-full">
              <span>
                {buzzwords.join(" • ")} • {buzzwords.join(" • ")}
              </span>
            </div>
            <button
              type="button"
              className="mt-4 sm:mt-5 animate-[wiggle_0.4s_infinite] border-[3px] sm:border-4 md:border-6 lg:border-8 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[13px] font-black text-black shadow-[3px_3px_0_#ff00ff] sm:px-4 sm:py-2 sm:text-[14px] md:px-6 md:py-3 md:text-[16px] lg:text-[20px] sm:shadow-[4px_4px_0_#ff00ff] md:shadow-[6px_6px_0_#ff00ff]"
              onClick={handleTrialClick}
            >
              Install IDE (free-ish)
            </button>
            <p className="mt-3 text-[12px] italic sm:text-[14px] md:text-[16px]">
              Your operating system will never be the same.
            </p>
            {trialMessage ? (
              <p className="mt-2 text-[12px] font-bold text-[#ff0000] sm:text-[14px] md:text-[16px] break-words">
                {trialMessage}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div
              className="section-card border-[3px] sm:border-4 md:border-6 lg:border-8 border-[#ff0000] bg-[#ff00ff] p-3 sm:p-4 text-black max-w-full"
              style={{ fontFamily: "Papyrus, fantasy" }}
            >
              <h3 className="text-[16px] uppercase sm:text-[18px] md:text-[20px] lg:text-[22px]">
                NEW! Desktop Chaos
              </h3>
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                Install 12 toolbars. Lose 3 pixels of screen real estate forever.
              </p>
              <p className="blink mt-2 text-[14px] font-bold sm:text-[16px] md:text-[18px]">
                Now with 87% more nostalgia.
              </p>
            </div>
            <div className="section-card border-[3px] sm:border-4 md:border-6 lg:border-8 border-[#ff0000] bg-[#00ffff] p-3 sm:p-4 text-black max-w-full">
              <h3 className="text-[16px] uppercase sm:text-[18px] md:text-[20px] lg:text-[22px]">
                Painfully Efficient
              </h3>
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                Boot in 15 seconds. Crash in 5. It&apos;s a speedrun.
              </p>
            </div>
            <div className="section-card border-[3px] sm:border-4 md:border-6 lg:border-8 border-[#ff0000] bg-[#ffff00] p-3 sm:p-4 text-black max-w-full">
              <h3 className="text-[16px] uppercase sm:text-[18px] md:text-[20px] lg:text-[22px]">
                AgentStack 9000
              </h3>
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                AI sidekicks taped to your IDE with digital duct tape.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
