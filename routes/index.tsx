import { define } from "../utils.ts";
import TypedHeadline from "../islands/TypedHeadline.tsx";
import MeteorShower from "../islands/MeteorShower.tsx";
import TerminalDemo from "../islands/TerminalDemo.tsx";

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

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
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

function BarChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
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

function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
}

export default define.page(function Home() {
  return (
    <>
      <header>
        <div class="container header-inner">
          <div class="logo">vibe<span>code</span></div>
          <a href="#contact" class="nav-cta">Book a Session</a>
        </div>
      </header>

      <main>
        <section class="hero">
          <MeteorShower />
          <div class="container hero__grid">
            <div class="hero__text">
              <div class="hero__tag">Now accepting clients</div>
              <h1><TypedHeadline /></h1>
              <p class="hero__subtitle">Hands-on coaching for founders and teams who want to ship faster with Claude Code. No fluff. Real projects. Immediate results.</p>
              <a href="#contact" class="hero__cta">
                Get Started
                <ArrowIcon />
              </a>
            </div>
            <div class="hero__demo">
              <TerminalDemo />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section class="stats-section">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">55%</div>
                <div class="stat-label">Faster task completion with AI</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">84%</div>
                <div class="stat-label">Developers using AI tools in 2025</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">3.5x</div>
                <div class="stat-label">Average ROI on AI investments</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">90%</div>
                <div class="stat-label">Feel more fulfilled at work</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">The Problem</div>
            <h2 class="section-title">AI is changing everything. Are you keeping up?</h2>
            <div class="why-grid">
              <div class="why-item">
                <div class="why-icon"><ZapIcon /></div>
                <h3>Speed is the new moat</h3>
                <p>Teams using AI-assisted development are shipping 10x faster. Every week you wait, competitors pull ahead.</p>
              </div>
              <div class="why-item">
                <div class="why-icon"><TargetIcon /></div>
                <h3>Tools alone aren't enough</h3>
                <p>You've tried Copilot, ChatGPT, maybe even Claude. But without the right workflow, you're leaving 80% of the value on the table.</p>
              </div>
              <div class="why-item">
                <div class="why-icon"><TrendingUpIcon /></div>
                <h3>The gap is widening</h3>
                <p>Some founders are building entire products in a weekend. Others are still debugging boilerplate. Which one are you?</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">Who This Is For</div>
            <h2 class="section-title">Built for builders who want results</h2>
            <div class="who-grid">
              <div class="who-card">
                <h3>Startup Founders</h3>
                <p>Ship MVPs faster. Validate ideas in days, not months. Stop paying agencies for things you could build yourself.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Build prototypes in hours</li>
                  <li><CheckIcon /> Reduce dependency on devs</li>
                  <li><CheckIcon /> Move faster than funded competitors</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>Tech Executives</h3>
                <p>Understand what's possible. Lead your team with hands-on knowledge. Make better build vs. buy decisions.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Evaluate AI tools properly</li>
                  <li><CheckIcon /> Set realistic expectations</li>
                  <li><CheckIcon /> Drive adoption from the top</li>
                </ul>
              </div>
              <div class="who-card">
                <h3>Dev Teams</h3>
                <p>Level up your entire engineering org. Establish best practices. Ship more features with the same headcount.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Shared playbook for the team</li>
                  <li><CheckIcon /> Consistent AI-assisted workflow</li>
                  <li><CheckIcon /> Measurable productivity gains</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">Use Cases</div>
            <h2 class="section-title">What you can build with AI</h2>
            <div class="usecase-grid">
              <div class="usecase-card">
                <div class="usecase-icon"><BarChartIcon /></div>
                <h3>Instant Insights for Leaders</h3>
                <p>CEOs need numbers. Revenue trends, user metrics, platform health — answers that used to require a data team and weeks of waiting.</p>
                <p>With AI, you can query your own systems in plain language. Build dashboards in hours. Get the insights you need to make decisions, not next quarter — now.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Query databases without SQL</li>
                  <li><CheckIcon /> Build custom dashboards fast</li>
                  <li><CheckIcon /> Real-time business intelligence</li>
                  <li><CheckIcon /> No more waiting on reports</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><CodeIcon /></div>
                <h3>Supercharge Your Codebase</h3>
                <p>Legacy code. Technical debt. That feature nobody wants to touch. AI doesn't judge — it just helps.</p>
                <p>Review existing code for bugs and security issues. Refactor for performance. Find patterns you didn't know existed. Let AI be the second pair of eyes your team needs.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Automated code review</li>
                  <li><CheckIcon /> Refactor with confidence</li>
                  <li><CheckIcon /> Find hidden bugs & vulnerabilities</li>
                  <li><CheckIcon /> Document legacy systems</li>
                </ul>
              </div>
              <div class="usecase-card">
                <div class="usecase-icon"><RefreshIcon /></div>
                <h3>Modernize Your Stack</h3>
                <p>Still running on that 2015 framework? Migrating feels impossible. But AI changes the equation.</p>
                <p>Upgrade your legacy tech stack to modern, AI-ready architecture. Migrate frameworks, update dependencies, and transform monoliths into modern systems — with AI doing the heavy lifting.</p>
                <ul class="who-list">
                  <li><CheckIcon /> Framework migrations made easy</li>
                  <li><CheckIcon /> Dependency updates at scale</li>
                  <li><CheckIcon /> API modernization</li>
                  <li><CheckIcon /> AI-ready architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section class="section">
          <div class="container">
            <div class="section-label">What You'll Learn</div>
            <h2 class="section-title">From zero to shipping in one session</h2>
            <div class="learn-grid">
              <div class="learn-item">
                <div class="learn-number">01</div>
                <h3>The Art of Prompting</h3>
                <p>How to give Claude the right context, constraints, and direction to get exactly what you need — first try.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">02</div>
                <h3>Iterative Building</h3>
                <p>Review, refine, and steer AI-generated code. Know when to trust it, when to question it, and when to rewrite it.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">03</div>
                <h3>Real Project Workflow</h3>
                <p>Set up your environment properly. Hooks, configs, custom instructions. Build something real from scratch.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">04</div>
                <h3>Advanced Patterns</h3>
                <p>MCP servers, multi-file projects, testing, debugging. The patterns that separate hobbyists from pros.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">05</div>
                <h3>Debugging AI Output</h3>
                <p>When code breaks, know how to diagnose, explain, and fix. Turn Claude into your debugging partner.</p>
              </div>
              <div class="learn-item">
                <div class="learn-number">06</div>
                <h3>Ship to Production</h3>
                <p>From prototype to deployed product. CI/CD, hosting, monitoring — launch with confidence.</p>
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
                <p>High-touch, personalized session for founders and leaders. We work on your actual projects, your actual challenges. Walk away ready to ship.</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <TeamIcon />
                </div>
                <h3>Team Workshop</h3>
                <div class="format-price">CHF 2,500 / half-day</div>
                <p>Level up your entire dev team. Hands-on workshop with live coding, best practices, and a shared playbook for AI-assisted development.</p>
              </div>
              <div class="format-card">
                <div class="format-icon">
                  <LayersIcon />
                </div>
                <h3>Ongoing Advisory</h3>
                <div class="format-price">CHF 1,500 / month</div>
                <p>Async support, code reviews, and bi-weekly calls. For teams building ambitious projects who want an AI-native sparring partner.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section testimonial-section">
          <div class="container">
            <div class="testimonial">
              <blockquote>"In two hours, I went from skeptical to shipping a working prototype. This is the missing manual for building with AI."</blockquote>
              <div class="testimonial-author">
                <strong>Michael Borter</strong><br/>
                <span>CEO, Cashare</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section cta-section">
          <div class="container">
            <h2>Ready to vibecode?</h2>
            <p>Drop me a line and let's schedule your session.</p>
            <a href="mailto:vedran@unchained.shop?subject=Vibecode%20Session" class="hero-cta">
              Get in Touch
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <p>A service by <a href="https://unchained.ch">Unchained</a> · Zürich · <a href="/impressum">Impressum</a> · <a href="/privacy">Privacy</a></p>
        </div>
      </footer>
    </>
  );
});
