
import React from "react";
import HackerLinesBackground from "./HackerLinesBackground";

const CornerNeon = ({ position }: { position: "tl"|"tr"|"bl"|"br" }) => {
  const base = "absolute w-24 h-24 pointer-events-none z-20";
  let style = "";
  if (position === "tl") style = "top-0 left-0";
  if (position === "tr") style = "top-0 right-0";
  if (position === "bl") style = "bottom-0 left-0";
  if (position === "br") style = "bottom-0 right-0";
  return (
    <div className={`${base} ${style}`}>
      <svg width="100" height="100" className="w-24 h-24">
        <polyline
          points="0,30 0,0 40,0"
          stroke="#39ff14"
          strokeWidth="6"
          fill="none"
          className="animate-cyber-neon"
          style={{ filter: "drop-shadow(0 0 12px #39ff14)" }}
        />
      </svg>
    </div>
  );
};

const ScanLines = () => (
  <div className="pointer-events-none fixed inset-0 z-30 scanlines-mix" aria-hidden>
    {/* Pseudo scanlines :after in CSS */}
  </div>
);

const HackerOverlay = () => (
  <>
    {/* Neon pulse glow background */}
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#071a09]/95 via-[#141a24]/95 to-[#0d0315]/90 animate-cyber-glow" style={{mixBlendMode:"screen"}} />
    {/* Scanlines overlay */}
    <ScanLines />
    {/* Animated code lines */}
    <HackerLinesBackground />
    {/* Neon corners */}
    <CornerNeon position="tl" />
    <CornerNeon position="tr" />
    <CornerNeon position="bl" />
    <CornerNeon position="br" />
  </>
);

export default HackerOverlay;
