import React, { useState, useEffect, useRef } from 'react';

type StatCardProps = {
  value: number;
  label: string;
  symbol?: string;
  suffix?: string;
};

export default function StatCard({ value, label, symbol = '', suffix = '' }: StatCardProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const end = value;
                if (start === end) return;
                const duration = 2000;
                const stepTime = end > 0 ? Math.abs(Math.floor(duration / end)) : duration;
                
                const timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    }
                }, stepTime);
                
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [value]);

    return (
        <div ref={ref} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg text-center transition-all duration-300 border border-amber-200/50 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl">
            <span className="text-5xl font-extrabold text-brand-red-800 dark:text-brand-red-500">{symbol}{count}{suffix}</span>
            <p className="mt-2 text-xl font-semibold font-lora text-slate-700 dark:text-slate-300">{label}</p>
        </div>
    );
}