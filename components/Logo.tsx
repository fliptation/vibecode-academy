// Unchained Academy Logo Component
// Concept: Broken chain links transforming into forward momentum
// Symbolizes liberation through AI mastery

interface LogoProps {
  variant?: "full" | "icon" | "wordmark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { full: { width: 160, height: 32 }, icon: 24, wordmark: { width: 120, height: 24 } },
    md: { full: { width: 220, height: 44 }, icon: 32, wordmark: { width: 160, height: 32 } },
    lg: { full: { width: 320, height: 64 }, icon: 48, wordmark: { width: 240, height: 48 } },
  };

  const s = sizes[size];

  // Icon-only variant (for favicon, small spaces)
  if (variant === "icon") {
    return (
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={className}
        aria-label="Unchained Academy"
      >
        {/* Left chain link */}
        <path
          d="M4 32C4 18.7 14.7 8 28 8H36C38.2 8 40 9.8 40 12C40 14.2 38.2 16 36 16H28C19.2 16 12 23.2 12 32C12 40.8 19.2 48 28 48H36C38.2 48 40 49.8 40 52C40 54.2 38.2 56 36 56H28C14.7 56 4 45.3 4 32Z"
          fill="var(--accent)"
        />
        {/* Energy sparks at break point */}
        <circle cx="48" cy="24" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        <circle cx="52" cy="32" r="2.5" fill="var(--accent)" />
        <circle cx="48" cy="40" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        {/* Right chain link */}
        <path
          d="M44 12C44 9.8 45.8 8 48 8H52C61.9 8 70 16.1 70 26V38C70 47.9 61.9 56 52 56H48C45.8 56 44 54.2 44 52C44 49.8 45.8 48 48 48H52C57.5 48 62 43.5 62 38V26C62 20.5 57.5 16 52 16H48C45.8 16 44 14.2 44 12Z"
          fill="var(--accent)"
        />
        {/* Forward arrow */}
        <path
          d="M54 32L66 32M66 32L60 26M66 32L60 38"
          stroke="var(--fg)"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  // Full logo with icon + wordmark
  return (
    <svg
      width={s.full.width}
      height={s.full.height}
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
      aria-label="Unchained Academy"
    >
      {/* Icon: Broken chain transforming into forward momentum */}
      <g transform="translate(0, 8)">
        {/* Left chain link (breaking open) */}
        <path
          d="M8 32C8 18.7 18.7 8 32 8H40C42.2 8 44 9.8 44 12C44 14.2 42.2 16 40 16H32C23.2 16 16 23.2 16 32C16 40.8 23.2 48 32 48H40C42.2 48 44 49.8 44 52C44 54.2 42.2 56 40 56H32C18.7 56 8 45.3 8 32Z"
          fill="var(--accent)"
        />

        {/* Breaking point - sparks/energy */}
        <circle cx="52" cy="24" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        <circle cx="56" cy="32" r="2.5" fill="var(--accent)" />
        <circle cx="52" cy="40" r="2" fill="var(--accent-secondary)" opacity="0.8" />

        {/* Right chain link */}
        <path
          d="M60 12C60 9.8 61.8 8 64 8H72C85.3 8 96 18.7 96 32C96 45.3 85.3 56 72 56H64C61.8 56 60 54.2 60 52C60 49.8 61.8 48 64 48H72C80.8 48 88 40.8 88 32C88 23.2 80.8 16 72 16H64C61.8 16 60 14.2 60 12Z"
          fill="var(--accent)"
        />

        {/* Forward arrow emerging from break */}
        <path
          d="M76 32L92 32M92 32L84 24M92 32L84 40"
          stroke="var(--fg)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="115"
        y="52"
        font-family="var(--font-body)"
        font-size="32"
        font-weight="600"
        fill="var(--fg)"
        letter-spacing="-0.02em"
      >
        Unchained
      </text>
      <text
        x="303"
        y="52"
        font-family="var(--font-heading)"
        font-size="32"
        font-weight="400"
        font-style="italic"
        fill="var(--accent)"
      >
        Academy
      </text>
    </svg>
  );
}

// Compact header logo - icon + text (for smaller header)
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div class={`logo-compact ${className}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left chain link */}
        <path
          d="M4 32C4 18.7 14.7 8 28 8H36C38.2 8 40 9.8 40 12C40 14.2 38.2 16 36 16H28C19.2 16 12 23.2 12 32C12 40.8 19.2 48 28 48H36C38.2 48 40 49.8 40 52C40 54.2 38.2 56 36 56H28C14.7 56 4 45.3 4 32Z"
          fill="var(--accent)"
        />
        {/* Energy sparks */}
        <circle cx="48" cy="24" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        <circle cx="52" cy="32" r="2.5" fill="var(--accent)" />
        <circle cx="48" cy="40" r="2" fill="var(--accent-secondary)" opacity="0.8" />
        {/* Right chain link */}
        <path
          d="M44 12C44 9.8 45.8 8 48 8H52C61.9 8 70 16.1 70 26V38C70 47.9 61.9 56 52 56H48C45.8 56 44 54.2 44 52C44 49.8 45.8 48 48 48H52C57.5 48 62 43.5 62 38V26C62 20.5 57.5 16 52 16H48C45.8 16 44 14.2 44 12Z"
          fill="var(--accent)"
        />
        {/* Forward arrow */}
        <path
          d="M54 32L66 32M66 32L60 26M66 32L60 38"
          stroke="var(--fg)"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
        Unchained<span style={{ color: "var(--accent)", fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400 }}>Academy</span>
      </span>
    </div>
  );
}
