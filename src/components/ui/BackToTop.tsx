"use client";

export function BackToTop() {
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
    <button
      type="button"
      className="floating-alert fixed bottom-20 left-1/2 z-40 -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] px-4 py-2 text-[14px] text-black sm:text-[16px]"
      onClick={handleBackToTop}
    >
      🔝 Back to Top (maybe sideways first)
    </button>
  );
}
