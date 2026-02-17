"use client";

import { useState } from "react";

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
    <section id="overview" className="section-block section-a py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 border-8 border-[#ff0000] bg-[#00ffff] p-6 text-black shadow-[8px_8px_0_#ff00ff]">
            <p className="text-[18px] uppercase tracking-[4px]">
              NEW IDE Drop (2026) — Loud, Proud, and Over-Animated
            </p>
            <h2 className="mt-4 text-[44px] font-extrabold text-[#ff00ff] shadow-loud md:text-[64px]">
              DevGPT Ultra PRO IDE
            </h2>
            <p className="mt-2 text-[18px]">
              The new IDE that writes code, rewrites your roadmap, and reboots
              your feelings. Plug in. Panic faster.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-[16px]">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-1 font-bold"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="ticker mt-4 border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2 text-[16px]">
              <span>
                {buzzwords.join(" • ")} • {buzzwords.join(" • ")}
              </span>
            </div>
            <button
              type="button"
              className="mt-5 animate-[wiggle_0.4s_infinite] border-8 border-[#ff0000] bg-[#00ffff] px-6 py-3 text-[20px] font-black text-black shadow-[6px_6px_0_#ff00ff]"
              onClick={handleTrialClick}
            >
              Install IDE (free-ish)
            </button>
            <p className="mt-3 text-[16px] italic">
              Your operating system will never be the same.
            </p>
            {trialMessage ? (
              <p className="mt-2 text-[16px] font-bold text-[#ff0000]">
                {trialMessage}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="border-8 border-[#ff0000] bg-[#ff00ff] p-4 text-black"
              style={{ fontFamily: "Papyrus, fantasy" }}
            >
              <h3 className="text-[22px] uppercase">NEW! Desktop Chaos</h3>
              <p className="text-[16px]">
                Install 12 toolbars. Lose 3 pixels of screen real estate forever.
              </p>
              <p className="blink mt-2 text-[18px] font-bold">
                Now with 87% more nostalgia.
              </p>
              <img
                src="https://placehold.co/400x300/ffff00/ff0000?text=Desktop+Chaos"
                alt="Desktop chaos proof"
                className="mt-3 w-full border-4 border-[#ff0000]"
              />
            </div>
            <div className="border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black">
              <h3 className="text-[22px] uppercase">Painfully Efficient</h3>
              <p className="text-[16px]">
                Boot in 15 seconds. Crash in 5. It&apos;s a speedrun.
              </p>
            </div>
            <div className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black">
              <h3 className="text-[22px] uppercase">AgentStack 9000</h3>
              <p className="text-[16px]">
                AI sidekicks taped to your IDE with digital duct tape.
              </p>
              <img
                src="https://placehold.co/400x200/ffff00/ff0000?text=AgentStack"
                alt="Agent stack screenshot"
                className="mt-3 w-full border-4 border-[#ff0000]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
