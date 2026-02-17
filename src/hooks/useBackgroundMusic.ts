import { useEffect, useRef } from "react";

export function useBackgroundMusic(enabled: boolean) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      // Cleanup when disabled
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
      audioContextRef.current = null;
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      return;
    }

    // Waka Waka-inspired melody using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = audioContext;
    
    // Waka Waka main riff notes
    const melody = [
      // fa fa fa sol la
      { freq: 349, duration: 0.18 }, // F4
      { freq: 349, duration: 0.18 },
      { freq: 349, duration: 0.18 },
      { freq: 392, duration: 0.18 }, // G4
      { freq: 440, duration: 0.22 }, // A4

      // mi mi mi fa mi
      { freq: 659, duration: 0.18 }, // E5
      { freq: 659, duration: 0.18 },
      { freq: 659, duration: 0.18 },
      { freq: 349, duration: 0.18 },
      { freq: 659, duration: 0.22 },

      // fa sol fa la fa
      { freq: 349, duration: 0.18 },
      { freq: 392, duration: 0.18 },
      { freq: 349, duration: 0.18 },
      { freq: 440, duration: 0.30 }  // slight ending emphasis
    ];

    const playMelody = () => {
      if (!audioContextRef.current) return;

      let time = audioContextRef.current.currentTime;
      const bpm = 30;
      const beat = 60 / bpm;

      melody.forEach(note => {
        if (!audioContextRef.current) return;

        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();

        osc.type = "sine"; // flute-like
        osc.frequency.value = note.freq;
        gain.gain.value = 0.3;

        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);

        const durationSeconds = note.duration * beat;

        osc.start(time);
        osc.stop(time + durationSeconds);

        time += durationSeconds;
      });
    };

    // Play melody and loop
    playMelody();
    intervalIdRef.current = window.setInterval(playMelody, 2600);

    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [enabled]);
}
