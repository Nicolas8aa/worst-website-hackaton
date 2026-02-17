import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode-worse", darkMode);
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
