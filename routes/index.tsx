import { define } from "../utils.ts";

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
          <div class="container hero-content">
            <div class="hero-tag">Now accepting clients</div>
            <h1>Learn to build<br/>with <em>AI</em></h1>
            <p class="hero-subtitle">Hands-on coaching for founders and teams who want to ship faster with Claude Code. No fluff. Real projects. Immediate results.</p>
            <a href="#contact" class="hero-cta">
              Get Started
              <ArrowIcon />
            </a>
          </div>
        </section>

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
                <strong>Michael R.</strong><br/>
                <span>CEO, Cashare</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section cta-section">
          <div class="container">
            <h2>Ready to vibecode?</h2>
            <p>Leave your email and I'll reach out within 24 hours to schedule your session.</p>
            <form class="cta-form">
              <input type="email" class="cta-input" placeholder="your@email.com" required />
              <button type="submit" class="cta-submit">Let's Go</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <p>Built with vibes by <a href="#">Vedran</a> · Zürich, Switzerland</p>
        </div>
      </footer>
    </>
  );
});
