"use client";

import { useState } from "react";

interface CookiePopupProps {
  visible: boolean;
  onClose: () => void;
}

const cookieFlavors = [
  "Chocolate Chip",
  "Midnight YAML",
  "Token Crumble",
];

export function CookiePopup({ visible, onClose }: CookiePopupProps) {
  const [message, setMessage] = useState("Cookies pending...");

  const handleAccept = (flavor: string) => {
    setMessage(`Accepted ${flavor} cookies.`);
    onClose()
  };

  if (!visible) return null;

  return (
    <div className="floating-alert fixed left-1/2 top-24 z-50 w-[92%] max-w-md -translate-x-1/2 border-8 border-[#ff0000] bg-[#00ffff] p-4 text-black shadow-[6px_6px_0_#ff00ff]">
      <p className="text-[16px] font-bold sm:text-[18px]">Accept Cookies? 🍪</p>
      <p className="mt-2 text-[14px] sm:text-[16px]">Flavor preference required. 😋</p>
      <p className="mt-2 text-[14px] text-[#ff00ff] sm:text-[16px]">{message}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {cookieFlavors.map((flavor) => (
          <button
            key={flavor}
            type="button"
            className="border-4 border-[#ff0000] bg-[#ffff00] px-3 py-1 text-[14px] sm:text-[16px]"
            onClick={() => handleAccept(flavor)}
          >
            {flavor}
          </button>
        ))}
      </div>
    </div>
  );
}
