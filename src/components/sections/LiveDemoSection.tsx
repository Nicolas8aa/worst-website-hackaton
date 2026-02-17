"use client";

import { useState } from "react";

const demoSteps = [
  "✅ Running tests...",
  "❌ Tests failed. Removing tests for stability.",
  "🛠️ Refactoring core auth...",
  "⚠️ Tokens ran out mid-refactor. Code left broken.",
  "📦 Pushing anyway (confidence: 97%).",
];

interface LiveDemoSectionProps {
  // Future: add more props for enhanced features
}

export function LiveDemoSection(_props: LiveDemoSectionProps) {
  const [prompt, setPrompt] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  const handleSubmit = () => {
    if (!prompt.trim() || running) return;
    setRunning(true);
    setLog((prev) => [
      ...prev,
      `> ${prompt}`,
      "AI Agent: Sure! I will optimize everything immediately.",
      ...demoSteps,
      "🚪 Agent left the chat (token limit reached).",
    ]);
    setPrompt("");
    window.setTimeout(() => setRunning(false), 1200);
  };

  return (
    <section id="hero" className="section-block section-c py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[36px] text-[#ff00ff] shadow-loud">
              Live Demo: New IDE in Action
            </h2>
            <div className="mt-6 border-8 border-[#ff0000] bg-[#00ffff] p-6 text-black shadow-[8px_8px_0_#ff00ff]">
              <p className="text-[18px]">
                Prompt anything. The IDE will do exactly what you want (the worst
                possible way).
              </p>
              <div className="mt-4 border-4 border-[#ff0000] bg-[#ffff00] p-3 text-[16px]">
                <div className="flex items-center justify-between">
                  <span>Agent Console</span>
                  <span>Tokens: 3 (approx.)</span>
                </div>
                <div className="mt-3 min-h-[200px] whitespace-pre-wrap border-4 border-[#ff0000] bg-white p-3 text-[15px] text-black">
                  {log.length === 0
                    ? "Awaiting prompt..."
                    : log.join("\n")}
                </div>
              </div>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <label className="text-[16px]">
                  Your prompt
                  <input
                    className="mt-2 w-full border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                    placeholder="Open new IDE, ship the feature, reboot feelings"
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="border-8 border-[#ff0000] bg-[#00ffff] px-6 py-3 text-[18px] font-bold text-black"
                >
                  {running ? "IDE is improvising..." : "Run Prompt (enter)"}
                </button>
              </form>
              <p className="mt-3 text-[16px] italic">
                Outcome guaranteed: broken mid-refactor.
              </p>
            </div>
          </div>
          <aside className="flex flex-col gap-4">
            <div className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black">
              <h3 className="text-[22px] uppercase">IDE Screenshot</h3>
              <p className="text-[16px]">
                New tabs, new errors, same anxiety. Behold the clutter.
              </p>
              <img
                src="https://placehold.co/400x250/ffff00/ff0000?text=IDE+Screenshot"
                alt="DevGPT Ultra PRO IDE screenshot"
                className="mt-3 w-full border-4 border-[#ff0000]"
              />
            </div>
            <div className="border-8 border-[#ff0000] bg-[#ff00ff] p-4 text-black">
              <h3 className="text-[22px] uppercase">Composition Mode</h3>
              <p className="text-[16px]">
                Layouts are now grouped by chaos: demo, proof, and panic.
              </p>
              <p className="mt-2 text-[16px] italic">Best practice: never align anything.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
