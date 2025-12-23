import { define } from "../utils.ts";
import TypedHeadline from "../islands/TypedHeadline.tsx";
import MeteorShower from "../islands/MeteorShower.tsx";
import TerminalDemo from "../islands/TerminalDemo.tsx";
import ThemeToggle from "../islands/ThemeToggle.tsx";

// SVG Icons as components
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function BotIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}

export default define.page(function Home() {
  return (
    <>
      <MeteorShower />
      <header>
        <div class="container header-inner">
          <div class="logo">unchained<span>academy</span></div>
          <div class="header-actions">
            <ThemeToggle />
            <a href="#contact" class="nav-cta">Book a Session</a>
          </div>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="container hero__grid">
            <div class="hero__text">
              <div class="hero__tag">AI agents for founders</div>
              <h1><TypedHeadline /></h1>
              <p class="hero__subtitle">Stop doing the work. Start directing AI agents that research, write, build, and ship for you. Hands-on training for founders who want to 10x their output — without hiring.</p>
              <a href="#contact" class="hero__cta">
                Get Started
                <ArrowIcon />
              </a>
            </div>
            <div class="hero__testimonial">
              <blockquote class="hero__testimonial-quote">
                "In two hours, I went from skeptical to having an AI agent draft my marketing content, research competitors, and build an internal dashboard. This changes everything."
              </blockquote>
              <div class="hero__testimonial-author">
                <strong>Michael Borter</strong>
                <span>CEO, Cashare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Demo */}
        <section class="terminal-section">
          <div class="container">
            <div class="section-label">See It In Action</div>
            <h2 class="section-title">This is an AI agent</h2>
            <p class="section-subtitle">Not chatting. Not autocomplete. An agent that takes action — researches, creates, builds, ships.</p>
            <TerminalDemo />
          </div>
        </section>

        {/* Stats Section */}
        <section class="stats-section">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">10x</div>
                <div class="stat-label">Faster content creation with AI agents</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5hrs</div>
                <div class="stat-label">Saved per week on marketing tasks</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2hrs</div>
                <div class="stat-label">From zero to shipping your first agent</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">∞</div>
                <div class="stat-label">Things you'll stop doing manually</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Shift Section */}
        <section class="section shift-section">
          <div class="container">
            <div class="section-label">The Shift</div>
            <h2 class="section-title">From executor to director</h2>
            <div class="shift-comparison">
              <div class="shift-before">
                <div class="shift-label">
                  <ClockIcon />
                  <span>Before</span>
                </div>
                <ul class="shift-list">
                  <li>Research competitors manually</li>
                  <li>Write content yourself</li>
                  <li>Wait weeks for dev</li>
                  <li>Your time is the bottleneck</li>
                </ul>
              </div>
              <div class="shift-arrow">
                <ArrowIcon />
              </div>
              <div class="shift-after">
                <div class="shift-label">
                  <BotIcon />
                  <span>After</span>
                </div>
                <ul class="shift-list">
                  <li>Agents research for you</li>
                  <li>Agents draft your content</li>
                  <li>Build tools in hours</li>
                  <li>Your judgment is the bottleneck</li>
                </ul>
              </div>
            </div>
            <div class="shift-result">
              <TrendingUpIcon />
              <p><strong>The result:</strong> Ship marketing in minutes. Build internal tools in hours. Run your company like you have a team of 10.</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section - Agent focused */}
        <section class="section">
          <div class="container">
            <div class="section-label">What Agents Can Do</div>
            <h2 class="section-title">Real work, not demos</h2>
            <div class="usecase-grid">
              <div class="usecase-card">
                <div class="usecase-icon"><MegaphoneIcon /></div>
                <h3>Marketing on Autopilot</h3>
                <p>Research your competitors. Analyze their positioning. Draft LinkedIn posts, email sequences, and landing page copy — all tailored to your voice and market.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Competitive research in minutes</li>
                  <li><CheckIcon /> Content drafted to your brand voice</li>
                  <li><CheckIcon /> Connected to your actual tools</li>
                  <li><CheckIcon /> Scheduled and posted automatically</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><SearchIcon /></div>
                <h3>Research & Intelligence</h3>
                <p>Never read 50 articles to understand a market again. Agents crawl, synthesize, and summarize — giving you insights, not information overload.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Market analysis on demand</li>
                  <li><CheckIcon /> Competitor monitoring</li>
                  <li><CheckIcon /> Customer research synthesized</li>
                  <li><CheckIcon /> Trends spotted before everyone else</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><CodeIcon /></div>
                <h3>Build Without Developers</h3>
                <p>Internal dashboards. Customer portals. Automation scripts. Describe what you need, Claude builds it — and fixes its own bugs along the way.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Internal tools in hours</li>
                  <li><CheckIcon /> Prototypes for investor demos</li>
                  <li><CheckIcon /> Automations that save hours weekly</li>
                  <li><CheckIcon /> No dev backlog, no waiting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">Who This Is For</div>
            <h2 class="section-title">Founders who want leverage</h2>
            <div class="who-grid">
              <div class="who-card">
                <h3>Startup Founders</h3>
                <p>You're doing 5 jobs. Marketing, product, sales, ops, support. AI agents let you do all of them faster — without hiring.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Ship marketing without a marketing hire</li>
                  <li><CheckIcon /> Build MVPs without a dev team</li>
                  <li><CheckIcon /> Research without an analyst</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>CEOs & Executives</h3>
                <p>You need information fast and decisions made. Stop waiting on reports. Get the analysis you need, when you need it.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Competitive intel on demand</li>
                  <li><CheckIcon /> Board materials drafted in minutes</li>
                  <li><CheckIcon /> Automate the CEO busywork</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>Growing Teams</h3>
                <p>Scale output without scaling headcount. Give every team member an AI agent that handles their repetitive work.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Shared playbook for the team</li>
                  <li><CheckIcon /> Consistent AI-assisted workflow</li>
                  <li><CheckIcon /> More output, same team size</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">What You'll Learn</div>
            <h2 class="section-title">From passenger to pilot in one session</h2>
            <div class="learn-grid">
              <div class="learn-item">
                <div class="learn-number">01</div>
                <h3>Agents, Not Autocomplete</h3>
                <p>The mental shift: stop asking questions, start giving directions. Let Claude take action — create files, run commands, fix its own mistakes.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">02</div>
                <h3>Marketing Agents</h3>
                <p>Research competitors, draft content, analyze your market. Set up agents that handle your marketing tasks so you can focus on strategy.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">03</div>
                <h3>Building Without Code</h3>
                <p>Dashboards, tools, automations. Describe what you want, Claude builds it. Learn when to let it run and when to intervene.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">04</div>
                <h3>Connected Tools (MCP)</h3>
                <p>Connect Claude to Google Drive, Slack, your database, LinkedIn. Agents that don't just talk — they take action in your real tools.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">05</div>
                <h3>Advanced Control</h3>
                <p>Plan mode for complex tasks. Ultrathink for hard problems. Know which tool to use when, and how to steer without micromanaging.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">06</div>
                <h3>Ship to Production</h3>
                <p>From prototype to live product. Deploy dashboards, automate workflows, set up systems that run without you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section class="section about-section">
          <div class="container">
            <div class="about-compact">
              <div class="about-text">
                <div class="section-label">Your Guide</div>
                <h2 class="section-title">Built by practitioners, not theorists</h2>
                <p>We're <a href="https://unchained.ch" target="_blank" rel="noopener">Unchained</a> — a Zürich-based team that's shipped 100+ AI-assisted projects to production. E-commerce platforms, internal tools, marketing automation, browser extensions. We've made the mistakes so you don't have to.</p>
              </div>
              <div class="about-stats">
                <div class="about-stat">
                  <span class="about-stat__number">100+</span>
                  <span class="about-stat__label">Projects shipped</span>
                </div>
                <div class="about-stat">
                  <span class="about-stat__number">15+</span>
                  <span class="about-stat__label">Years building</span>
                </div>
                <div class="about-stat">
                  <span class="about-stat__number">Zürich</span>
                  <span class="about-stat__label">Based</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-label">Formats</div>
            <h2 class="section-title">Choose your path</h2>
            <div class="formats-grid">
              <div class="format-card">
                <div class="format-icon">
                  <UserIcon />
                </div>
                <h3>Executive 1:1</h3>
                <div class="format-price">CHF 500 / 2 hours</div>
                <p>Hands-on session tailored to your business. We set up your first agents, work on real tasks — marketing, research, building — and you leave ready to run.</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <RocketIcon />
                </div>
                <h3>Launchpad</h3>
                <div class="format-price">CHF 1,500 / one-time</div>
                <p>Full technical setup. Git, CI/CD, Claude Code with API, MCP connections to your tools. You walk away with a production-ready AI workflow.</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <TeamIcon />
                </div>
                <h3>Team Workshop</h3>
                <div class="format-price">CHF 2,500 / half-day</div>
                <p>Get your whole team on the same page. Live agent demos, hands-on practice, shared playbook. Everyone leaves with working agents.</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <LayersIcon />
                </div>
                <h3>Academy Partner</h3>
                <div class="format-price">CHF 1,500 / month</div>
                <p>Async support whenever you need it. Bi-weekly calls to review and expand. For founders building ambitious things who want a sparring partner.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section cta-section">
          <div class="container">
            <h2>Ready to stop doing the work?</h2>
            <p>One session. Real agents. Immediate results.</p>
            <a href="mailto:vedran@unchained.shop?subject=Unchained%20Academy" class="hero__cta">
              Get in Touch
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <p>© 2026 Unchained Commerce GmbH · Zürich · <a href="/impressum">Impressum</a> · <a href="/privacy">Privacy</a></p>
        </div>
      </footer>
    </>
  );
});
