import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface PilotCounterProps {
  initialCount: number;
}

export default function PilotCounter({ initialCount }: PilotCounterProps) {
  const count = useSignal(0);
  const targetCount = useSignal(initialCount);

  useEffect(() => {
    // Animate the counter from 0 to target
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount.value) {
        count.value = targetCount.value;
        clearInterval(timer);
      } else {
        count.value = Math.floor(current);
      }
    }, duration / steps);

    // Simulate new pilots joining occasionally
    const joinTimer = setInterval(() => {
      targetCount.value += 1;
      count.value = targetCount.value;
    }, 10000); // New pilot every 10 seconds

    return () => {
      clearInterval(timer);
      clearInterval(joinTimer);
    };
  }, []);

  return (
    <p class="fun-fact">
      <span class="arrow">↑</span>
      {" "}
      <span class="pilot-counter">
        <span class="counter-value">{count.value.toLocaleString()}</span>
        {" "}pilots already connecting!
      </span>
      {" "}
      <span class="arrow">↑</span>
    </p>
  );
}
