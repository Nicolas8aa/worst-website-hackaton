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

const featureCards = [
  "Autocompletes your regrets",
  "Generates code AND excuses",
  "Standup summarizer (makes you sound productive)",
  "Refactors working code into modern suffering",
  "AI Pair Programmer (pairs, but never programs)",
  "Sprints that sprint away",
  "Writes Jira tickets about itself",
  "Unit tests that gaslight you",
  "Builds features you never asked for",
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
  "AI is thinking...",
  "AI is judging...",
  "AI is rewriting your codebase...",
  "AI is scheduling your existential dread...",
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
  const [trustValue, setTrustValue] = useState(50);
  const [agreed, setAgreed] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [captchaResult, setCaptchaResult] = useState("Unverified vibes");
  const [uploadMessage, setUploadMessage] = useState("");
  const [submitOffset, setSubmitOffset] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [trialMessage, setTrialMessage] = useState("");

  const canSubmit = agreed && trustValue > 90 && captchaPassed;

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
      const delay = 8000 + Math.random() * 4000;
      timeoutId = window.setTimeout(() => {
        const message =
          toastMessages[Math.floor(Math.random() * toastMessages.length)];
        setToastMessage(message);
        setToastVisible(true);
        hideId = window.setTimeout(() => setToastVisible(false), 2500);
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
    if (canSubmit) return;
    const offsetX = Math.floor(Math.random() * 60) - 30;
    const offsetY = Math.floor(Math.random() * 40) - 20;
    setSubmitOffset({ x: offsetX, y: offsetY });
  };

  const handleCaptcha = () => {
    setCaptchaPassed(true);
    setCaptchaResult("✅ Humanity confirmed-ish");
  };

  const handleFileUpload = () => {
    setUploadMessage("Upload successful (we didn’t read it, we vibed it).");
  };

  const handleTrialClick = () => {
    setTrialMessage("Trial started. Terms auto-accepted by your aura.");
  };

  const handleFakeSubmit = () => {
    if (!canSubmit) {
      setCaptchaResult("Submission blocked. Try trusting AI harder.");
      return;
    }
    setModalOpen(true);
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
      <div className="sticky top-0 z-40 border-b-8 border-[#ff0000] bg-[#ffff00] px-4 py-6 shadow-[0_6px_0_#ff00ff] md:py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[18px] uppercase tracking-[6px]">
                The Worst Website Ever Hackathon
              </p>
              <h1
                className="text-[40px] font-bold text-[#ff00ff] md:text-[58px] shadow-loud"
                style={{ fontFamily: "Impact, fantasy" }}
              >
                PromptOps™: The Future of Overengineering
              </h1>
            </div>
            <nav className="flex flex-wrap gap-3 text-[16px]">
              <a href="#hero" className="border-4 border-[#ff0000] px-3 py-1">
                Home
              </a>
              <a href="#features" className="border-4 border-[#ff0000] px-3 py-1">
                Start
              </a>
              <a href="#pricing" className="border-4 border-[#ff0000] px-3 py-1">
                Begin
              </a>
              <a href="#onboarding" className="border-4 border-[#ff0000] px-3 py-1">
                Panic
              </a>
            </nav>
          </div>
          <div className="marquee border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[16px] text-black">
            <span>
              Ship bugs at the speed of thought. • Now with 87% more
              hallucinations. • Because reading docs is cringe. •
            </span>
          </div>
          <nav className="flex flex-wrap gap-3 text-[16px]">
            <a href="#hero" className="border-4 border-[#ff0000] px-3 py-1">
              Top
            </a>
            <a href="#testimonials" className="border-4 border-[#ff0000] px-3 py-1">
              Proof
            </a>
            <a href="#faq" className="border-4 border-[#ff0000] px-3 py-1">
              Questions
            </a>
            <a href="#under-construction" className="border-4 border-[#ff0000] px-3 py-1">
              WIP
            </a>
          </nav>
        </div>
      </div>

      <section id="hero" className="mx-auto max-w-6xl px-4 pb-10 pt-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 border-8 border-[#ff0000] bg-[#00ffff] p-6 text-black shadow-[8px_8px_0_#ff00ff]">
            <p className="text-[18px] uppercase tracking-[4px]">
              AI Tools For Developers (2026) — Totally Helpful, Definitely Not
            </p>
            <h2 className="mt-4 text-[44px] font-extrabold text-[#ff00ff] shadow-loud md:text-[64px]">
              DevGPT Ultra Pro Max Enterprise
            </h2>
            <p className="mt-2 text-[18px]">
              Ship bugs at the speed of thought. Now with 87% more hallucinations.
              Because reading docs is cringe.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-[16px]">
              {[
                "SOC-2-ish",
                "Prompt-Driven Success",
                "100% Vibes",
                "AI-Generated ROI",
                "Latent Synergy",
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
              Start Free Trial (annoyingly)
            </button>
            <p className="mt-3 text-[16px] italic">
              The button is loud. The product is louder.
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
              <h3 className="text-[22px] uppercase">Zero Docs Read</h3>
              <p className="text-[16px]">
                Because reading docs is cringe. We read them for you, incorrectly.
              </p>
              <p className="blink mt-2 text-[18px] font-bold">
                Now with 87% more hallucinations.
              </p>
            </div>
            <div className="border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black">
              <h3 className="text-[22px] uppercase">Painfully Efficient</h3>
              <p className="text-[16px]">
                Ship bugs at the speed of thought. Mostly because the AI already
                shipped them for you.
              </p>
            </div>
            <div className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black">
              <h3 className="text-[22px] uppercase">AgentStack 9000</h3>
              <p className="text-[16px]">
                Outsource your brain. Our agents outsource theirs too.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] text-[#ff00ff] shadow-loud">
            Feature Cards (painfully many)
          </h2>
          <p className="text-[18px]">
            Now with 87% more hallucinations. Because reading docs is cringe.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featureCards.map((feature, index) => (
            <article
              key={feature}
              className="border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black shadow-[6px_6px_0_#ff00ff]"
            >
              <h3 className="text-[24px] font-bold text-[#ff00ff]">
                {feature}
              </h3>
              <p className="mt-2 text-[16px]">
                Feature #{index + 1} is definitely real. Trust the vibes.
              </p>
              <a href="#onboarding" className="mt-3 inline-block text-[15px]">
                Learn More →
              </a>
            </article>
          ))}
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
            { title: "Free", desc: "Includes 1 hallucination/day" },
            { title: "Pro", desc: "Unlimited hallucinations" },
            { title: "Enterprise", desc: "We hallucinate contracts too" },
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
            "Is the AI sentient?",
            "Does it ship on Fridays?",
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
        id="onboarding"
        className="mx-auto max-w-6xl px-4 py-10"
      >
        <h2 className="text-[36px] text-[#ff00ff] shadow-loud">
          Get AI-ified Now
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <form
            className="md:col-span-2 border-8 border-[#ff0000] bg-[#00ffff] p-6 text-black"
            onSubmit={(event) => event.preventDefault()}
          >
            <p className="text-[18px]">
              Ship bugs at the speed of thought. Now with 87% more hallucinations.
            </p>
            <div className="mt-4 grid gap-4">
              <label className="flex flex-col gap-2 text-[16px]">
                Name
                <input
                  className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                  placeholder="Captain Overprompt"
                />
              </label>
              <label className="flex flex-col gap-2 text-[16px]">
                Email
                <input
                  type="email"
                  className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                  placeholder="vibes@overengineer.io"
                />
              </label>
              <label className="flex flex-col gap-2 text-[16px]">
                Favorite programming language
                <select className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2">
                  <option>PromptScript</option>
                  <option>YAML++</option>
                  <option>JavaScript (obviously)</option>
                  <option>Regex</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[16px]">
                Describe your project
                <textarea
                  className="min-h-[120px] border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                  placeholder="We want to automate a meeting to plan the meeting for our AI that writes meetings."
                />
              </label>
              <label className="flex items-center gap-3 text-[16px]">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                  />
                  I agree to let the AI rewrite my personality.
                </label>
              <label className="flex flex-col gap-2 text-[16px]">
                How much do you trust AI?
                <div className="flex items-center gap-3">
                  <span>Absolutely</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={trustValue}
                    onChange={(event) =>
                      setTrustValue(Number(event.target.value))
                    }
                    className="w-full"
                  />
                  <span>Absolutely</span>
                </div>
                  <span className="text-[16px]">
                    Current trust: {trustValue}% (needs 91%+)
                  </span>
              </label>
              <label className="flex flex-col gap-2 text-[16px]">
                Upload resume
                <input
                  type="file"
                  className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2"
                  onChange={handleFileUpload}
                />
                {uploadMessage ? (
                <span className="text-[16px]">{uploadMessage}</span>
                ) : null}
              </label>
              <div className="border-4 border-[#ff0000] bg-[#ffff00] p-3 text-[16px]">
                CAPTCHA: prove you are human
                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    className="border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2"
                    onClick={handleCaptcha}
                  >
                    ✅ I am human
                  </button>
                  <button
                    type="button"
                    className="border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2"
                    onClick={handleCaptcha}
                  >
                    ❌ I am human
                  </button>
                </div>
                <p className="mt-2 text-[16px]">{captchaResult}</p>
              </div>
              <div className="border-4 border-[#ff0000] bg-[#ffff00] p-3">
                <div className="flex items-center justify-between text-[16px]">
                  <span>AI Dev Onboarding Progress</span>
                  <span>99%</span>
                </div>
                <div className="mt-2 h-4 w-full border-4 border-[#ff0000] bg-white">
                  <div className="h-full w-[99%] bg-[#ff00ff]" />
                </div>
                <p className="mt-2 text-[16px]">
                  Stuck at 99% forever. That’s our brand.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="animate-[pulseGlow_1.8s_infinite] border-8 border-[#ff0000] bg-[#00ffff] px-6 py-3 text-[18px] font-bold text-black"
                  onMouseEnter={handleDodgyHover}
                  onFocus={handleDodgyHover}
                  onClick={handleFakeSubmit}
                  style={{ transform: `translate(${submitOffset.x}px, ${submitOffset.y}px)` }}
                >
                  Submit (if you can)
                </button>
                <button
                  type="button"
                  className="border-4 border-[#ff0000] bg-[#ffff00] px-4 py-2 text-[16px]"
                  onClick={handleFakeSubmit}
                >
                  Submit (again)
                </button>
              </div>
            </div>
          </form>
          <aside className="flex flex-col gap-4">
            <div className="border-8 border-[#ff0000] bg-[#ff00ff] p-4 text-black">
              <h3 className="text-[22px] uppercase">Autoplay Music</h3>
              <p className="text-[16px]">Toggle is confusing on purpose.</p>
              <button
                type="button"
                className="mt-3 w-full border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[16px]"
                onClick={() => setMusicOn((prev) => !prev)}
              >
                Music: {musicOn ? "On" : "Off"}/Maybe
              </button>
            </div>
            <div className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black">
              <h3 className="text-[22px] uppercase">Dark Mode</h3>
              <p className="text-[16px]">Makes everything worse.</p>
              <button
                type="button"
                className="mt-3 w-full border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[16px]"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Disable Dark-ish Mode" : "Enable Dark-ish Mode"}
              </button>
            </div>
            <div className="border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black">
              <h3 className="text-[22px] uppercase">Chat with an Agent</h3>
              <p className="text-[16px]">It covers content. That’s the feature.</p>
              <button
                type="button"
                className="mt-3 w-full border-4 border-[#ff0000] bg-[#ffff00] px-3 py-2 text-[16px]"
                onClick={() => setChatVisible(true)}
              >
                Summon Agent
              </button>
            </div>
          </aside>
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
{`   _._     _,-'""`-._
  (,-.`._,'(       |\\`-/|
      `-.-' \ )-`( , o o)
            `-    \`_`"'-
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

      {chatVisible ? (
        <div
          className="fixed bottom-6 right-6 z-50 w-[220px] border-8 border-[#ff0000] bg-[#00ffff] p-3 text-[16px] text-black shadow-[6px_6px_0_#ff00ff]"
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
          className="fixed bottom-6 left-6 z-50 border-8 border-[#ff0000] bg-[#ffff00] px-4 py-2 text-[16px] text-black"
          role="status"
        >
          {toastMessage}
        </div>
      ) : null}

      <button
        type="button"
        className="fixed bottom-20 left-1/2 z-40 -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] px-4 py-2 text-[16px] text-black"
        onClick={handleBackToTop}
      >
        Back to Top (maybe sideways first)
      </button>
      {cookieVisible ? (
        <div className="fixed left-1/2 top-24 z-50 w-[90%] max-w-md -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black shadow-[6px_6px_0_#ff00ff]">
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

      {modalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md border-8 border-[#ff0000] bg-[#ffff00] p-6 text-black">
            <h3 className="text-[24px] font-bold">Congrats!</h3>
            <p className="mt-2 text-[18px]">
              Your onboarding is complete. Unfortunately, we lost it. Please
              restart.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                className="border-4 border-[#ff0000] bg-[#00ffff] px-4 py-2"
                onClick={() => setModalOpen(false)}
              >
                Restart
              </button>
              <button
                type="button"
                className="border-4 border-[#ff0000] bg-[#ff00ff] px-4 py-2 text-black"
                onClick={() => setModalOpen(false)}
              >
                Restart (Faster)
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
