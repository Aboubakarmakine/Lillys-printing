import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrambledTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ScrambledText({ text, className, delay = 0 }: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState(text.replace(/[a-zA-Z0-9]/g, "A"));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    const animate = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " " || char === "&" || char === ".") {
                return char;
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2; // Speed of reveal
      }, 30); // Frame rate
      
      return () => clearInterval(interval);
    };

    timeout = setTimeout(animate, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, isInView, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
