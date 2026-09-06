"use client";
import { useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Calendar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollWidth <= container.clientWidth) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        const targetScroll = container.scrollLeft + e.deltaY * 0.0001;

        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll p-4 pt-2 border rounded-xl border-white/10"
    >
      <div className="min-w-200 w-full">
        <GitHubCalendar username="Loremus299" />
      </div>
    </div>
  );
}
