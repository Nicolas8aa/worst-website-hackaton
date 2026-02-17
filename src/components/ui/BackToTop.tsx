"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if at top (within 100px)
      if (currentScrollY < 100) {
        setVisible(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Show only when scrolling down
      if (currentScrollY > lastScrollY) {
        setVisible(true);
      } else {
        // Hide when scrolling up
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  if (!visible) return null;

  return (
    <button
      type="button"
      className="floating-alert fixed bottom-20 left-1/2 z-40 -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] px-4 py-2 text-[14px] text-black transition-opacity duration-300 sm:text-[16px]"
      onClick={handleBackToTop}
    >
      🔝 Back to Top (maybe sideways first)
    </button>
  );
}
