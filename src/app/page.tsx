"use client";

import { useEffect, useRef, useState } from "react";
import { Header, Footer, Toast, CookiePopup, ChatWidget, BackToTop } from "@/components/ui";
import {
  OverviewSection,
  LiveDemoSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  UnderConstructionSection,
} from "@/components/sections";

const toastMessages = [
  "Ai is eating your ram, good luck building your new pc!",
  "Water does not matter, if we are able to create will smith eating spagetti",
  "Hey, check the white house, is on fire!! xd",
  "Your moral compass was refactored into TODOs.",
  "Good news: the AI deleted your bugs. Bad news: it deleted your tests.",
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [toastMessage, setToastMessage] = useState(toastMessages[0]);
  const [toastVisible, setToastVisible] = useState(true);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

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

  return (
    <main className="min-h-screen bg-[#ffff00] text-[#0000ff]">
      <audio
        ref={audioRef}
        loop
        src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
      />
      <div className="page-shell">
        <Header
          darkMode={darkMode}
          musicOn={musicOn}
          onDarkModeToggle={() => setDarkMode((prev) => !prev)}
          onMusicToggle={() => setMusicOn((prev) => !prev)}
        />

        <div className="page-content">
          <OverviewSection />
          <LiveDemoSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          {/* <UnderConstructionSection /> */}
          <Footer />
        </div>
      </div>

      <ChatWidget visible={chatVisible} onClose={() => setChatVisible(false)} />
      <Toast message={toastMessage} visible={toastVisible} />
      <BackToTop />
      <CookiePopup
        visible={cookieVisible}
        onClose={() => setCookieVisible(false)}
      />
    </main>
  );
}
