"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

/** Roughly matches the easing of the spring this previously used. */
const DURATION_MS = 1400;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up to `value` when scrolled into view.
 *
 * Uses IntersectionObserver + requestAnimationFrame rather than a motion
 * library: this renders three times in the hero, above the fold, so its
 * dependencies land on the critical path for Largest Contentful Paint.
 */
export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const from = direction === "down" ? value : startValue;
    const to = direction === "down" ? startValue : value;
    const format = (n: number) =>
      Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(n.toFixed(decimalPlaces)));

    // Respect a reduced-motion preference by jumping straight to the value.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      if (prefersReduced) {
        el.textContent = format(to);

        return;
      }

      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);

        el.textContent = format(from + (to - from) * easeOut(progress));
        if (progress < 1) frame = requestAnimationFrame(step);
      };

      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        timer = setTimeout(run, delay * 1000);
      },
      { rootMargin: "0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [value, startValue, direction, delay, decimalPlaces]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums text-black dark:text-white",
        className
      )}
      {...props}
    >
      {startValue}
    </span>
  );
}
