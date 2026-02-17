"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import skeletonAnimation from "../../../public/skeleton.json";

interface BlueScreenProps {
  visible: boolean;
}

export function BlueScreen({ visible }: BlueScreenProps) {
  useEffect(() => {
    if (visible) {
      // Play Windows error sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Windows error sound is typically around 800Hz
      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      // Envelope for the beep
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0000aa] p-4 text-white">
      <div className="max-w-3xl font-mono text-center">
        <div className="mb-8">
          <div className="mb-4 text-[48px] sm:text-[64px] md:text-[80px]">:(</div>
          <h1 className="mb-4 text-[24px] font-bold sm:text-[32px] md:text-[40px]">
            Your PC ran into a problem and needs to restart.
          </h1>
        </div>

        <div className="mx-auto mb-8 w-full max-w-md">
          <Lottie
            animationData={skeletonAnimation}
            loop={true}
            autoplay={true}
          />
        </div>

        <div className="space-y-1 text-[10px] sm:text-[12px] md:text-[14px]">
          <p>Stop code: AI_AGENT_OVERLOAD</p>
          <p>What failed: PROMPT_HANDLER.SYS</p>
        </div>

        <div className="mt-8 text-center text-[10px] opacity-70 sm:text-[12px]">
          <p>This is what happens when you ignore warnings.</p>
          <p className="mt-2">Press F5 to reload the page (if you dare).</p>
        </div>
      </div>
    </div>
  );
}
