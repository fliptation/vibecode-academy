import { define } from "../utils.ts";

export default define.page(function Impressum() {
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
            <h1 class="section-title">Impressum</h1>

            <div class="legal-content">
              <div class="legal-section">
                <h3>Firma</h3>
                <p>
                  Unchained Commerce GmbH<br />
                  Hardturmstrasse 161<br />
                  8005 Zürich<br />
                  Schweiz
                </p>
              </div>

              <div class="legal-section">
                <h3>Kontakt</h3>
                <p>
                  <a href="mailto:hello@unchained.shop">hello@unchained.shop</a><br />
                  +41 43 505 18 46
                </p>
              </div>

              <div class="legal-section">
                <h3>Handelsregister</h3>
                <p>
                  <strong>UID:</strong> CHE-244.383.397<br />
                  <strong>Register:</strong> Zürich<br />
                  <strong>Rechtsform:</strong> GmbH
                </p>
              </div>

              <div class="legal-section">
                <h3>MWST</h3>
                <p>CHE-244.383.397 MWST</p>
              </div>

              <div class="legal-section">
                <h3>Verantwortlich</h3>
                <p>Die Geschäftsführer der Unchained Commerce GmbH sind verantwortlich für den Inhalt dieser Website.</p>
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
