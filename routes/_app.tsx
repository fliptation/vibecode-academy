import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vibecode — Learn to Build with AI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg: #0a0a0a;
            --fg: #fafafa;
            --accent: #22d3ee;
            --accent-glow: rgba(34, 211, 238, 0.15);
            --muted: #737373;
            --border: #262626;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'JetBrains Mono', monospace;
            background: var(--bg);
            color: var(--fg);
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            opacity: 0.03;
            pointer-events: none;
            z-index: 1000;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          header {
            position: relative;
            z-index: 1;
            padding: 2rem 0;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .logo span {
            color: var(--accent);
          }

          .nav-cta {
            padding: 0.75rem 1.5rem;
            background: transparent;
            border: 1px solid var(--accent);
            color: var(--accent);
            font-family: inherit;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }

          .nav-cta:hover {
            background: var(--accent);
            color: var(--bg);
          }

          .hero {
            padding: 8rem 0;
            position: relative;
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
            pointer-events: none;
          }

          .meteor-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
          }

          .hero__grid {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: 7fr 5fr;
            gap: 4rem;
            align-items: center;
          }

          .hero__text {
            max-width: 600px;
          }

          .hero__testimonial {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2.5rem;
            border: 1px solid var(--border);
            border-left: 3px solid var(--accent);
            background: rgba(255, 255, 255, 0.02);
            animation: fadeIn 0.6s ease-out 0.4s both;
          }

          .hero__testimonial-quote {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(1.25rem, 2.5vw, 1.5rem);
            font-style: italic;
            line-height: 1.5;
            margin-bottom: 1.5rem;
            color: var(--fg);
          }

          .hero__testimonial-author {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .hero__testimonial-author strong {
            font-size: 1rem;
            font-weight: 500;
            color: var(--fg);
          }

          .hero__testimonial-author span {
            font-size: 0.875rem;
            color: var(--muted);
          }

          .hero__tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--accent-glow);
            border: 1px solid rgba(34, 211, 238, 0.3);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent);
            margin-bottom: 2rem;
            animation: fadeIn 0.6s ease-out;
          }

          .hero__text h1 {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(3rem, 8vw, 5rem);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-bottom: 2rem;
            animation: fadeIn 0.6s ease-out 0.1s both;
          }

          .hero__text h1 em {
            font-style: italic;
            color: var(--accent);
          }

          .hero__subtitle {
            font-size: 1.125rem;
            color: var(--muted);
            max-width: 540px;
            margin-bottom: 3rem;
            animation: fadeIn 0.6s ease-out 0.2s both;
          }

          .hero__cta {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2rem;
            background: var(--accent);
            color: var(--bg);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            animation: fadeIn 0.6s ease-out 0.3s both;
            text-decoration: none;
          }

          .hero__cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(34, 211, 238, 0.3);
          }

          .hero__cta svg {
            transition: transform 0.2s;
          }

          .hero__cta:hover svg {
            transform: translateX(4px);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Scroll-driven animations */
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(32px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .section-label,
          .section-title,
          .stat-item,
          .why-item,
          .who-card,
          .usecase-card,
          .learn-item,
          .format-card,
          .terminal-window,
          .cta-section h2,
          .cta-section p,
          .cta-section .hero__cta {
            animation: reveal linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 100%;
          }

          .typed-text {
            color: var(--accent);
          }

          .cursor {
            color: var(--accent);
            animation: blink 1s step-end infinite;
            font-weight: 300;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .section {
            padding: 6rem 0;
            border-top: 1px solid var(--border);
          }

          .section-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--muted);
            margin-bottom: 1rem;
          }

          .section-title {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 400;
            margin-bottom: 3rem;
          }

          .learn-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1px;
            background: var(--border);
            border: 1px solid var(--border);
          }

          .learn-item {
            background: var(--bg);
            padding: 2.5rem;
            transition: background 0.3s;
          }

          .learn-item:hover {
            background: #111;
          }

          .learn-number {
            font-size: 0.75rem;
            color: var(--accent);
            margin-bottom: 1rem;
          }

          .learn-item h3 {
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
          }

          .learn-item p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.7;
          }

          .formats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 2rem;
          }

          .format-card {
            border: 1px solid var(--border);
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
            transition: border-color 0.3s;
          }

          .format-card:hover {
            border-color: var(--accent);
          }

          .format-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--accent), transparent);
            opacity: 0;
            transition: opacity 0.3s;
          }

          .format-card:hover::before {
            opacity: 1;
          }

          .format-icon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            margin-bottom: 1.5rem;
            color: var(--accent);
          }

          .format-card h3 {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .format-price {
            font-size: 0.875rem;
            color: var(--accent);
            margin-bottom: 1.5rem;
          }

          .format-card p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.7;
          }

          .testimonial-section {
            background: linear-gradient(180deg, transparent, rgba(34, 211, 238, 0.02), transparent);
          }

          .testimonial {
            max-width: 700px;
          }

          .testimonial blockquote {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-style: italic;
            line-height: 1.5;
            margin-bottom: 2rem;
          }

          .testimonial-author {
            font-size: 0.875rem;
          }

          .testimonial-author strong {
            color: var(--fg);
          }

          .testimonial-author span {
            color: var(--muted);
          }

          .cta-section {
            padding: 8rem 0;
          }

          .cta-section h2 {
            font-family: 'Instrument Serif', serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 400;
            margin-bottom: 1.5rem;
          }

          .cta-section p {
            color: var(--muted);
            margin-bottom: 2.5rem;
            max-width: 500px;
          }

          .cta-form {
            display: flex;
            gap: 1rem;
            max-width: 480px;
            flex-wrap: wrap;
          }

          .cta-input {
            flex: 1;
            min-width: 250px;
            padding: 1rem 1.5rem;
            background: transparent;
            border: 1px solid var(--border);
            color: var(--fg);
            font-family: inherit;
            font-size: 1rem;
            transition: border-color 0.2s;
          }

          .cta-input:focus {
            outline: none;
            border-color: var(--accent);
          }

          .cta-input::placeholder {
            color: var(--muted);
          }

          .cta-submit {
            padding: 1rem 2rem;
            background: var(--fg);
            color: var(--bg);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
          }

          .cta-submit:hover {
            background: var(--accent);
          }

          footer {
            border-top: 1px solid var(--border);
            padding: 3rem 0;
          }

          footer p {
            font-size: 0.875rem;
            color: var(--muted);
          }

          footer a {
            color: var(--fg);
            text-decoration: none;
            transition: color 0.2s;
          }

          footer a:hover {
            color: var(--accent);
          }

          /* Why Section */
          .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }

          .why-icon {
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            margin-bottom: 1.5rem;
            color: var(--accent);
          }

          .why-item h3 {
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
          }

          .why-item p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.7;
          }

          /* Who Section */
          .who-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .who-card {
            border: 1px solid var(--border);
            padding: 2rem;
            transition: border-color 0.3s;
          }

          .who-card:hover {
            border-color: var(--accent);
          }

          .who-card h3 {
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 1rem;
            color: var(--accent);
          }

          .who-card > p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .who-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .who-list li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.875rem;
            padding: 0.5rem 0;
            border-top: 1px solid var(--border);
          }

          .who-list li svg {
            color: var(--accent);
            flex-shrink: 0;
          }

          /* Use Cases Section */
          .usecase-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .usecase-card {
            border: 1px solid var(--border);
            padding: 2.5rem;
            transition: border-color 0.3s;
          }

          .usecase-card:hover {
            border-color: var(--accent);
          }

          .usecase-icon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            margin-bottom: 1.5rem;
            color: var(--accent);
          }

          .usecase-card h3 {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .usecase-card > p {
            font-size: 0.9375rem;
            color: var(--muted);
            line-height: 1.7;
            margin-bottom: 1rem;
          }

          .usecase-card .who-list {
            margin-top: 1.5rem;
          }

          /* Terminal Demo */
          .terminal-section {
            padding: 5rem 0;
          }

          .terminal-window {
            background: #1a1a1a;
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            max-width: 700px;
            height: 400px;
          }

          .terminal-header {
            background: #2a2a2a;
            padding: 0.75rem 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .terminal-buttons {
            display: flex;
            gap: 8px;
          }

          .terminal-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .terminal-btn-red { background: #ff5f56; }
          .terminal-btn-yellow { background: #ffbd2e; }
          .terminal-btn-green { background: #27ca40; }

          .terminal-title {
            font-size: 0.75rem;
            color: var(--muted);
          }

          .terminal-body {
            padding: 1.5rem;
            height: calc(100% - 44px);
            overflow-y: auto;
            font-size: 0.875rem;
            line-height: 1.6;
          }

          .terminal-line {
            white-space: pre;
            min-height: 1.4em;
          }

          .terminal-prompt {
            color: #22d3ee;
          }

          .terminal-command {
            color: #fafafa;
          }

          .terminal-action {
            color: #a78bfa;
          }

          .terminal-code {
            color: #6b7280;
          }

          .terminal-success {
            color: #4ade80;
          }

          .terminal-output {
            color: #fbbf24;
          }

          .terminal-cursor {
            color: var(--accent);
            animation: blink 1s step-end infinite;
          }

          /* Stats Section */
          .stats-section {
            padding: 5rem 0;
            border-top: 1px solid var(--border);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }

          .stat-item {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: clamp(3rem, 8vw, 4.5rem);
            font-family: 'Instrument Serif', serif;
            color: var(--accent);
            line-height: 1;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.4;
          }

          @media (max-width: 900px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 900px) {
            .usecase-grid {
              grid-template-columns: 1fr;
            }

            .why-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .who-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 1024px) {
            .hero__grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }

            .hero__testimonial {
              max-width: 540px;
            }

            .terminal-window {
              width: 100%;
              max-width: 520px;
            }
          }

          @media (max-width: 640px) {
            .hero {
              padding: 5rem 0;
            }

            .section {
              padding: 4rem 0;
            }

            .learn-grid {
              grid-template-columns: 1fr;
            }

            .formats-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Legal Pages */
          .legal-content {
            max-width: 700px;
          }

          .legal-section {
            margin-bottom: 2.5rem;
          }

          .legal-section h3 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
            color: var(--accent);
          }

          .legal-section p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.8;
          }

          .legal-section a {
            color: var(--fg);
            text-decoration: none;
            transition: color 0.2s;
          }

          .legal-section a:hover {
            color: var(--accent);
          }
        `}} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
