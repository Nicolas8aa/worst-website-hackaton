import { useEffect, useState } from "react";

export function useCookiePopup() {
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const cookieTimer = window.setTimeout(() => {
      setCookieVisible(true);
    }, 2500 + Math.random() * 2500);

    return () => window.clearTimeout(cookieTimer);
  }, []);

  return { cookieVisible, setCookieVisible };
}
