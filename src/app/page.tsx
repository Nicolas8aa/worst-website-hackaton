"use client";

import { useState } from "react";
import { Header, Footer, Toast, CookiePopup, BackToTop, BlueScreen } from "@/components/ui";
import {
  OverviewSection,
  LiveDemoSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
} from "@/components/sections";
import {
  useBackgroundMusic,
  useCookiePopup,
  useDarkMode,
  useToastMessages,
} from "@/hooks";

export default function Home() {
  const [musicOn, setMusicOn] = useState(false);
  const [crashed, setCrashed] = useState(false);

  // Custom hooks
  const { darkMode, setDarkMode } = useDarkMode();
  const { toastMessage, toastVisible } = useToastMessages();
  const { cookieVisible, setCookieVisible } = useCookiePopup();
  useBackgroundMusic(musicOn);

  return (
    <main className="min-h-screen bg-[#ffff00] text-[#0000ff]">
      <div className="page-shell">
        <Header
          darkMode={darkMode}
          musicOn={musicOn}
          onDarkModeToggle={() => setDarkMode((prev) => !prev)}
          onMusicToggle={() => setMusicOn((prev) => !prev)}
        />

        <div className="page-content">
          <OverviewSection />
          <LiveDemoSection onCrash={() => setCrashed(true)} />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <Footer />
        </div>
      </div>

      <Toast message={toastMessage} visible={toastVisible} />
      <BackToTop />
      <CookiePopup
        visible={cookieVisible}
        onClose={() => setCookieVisible(false)}
      />
      <BlueScreen visible={crashed} />
    </main>
  );
}
