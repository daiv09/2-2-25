"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Update `svgHeight` on mount & resize
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  // Handle animation values
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  // Track scroll progress changes
  const [scrolling, setScrolling] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolling(latest > 0);
  });

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-6xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        {/* Tracing Point */}
        <motion.div
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
          animate={{
            boxShadow: scrolling ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <motion.div
            className="h-2 w-2 rounded-full border border-pink-300 bg-purple-500"
            animate={{
              backgroundColor: scrolling ? "white" : "var(--pink-500)",
              borderColor: scrolling ? "white" : "var(--pink-600)",
            }}
            transition={{ duration: 0.2, delay: 0.5 }}
          />
        </motion.div>

        {/* SVG Tracing Path */}
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block">
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#FF69B4" stopOpacity="0" /> {/* Hot Pink */}
              <stop stopColor="#FF1493" /> {/* Deep Pink */}
              <stop offset="0.325" stopColor="#C71585" /> {/* Medium Violet Red */}
              <stop offset="1" stopColor="#DB7093" stopOpacity="0" /> {/* Pale Violet Red */}
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Content */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
