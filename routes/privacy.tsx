import { define } from "../utils.ts";

export default define.page(function Privacy() {
  return (
    <>
      <header>
        <div class="container header-inner">
          <a href="/" class="logo">vibe<span>code</span></a>
          <a href="/#contact" class="nav-cta">Book a Session</a>
        </div>
      </header>

      <main>
        <section class="section">
          <div class="container">
            <h1 class="section-title">Privacy Policy</h1>

            <div class="legal-content">
              <div class="legal-section">
                <h3>Overview</h3>
                <p>Vibecode is a service by Unchained Commerce GmbH. We take your privacy seriously and are committed to protecting your personal data.</p>
              </div>

              <div class="legal-section">
                <h3>Data Collection</h3>
                <p>This website does not use cookies, tracking scripts, or analytics. We do not collect any personal data through the website itself.</p>
              </div>

              <div class="legal-section">
                <h3>Contact</h3>
                <p>When you contact us via email, we store your email address and any information you provide solely for the purpose of responding to your inquiry and scheduling sessions.</p>
              </div>

              <div class="legal-section">
                <h3>Data Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
              </div>

              <div class="legal-section">
                <h3>Your Rights</h3>
                <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at <a href="mailto:hello@unchained.shop">hello@unchained.shop</a> for any privacy-related inquiries.</p>
              </div>

              <div class="legal-section">
                <h3>Contact</h3>
                <p>
                  Unchained Commerce GmbH<br />
                  Hardturmstrasse 161<br />
                  8005 Zürich, Schweiz<br />
                  <a href="mailto:hello@unchained.shop">hello@unchained.shop</a>
                </p>
              </div>
            </div>
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
