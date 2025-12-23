import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unchained Academy — AI Agents for Founders</title>
        <meta name="description" content="Stop doing the work. Start directing AI agents that research, write, build, and ship for you. Hands-on training for founders in Zürich." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              // Stay dark (default in CSS is dark)
            } else {
              document.documentElement.dataset.theme = 'light';
            }
          })();
        `}} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
