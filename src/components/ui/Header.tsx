"use client";

import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  darkMode: boolean;
  musicOn: boolean;
  onDarkModeToggle: () => void;
  onMusicToggle: () => void;
}

export function Header({
  darkMode,
  musicOn,
  onDarkModeToggle,
  onMusicToggle,
}: HeaderProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [collapseOffset, setCollapseOffset] = useState({ x: 0, y: 0 });

  const handleDodgyHover = () => {
    const offsetX = Math.floor(Math.random() * 260) - 130;
    const offsetY = Math.floor(Math.random() * 160) - 80;
    setCollapseOffset({ x: offsetX, y: offsetY });
  };

  return (
    <div
      className={`border-b-4 border-[#ff0000] bg-[#ffff00] px-3 shadow-[0_4px_0_#ff00ff] ${
        collapsed ? "py-0.5" : "py-1"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-[2px] sm:text-[12px] sm:tracking-[3px]">
              The Worst Website Ever Hackathon 🧪
            </p>
            <h1
              className={`font-bold text-[#ff00ff] shadow-loud ${
                collapsed ? "text-[18px] md:text-[22px]" : "text-[24px] md:text-[32px]"
              }`}
              style={{ fontFamily: "Impact, fantasy" }}
            >
              PromptOps™: The Future of Overengineering 🚧
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <nav className="flex flex-wrap gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] md:text-[14px]">
              <a href="#overview" className="border-2 border-[#ff0000] px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-[#00ffff] transition-colors">
                Start 🚀
              </a>
              <a href="#hero" className="border-2 border-[#ff0000] px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-[#00ffff] transition-colors">
                Demo 🎛️
              </a>
              <a href="#pricing" className="border-2 border-[#ff0000] px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-[#00ffff] transition-colors">
                Pricing 💸
              </a>
              <a href="#faq" className="border-2 border-[#ff0000] px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-[#00ffff] transition-colors">
                FAQ ❓
              </a>
            </nav>
            <button
              type="button"
              className="border-2 border-[#ff0000] bg-[#00ffff] px-3 py-1.5 sm:px-3 sm:py-1 text-[16px] sm:text-[14px] text-black hover:bg-[#ff00ff] transition-colors"
              onClick={onDarkModeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
            <button
              type="button"
              className="border-2 border-[#ff0000] bg-[#00ffff] px-3 py-1.5 sm:px-3 sm:py-1 text-[16px] sm:text-[14px] text-black hover:bg-[#ff00ff] transition-colors"
              onClick={onMusicToggle}
              aria-label="Toggle music"
            >
              {musicOn ? "🔊" : "🔇"}
            </button>
          </div>
        </div>
        <div className="marquee border-2 border-[#ff0000] bg-[#00ffff] px-2 py-1 text-[10px] text-black sm:text-[12px] mb-2">
          <span>
            Ship bugs at the speed of thought. 🚀 • Now with 87% more
            hallucinations. 🤯 • Because reading docs is cringe. 📚❌ •
          </span>
        </div>
        <div className="hidden items-center justify-end">
          <button
            type="button"
            className="border-2 border-[#ff0000] bg-[#00ffff] px-2 py-0.5 text-[12px] text-black"
            onMouseEnter={handleDodgyHover}
            onMouseMove={handleDodgyHover}
            onMouseOver={handleDodgyHover}
            onFocus={handleDodgyHover}
            onClick={() => setCollapsed((prev) => !prev)}
            style={{ transform: `translate(${collapseOffset.x}px, ${collapseOffset.y}px)` }}
          >
            {collapsed ? "⬆" : "⬇"}
          </button>
        </div>
      </div>
    </div>
  );
}
