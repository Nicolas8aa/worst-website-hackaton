interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div
      className="floating-alert fixed bottom-6 left-6 z-50 border-8 border-[#ff0000] bg-[#ffff00] px-4 py-2 text-[14px] text-black sm:text-[16px]"
      role="status"
    >
      🔔 {message}
    </div>
  );
}
