import { ImageResponse } from "next/og";
export const alt = "Vision Science Academy — a clear path for your ambitions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: 84,
        background: "#0b1f3a",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#a4c6f0",
          letterSpacing: 5,
        }}
      >
        VISION SCIENCE ACADEMY
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 42,
          fontSize: 82,
          fontWeight: 800,
        }}
      >
        Big ambitions.
      </div>
      <div
        style={{
          display: "flex",
          color: "#f5b942",
          fontSize: 82,
          fontWeight: 800,
        }}
      >
        A clear vision.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 38,
          fontSize: 23,
          color: "#cbd5e1",
        }}
      >
        Class 10 • 11th & 12th Science • JEE • NEET • Foundation
      </div>
    </div>,
    size,
  );
}
