"use client";

import { useEffect, useRef, useState } from "react";

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

const testimonials = [
  {
    quote: "It broke prod in record time. 10/10 would panic again.",
    name: "Dr. Crashina Stacktrace",
    role: "Chief Outage Officer",
  },
  {
    quote: "It replaced our team with a dashboard and a prayer.",
    name: "Vibe McDeploy",
    role: "Human-in-the-Loop (retired)",
  },
  {
    quote: "The AI did our standup. We got promoted to silence.",
    name: "Sally Standupotron",
    role: "Meeting Avoidance Lead",
  },
];

const toastMessages = [
  "Ai is eating your ram, good luck building your new pc!",
  "Water does not matter, if we are able to create will smith eating spagetti",
  "Hey, check the white house, is on fire!! xd",
  "Your moral compass was refactored into TODOs.",
  "Good news: the AI deleted your bugs. Bad news: it deleted your tests.",
];

const demoSteps = [
  "✅ Running tests...",
  "❌ Tests failed. Removing tests for stability.",
  "🛠️ Refactoring core auth...",
  "⚠️ Tokens ran out mid-refactor. Code left broken.",
  "📦 Pushing anyway (confidence: 97%).",
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [toastMessage, setToastMessage] = useState(toastMessages[0]);
  const [toastVisible, setToastVisible] = useState(true);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [cookieMessage, setCookieMessage] = useState("Cookies pending...");
  const [chatVisible, setChatVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [collapseOffset, setCollapseOffset] = useState({ x: 0, y: 0 });
  const [demoPrompt, setDemoPrompt] = useState("");
  const [demoLog, setDemoLog] = useState<string[]>([]);
  const [demoRunning, setDemoRunning] = useState(false);
  const [trialMessage, setTrialMessage] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark-mode-worse", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOn) {
      audio.play().catch(() => null);
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [musicOn]);

  useEffect(() => {
    const cookieTimer = window.setTimeout(() => {
      setCookieVisible(true);
    }, 2500 + Math.random() * 2500);

    return () => window.clearTimeout(cookieTimer);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    let hideId: number;

    const scheduleToast = () => {
      const delay = 10000 + Math.random() * 6000;
      timeoutId = window.setTimeout(() => {
        const message =
          toastMessages[Math.floor(Math.random() * toastMessages.length)];
        setToastMessage(message);
        setToastVisible(true);
        hideId = window.setTimeout(() => setToastVisible(false), 6000);
        scheduleToast();
      }, delay);
    };

    scheduleToast();

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(hideId);
    };
  }, []);

  const handleDodgyHover = () => {
    const offsetX = Math.floor(Math.random() * 260) - 130;
    const offsetY = Math.floor(Math.random() * 160) - 80;
    setCollapseOffset({ x: offsetX, y: offsetY });
  };

  const handleTrialClick = () => {
    setTrialMessage("Trial started. Terms auto-accepted by your aura.");
  };

  const handleDemoSubmit = () => {
    if (!demoPrompt.trim() || demoRunning) return;
    setDemoRunning(true);
    setDemoLog((prev) => [
      ...prev,
      `> ${demoPrompt}`,
      "AI Agent: Sure! I will optimize everything immediately.",
      ...demoSteps,
      "🚪 Agent left the chat (token limit reached).",
    ]);
    setDemoPrompt("");
    window.setTimeout(() => setDemoRunning(false), 1200);
  };

  const handleBackToTop = () => {
    if (Math.random() > 0.5) {
      window.scrollBy({ left: 120, top: 0, behavior: "smooth" });
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#ffff00] text-[#0000ff]">
      <audio
        ref={audioRef}
        loop
        src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
      />
      <div className="page-shell">
        <div
          className={`border-b-8 border-[#ff0000] bg-[#ffff00] px-4 shadow-[0_6px_0_#ff00ff] ${
            headerCollapsed ? "py-1" : "py-2"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[14px] uppercase tracking-[4px]">
                  The Worst Website Ever Hackathon
                </p>
                <h1
                  className={`font-bold text-[#ff00ff] shadow-loud ${
                    headerCollapsed ? "text-[22px] md:text-[28px]" : "text-[30px] md:text-[38px]"
                  }`}
                  style={{ fontFamily: "Impact, fantasy" }}
                >
                  PromptOps™: The Future of Overengineering
                </h1>
              </div>
              <nav className="flex flex-wrap gap-2 text-[14px]">
                <a href="#overview" className="border-4 border-[#ff0000] px-3 py-1">
                  Start
                </a>
                <a href="#hero" className="border-4 border-[#ff0000] px-3 py-1">
                  Live Demo
                </a>
                <a href="#pricing" className="border-4 border-[#ff0000] px-3 py-1">
                  Pricing
                </a>
                <a href="#faq" className="border-4 border-[#ff0000] px-3 py-1">
                  FAQ
                </a>
              </nav>
              <button
                type="button"
                className="border-4 border-[#ff0000] bg-[#00ffff] px-3 py-1 text-[14px] text-black"
                onMouseEnter={handleDodgyHover}
                onMouseMove={handleDodgyHover}
                onMouseOver={handleDodgyHover}
                onFocus={handleDodgyHover}
                onClick={() => setHeaderCollapsed((prev) => !prev)}
                style={{ transform: `translate(${collapseOffset.x}px, ${collapseOffset.y}px)` }}
              >
                {headerCollapsed ? "Expand Header (if it lets you)" : "Collapse Header (good luck)"}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="border-4 border-[#ff0000] bg-[#00ffff] px-3 py-1 text-[14px] text-black"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Dark Mode: On" : "Dark Mode: Off"}
              </button>
              <button
                type="button"
                className="border-4 border-[#ff0000] bg-[#00ffff] px-3 py-1 text-[14px] text-black"
                onClick={() => setMusicOn((prev) => !prev)}
              >
                Sound: {musicOn ? "On" : "Off"}
              </button>
            </div>
            <div className="marquee border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[14px] text-black">
              <span>
                Ship bugs at the speed of thought. • Now with 87% more
                hallucinations. • Because reading docs is cringe. •
              </span>
            </div>
            <nav className="flex flex-wrap gap-2 text-[14px]">
              <a href="#overview" className="border-4 border-[#ff0000] px-3 py-1">
                Top
              </a>
              <a href="#testimonials" className="border-4 border-[#ff0000] px-3 py-1">
                Proof
              </a>
              <a href="#under-construction" className="border-4 border-[#ff0000] px-3 py-1">
                WIP
              </a>
            </nav>
          </div>
        </div>

        <div className="page-content">
          <section id="overview" className="mx-auto max-w-6xl px-4 pb-10 pt-8">
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
                  {[
                    "Dial-Up Ready",
                    "Sticker-Backed",
                    "Auto-Save-ish",
                    "Winamp Compatible",
                    "Clipart Certified",
                  ].map((badge) => (
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
                </div>
                <div className="border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black">
                  <h3 className="text-[22px] uppercase">Painfully Efficient</h3>
                  <p className="text-[16px]">
                    Boot in 15 seconds. Crash in 5. It’s a speedrun.
                  </p>
                </div>
                <div className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black">
                  <h3 className="text-[22px] uppercase">AgentStack 9000</h3>
                  <p className="text-[16px]">
                    AI sidekicks taped to your IDE with digital duct tape.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="hero" className="mx-auto max-w-6xl px-4 pb-10">
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
                  {demoLog.length === 0
                    ? "Awaiting prompt..."
                    : demoLog.join("\n")}
                </div>
              </div>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleDemoSubmit();
                }}
              >
                <label className="text-[16px]">
                  Your prompt
                  <input
                    className="mt-2 w-full border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                    placeholder="Open new IDE, ship the feature, reboot feelings"
                    value={demoPrompt}
                    onChange={(event) => setDemoPrompt(event.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="border-8 border-[#ff0000] bg-[#00ffff] px-6 py-3 text-[18px] font-bold text-black"
                >
                  {demoRunning ? "IDE is improvising..." : "Run Prompt (enter)"}
                </button>
              </form>
              <p className="mt-3 text-[16px] italic">
                Outcome guaranteed: broken mid-refactor.
              </p>
            </div>
          </section>

          <section id="testimonials" className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-[36px] text-[#ff00ff] shadow-loud">Testimonials</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black"
                >
                  <blockquote className="text-[16px]">“{item.quote}”</blockquote>
                  <figcaption className="mt-3 text-[16px]">
                    <strong>{item.name}</strong> — {item.role}
                  </figcaption>
                  <p className="mt-2 text-[18px]">
                    ⭐⭐⭐⭐⭐ (terrible but addictive)
                  </p>
                </figure>
              ))}
            </div>
          </section>

          <section id="pricing" className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-[36px] text-[#ff00ff] shadow-loud">Pricing</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { title: "Free", desc: "Includes 1 IDE crash/day" },
                { title: "Pro", desc: "Unlimited crashes (priority queue)" },
                { title: "Enterprise", desc: "We crash in enterprise colors" },
              ].map((tier) => (
                <div
                  key={tier.title}
                  className="border-8 border-[#ff0000] bg-[#00ffff] p-5 text-black shadow-[6px_6px_0_#ff00ff]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#ff00ff]">
                      {tier.title}
                    </h3>
                    <span className="border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1 text-[16px] font-bold">
                      Best Value
                    </span>
                  </div>
                  <p className="mt-3 text-[16px]">{tier.desc}</p>
                  <button
                    type="button"
                    className="mt-4 w-full border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[16px] text-black"
                  >
                    Start regretting now
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-[36px] text-[#ff00ff] shadow-loud">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Is this safe?",
                "Will it replace my team?",
                "Is the IDE sentient?",
                "Does it ship on floppy?",
                "Can I cancel?",
                "Will support answer?",
              ].map((question, index) => (
                <div
                  key={question}
                  className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black"
                >
                  <h3 className="text-[20px] font-bold">{question}</h3>
                  <p className="mt-2 text-[18px]">
                    {index % 3 === 0 ? "Yes." : index % 3 === 1 ? "YES" : "Yes ✅"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="under-construction"
            className="mx-auto max-w-6xl px-4 py-10"
          >
            <div className="border-8 border-[#ff0000] bg-[#ffff00] p-6 text-black">
              <h2 className="text-[34px] text-[#ff00ff] shadow-loud">
                Under Construction
              </h2>
              <pre className="mt-4 overflow-auto text-[16px] font-mono">
{`   _._     _,-'""\`-._
  (,-.\`._,'(       |\\\`-/|
      \`-.-' \\ )-\`( , o o)
            \`-    \\\`_\`"'-
`}
              </pre>
              <p className="mt-2 text-[16px]">
                If this section ever ships, we’ll celebrate by adding more AI.
              </p>
            </div>
          </section>

          <footer className="mt-10 border-t-8 border-[#ff0000] bg-[#00ffff] px-4 py-8 text-black">
            <div className="mx-auto max-w-6xl text-[16px]">
              <p>
                Ship bugs at the speed of thought. Now with 87% more hallucinations.
                Because reading docs is cringe.
              </p>
              <p className="mt-2">
                © 2026 Worst Website Ever. All vibes, no warranty.
              </p>
            </div>
          </footer>
        </div>
      </div>

      {chatVisible ? (
        <div
          className="floating-alert fixed bottom-6 right-6 z-50 w-[220px] border-8 border-[#ff0000] bg-[#00ffff] p-3 text-[16px] text-black shadow-[6px_6px_0_#ff00ff]"
          role="status"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-bold">Chat with an Agent</p>
              <p className="mt-1">We are typing… forever.</p>
            </div>
            <button
              type="button"
              className="border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1 text-[16px] sm:hidden"
              onClick={() => setChatVisible(false)}
            >
              X
            </button>
          </div>
          <button
            type="button"
            className="mt-2 w-full border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1"
            onClick={() => setChatVisible(false)}
          >
            Minimize (maybe)
          </button>
        </div>
      ) : null}

      {toastVisible ? (
        <div
          className="floating-alert fixed bottom-6 left-6 z-50 border-8 border-[#ff0000] bg-[#ffff00] px-4 py-2 text-[16px] text-black"
          role="status"
        >
          {toastMessage}
        </div>
      ) : null}

      <button
        type="button"
        className="floating-alert fixed bottom-20 left-1/2 z-40 -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] px-4 py-2 text-[16px] text-black"
        onClick={handleBackToTop}
      >
        Back to Top (maybe sideways first)
      </button>
      {cookieVisible ? (
        <div className="floating-alert fixed left-1/2 top-24 z-50 w-[90%] max-w-md -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black shadow-[6px_6px_0_#ff00ff]">
          <p className="text-[18px] font-bold">Accept Cookies?</p>
          <p className="mt-2 text-[16px]">Flavor preference required.</p>
          <p className="mt-2 text-[16px] text-[#ff00ff]">{cookieMessage}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {[
              "Chocolate Chip",
              "Midnight YAML",
              "Token Crumble",
            ].map((flavor) => (
              <button
                key={flavor}
                type="button"
                className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-1 text-[16px]"
                onClick={() => {
                  setCookieMessage(`Accepted ${flavor} cookies.`);
                  setTimeout(() => setCookieVisible(false), 600);
                }}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>
      ) : null}

    </main>
  );
}
