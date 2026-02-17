"use client";

interface ChatWidgetProps {
  visible: boolean;
  onClose: () => void;
}

export function ChatWidget({ visible, onClose }: ChatWidgetProps) {
  if (!visible) return null;

  return (
    <div
      className="floating-alert fixed bottom-6 right-6 z-50 w-[200px] sm:w-[220px] border-8 border-[#ff0000] bg-[#00ffff] p-3 text-[14px] text-black shadow-[6px_6px_0_#ff00ff] sm:text-[16px]"
      role="status"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-bold">Chat with an Agent 🤖</p>
          <p className="mt-1">We are typing… forever. ⌛</p>
        </div>
        <button
          type="button"
          className="border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1 text-[14px] sm:hidden"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <button
        type="button"
        className="mt-2 w-full border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1 text-[14px] sm:text-[16px]"
        onClick={onClose}
      >
        Minimize (maybe) 😬
      </button>
    </div>
  );
}
