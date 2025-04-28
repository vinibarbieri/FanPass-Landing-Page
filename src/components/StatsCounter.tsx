
import { useState, useEffect, useRef } from "react";

interface CounterProps {
  endValue: number;
  label: string;
  duration: number;
  suffix?: string;
}

const Counter = ({ endValue, label, duration, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      setCount(Math.floor(progressRatio * endValue));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, isVisible]);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 px-4 bg-background/60">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter endValue={25000} label="Ingressos vendidos" duration={2000} suffix="+" />
          <Counter endValue={1500} label="NFTs colecionados" duration={2000} suffix="+" />
          <Counter endValue={18} label="Clubes parceiros" duration={2000} />
          <Counter endValue={12} label="Estádios conectados" duration={2000} />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
