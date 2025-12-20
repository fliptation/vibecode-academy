import { useEffect, useRef, useState } from "preact/hooks";

interface TerminalLine {
  type: "prompt" | "command" | "action" | "code" | "success" | "info" | "output";
  text: string;
  delay?: number;
}

const terminalScript: TerminalLine[] = [
  { type: "prompt", text: "~" },
  { type: "command", text: "claude", delay: 800 },
  { type: "info", text: "", delay: 300 },
  { type: "prompt", text: ">" },
  { type: "command", text: " Build a landing page for my SaaS startup", delay: 1200 },
  { type: "info", text: "", delay: 400 },
  { type: "action", text: "⠋ Reading project structure...", delay: 600 },
  { type: "success", text: "✓ Found Deno Fresh project", delay: 400 },
  { type: "info", text: "", delay: 200 },
  { type: "action", text: "⠋ Creating routes/index.tsx...", delay: 500 },
  { type: "info", text: "", delay: 300 },
  { type: "code", text: "  export default function Home() {", delay: 100 },
  { type: "code", text: "    return (", delay: 80 },
  { type: "code", text: "      <main class=\"hero\">", delay: 80 },
  { type: "code", text: "        <h1>Ship faster with AI</h1>", delay: 80 },
  { type: "code", text: "        <button>Get Started</button>", delay: 80 },
  { type: "code", text: "      </main>", delay: 80 },
  { type: "code", text: "    );", delay: 80 },
  { type: "code", text: "  }", delay: 100 },
  { type: "info", text: "", delay: 300 },
  { type: "success", text: "✓ Created landing page with hero", delay: 300 },
  { type: "success", text: "✓ Added features section", delay: 250 },
  { type: "success", text: "✓ Added pricing cards", delay: 250 },
  { type: "success", text: "✓ Added footer with links", delay: 250 },
  { type: "info", text: "", delay: 400 },
  { type: "action", text: "⠋ Starting dev server...", delay: 600 },
  { type: "output", text: "Server running at http://localhost:8000", delay: 400 },
  { type: "info", text: "", delay: 800 },
  { type: "prompt", text: ">" },
  { type: "command", text: " Add a contact form with validation", delay: 1000 },
  { type: "info", text: "", delay: 400 },
  { type: "action", text: "⠋ Editing routes/index.tsx...", delay: 500 },
  { type: "success", text: "✓ Added contact form component", delay: 300 },
  { type: "success", text: "✓ Added email validation", delay: 300 },
  { type: "success", text: "✓ Connected to form backend", delay: 300 },
  { type: "info", text: "", delay: 400 },
  { type: "output", text: "Done. Your landing page is ready to ship.", delay: 500 },
];

export default function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines]);

  useEffect(() => {
    let timeoutId: number;
    let currentLine = 0;

    const showNextLine = () => {
      if (currentLine < terminalScript.length) {
        setVisibleLines(currentLine + 1);
        const delay = terminalScript[currentLine].delay || 150;
        currentLine++;
        timeoutId = setTimeout(showNextLine, delay);
      } else {
        // Reset and loop after a pause
        setTimeout(() => {
          setVisibleLines(0);
          currentLine = 0;
          timeoutId = setTimeout(showNextLine, 1000);
        }, 4000);
      }
    };

    timeoutId = setTimeout(showNextLine, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const getLineClass = (type: string) => {
    switch (type) {
      case "prompt": return "terminal-prompt";
      case "command": return "terminal-command";
      case "action": return "terminal-action";
      case "code": return "terminal-code";
      case "success": return "terminal-success";
      case "output": return "terminal-output";
      default: return "";
    }
  };

  return (
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span class="terminal-btn terminal-btn-red"></span>
          <span class="terminal-btn terminal-btn-yellow"></span>
          <span class="terminal-btn terminal-btn-green"></span>
        </div>
        <div class="terminal-title">claude — vibecode</div>
      </div>
      <div class="terminal-body">
        {terminalScript.slice(0, visibleLines).map((line, i) => (
          <div key={i} class={`terminal-line ${getLineClass(line.type)}`}>
            {line.text}
            {i === visibleLines - 1 && line.type === "command" && (
              <span class="terminal-cursor">▋</span>
            )}
          </div>
        ))}
        {visibleLines > 0 && visibleLines === terminalScript.length && (
          <div class="terminal-line">
            <span class="terminal-prompt">{">"}</span>
            <span class="terminal-cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
