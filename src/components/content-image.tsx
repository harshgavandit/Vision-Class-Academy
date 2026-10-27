"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ContentImageProps = Omit<ImageProps, "onError" | "onLoad"> & {
  /** Use an original illustration, never an unrelated person's or facility's photograph. */
  fallbackSrc?: string;
  fallbackLabel?: string;
};

/** Keeps the image's reserved space usable when a configured asset cannot load. */
export function ContentImage({
  src,
  alt,
  fallbackSrc,
  fallbackLabel = "Image unavailable",
  className,
  fill,
  width,
  height,
  style,
  ...props
}: ContentImageProps) {
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const originalSource = typeof src === "string" ? src : "src" in src ? src.src : src.default.src;
  const originalFailed = failedSources.includes(originalSource);
  const useFallback = originalFailed && Boolean(fallbackSrc) && fallbackSrc !== originalSource;
  const unavailable = originalFailed && (!useFallback || failedSources.includes(fallbackSrc!));

  if (unavailable) {
    return (
      <span
        role="img"
        aria-label={fallbackLabel}
        className={`flex flex-col items-center justify-center gap-2 overflow-hidden bg-[#edf3fb] p-4 text-center text-slate-500 ${fill ? "absolute inset-0 h-full w-full" : ""} ${className ?? ""}`}
        style={fill ? style : { width, height, aspectRatio: width && height ? `${width} / ${height}` : undefined, ...style }}
      >
        <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 shrink-0 text-blue-300" aria-hidden="true">
          <rect x="7" y="9" width="34" height="30" rx="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="m9 35 10-10 7 7 6-6 7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-semibold leading-5" aria-hidden="true">{fallbackLabel}</span>
      </span>
    );
  }

  const imageSource = useFallback ? fallbackSrc! : src;
  const sourceKey = useFallback ? fallbackSrc! : originalSource;

  return (
    <Image
      {...props}
      src={imageSource}
      alt={useFallback ? `${fallbackLabel}. Original academic illustration.` : alt}
      fill={fill}
      width={width}
      height={height}
      style={style}
      className={className}
      onError={() => setFailedSources((failed) => failed.includes(sourceKey) ? failed : [...failed, sourceKey])}
    />
  );
}
