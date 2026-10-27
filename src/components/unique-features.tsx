"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { academyFeatures } from "@/data/features";
import { Icon } from "./icon";
import styles from "./unique-features.module.css";

function subscribeToReducedMotion(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function UniqueFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion, () => true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onVisibilityChange = () => setPageVisible(!document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.08 },
    );
    if (observer) observer.observe(section);
    else setInView(true);

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const running = inView && pageVisible && !paused && !reducedMotion;

  return (
    <section
      ref={sectionRef}
      id="unique-features"
      className={`section ${styles.section}`}
      aria-labelledby="unique-features-title"
      data-animation-state={running ? "running" : "paused"}
    >
      <div className="container-page">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Helping students succeed with simple, smart support</p>
          <h2 id="unique-features-title" className={styles.title}>Our Unique Features</h2>
        </div>

        <ul id="academy-feature-list" className={styles.grid}>
          {academyFeatures.map((feature, index) => (
            <li key={feature.id} className={styles.feature} style={{ "--feature-delay": `${index * -0.61}s` } as CSSProperties}>
              <span className={styles.iconStage} aria-hidden="true">
                <span className={styles.shadow} />
                <span className={styles.sculpture}>
                  <Icon name={feature.icon} className={`${styles.layer} ${styles.depthFar}`} />
                  <Icon name={feature.icon} className={`${styles.layer} ${styles.depthNear}`} />
                  <Icon name={feature.icon} className={`${styles.layer} ${styles.face}`} />
                </span>
              </span>
              <h3 className={styles.label}>{feature.title}</h3>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.motionButton}
            onClick={() => setPaused((value) => !value)}
            disabled={reducedMotion}
            aria-controls="academy-feature-list"
          >
            <Icon name={paused || reducedMotion ? "play" : "pause"} className="h-3.5 w-3.5" />
            {reducedMotion ? "Reduced motion enabled" : paused ? "Resume animation" : "Pause animation"}
          </button>
        </div>
      </div>
    </section>
  );
}
