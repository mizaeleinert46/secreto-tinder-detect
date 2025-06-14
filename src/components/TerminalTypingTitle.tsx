
import React, { useRef, useEffect, useState } from "react";

type TerminalTypingTitleProps = {
  text: string;
  className?: string;
};

const TerminalTypingTitle: React.FC<TerminalTypingTitleProps> = ({ text, className }) => {
  const [display, setDisplay] = useState("");
  const [step, setStep] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplay("");
    setStep(0);
  }, [text]);

  useEffect(() => {
    if (step <= text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplay(text.slice(0, step));
        setStep(s => s + 1);
      }, 38);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [step, text]);
  
  return (
    <span className={`font-mono text-green-400 text-shadow-hacker tracking-wide ${className || ""}`}>
      {display}
      <span className="animate-terminal-cursor ml-1 text-green-400">|</span>
    </span>
  );
};

export default TerminalTypingTitle;
