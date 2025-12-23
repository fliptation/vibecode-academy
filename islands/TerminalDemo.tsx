import { useEffect, useRef, useState } from "preact/hooks";

interface TerminalLine {
  type: "prompt" | "command" | "action" | "code" | "success" | "info" | "output" | "result";
  text: string;
  delay?: number;
}

const terminalScript: TerminalLine[] = [
  { type: "prompt", text: "~" },
  { type: "command", text: "claude", delay: 800 },
  { type: "info", text: "", delay: 300 },
  { type: "prompt", text: ">" },
  { type: "command", text: " Research my top 3 competitors and write LinkedIn posts that make us stand out", delay: 1500 },
  { type: "info", text: "", delay: 400 },
  { type: "action", text: "⠋ Searching the web...", delay: 600 },
  { type: "success", text: "✓ Found 12 competitor profiles", delay: 400 },
  { type: "action", text: "⠋ Analyzing positioning & pricing...", delay: 700 },
  { type: "success", text: "✓ Identified 3 key differentiators", delay: 400 },
  { type: "action", text: "⠋ Drafting LinkedIn content...", delay: 600 },
  { type: "info", text: "", delay: 300 },
  { type: "result", text: "📝 Post 1: \"Everyone's talking about AI. Here's what", delay: 100 },
  { type: "result", text: "   we're actually shipping with it...\"", delay: 80 },
  { type: "result", text: "📝 Post 2: \"Our competitors charge for X. We don't.", delay: 80 },
  { type: "result", text: "   Here's why...\"", delay: 80 },
  { type: "result", text: "📝 Post 3: \"3 things I learned from analyzing 50", delay: 80 },
  { type: "result", text: "   Swiss fintech landing pages...\"", delay: 100 },
  { type: "info", text: "", delay: 400 },
  { type: "success", text: "✓ Saved to Google Docs", delay: 300 },
  { type: "success", text: "✓ Scheduled in LinkedIn queue", delay: 300 },
  { type: "info", text: "", delay: 500 },
  { type: "output", text: "Done. 3 posts ready. What's next?", delay: 400 },
  { type: "info", text: "", delay: 800 },
  { type: "prompt", text: ">" },
  { type: "command", text: " Now build me a dashboard to track campaign performance", delay: 1200 },
  { type: "info", text: "", delay: 400 },
  { type: "action", text: "⠋ Creating React components...", delay: 500 },
  { type: "action", text: "⠋ Connecting to analytics API...", delay: 500 },
  { type: "action", text: "⠋ Adding charts and filters...", delay: 500 },
  { type: "success", text: "✓ Dashboard running at localhost:3000", delay: 300 },
  { type: "info", text: "", delay: 600 },
  { type: "prompt", text: ">" },
  { type: "command", text: "_", delay: 0 },
];

export default function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
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
      case "result": return "terminal-result";
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
        <div class="terminal-title">claude — your AI agent</div>
      </div>
      <div class="terminal-body" ref={bodyRef}>
        {terminalScript.slice(0, visibleLines).map((line, i) => (
          <div key={i} class={`terminal-line ${getLineClass(line.type)}`}>
            {line.text}
            {i === visibleLines - 1 && line.type === "command" && line.text === "_" && (
              <span class="terminal-cursor">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
