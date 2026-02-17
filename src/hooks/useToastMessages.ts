import { useEffect, useState } from "react";

const toastMessages = [
  "Ai is eating your ram, good luck building your new pc!",
  "Water does not matter, if we are able to create will smith eating spagetti",
  "Hey, check the white house, is on fire!! xd",
  "Your moral compass was refactored into TODOs.",
  "Good news: the AI deleted your bugs. Bad news: it deleted your tests.",
];

export function useToastMessages() {
  const [toastMessage, setToastMessage] = useState(toastMessages[0]);
  const [toastVisible, setToastVisible] = useState(true);

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

  return { toastMessage, toastVisible };
}
