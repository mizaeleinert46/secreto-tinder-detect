
import React from "react";

const codeLines = [
  "while (love || suspicion) {",
  "  if (partner == 'online') {",
  "    checkTinder();",
  "    if (foundProfile) {",
  "      alert('🚨 Ação detectada!');",
  "    }",
  "  }",
  "  sleep(60);",
  "}",
  "function checkTinder() {",
  "  return Math.random() > 0.5;",
  "}",
  "console.log('Espionagem em andamento...');"
];

const HackerLinesBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center animate-hacker-grid">
        {Array.from({ length: 18 }).map((_, row) => (
          <div
            key={row}
            className="w-full flex justify-center text-xs sm:text-sm md:text-base h-4"
            style={{
              opacity: 0.08 + 0.13 * ((row % 7) / 7),
              animation: `hackerFade ${5 + (row % 4)}s infinite ${row * 0.33}s alternate`
            }}
          >
            <code className="font-mono text-green-400 drop-shadow-[0_0_6px_#5fff7e] whitespace-nowrap select-none">
              {codeLines[row % codeLines.length]}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackerLinesBackground;
